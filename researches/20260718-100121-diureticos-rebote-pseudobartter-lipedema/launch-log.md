# Launch log — diuréticos, rebote y pseudo-Bartter

- Queue ID: `lipedema-diureticos-20260718`
- Queue evidence root: `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718`
- Created: 2026-07-18 10:01 CEST

| ID | Iteración | Investigador | Prompt/objetivo | Estado terminal | Evidence path / conversación | Artefacto local | Error |
|---|---:|---|---|---|---|---|---|
| D01 | 1 | `deepchatgpt_researcher` | Mapa amplio: indicaciones por fenotipo/clase, rebote, pseudo-Bartter, España, guías, ciencia y comunidad | `extracted` (2026-07-18; 26.711 caracteres; 2 salidas internas) | `research-000-0ed8b57b`; [conversación](https://chatgpt.com/c/6a5b36af-d884-83eb-9317-5b4c056bf64f); `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718/...` | `evidence/chack/deep-01-response.md`, request/run/admin y 2 JSON internos | — |
| P01 | 1 | `prochatgpt_researcher` | Auditoría de clases, indicaciones por fenotipo, AEMPS/EMA y falsación de absolutos | `timeout` (4.429 caracteres parciales; no cuenta como Pro completo) | `research-000-c9d8a3da`; [conversación](https://chatgpt.com/c/6a5c0c22-32b8-83eb-842e-b29f990ea084) | `evidence/chack/pro-01-timeout/` | No alcanzó estado terminal extraíble en 4.800 s; faltaron etiquetas/clases completas |
| P02 | 1 | `prochatgpt_researcher` | Retirada, rebote, pseudo-Bartter, trastornos alimentarios y seguridad | `interrupted/no active batch`; Pro no extraído | `research-000-1a18f18e`; [conversación Pro](https://chatgpt.com/c/6a5c225f-3414-83eb-ab98-12d552c7190c) | `evidence/chack/pro-02-fallback/` | Pro quedó sin respuesta; `queue_status` confirmó 0 trabajos activos |
| D02 | 1 | `deepchatgpt_researcher` (compensación administrativa de P02) | Síntesis de retirada/rebote/pseudo-Bartter | `extracted` (25.683 caracteres) | `research-000-1a18f18e`; [conversación](https://chatgpt.com/c/6a5c1f66-b5bc-83eb-8d2a-80ec20879724) | `evidence/chack/pro-02-fallback/deepchatgpt_researcher/` | — |
| O01 | 1 | Subagente Chack OSINT | Comunidades EN/ES, reacciones adversas, OTC/herbales, desinformación | `exit 0` (900 líneas) | Proceso local bloqueante | `evidence/subagents/osint-round1.md` | Brave 429 intermitente; Reddit 403; 2 fallos ForumScout |
| S01 | 1 | Subagente SerpAPI | Google/Bing/Scholar/Forums/News/YouTube y apertura de fuentes | `exit 0` (653 líneas) | Proceso local bloqueante | `evidence/subagents/serpapi-round1.md` | Algunos 429/403/404; fuentes decisivas reabiertas por alternativas |
| B01 | 1 | Subagente biomédico | PubMed/PMC/Europe PMC/OpenAlex, guías y mecanismo | `exit 0` (796 líneas) | Proceso local bloqueante | `evidence/subagents/scientific-round1.md` | Evidencia histórica pequeña/heterogénea; sin RCT lipedema |
| V02 | 2 | Subagente de verificación | Auditoría primaria de guías, identificadores, cifras históricas, clases y pseudo-Bartter | `exit 0` (214 líneas; 35.045 bytes) | Proceso local bloqueante | `evidence/subagents/source-verification-round2.md` | stderr solo `session_id`; sin efectos laterales; algunos PDFs 403 compensados con PubMed/PMC/Crossref |
| F03 | 3 | Subagente de falsación clínica | Ataque a redacción pública, contraejemplos, seguridad, clases y saturación | `exit 0` (110 líneas; 12.545 bytes) | Proceso local bloqueante | `evidence/subagents/falsation-round3.md` | Sin hallazgo material nuevo; refinamientos de seguridad; stderr solo `session_id` |
| P03 | 4 | `prochatgpt_researcher` | Auditoría clínica por indicación/clase, deprescripción y seguridad | `FAILED` terminal; 2 intentos | `research-000-53fe83ff`; `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718/researches/research-000-53fe83ff` | `evidence/chack/pro-03-clinical/` | `BROWSER_EXECUTION_FAILED`: `Page.goto` agotó 60 s; no cuenta como Pro; especialistas de respaldo sí terminaron |
| P04 | 4 | `prochatgpt_researcher` | Diferencial de pseudo-Bartter/alcalosis y límites diagnósticos | `FAILED` terminal; 2 intentos | `research-001-c0e6051c`; `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718/researches/research-001-c0e6051c` | `evidence/chack/pro-04-pseudobartter/` | `BROWSER_EXECUTION_FAILED`: `Page.goto` agotó 60 s; no cuenta como Pro; especialistas de respaldo sí terminaron |

## Iteración 2 — contradicciones resueltas
- DOI correcto de MacGregor 1975: `10.1016/S0140-6736(75)92833-0`; `90639-X` corresponde a una carta distinta.
- PMID 7894988 sí es Pelosi et al. 1995; el subagente SerpAPI que lo calificó de química analítica estaba equivocado.
- La retirada puede causar rebote transitorio, pero el empeoramiento también puede ser recaída de insuficiencia cardiaca/hipertensión u otra indicación real.
- Pseudo-Bartter es un fenotipo adquirido, no prueba de abuso; el cloro urinario aislado es dependiente del momento.
- Discrepancia editorial S2k: original alemán/artículo corto `94,4%`; traducción española alojada en AWMF `94,1%`. No publicar el porcentaje; la recomendación sustantiva coincide.

## Recuperación 2026-07-19
- `researcher_queue_status`: sin lotes abiertos ni en proceso.
- Se reutilizó la cola con `researcher_queue_create(queue_id=lipedema-diureticos-20260718)` y no se relanzó el Deep equivalente.
- Se copiaron los artefactos ya completados sin sobrescribir la evidencia original.
- Se halló un Pro antiguo con `chatgpt-run.json` aún marcado `running` y 0 caracteres, pero no figuraba en ningún lote abierto/en proceso tras reinicio del servicio. Se preserva como `P00` interrumpido/no extraído y no cuenta como evidencia; se relanzarán investigaciones Pro materialmente diferenciadas.

## Recuperación 2026-08-08
- Lote bloqueante `batch-1-cbe05eaa`; 0 trabajos abiertos/procesando al cierre.
- P03 y P04 fueron materialmente distintos y Chack intentó cada Pro dos veces. Los cuatro intentos alcanzaron error terminal de navegación, sin texto parcial; no se usan como evidencia Pro.
- Respaldos terminales preservados: P03 (web, científico, legal/regulatorio y producto) y P04 (web, científico y CLI). Confirmaron fuentes AEMPS/PMC, añadieron contraejemplos de retirada de antagonistas mineralocorticoides y afinaron el diferencial de alcalosis.

## Recuperación obligatoria 2026-08-15
- P05 inicial (solicitud clínica/regulatoria; el segundo campo fue ignorado por el esquema): `FAILED` terminal por `TimeoutError` tras 90 minutos; no cuenta como evidencia Pro; `research-000-4ef45990`; artefactos preservados en `evidence/chack/pro-05-initial-timeout/`.
- Estado Chack final: sin lotes abiertos/procesando (`processing_count=0`).
- P05, Pro de indicación/deprescripción: `FAILED` terminal por `TimeoutError` al superar 90 minutos; no cuenta como evidencia Pro; artefactos preservados en `evidence/chack/pro-05-clinical-retry/`, investigación Chack `research-000-7ccd0eec`.
- P06, Pro de pseudo-Bartter: `FAILED/NOT INVOKED` terminal; el administrador informó que `prochatgpt_researcher` no estaba expuesto y dejó solo respaldos `scientific_research` y `cli_research`; no cuenta como Pro; artefactos preservados en `evidence/chack/pro-06-pseudobartter-retry/`, investigación Chack `research-001-1c14255a`.
- No se relanzan equivalentes en esta ejecución por agotamiento del límite de runtime. La evidencia anterior de OSINT/SerpAPI permanece preservada y no se usa como sustituto del mínimo Pro.

## Recuperación 2026-08-22 — lote terminal `batch-3-d1298d65`

- Queue reutilizada: `lipedema-diureticos-20260718`; estado previo y posterior: `processing_count=0`; evidence root `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718`.
- P07 | investigador solicitado `prochatgpt_researcher` | objetivo: indicaciones por clase, deprescripción, insuficiencia cardiaca/renal y seguridad | `FAILED` terminal (`TimeoutError: Agent run exceeded max runtime (90 minutes)`) | investigación `research-000-3e72e35a` | artefactos preservados en `evidence/chack/pro-07-clinical-retry/` | no cuenta como evidencia Pro.
- P08 | investigador solicitado `prochatgpt_researcher` | objetivo: fisiología, diferencial, cloro urinario, cribados y alertas de pseudo-Bartter | `terminal extracted`, pero el administrador informó que el investigador solicitado no estaba expuesto; respaldos terminales `scientific_research`, `websearcher_research` y `cli_research`, 372 operaciones | investigación `research-001-272a8ba8` | artefactos preservados en `evidence/chack/pro-08-pseudobartter-retry/` | no cuenta como respuesta Pro; se usa solo como evidencia de sus investigadores realmente ejecutados.
- Resultado del lote: `complete=true`, `artifacts_preserved=true`, dos solicitudes mantenidas separadas; no quedaron trabajos abiertos. Se conservan también los fallos P01–P07 y no se afirma haber obtenido dos respuestas Pro válidas.
- Smoke test 2026-08-22: SerpAPI Google Scholar y ForumScout Reddit devolvieron `SUCCESS`; el primero solo aportó snippets de descubrimiento y el segundo fue ruido no relacionado. `web_extract` no pudo abrir Nature porque el backend configurado es search-only; ninguna de esas salidas se usó como evidencia clínica. Raw outputs y clasificación: `evidence/live-helper/`.

## Cierre y verificación 2026-08-22

- [x] `summary.md` existe y contiene la síntesis, límites y traducción web; `MANIFEST.md` inventaría 848 archivos y 98.267.724 bytes con SHA-256 verificable.
- [x] Web en español actualizada en `efectos/edema-retencion.html`; novedades >30 días eliminadas de `anexos/ultimas-incorporaciones.html`; el índice se regeneró con `node .github/scripts/build-search-index.js` y cubre 99 páginas.
- [x] Commit de contenido `b11b030` y cierre documental `676b8f5` enviados a `main`: https://github.com/carlospolop/puto-lipedema/commit/676b8f5e13d5b42c8b3eadcd1b243d55964bb9c8
- [x] Search index del commit de contenido: https://github.com/carlospolop/puto-lipedema/actions/runs/32565547028 — success.
- [x] GitHub Pages del commit de contenido: https://github.com/carlospolop/puto-lipedema/actions/runs/32565547037 — success; el cierre documental también desplegó correctamente en https://github.com/carlospolop/puto-lipedema/actions/runs/32565627408.
- [x] Producción: `https://putolipedema.com/anexos/ultimas-incorporaciones.html?v=b11b030` y `https://putolipedema.com/efectos/edema-retencion.html?v=b11b030` devolvieron HTTP 200 y contienen las frases nuevas.
- No se abrió ningún lote Chack al cerrar: el lote `batch-3-d1298d65` terminó `complete=true`; los fallos P07/P08 están documentados y no cuentan como respuestas Pro válidas.

## Recuperación 2026-08-29 — lote terminal `batch-4-f5310af5`

- Cola reutilizada: `lipedema-diureticos-20260718`; raíz `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718`. `researcher_queue_status` previo: `processing_count=0`; resultado final: `complete=true`, `artifacts_preserved=true`, sin trabajos abiertos.
- **P09** | investigador solicitado `prochatgpt_researcher` | indicaciones por clase, deprescripción, insuficiencia cardiaca/renal/hepática, SGLT2 y seguridad | `terminal extracted` como `research-000-6290f44d`, pero el administrador informó que `prochatgpt_researcher` no estaba expuesto y ejecutó solo `scientific_research`, `websearcher_research` y `cli_research` (4 llamadas) | artefactos preservados en `evidence/chack/recovery-20260829/research-000-6290f44d/` | **no cuenta como respuesta Pro**; se usa el contenido de los investigadores realmente ejecutados | sin error de extracción del lote; fallo de capacidad Pro documentado.
- **P10** | investigador solicitado `prochatgpt_researcher` | pseudo-Bartter, diferencial, cloro/potasio urinario, cribado de diuréticos y lipedema-liposucción | `terminal extracted` como `research-001-162a5277`, pero el administrador informó que `prochatgpt_researcher` no estaba expuesto y ejecutó `scientific_research` y `websearcher_research` (2 llamadas) | artefactos preservados en `evidence/chack/recovery-20260829/research-001-162a5277/` | **no cuenta como respuesta Pro**; se usa el contenido de los investigadores realmente ejecutados | fallo de capacidad Pro documentado.
- Archivos de respuesta y fuentes: `admin_output.json`, `researcher_outputs/*`, manifiestos de artefactos y fuentes abiertas se conservaron separadamente bajo `evidence/chack/recovery-20260829/`; no se sobreescribieron los P01–P08.
- Conclusión de esta ronda: confirma que no hay ensayo lipedema-específico de diuréticos/SGLT2 ni evidencia localizada de pseudo-Bartter causado por lipedema o liposucción. Añade la distinción SGLT2-modificador de enfermedad frente a diurético de edema y la cautela de no interpretar una hipopotasemia aislada como pseudo-Bartter. No modifica la recomendación pública ni justifica dosis o retirada autónoma.

## Verificación final de publicación — 2026-08-29

- Commit web/evidencia: [`88e076e`](https://github.com/carlospolop/puto-lipedema/commit/88e076ecdd961f9728e92ef7fcdaa3dabb6d9832); cierre documental: [`02a0a62`](https://github.com/carlospolop/puto-lipedema/commit/02a0a625e99e840d1b7447d6f61541e29845b36d).
- Search Index: [33245640512](https://github.com/carlospolop/puto-lipedema/actions/runs/33245640512), `success`; GitHub Pages: [33245681170](https://github.com/carlospolop/puto-lipedema/actions/runs/33245681170), `success` (build y deploy).
- Producción verificada con caché: `https://putolipedema.com/efectos/edema-retencion.html?v=02a0a62` y `https://putolipedema.com/anexos/ultimas-incorporaciones.html?v=02a0a62` devolvieron HTTP 200; se encontraron las frases nuevas y no se publicó la entrada de más de 30 días (29 de julio).
