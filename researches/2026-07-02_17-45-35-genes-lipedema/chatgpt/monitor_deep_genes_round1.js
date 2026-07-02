const fs=require('fs');
const OUT='researches/2026-07-02_17-45-35-genes-lipedema/chatgpt/chatgpt-deepresearch1-genes-original.md';
const LOG='researches/2026-07-02_17-45-35-genes-lipedema/chatgpt/chatgpt-deepresearch1-genes-monitor.log';
const CDP='http://127.0.0.1:9226/json/list';
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}
async function targets(){return await (await fetch(CDP)).json();}
async function evalWs(wsurl, expression){
  return new Promise((resolve,reject)=>{
    const ws=new WebSocket(wsurl); let done=false;
    const timer=setTimeout(()=>{if(!done){done=true; try{ws.close()}catch{}; reject(new Error('timeout'));}},15000);
    ws.onopen=()=>ws.send(JSON.stringify({id:1,method:'Runtime.evaluate',params:{expression,returnByValue:true,awaitPromise:false}}));
    ws.onmessage=(ev)=>{const msg=JSON.parse(ev.data); if(msg.id===1&&!done){done=true; clearTimeout(timer); try{ws.close()}catch{}; resolve(msg.result?.result?.value ?? msg.result?.result?.description ?? '');}};
    ws.onerror=e=>{if(!done){done=true; clearTimeout(timer); reject(e)}};
  });
}
async function once(){
 const ts=await targets();
 const frame=ts.find(t=>(t.url||'').includes('connector_openai_deep_research'));
 const page=ts.find(t=>(t.url||'').includes('chatgpt.com/c/6a4688e4-aadc-83eb-92be-5220c01517c3')) || ts.find(t=>(t.url||'').includes('chatgpt.com/c/'));
 if(!frame) return {status:'NO_IFRAME',textLen:0,buttons:[],tail:'',page:page?.url};
 const expr=`(() => { const d=document.querySelector('#root')?.contentDocument || document; const text=d.body?.innerText||''; const buttons=[...d.querySelectorAll('button')].map(b=>b.innerText||b.getAttribute('aria-label')).filter(Boolean); return JSON.stringify({textLen:text.length, text, buttons, tail:text.slice(-700)}); })()`;
 const raw=await evalWs(frame.webSocketDebuggerUrl, expr);
 const obj=JSON.parse(raw||'{}');
 let status='PENSANDO/INVESTIGANDO';
 if(obj.buttons?.some(b=>/Export|Expand/i.test(b)) && obj.textLen>5000) status='TERMINADO';
 else if(obj.buttons?.some(b=>/Start/i.test(b))) status='PLANIFICACION';
 else if(obj.buttons?.some(b=>/Stop research|Update/i.test(b))) status='PENSANDO/INVESTIGANDO';
 return {...obj,status,page:page?.url,frame:frame.id};
}
(async()=>{
 fs.appendFileSync(LOG, new Date().toISOString()+' monitor start\n');
 let lastLen=0;
 for(let i=0;i<240;i++){
  try{
   const o=await once();
   const line=`${new Date().toISOString()} status=${o.status} textLen=${o.textLen} buttons=${JSON.stringify(o.buttons||[])} page=${o.page} iframe=${o.frame} tail=${String(o.tail||'').replace(/\s+/g,' ').slice(0,700)}\n`;
   fs.appendFileSync(LOG,line); console.log(line.trim());
   lastLen=o.textLen||0;
   if(o.status==='TERMINADO'){
    fs.writeFileSync(OUT,o.text||'');
    console.log(`SAVED ${process.cwd()+'/'+OUT} chars=${(o.text||'').length} bytes=${Buffer.byteLength(o.text||'')}`);
    process.exit(0);
   }
  }catch(e){const line=`${new Date().toISOString()} ERROR ${e.message||e}\n`; fs.appendFileSync(LOG,line); console.error(line.trim());}
  await sleep(20000);
 }
 console.error('TIMEOUT lastLen='+lastLen); process.exit(2);
})();
