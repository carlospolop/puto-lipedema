const fs=require('fs');
const TARGET=process.argv[2];
const OUT=process.argv[3];
if(!TARGET||!OUT){console.error('usage: node extract_chatgpt_turn.js <conversation-id-or-url> <out.md>');process.exit(2)}
const part=(TARGET.match(/\/c\/([^/?#]+)/)||[])[1]||TARGET;
const EXPR=`(() => {
  const turns=[...document.querySelectorAll('[data-message-author-role="assistant"], section[data-testid^="conversation-turn"]')]
    .map((n,i)=>({i,text:n.innerText||'',len:(n.innerText||'').length, buttons:[...n.querySelectorAll('button')].map(b=>b.innerText||b.getAttribute('aria-label')).filter(Boolean)}));
  turns.sort((a,b)=>b.len-a.len);
  return {url:location.href,title:document.title,turn:turns[0]||{text:'',len:0}};
})()`;
async function targets(){return await (await fetch('http://127.0.0.1:9226/json/list')).json()}
async function evalWs(wsurl){return await new Promise((resolve,reject)=>{const ws=new WebSocket(wsurl);const timer=setTimeout(()=>{try{ws.close()}catch{};reject(Error('timeout'))},30000);ws.onopen=()=>ws.send(JSON.stringify({id:1,method:'Runtime.evaluate',params:{expression:EXPR,returnByValue:true,timeout:30000}}));ws.onerror=e=>{clearTimeout(timer);reject(e.error||Error('ws error'))};ws.onmessage=ev=>{const m=JSON.parse(ev.data);if(m.id===1){clearTimeout(timer);ws.close();if(m.exceptionDetails)reject(Error(JSON.stringify(m.exceptionDetails)));else resolve((m.result.result||{}).value||{})}}})}
(async()=>{const ts=await targets(); const matches=ts.filter(x=>(x.url||'').includes(part)); if(!matches.length) throw Error('target not found '+part); let best=null; for (const t of matches){ try { const v=await evalWs(t.webSocketDebuggerUrl); if(!best || (v.turn?.len||0)>(best.v.turn?.len||0)) best={t,v}; } catch(e){} } if(!best) throw Error('no target evaluated'); const v=best.v; fs.writeFileSync(OUT,v.turn.text||''); fs.writeFileSync(OUT+'.meta.json', JSON.stringify({url:v.url,title:v.title,len:v.turn.len,buttons:v.turn.buttons,targetId:best.t.id},null,2)); console.log('saved',OUT,'chars',v.turn.len,'bytes',fs.statSync(OUT).size,'url',v.url);})().catch(e=>{console.error(e);process.exit(1)});
