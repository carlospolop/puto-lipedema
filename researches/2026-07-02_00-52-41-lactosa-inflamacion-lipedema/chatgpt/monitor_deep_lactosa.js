const fs = require('fs');
const path = require('path');
const OUTDIR = '/home/tester/git/puto-lipedema/researches/2026-07-02_00-52-41-lactosa-inflamacion-lipedema/chatgpt';
const TARGET = '6a461f5d-0590-83ed-a5ca-f6acf87ede1f';
const OUT = path.join(OUTDIR, 'chatgpt-deepresearch-lactosa-original.md');
const META = path.join(OUTDIR, 'chatgpt-deepresearch-lactosa-original.meta.json');
const LOG = path.join(OUTDIR, 'chatgpt-deepresearch-lactosa-monitor.log');
const EXPR = `(() => {
  const root = document.querySelector('#root');
  const doc = root?.contentDocument;
  const text = doc?.body?.innerText || root?.innerText || document.body?.innerText || '';
  const buttons = doc ? [...doc.querySelectorAll('button')].map(b => (b.innerText || b.getAttribute('aria-label') || '').trim()).filter(Boolean) : [];
  const hasStop = /Stop research/i.test(text) || buttons.some(x => /Stop research/i.test(x));
  const completed = /Research completed/i.test(text) || (/\\bSources\\b/i.test(text) && text.length > 8000 && !hasStop);
  const planning = /Plan starts|\\bStart\\b|\\bEdit\\b|\\bCancel\\b/i.test(text) && !hasStop && !completed;
  return {url: location.href, title: document.title, textLen: text.length, text, buttons, hasStop, completed, planning, tail: text.slice(-1000)};
})()`;
async function targets(){ return await (await fetch('http://127.0.0.1:9226/json/list')).json(); }
async function evalTarget(wsurl){
  return await new Promise((resolve, reject) => {
    const ws = new WebSocket(wsurl);
    const timer = setTimeout(()=>{try{ws.close()}catch(e){}; reject(new Error('ws timeout'))}, 30000);
    ws.onopen = () => ws.send(JSON.stringify({id:1, method:'Runtime.evaluate', params:{expression:EXPR, returnByValue:true, timeout:30000}}));
    ws.onerror = (e) => { clearTimeout(timer); reject(e.error || new Error('ws error')); };
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id === 1) {
        clearTimeout(timer); ws.close();
        if (msg.exceptionDetails) reject(new Error(JSON.stringify(msg.exceptionDetails)));
        else resolve((msg.result.result || {}).value || {});
      }
    };
  });
}
function status(v){
  if (v.completed) return 'TERMINADO';
  if (v.hasStop) return 'PENSANDO/INVESTIGANDO';
  if (v.planning) return 'PLANIFICACION';
  if (v.text) return 'ESTADO_INTERMEDIO';
  return 'SIN_TEXTO';
}
async function main(){
  fs.mkdirSync(OUTDIR, {recursive:true}); fs.writeFileSync(LOG, '');
  let last=''; const started=Date.now();
  while ((Date.now()-started) < 60*60*1000) {
    try {
      const ts = await targets();
      const page = ts.find(t => (t.url||'').includes(TARGET));
      if (!page) throw new Error('page target not found');
      const iframe = ts.find(t => t.type==='iframe' && t.parentId===page.id && (t.url||'').includes('connector_openai_deep_research')) || ts.find(t => t.type==='iframe' && (t.url||'').includes('connector_openai_deep_research'));
      if (!iframe) throw new Error('deep iframe not found');
      const v = await evalTarget(iframe.webSocketDebuggerUrl);
      const st = status(v);
      const line = `${new Date().toISOString()} status=${st} textLen=${v.textLen} buttons=${JSON.stringify(v.buttons)} page=${page.url} iframe=${iframe.id} tail=${String(v.tail||'').replace(/\n/g,' ').slice(0,350)}\n`;
      fs.appendFileSync(LOG, line);
      if (st !== last) { process.stdout.write(line); last = st; }
      if (st === 'TERMINADO') {
        fs.writeFileSync(OUT, v.text || '');
        const meta = {...v}; delete meta.text; fs.writeFileSync(META, JSON.stringify(meta, null, 2));
        console.log(`SAVED ${OUT} chars=${v.textLen} bytes=${fs.statSync(OUT).size}`);
        process.exit(0);
      }
    } catch(e) {
      const line = `${new Date().toISOString()} ERROR ${e && e.message || e}\n`; fs.appendFileSync(LOG, line); console.log(line.trim());
    }
    await new Promise(r => setTimeout(r, 20000));
  }
  console.log('TIMEOUT waiting for Deep Research completion'); process.exit(2);
}
main();
