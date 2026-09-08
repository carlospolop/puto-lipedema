# Launch log — edema inducido por fármacos y lipedema

| Hora/etapa | Acción | Resultado verificable |
|---|---|---|
| 17:48 | Heartbeat inicial | Telegram autorizado, `message_id=1289` |
| 17:54 | `git status`, remotes y `git pull --ff-only` | `main` limpio al inicio; ya actualizado; HEAD `8cb2adf` |
| 17:54 | `knowledge_status` y búsquedas previas | 302 fuentes/3.738 chunks; leads sobre edema, hormonas y diferencial |
| 17:54 | Selección | siguiente tema explícito de `suggestions.md`, línea 47 |
| 17:54 | Carpeta y plan | `20260908-175448-edema-farmacos-lipedema/` creada |
| 17:55 | `researcher_queue_create` | `queue_id=lipedema-edema-farmacos-20260908`; artefactos temporales no públicos |
| 17:55–ronda 1 | Chack batch `batch-1-1d2062dd`, research `research-000-984349d0` | Deep 1 / Pro 3 / scientific 1 / websearcher 1; trabajó y satisfizo requisitos; un Pro `TIMED_OUT`, usage incompleto |
| recuperación | Chack batch `batch-2-ed6eae70`, research `research-000-b97858cf` | Deep 1 / Pro 1 / scientific 1 / websearcher 1; todos terminales; usage completo |
| recuperación | Estado de cola | `open_batch=null`, `processing_count=0`; sin ledgers durables activos |
| curation inicial | decisión del administrador | 38 approved_for_knowledge / 62 archive_only / 0 discard; 37 indexados, 1 omitido, 1.640 chunks, 25 eliminados tras comprobación |
| curation recovery | decisión del administrador | 26 approved_for_knowledge / 125 archive_only / 0 discard; 24 indexados, 2 omitidos, 1.938 chunks, 12 eliminados tras comprobación |
| post-ingest | `knowledge_status` y búsqueda focal | 357 fuentes/7.103 chunks; la búsqueda de 346/588 y clases farmacológicas recuperó el hallazgo aprobado |
| OSINT directo | Brave, ForumScout y SerpAPI | Brave/SerpAPI HTTP 429; ForumScout ruidoso, consulta exacta amlodipino sin resultados; un timeout de foro; no se usó ruido como prueba |
| workers auxiliares intento 1 | `hermes chat --toolsets terminal,web,no_mcp` | aviso `Unknown toolsets: no_mcp` y watchdog MCP; ambos detenidos antes de obtener resultados |
| workers auxiliares intento seguro | mismo sentinel + `--safe-mode` | SerpAPI/fallback terminó código 0; OSINT terminó código 1 (`Broken pipe`); ambos terminales, sin MCP activo |
| fuentes centrales | web_extract/fetch público | PMC3506057, PMC10908346, PMC11117526, PMC12800713, PMC8652358, PubMed 21558959, AWMF y fichas DailyMed abiertas; el endpoint PMC10855605 se verificó por XML de Europe PMC tras una extracción mal resuelta |
| publicación | web y anexos | añadida explicación de fármacos, grados, riesgos, señales y referencias; `build-search-index.js` generó 99 páginas; verificación HTTP 99/99, enlaces internos 1.940/1.940, sin rutas `researches/` en el índice |
| seguridad/espacio | artefactos | el árbol bruto de la cola no se copia a git; quedan receipts resumidos, hashes y URLs, sin credenciales ni URLs privadas |
