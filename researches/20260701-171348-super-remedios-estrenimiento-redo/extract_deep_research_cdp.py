#!/usr/bin/env python3
import asyncio, json, urllib.request, sys
from pathlib import Path
import websockets

OUT = Path(__file__).parent
EXPR = """
(() => {
  const root = document.querySelector('#root');
  const rootDoc = root?.contentDocument;
  const text = rootDoc?.body?.innerText || root?.innerText || document.body?.innerText || '';
  const htmlLen = rootDoc?.documentElement?.outerHTML?.length || document.documentElement?.outerHTML?.length || 0;
  const buttons = rootDoc ? [...rootDoc.querySelectorAll('button,[role=button],a')].map((e,i)=>({i,txt:e.innerText||'',aria:e.getAttribute('aria-label'),role:e.getAttribute('role'),href:e.href||'',download:e.download||''})).filter(x=>x.txt||x.aria||x.href) : [];
  return {url: location.href, title: document.title, textLen: text.length, text, htmlLen, buttons: buttons.slice(0,30)};
})()
"""

async def eval_target(target_id, outfile):
    targets=json.load(urllib.request.urlopen('http://127.0.0.1:9226/json/list'))
    t=next(x for x in targets if x['id']==target_id)
    ws=t['webSocketDebuggerUrl']
    async with websockets.connect(ws, max_size=50_000_000) as w:
        await w.send(json.dumps({"id":1,"method":"Runtime.evaluate","params":{"expression":EXPR,"returnByValue":True,"awaitPromise":False,"timeout":30000}}))
        while True:
            msg=json.loads(await w.recv())
            if msg.get('id')==1:
                if 'exceptionDetails' in msg:
                    raise RuntimeError(msg['exceptionDetails'])
                val=msg['result']['result'].get('value')
                if not val:
                    raise RuntimeError(msg)
                Path(outfile).write_text(val['text'], encoding='utf-8')
                meta=Path(outfile).with_suffix('.meta.json')
                meta.write_text(json.dumps({k:v for k,v in val.items() if k!='text'}, ensure_ascii=False, indent=2), encoding='utf-8')
                print(outfile, val['textLen'], 'chars', 'htmlLen', val.get('htmlLen'))
                return

async def main():
    await eval_target('CB823AA5C66F1AC4374D20A45A8AF97E', OUT/'chatgpt-deepresearch1-original.md')
    await eval_target('A4BB9B81C07C85D2B5E75D0C6A426610', OUT/'chatgpt-deepresearch2-original.md')

if __name__ == '__main__':
    asyncio.run(main())
