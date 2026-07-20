# ChatGPT launch log — redo constipation remedies research

All ChatGPT results must be extracted with the `chatgpt-web-research-modes` extraction playbook. Do not call ChatGPT failed from partial UI; use `extraction unresolved` until recovered.
User correction 2026-07-01: do not relaunch/duplicate the same Deep Research as recovery. Keep the original Deep Research URLs/tabs and recover/extract their contents when ready.

- Pro #1 pharmacology: https://chatgpt.com/c/6a452f23-87c0-83eb-ae69-8a882afe79b9
  - target_id: 121BEF8A296E87341F0319821505F331
  - launched: 2026-07-01 17:xx CEST
  - status: extracted to chatgpt-pro1-pharmacology.md
- Pro #2 non-pharmacological: https://chatgpt.com/c/6a452f90-4470-83ed-b570-34e1147194b0
  - target_id: B9F33000EB729DC913B64598C1A5BEA5
  - status: extracted to chatgpt-pro2-nonpharm.md
- Deep Research #1 broad total remedies: https://chatgpt.com/c/6a453061-e374-83eb-800a-94d8980c7808
  - target_id: EE7EDDD99BB99A02C24792E219E0C104
  - iframe target: 5D45692AF4FB88E8AE39A013A169BB4C
  - status: extracted from original Deep Research nested iframe #root via CDP websocket to chatgpt-deepresearch1-original.md
- Pro #3 difficult phenotypes: https://chatgpt.com/c/6a4530cd-c954-83eb-94fa-562cd767bf6c
  - target_id: 26FB3A311DE2F5A3C43C859700A87BB0
  - status: extracted to chatgpt-pro3-difficult-phenotypes.md
- Pro #4 safety/special populations initial: https://chatgpt.com/c/6a45311f-4d0c-83eb-8f79-72670d86340a
  - target_id: 1479FFF55BFB90126264AA6DCCE789C7
  - status: extraction unresolved / insufficient output ('Estoy'); replacement Pro #4B was launched and extracted
- Deep Research #2 promising/emerging mechanisms: https://chatgpt.com/c/6a453327-9bc8-83eb-b9f7-515f01ef2e73
  - target_id: C694051ADD0976B0B0838976AA085935
  - iframe target: DEC9306C76C8726196371C6AC28878C1
  - status: extracted from original Deep Research nested iframe #root via CDP websocket to chatgpt-deepresearch2-original.md
- Pro #4 initial safety request: https://chatgpt.com/c/6a45311f-4d0c-83eb-8f79-72670d86340a
  - target_id: 1479FFF55BFB90126264AA6DCCE789C7
  - status: extraction unresolved / insufficient output ('Estoy'); replacement Pro #4B launched.
- Pro #4B safety replacement: https://chatgpt.com/c/6a45361e-6b78-83eb-b1ac-8fb97f6148b3
  - target_id: 298ACBB4104728C037A4F97C39ED6458
  - status: extracted to chatgpt-pro4b-safety.md
- Pro #5 safety short replacement: target_id F18EAEA5412E063A5F8C7C91FD30FCFA
  - status: extraction unresolved / insufficient output ('Har'); not used because Pro #4B extracted successfully


## Extraction fix learned 2026-07-01

The report was visible in Chrome because the content lived inside the Deep Research sandbox OOPIF nested `iframe#root` with `src=about:blank`. Top-level ChatGPT DOM only exposed the user prompt; sandbox `document.body.innerText` was empty. Correct extraction: attach directly to the iframe target/websocket and evaluate `document.querySelector('#root').contentDocument.body.innerText`, then write it to disk. Do not relaunch Deep Research.
