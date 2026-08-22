# Live helper smoke test — 2026-08-22

- `serpapi google_scholar 'lipedema diuretic pseudo-Bartter electrolytes' -n 5`: **SUCCESS**. It returned five discovery results. The top Nature result exposed a snippet repeating a claim about diuretics and lymphedema; because the snippet was not evidence and `web_extract` reported that the configured Brave backend is search-only, it was not used in the synthesis. Existing preserved primary/PMC evidence was preferred.
- `forumscout reddit_posts 'lipedema diuretics rebound water pills'`: **SUCCESS**, but the first returned Reddit results were unrelated/noisy (e.g. an LPN forum post and novel spam). No patient claim from this smoke test was used.
- Raw outputs are preserved in `serpapi-google-scholar-20260822.txt` and `forumscout-reddit-20260822.txt`.
- This is a tool smoke test/source-discovery record, not a substitute for the terminal OSINT and SerpAPI subagent reports already preserved under `evidence/subagents/`.
