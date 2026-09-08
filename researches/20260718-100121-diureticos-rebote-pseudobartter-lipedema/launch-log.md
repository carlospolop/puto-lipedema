# Launch log — diuréticos, rebote y pseudo-Bartter

- Queue ID: `lipedema-diureticos-20260718`
- Queue evidence root: `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718`
- Created: 2026-07-18 10:01 CEST

| ID | Iteración | Investigador | Prompt/objetivo | Estado terminal | Evidence path / conversación | Artefacto local | Error |
|---|---:|---|---|---|---|---|---|
| D01 | 1 | `deepchatgpt_researcher` | Mapa amplio: indicaciones por fenotipo/clase, rebote, pseudo-Bartter, España, guías, ciencia y comunidad | `extracted` (2026-07-18; 26.711 caracteres; 2 salidas internas) | `research-000-0ed8b57b`; [URL privada omitida]; `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718/...` | `evidence/chack/deep-01-response.md`, request/run/admin y 2 JSON internos | — |
| P01 | 1 | `prochatgpt_researcher` | Auditoría de clases, indicaciones por fenotipo, AEMPS/EMA y falsación de absolutos | `timeout` (4.429 caracteres parciales; no cuenta como Pro completo) | `research-000-c9d8a3da`; [URL privada omitida] | `evidence/chack/pro-01-timeout/` | No alcanzó estado terminal extraíble en 4.800 s; faltaron etiquetas/clases completas |
| P02 | 1 | `prochatgpt_researcher` | Retirada, rebote, pseudo-Bartter, trastornos alimentarios y seguridad | `interrupted/no active batch`; Pro no extraído | `research-000-1a18f18e`; [URL privada omitida] | `evidence/chack/pro-02-fallback/` | Pro quedó sin respuesta; `queue_status` confirmó 0 trabajos activos |
| D02 | 1 | `deepchatgpt_researcher` (compensación administrativa de P02) | Síntesis de retirada/rebote/pseudo-Bartter | `extracted` (25.683 caracteres) | `research-000-1a18f18e`; [URL privada omitida] | `evidence/chack/pro-02-fallback/deepchatgpt_researcher/` | — |
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

## Recuperación 2026-09-05 — lote en curso

- Preparación: `git pull --ff-only origin main` devolvió `Already up to date`; no había cambios locales antes de añadir los prompts de esta ronda. La cola estable `lipedema-diureticos-20260718` se reutilizó mediante `researcher_queue_create`; el estado previo fue `processing_count=0`.
- **P11** | investigador solicitado `prochatgpt_researcher` | indicación por clase, SGLT2/MRA, deprescripción, indicaciones coexistentes y seguridad | `processing` en lote `batch-1-fc01f0c4` (solicitud agrupada `request-1-45da2fb0`; `save_artifacts=true`) | raíz `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718/requests/request-1-45da2fb0` | pendiente; no cuenta como evidencia hasta terminal extraíble | la llamada MCP del cliente agotó 420 s; `researcher_queue_status` posterior confirmó que el administrador seguía lanzando 2 investigaciones; no es resultado clínico.
- **P12** | investigador solicitado `prochatgpt_researcher` | pseudo-Bartter, diferencial de alcalosis/hipopotasemia, cloro/potasio urinario y límites de cribado | `processing` en el mismo lote/solicitud agrupada | misma raíz de evidencia Chack, con separación por investigación cuando termine | pendiente; no cuenta como evidencia hasta terminal extraíble | misma advertencia: el timeout del transporte no equivale a fallo terminal ni a evidencia.
- **O02** | subagente local bloqueante OSINT | comunidades ES/EN, adversos, retirada, productos y contraejemplos; `prompts/osint-round5.txt` | `terminal; exit=0` | proceso `hermes chat` finalizado; informe de 440 líneas | `evidence/subagents/osint-round5.md` y `.stderr` | solo lectura; halló señales comunitarias contradictorias y ningún caso verificable de pseudo-Bartter causado por lipedema; no cuenta anécdotas como prueba.
|| S02 | 5 | Subagente local bloqueante SerpAPI | Google/Bing/News/Forums/Scholar/Patents/YouTube, apertura de fuentes y contradicciones; `prompts/serpapi-round5.txt` | `terminal; exit=0` | proceso `hermes chat` finalizado; informe de 263 líneas | `evidence/subagents/serpapi-round5.md` y `.stderr` | SerpAPI directo quedó limitado en varias verticales (HTTP 429); el informe conserva resultados abiertos por alternativas y no usa errores como evidencia |

## Auditoría directa y estado intermedio — 2026-09-05

- Se preservó `evidence/source-ledger-round5.md` y `evidence/live-round5/primary/` con fetches HTTP 200 de AWMF alemán, ficha AWMF, PMC8652358, PMC11671325, PMC2542786, PMC10947768, EFetch PubMed y AAFP. La traducción española AWMF falló con HTTP 500 en esta ronda; no se sustituyó por un snippet.
- El descubrimiento Brave y OpenAlex fue exitoso; ForumScout no halló relatos útiles en consultas estrechas. SerpAPI Bing/News/YouTube devolvió HTTP 429; los errores se conservan y no son evidencia.
- La cohorte directa lipedema 2026 (PMID 42377498; resumen/editor abierto) informa cambios electrolíticos pequeños en 116 mujeres, mientras que la cohorte 2024 (PMID 39476528) señaló mayor caída de potasio en WAL. Son cohortes retrospectivas distintas; ninguna demuestra pseudo-Bartter ni autoriza pautas posoperatorias.
- Estado Chack comprobado repetidamente: `batch-1-fc01f0c4`, `processing_count=1`, `current_research_index=0`; P11/P12 y sus artefactos permanecen no terminales. Procesos de subagentes locales OSINT (PID 2005710/2005726) y SerpAPI (PID 2005723/2005738) siguen activos; no se cuenta su salida hasta terminar y leerla.

## Recuperación 2026-09-08 — auditoría P11/P12 y nuevo lanzamiento pendiente

- Preparación: `git pull --ff-only origin main` devolvió `Already up to date`; la hora de control fue `2026-09-08 00:42 CEST`.
- Se consultó `researcher_queue_status` antes y después de la recuperación: `open_batch=null`, `processing_batches=[]`, `processing_count=0`. La cola estable se reutilizó con `researcher_queue_create(queue_id=lipedema-diureticos-20260718)` y devolvió la raíz `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718`.
- P11/P12 se recuperaron sin sobreescritura. Sus cuatro salidas estructuradas (`researcher_outputs/async_task-*`) indican `research_worked=false` y `Researcher did not return parseable JSON`; las dos ejecuciones Pro mantienen `terminal_state=queued`, `remote_status=QUEUED`, `answer_chars=0` y no tienen raw answer local. Se clasifican como no extraídas/no utilizables, no como evidencia ni como respuestas Pro terminales. La ausencia de lote activo no convierte esos metadatos en resultado.
- La evidencia local OSINT/SerpAPI round5 estaba ya en `exit=0` y se conservará; sus conclusiones se tratarán como señales y descubrimiento hasta verificar fuentes subyacentes.
- Estado: pendiente de lanzar dos solicitudes Pro nuevas, materialmente distintas, con `save_artifacts=true`, `knowledge_mode=read_write` y `knowledge_base=lipedema`; no se seleccionará otra temática.

## Ronda de recuperación 2026-09-08 — P13/P14 y OSINT/SerpAPI round6

- P13 (indicaciones por clase, descongestión frente a modificación pronóstica y deprescripción) y P14 (pseudo-Bartter/alcalosis adquirida, diferencial y límites de pruebas urinarias) se enviaron juntos como dos prompts materialmente distintos al mismo `queue_id=lipedema-diureticos-20260718`.
- El lote Chack es `batch-1-c9f2e409`, la solicitud es `request-1-c784dba5` y la raíz de artefactos es `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718`. Parámetros explícitos: `save_artifacts=true`, `knowledge_mode=read_write`, `knowledge_base=lipedema`. La llamada esperó 420 s y devolvió timeout del cliente; un `researcher_queue_status` inmediato confirmó que el lote seguía vivo con `current_research_index=0`, `current_research_count=2`, `processing_count=1`, `max_wait_seconds=7200`. Ningún resultado se cuenta hasta estado terminal y extracción comprobada.
- Durante el lote aparecieron carpetas de artefactos en bruto para ambos investigadores administradores (P13 `research-000-eb300851` y P14 `research-001-d1a9bd74`) y ejecuciones remotas Pro/Deep aún sin respuesta estructurada. Se preservarán; su existencia o los metadatos no son evidencia.
- Se inició OSINT round6 en PID `3216996` y SerpAPI round6 en PID `3217012` con `hermes chat --query-file`, `--toolsets terminal,web`, modo de solo lectura; stdout/stderr separados. El smoke test local del helper resolvió `/home/tester/.hermes/profiles/lipedema/skills/research/chack-osint/scripts/chack_research.py`; Brave devolvió HTTP 429, Europe PMC devolvió resultados de descubrimiento, y SerpAPI Scholar devolvió HTTP 429. Los errores quedan registrados y no se interpretan como hallazgos.
- `web_extract` abrió las fichas oficiales españolas CIMA de furosemida (revisión febrero 2024), hidroclorotiazida (septiembre 2023), espironolactona (abril 2025), acetazolamida (agosto 2024) y la nota AEMPS sobre cetoacidosis con SGLT2 (12-02-2016). Estas aperturas son fuentes primarias/oficiales de seguridad e indicaciones, no evidencia de eficacia en lipedema.

- Tras el deadline, Chack marcó como terminales por `deadline_exceeded` los ocho subtrabajos iniciales de P13/P14 (Pro, Deep, científico y web); las salidas estructuradas quedaron explícitamente con `research_worked=false`. El administrador inició reintentos remotos Pro: P13 `research-job-1788823270978-3df71b7d` / job remoto `job_e62ec83f-9168-4995-9d6d-edaaf035ffd7` y P14 `research-job-1788823267623-a1222039` / job remoto `job_e45057f9-c16d-43c5-859c-80e8e35273f0`; a la última lectura ambos estaban `running` localmente pero `terminal_state=queued`, `answer_chars=0`. Se espera su estado terminal; no son evidencia.

## Recuperación 2026-09-08 — auditoría P13/P14

- `researcher_queue_status` actual: `open_batch=null`, `processing_batches=[]`, `processing_count=0`; `ps` tampoco muestra trabajadores `hermes chat`/Chack activos. Los `chatgpt-run.json` de P13 y P14 son terminales con `terminal_state=error`, respectivamente `answer_chars=0` y `12`, y ambos explican que el job remoto Pro fue cancelado por su tarea asíncrona propietaria. Las cuatro salidas estructuradas de P13/P14 indican `research_worked=false` y `Researcher did not return parseable JSON`; no se usan como evidencia. Los `researcher_jobs/*.json` que aún dicen `running` son metadatos obsoletos (PIDs inexistentes), no actividad viva.
- Se conserva sin sobrescribir la raíz `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718` y toda la evidencia local previa. No se relanza el Deep terminal equivalente. Se preparan dos Pro nuevos, materialmente distintos: P15 (clases, indicaciones, SGLT2/MRA, deprescripción y seguridad) y P16 (pseudo-Bartter, diferencial ácido-base, pruebas urinarias y posoperatorio).

## Ronda 7 — 2026-09-08 — P15/P16 y subagentes complementarios

- P15 (clases e indicaciones, descongestión frente a modificación pronóstica, SGLT2/MRA, deprescripción y seguridad) y P16 (pseudo-Bartter, diferencial ácido-base, orina, pruebas y posoperatorio) se enviaron como dos prompts Pro materialmente distintos al mismo `queue_id=lipedema-diureticos-20260718`. Parámetros: `save_artifacts=true`, `knowledge_mode=read_write`, `knowledge_base=lipedema`; ambos prompts y el plan están preservados en `prompts/pro-15-round7.txt` y `prompts/pro-16-round7.txt`.
- El lote Chack es `batch-1-4e554f8f`, solicitud `request-1-5a51e883`, raíz `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718/requests/request-1-5a51e883`. La llamada bloqueante alcanzó el timeout de cliente de 420 s; `researcher_queue_status` sigue informando `processing_count=1`, `current_research_index=0`, `current_research_count=2`, `max_wait_seconds=7200`. P16 Pro terminó después con `terminal_state=extracted`, `remote_status=SUCCEEDED`, 30.563 caracteres; no se cuentan P15 ni los Deep hasta su estado terminal.
- P16 Pro fue inspeccionado completo: el administrador nominó `chatgpt-pro-response.md` como `ingest_candidate`, y `chatgpt-request.md`/`chatgpt-run.json` como `archive_only`; el recibo está en `evidence/chack/round7-p16/curation-receipt.md`. La respuesta se copió a `evidence/chack/round7-p16/` sin URLs privadas. La comprobación de los `chatgpt-run.json` muestra P15 Pro y P15/P16 Deep todavía `running`/no extraídos al último control.
- Se abrieron las fuentes directas PubMed 42692034 (LIPLEG), Europe PMC 42377498/Witulski y DOI/Springer de la cohorte perioperatoria, además de fichas ARUP/Mayo de cribado urinario. Se conservaron en `evidence/live-round7/`; los resultados se separan de Hoffmann PMID 39476528 para no mezclar cohortes.
- OSINT round7 se intentó primero con `--toolsets terminal,web,no_mcp --safe-mode`; terminó `exit=1` con `API call failed after 3 retries: [Errno 32] Broken pipe`, stdout de 90 bytes y stderr separado. El retry mantuvo el sentinel obligatorio `no_mcp` y terminó con informe de 31.145 bytes, copiado como `evidence/subagents/osint-round7-report.md`; la advertencia `Unknown toolsets: no_mcp` quedó preservada y no se interpreta como evidencia. SerpAPI round7 terminó con informe de 24.895 bytes; parte de la cobertura devolvió HTTP 429 y se trata como limitación, no como ausencia.
- Smoke tests del helper: la ruta del skill resolvió correctamente; Brave y SerpAPI Scholar devolvieron HTTP 429 por cuota, Europe PMC devolvió resultados de descubrimiento (top 10) y ForumScout Reddit devolvió ruido/no relacionado. `process list` no muestra procesos locales activos. Estos resultados y errores se conservarán; solo las páginas abiertas se podrán usar como evidencia.

## Ronda 7 — cierre final y reconciliación de estados (2026-09-08)

- Se reutilizó una sola vez `queue_id=lipedema-diureticos-20260718`; `researcher_queue_create` devolvió la ruta de evidencia existente y no se sobrescribió ningún resultado terminal.
- P15 y P16 Pro terminaron extraídos y fueron revisados: `SUCCEEDED`, 54.166 y 30.563 caracteres. Son los dos Pro materialmente distintos que faltaban en la recuperación; sus recibos clasifican las respuestas como `ingest_candidate` y el resto como `archive_only`.
- Los Deep auxiliares P15/P16 también llegaron a un estado terminal, pero con error/cancelación y salidas no parseables. Metadatos, solicitudes y parciales se copiaron a `evidence/chack/round7-deep-terminal-errors/` y se clasificaron `archive_only`. D01 y D02 siguen siendo los dos Deep extraídos válidos preservados de rondas anteriores.
- La comprobación final de cola fue `open_batch=null`, `processing_count=0`; no quedan trabajos de Chack abiertos. El OSINT de reintento terminó después de un `Broken pipe`; SerpAPI terminó con cobertura parcial y HTTP 429. Ningún fallo se convirtió en ausencia de evidencia.
- Se reabrieron fuentes centrales: AWMF S2k, US Standard of Care, revisiones/estudios de retirada, Do et al. sobre alcalosis, Hoffmann 2024 (72 pacientes), Witulski 2026 (116 mujeres), ARUP y las fichas regulatorias preservadas. La fuente PubMed 42692034 no entregó contenido útil en el extractor y no se usa para sostener una afirmación central.

## Verificación de cierre — 2026-09-08

- `researcher_queue_status` final: `open_batch=null`, `open_batches=[]`, `processing_batches=[]`, `processing_count=0`; no quedaron procesos locales `hermes chat` activos.
- `MANIFEST.md` fue regenerado; la verificación independiente confirmó todos los SHA-256, tamaños y rutas únicas.
- `node .github/scripts/build-search-index.js` → 99 páginas; `node --check search-index.js` pasó; 0 URLs `researches/` en el índice, frase nueva presente y 0 enlaces internos rotos de 1.413 comprobados.
- Producción queda pendiente de la verificación posterior al push; no se afirmará desplegada hasta leer los workflows y las URLs con caché nueva.
