# Búsqueda auxiliar OSINT/SerpAPI — 2026-09-08

## Subagentes

- **SerpAPI worker seguro:** código 0, salida conservada en `serpapi-worker-safe.stdout.txt`. El sentinel `no_mcp` produjo un aviso de versión, pero `--safe-mode` evitó watchdog MCP. SerpAPI autenticado devolvió HTTP 429 por cuota; el worker usó Europe PMC, PubMed, PMC, DailyMed y fetches públicos. Aportó el caso de 2012, la cohorte italiana y el estudio celular; se reabrieron/contrastaron los originales. No se usaron snippets como prueba.
- **OSINT worker seguro:** código 1; `API call failed after 3 retries: [Errno 32] Broken pipe`, sin resultados. El intento inicial fue detenido al ver watchdog MCP tras `no_mcp` desconocido. No cuenta como evidencia.

## Consultas directas del agente

- Helper Chack: presente; variables de credenciales solo se comprobó como presentes/ausentes, nunca se imprimieron.
- SerpAPI Google y Google Scholar: HTTP 429; no se usó ninguna respuesta como evidencia.
- Brave: HTTP 429 / respuesta de cuota o CAPTCHA; no se hizo bypass.
- ForumScout `reddit_posts` amplio: resultados fuera de tema y un post que especificaba linfedema primario, no lipedema ni fármaco; se descartó como ruido.
- ForumScout exacto `"lipedema" "amlodipine"`: cero resultados.
- ForumScout con pregabalina/gabapentina: falsos positivos por OR y posts sin exposición verificable; no se generalizó.
- ForumScout `forum` sobre medicación/hinchazón: timeout; se registró como fallo.
- Apertura Reddit: el post candidato no se pudo extraer (`Failed to fetch url`) y no se usó.

## Interpretación

No hay una señal comunitaria reproducible y específica que cambie la conclusión. Los foros son útiles para generar preguntas sobre cronología y efectos adversos, no para estimar incidencia ni causalidad. Las fuentes directas se describen en `source-ledger.md`.
