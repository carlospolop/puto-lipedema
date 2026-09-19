# Registro auxiliar SerpAPI/OSINT/web — 2026-09-19

## Herramienta Chack/SerpAPI
- `python ... chack_research.py --help`: **SUCCESS**; helper resuelto en el perfil `lipedema`.
- `serpapi google 'lipedema elastography durometry fibrosis measurement PMC' -n 10`: **SUCCESS** una vez; localizó PMC8652358, PMID 41832313, PMID 40670310 y revisiones. Los originales se abrieron aparte.
- Siguiente llamada SerpAPI: **HTTP 429 quota limit exceeded** (plan Free; no se relanzó, conforme al runbook). No se usó el error como evidencia.
- Europe PMC `scientific`: **SUCCESS**; recuperó PMID 41832313 y contexto de 2026.
- Brave: la API configurada devolvió 429; el backend de búsqueda web rescató resultados keyless. Se usó solo para descubrimiento y se abrieron los artículos originales.
- ForumScout Reddit posts: **SUCCESS**, pero los 10 resultados fueron ruido de fibrosis hepática/cirugía no relacionado; se descartaron como no relevantes, no se generalizó desde foros.

## Native web
Se abrieron PubMed/PMC de 40042124, 37789512, 40670310, 41832313, 34049453, 31408408, 32698883, PMC12796449, PMC12731049 y API oficial NCT07489248. El registro NCT fue leído en JSON con estado **RECRUITING**, versión 2026-09-18 y `hasResults=false`.

## Filtro social/marketing
No se conservan afirmaciones de clínicas, vídeos de producto ni consejos de compra como evidencia. El resultado Reddit no aportó experiencias lipedema verificables sobre durometría/elastografía.

## Workers Hermes
- SerpAPI worker y OSINT worker se lanzaron desde esta carpeta con `--toolsets terminal,web,no_mcp`; ambos alcanzaron estado terminal tras kill controlado (códigos `-15`) al superar 575/578 s sin producir informe. Solo dejaron el aviso cosmético `Unknown toolsets: no_mcp`; no se contó como evidencia ni se relanzó.
