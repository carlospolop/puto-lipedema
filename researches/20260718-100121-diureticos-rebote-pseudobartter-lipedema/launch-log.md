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
