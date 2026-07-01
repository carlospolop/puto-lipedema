# ChatGPT Deep Research #1 extraction-unresolved note — supersedes previous failure wording

URL: https://chatgpt.com/c/6a45185f-4948-83ed-abb6-2aca2e629ec8

Status: **extraction unresolved / not used as evidence**. Do not word this as “ChatGPT failed” unless the full `chatgpt-extraction-playbook.md` protocol is repeated and still proves a true terminal UI/server failure.

Observed in the original run:
- The prompt was sent with the visible `Deep research` chip and an `internal://deep-research` iframe appeared.
- Repeated checks over ~35+ minutes showed no `Stop answering`, no progress checklist, no Start button, no Copy/Good response controls, no assistant report turn, and a visually blank large iframe below the prompt/composer.
- Top-level structured turn extraction only showed the user Deep Research prompt.

Correction after user feedback:
- The proper conclusion is **Hermes did not successfully extract/recover a complete Deep Research report from this tab**.
- Future recovery must follow the strengthened skill: wait, full structured turn extraction, scroll/screenshot, iframe/OOPIF extraction, same-thread continuation if possible, and fresh clean relaunch before declaring true failure.

Use in synthesis: none. The prior report was compensated with primary-source guideline/PubMed/PMC extraction, Chack/SerpAPI/ForumScout searches and ChatGPT Pro #2, but this note must not be used as proof that ChatGPT itself failed.
