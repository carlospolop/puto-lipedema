# Workflow failure postmortem: ChatGPT extraction and async subagents

## What went wrong

1. **ChatGPT extraction error**
   - The browser tabs `Lipedema Diets Literature Review`, `Lipedema Keto Safety Checklist`, and `Lipedema Low-Carb Translation` had complete assistant outputs.
   - The parent agent inspected truncated/viewport text and `document.body.innerText.slice(...)` outputs and incorrectly concluded the visible result was only a useless fragment like `I`.
   - Structured extraction later showed full assistant messages of ~24.5k, ~19.5k and ~14.9k chars.

2. **Deep Research mode confirmation error**
   - The low-carb tab was intended as Deep Research, but no reliable post-send Deep Research chip/planning iframe was confirmed for that specific conversation.
   - The output should therefore be treated as a ChatGPT Pro/normal synthesis unless a Deep Research card/iframe is verified.

3. **Async delegation wait-barrier error**
   - `delegate_task` returns immediately and delivers results later as an async conversation message.
   - Sleeping inside the parent turn did not guarantee that subagent summaries entered the parent model context before finalization.
   - The batch arrived after the final response; two tasks were useful and one timed out.

## Correct procedure going forward

### ChatGPT
Before declaring a ChatGPT run useless:
1. Extract structured turns with:
   - `[data-message-author-role]`
   - `section[data-testid^="conversation-turn"]`
2. Record `role`, `textLen`, full `innerText`, `outerHTML.length`, buttons and iframes.
3. If iframes exist, inspect OOPIF/frame contents.
4. Save full assistant outputs to `researches/<folder>/chatgpt-*.md`.
5. Only then classify as useful/failure.

### Subagents
For strict research finalization:
- Do not rely on `delegate_task` as a synchronous wait primitive.
- Either wait until async results actually arrive in the conversation before finalizing, or use terminal-managed blocking workers that write files:
  - `hermes chat -q '<worker brief; write output to file>'` in background with `notify_on_complete=True`.
  - `process.wait/log` to observe completion.
  - Verify output file exists and read it before synthesis.

## Files extracted after correction
- `chatgpt-diets-literature-review.md`
- `chatgpt-keto-safety-checklist.md`
- `chatgpt-low-carb-translation.md`
