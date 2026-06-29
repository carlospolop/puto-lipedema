# Parent Chack/SerpAPI search notes

Date: 2026-06-30.

## Setup
- Helper: `/home/tester/.hermes/profiles/lipedema/skills/research/chack-osint/scripts/chack_research.py`.
- Env presence checked without printing secrets: BRAVE_API_KEY, SERPAPI_KEY, SERPAPI_API_KEY, FORUMSCOUT_API_KEY and FORUMSCOUT_BASE_URL present; BRAVE_SEARCH_API_KEY missing but BRAVE_API_KEY present.

## Queries and findings

### Brave: `lipedema low carb 2026 LCHF`
Key hits:
1. Frontiers 2026 case report: *Management of lipedema with a biphasic ketogenic/low-carbohydrate diet: a case report* — https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2026.1728651/full / PMC12894008. Potentially useful as case report only.
2. PubMed 38026822: *The Benefits of Low-Carbohydrate, High-Fat (LCHF) Diet on Body Composition, Leg Volume, and Pain in Women with Lipedema*.
3. MDPI/Nutrients 2023 lab parameters: *The Effect of a Low-Carbohydrate High-Fat Diet on Laboratory Parameters in Women with Lipedema in Comparison to Overweight/Obese Women*.
4. 2024 systematic review/meta-analysis PMID 39408242.
5. Springer 2025 narrative review: *Therapeutic Applications of Ketogenic Diets in Lipedema* / PMC12106162.

### Brave: `lipedema ketogenic diet ApoB LDL`
- Found general ApoB/LDL risk discussions and population LCHF evidence; no lipedema-specific ApoB trial found in top hits.
- Practical implication: monitor ApoB/LDL if keto/LCHF is high fat or sustained; this is extrapolated cardiometabolic safety, not direct lipedema outcome evidence.

### Brave: `lipedema low carb constipation muscle loss`
- Found body composition paper PMC9415463 warning keto side effects: constipation, breath, headache, muscle cramps/weakness.
- Found case report PMC12894008.
- Found patient-facing/non-primary pages; treat as leads only.

### SerpAPI Google Scholar
- `lipedema low carb LCHF PMID 42123982`: no returned results.
- `lipedema ketogenic diet safety monitoring`: returned narrative review 2023/2025, 2026 mediator study, 2023 lab parameters, 2026 fatty acids.

### SerpAPI Google Forums
- `lipedema keto reddit` and `lipoedema low carb forum`: timed out. Need not infer no community data.

## New sources to inspect
- PMC12894008 / Frontiers 2026 case report on biphasic ketogenic/low-carbohydrate diet.
- PMC12106162 / Current Obesity Reports 2025 narrative review on therapeutic applications of ketogenic diets in lipedema.
- PMID 38026822 / 2023 body composition/leg volume/pain in women with lipedema.
- Nutrients 2023 lab parameters LCHF in lipedema vs overweight/obese.
- PMC9415463 body composition paper and side-effect discussion.
