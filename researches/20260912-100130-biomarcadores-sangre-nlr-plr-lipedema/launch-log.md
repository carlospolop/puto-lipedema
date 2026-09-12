# Launch log — biomarcadores sanguíneos simples en lipedema

## 2026-09-12 10:01 CEST — preparación
- Repositorio actualizado con `git pull --ff-only origin main`: ya estaba al día.
- Rama: `main`; remoto: `git@github.com:carlospolop/puto-lipedema.git`.
- Sugerencias revisadas. Se eligió el subtema pendiente de NLR/PLR/PCR/CRP porque es accionable para evitar sobrediagnóstico y no reabre una investigación marcada como completada.
- Qdrant consultado antes de la investigación externa, base `lipedema`:
  - `knowledge_status`: 404 fuentes, 8.403 fragmentos, 19.699.571 bytes.
  - consultas: `PMID 42261591 NLR PLR CRP platelet neutrophil lymphocyte ratio lipedema`; `lipedema inflammatory blood biomarkers CRP NLR PLR clinical utility differential diagnosis`; `lipedema biomarker studies inflammation blood neutrophils platelets cytokines 2024 2025 2026`.
  - lectura inicial: no apareció validación clara de NLR/PLR en lipedema; sí señales de PF4/CXCL4, VEGF-C, macrófagos y estudios de tejido/locales. Se conservarán como leads y se reabrirán las fuentes primarias.
- Aún no se ha usado la ausencia en Qdrant como prueba de ausencia científica.

## Cola Chack
- `queue_id`: `lipedema-20260912-biomarcadores-sangre-nlr-plr-crp`.
- `queue_evidence_data_path`: `/tmp/chack-research-data/researcher-queues/lipedema-20260912-biomarcadores-sangre-nlr-plr-crp`.
- Política usada en ambas rondas: `knowledge_mode=read_write`, `knowledge_base=lipedema`, `save_artifacts=true`.
- Requerimiento: dos prompts autocontenidos y distintos en la primera ronda; cada uno exigió que el administrador esperara a deepchatgpt, prochatgpt, scientific y websearcher, que cada investigador consultara primero las herramientas de conocimiento de solo lectura, y que clasificara todo artefacto como `approved_for_knowledge`, `archive_only` o `discard`.
- No contar lanzamientos, IDs ni respuestas vacías como evidencia.

## Ronda Chack 1 — terminal con fallo
- `batch_id`: `batch-1-4cf2c513`; `research_id`: `research-000-4312b990`.
- Se fusionaron los dos prompts en un estudio integrado; se lanzaron 8 llamadas: Deep 2, Pro 4, scientific 1 y websearcher 1.
- Estado devuelto: `research_worked=false`, `required_researchers_satisfied=false`, `researcher_usage_complete=false`.
- Deep y Pro: terminales pero fallaron por `BROWSER_EXECUTION_FAILED`/timeout CDP en `127.0.0.1:9226`.
- Scientific y websearcher: el administrador regresó con artefactos, pero sin resultado terminal durable; el estado de cola posterior mostró `processing_count=0`. No se cuentan como evidencia completa.
- Conclusión parcial útil: no hay biomarcador sanguíneo rutinario validado; se identificaron estudios 2026 de CRP/NLR/PLR y una cohorte comparativa con resultados nulos para NLR/PLR frente a obesidad. Se reabrirán primarios fuera de la cola.
- Artefactos preservados por Chack en `/tmp/chack-research-data/researcher-queues/lipedema-20260912-biomarcadores-sangre-nlr-plr-crp`; no se copian al repositorio ni se borran manualmente.
- Decisiones/ingestión no verificables en esta ronda: el administrador indicó discrepancias de nominaciones, no confirmó contadores antes/después ni receipt. Se exige reintento.

## Ronda Chack 2 — terminal con fallo reproducible
- `batch_id`: `batch-2-f3137a89`; `research_id`: `research-000-c4aeb928`.
- Se lanzaron y se reintentaron todos los tipos requeridos: Deep 2, Pro 4, scientific 5 y websearcher 5; los 16 jobs terminaron y el estado durable posterior fue `processing_count=0`.
- Estado: `research_worked=false`, `required_researchers_satisfied=false`, `researcher_usage_complete=false`.
- Deep y las dos líneas Pro: fallo repetido `BROWSER_EXECUTION_FAILED`/timeout CDP en `127.0.0.1:9226`, sin findings.
- Scientific y websearcher: fallo de inicialización/handshake MCP y salida no parseable; no obtuvieron evidencia utilizable en esta ronda.
- Diagnóstico: bloqueo de infraestructura de Chack/Chrome-MCP, no resultado negativo de la literatura. No se volverá a relanzar el mismo proveedor sin una alternativa nueva; se usará búsqueda primaria directa y una única vía auxiliar acotada.
- El administrador sí verificó: todos los investigadores terminales y `running durable researcher ledgers=0`. Aun así la puerta de completitud no se cumple.
- Knowledge update: antes/después idénticos (base `lipedema`: 404 fuentes, 8.403 fragmentos, 19.699.571 bytes); cero candidatos aprobados, cero ingestas y sin receipt de ingestión. Los artefactos fallidos quedan en la carpeta temporal de cola; no se copian ni se borran manualmente.

## Búsqueda primaria directa — abierta
- `web_extract` abrió PubMed/Europe PMC, páginas SAGE/Thieme/Crossref y artículos PMC; se conservaron solo metadatos, citas y hallazgos en el ledger, no copias duplicadas de HTML/PDF.
- Hallazgos centrales: PMID 42261591 (60 lipedema/40 controles sanos; NLR, PLR, plaquetas y CRP mayores, retrospectivo); DOI 10.1055/a-2897-4203 (229 mujeres; CRP/ESR/CAR más altos en lipedema y obesidad que en controles normales, sin diferencia lipedema-obesidad; NLR/PLR y derivados sin diferencia); PMID 42249859 (45/40; CBC/PDW/MPV no significativos tras FDR); PMC13278978 (24/21 BMI-matched; CRP/IL-6/TNF sin diferencia).
- La fuente PF4/CXCL4 (JCI Insight 2020; PMC7406300) es un marcador experimental de disfunción linfática, con modelos animales y trastornos linfáticos heterogéneos: no equivale a un análisis rutinario ni a validación específica de lipedema.
- SerpAPI funcionó para descubrimiento (Google/Europe PMC/OpenAlex/Scholar), pero después devolvió HTTP 429 y Google News no devolvió resultados; se detuvo esa vía y no se usó el error como evidencia. Thieme PDF directo devolvió HTML de protección, por lo que se usó el resumen/metadata de Crossref.

## Auxiliar OSINT/SerpAPI — terminal con fallo
- Proceso `proc_2ba37847a0da`, sesión `20260912_111449_bf768b`, ejecutado desde esta carpeta con `--toolsets terminal,web,no_mcp` y presupuesto 600 s.
- Falló antes de investigar: aviso cosmético `Unknown toolsets: no_mcp` seguido de `API call failed after 3 retries: [Errno 32] Broken pipe`; código 1. Se conserva el log para auditoría, no se relanzó el proveedor ni se inventaron hallazgos sociales. No hubo evidencia comunitaria utilizable en esta ronda.

## Búsqueda primaria y auxiliar — cerrada
- `web_extract` abrió PubMed 42261591/42249859/42379186, DOI SAGE/Thieme, PMC13278978, PMC13409243, PMC9659629, PMC7406300 y MedlinePlus CRP/ESR. Los mirrors comerciales o bloqueados no se usaron como evidencia.
- Helper científico: Europe PMC, OpenAlex y Google Scholar dieron descubrimientos; se priorizaron los artículos y páginas primarias abiertas.
- SerpAPI obtuvo una búsqueda Google válida para localizar las fuentes, después devolvió HTTP 429 de cuota y Google News no devolvió resultados. Se registró y se detuvo.
- El trabajador OSINT/SerpAPI único arrancó con `terminal,web,no_mcp`; `no_mcp` emitió el aviso esperado, pero el proceso terminó código 1 con `Broken pipe` y sin reporte. No se relanzó ni se contó como evidencia.
- No hubo evidencia comunitaria utilizable; la síntesis se basa en fuentes primarias/PMC/PubMed y MedlinePlus.

## Resultado editorial
- La evidencia directa converge en que no hay biomarcador rutinario validado. La página de biomarcadores se actualizó para explicar la señal positiva de 60/40, la comparación 78/76/75 que no separa lipedema de obesidad, el estudio exploratorio 45/40 y la cohorte BMI-pareada n=24/21; incluye límites, preguntas clínicas y urgencias.
- `suggestions.md` marca el subtema completado y conserva como siguiente paso la replicación prospectiva.
- Los logs auxiliares sin evidencia (`osint-query.txt`, `osint-worker.out`, `osint-worker.err`) se clasifican como `discard` y no deben entrar en git; el fallo queda resumido aquí y en el resumen.

## Cierre operativo
- Qdrant final (2026-09-12): `knowledge_status` siguió en 404 fuentes, 8.403 fragmentos y 19.699.571 bytes; no hubo ingestión nueva ni receipt porque ambos administradores Chack fallaron. La búsqueda focalizada sí recuperó pasajes previamente aprobados sobre la ausencia de pruebas sanguíneas estandarizadas y la confusión IMC/obesidad; se registra como verificación de retrieval deduplicado, no como nuevo hallazgo.
- Todos los jobs Chack lanzados quedaron terminales y no hay ledgers durables en ejecución, pero las dos administraciones reportaron `research_worked=false`, `required_researchers_satisfied=false` y `researcher_usage_complete=false`. Este incumplimiento se conserva explícitamente y no se usa como evidencia científica.
- La síntesis local se apoya únicamente en fuentes primarias abiertas y fuentes oficiales generales. No se publica una validación de la cola.
- Verificación local: `node .github/scripts/build-search-index.js` generó 100 páginas; `node --check` de scripts, `git diff --check`, 100 páginas HTML públicas con 0 enlaces locales rotos y servidor local HTTP (index, página y `search-index.js`) devolvieron 200.
- No se hace push a `main`: la puerta obligatoria de completitud/curación de Chack no se cumplió pese al reintento; se deja el trabajo local auditable y se reporta el bloqueo en vez de publicarlo como investigación cerrada.
