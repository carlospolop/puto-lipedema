# Knowledge search record (mandatory pre-search step)

Date/run: 2026-09-08; knowledge_base=lipedema. This record was created after the read-only search and before/alongside external verification; no Qdrant write was performed.

Query:
`lipedema edema farmacológico en adultos: dihidropiridinas (amlodipino/nifedipino), AINE, pregabalina/gabapentina, pioglitazona/rosiglitazona, estrógenos/progestágenos, corticosteroides, fludrocortisona y minoxidil; evidencia primaria, fichas oficiales, farmacovigilancia, edema con fóvea y diferenciales`

Returned corpus: knowledge_base `lipedema`, 13 results (vector_limit=20, exact_limit=20, max_chars=30000). Initial evidence-folder listing before new retrieval: no artifacts matched `*`.

Routes/leads returned (used as discovery only, then checked against the underlying URL/XML/HTML/PDF when available):
1. `researches/20260711-100036-edema-ciclico-idiopatico-lipedema/subagents/worker-scientific.md` and `worker-osint.md`: differential lists DHP calcium antagonists, NSAIDs, hormones, corticosteroids, fludrocortisone, minoxidil, thiazolidinediones and gabapentinoids; warns against unsupervised “natural diuretics/water pills/detox”. These were secondary lead notes, not counted as primary proof.
2. `researches/2026...diureticos.../coverage_map.md`: lead to the US lipedema standard-of-care consensus, including avoidance of long-term diuretics and TZDs. Verified directly at PMC/Europe PMC XML (PMC8652358).
3. `researches/20260704-100124-sulodexida-dobesilato-venoactivos-medicos-lipedema/...`: lead to a calcium-dobesilate/idiopathic-cyclic-edema case. Verified directly at Europe PMC XML (PMC5587928); retained only as a low-level illustration that lipedema may coexist with real fluid edema, not as evidence for any requested drug class.
4. Duplicate result clusters repeated the same US consensus, diagnostic edema review, and case report. They were deduplicated by underlying DOI/PMCID rather than counted as independent evidence.
5. S2k guideline lead: Faerber et al., J Dtsch Dermatol Ges 2024, DOI 10.1111/ddg.15513. DOI metadata/abstract verified via Crossref/Europe PMC search; full text remained paywalled/blocked, so exact recommendations were not attributed to it.

External discovery notes: Google was largely blocked and Brave search was unavailable because no API key was configured; Bing was used only for discovery and returned irrelevant/noisy results for “water pills/detox/testimonial/clinic”. No snippet or marketing page was used as efficacy/safety evidence. Official labels, direct XML/HTML pages, and pharmacovigilance API outputs were opened independently.

Verification status convention used in the review: opened = underlying source inspected; blocked-paywalled = only metadata/abstract available; snippet-only = discovery lead not used as proof; not relevant = duplicate/noise.
