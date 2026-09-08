# Investigación actual: diuréticos, rebote y pseudo-Bartter en lipedema

**Carpeta:** `20260718-100121-diureticos-rebote-pseudobartter-lipedema`  
**Cola Chack:** `lipedema-diureticos-20260718`  
**Estado:** cerrada y verificada el 2026-09-08; evidencia preservada, web publicada y barrera terminal confirmada

## Pregunta central
¿Cuándo están indicados o contraindicados los diuréticos en una persona con lipedema y edema coexistente, qué evidencia existe sobre edema por diuréticos/rebote y pseudo-Bartter, y cómo explicar una revisión o retirada segura sin inducir a suspender tratamientos necesarios?

## Alcance y decisiones que debe permitir
- Separar lipedema puro, insuficiencia venosa/linfática, edema idiopático/ortostático y edema sistémico (cardíaco, renal, hepático u otros).
- Diferenciar clases: asa, tiazidas, antagonistas de aldosterona/ahorradores de potasio, acetazolamida y productos OTC/herbales.
- Aclarar qué significa «pseudo-Bartter», en qué contextos aparece (uso crónico, abuso, trastornos alimentarios), mecanismos RAAS/aldosterona y evolución al reducir/retirar.
- Identificar señales de alarma, analíticas y supervisión clínica; nunca dar una pauta individual de retirada.
- Buscar evidencia directa de lipedema y evidencia indirecta relevante; separar guías, estudios, opinión clínica, anécdotas y marketing.

## Iteración 1 — mapa amplio
- [x] Recuperación tras interrupción: `main` estaba actualizado y la cola sin trabajos activos; se preservó la petición Deep terminal ya completada (respuesta extraída, 26.711 caracteres; dos salidas internas convergentes).
- [x] Recuperación de Pro huérfano: el lote antiguo figuraba `running` en disco pero Chack informó 0 trabajos abiertos/en proceso; se conserva como fallo interrumpido y no cuenta como evidencia.
- [x] Chack: 2 Deep Research extraídos en total: mapa amplio previo y respaldo centrado en retirada/pseudo-Bartter.
- [x] Chack Pro 1 solicitado (fisiología/clases/indicaciones): terminó `timeout` con respuesta parcial de 4.429 caracteres; se preserva pero no cuenta como evidencia Pro completa.
- [x] Chack Pro 2 solicitado (retirada/pseudo-Bartter): no alcanzó terminal extraíble; el administrador compensó con un Deep extraído de 25.683 caracteres. Cola confirmada sin trabajos activos; el Pro no cuenta como evidencia.
- [x] OSINT: comunidades/pacientes, adversos y lenguaje práctico; 900 líneas, fuentes abiertas y ruido comercial separado.
- [x] SerpAPI: Google/Bing/Scholar/Forums/News/YouTube; 20 fuentes principales abiertas, sin ensayo directo de diuréticos en lipedema.
- [x] Científico: PubMed/PMC/Europe PMC/OpenAlex y guías primarias; 796 líneas y 32 referencias.

### Pistas nuevas para profundizar
- Diferenciar rebote fisiológico transitorio de recaída de insuficiencia cardiaca/renal/hepática que seguía necesitando tratamiento.
- Verificar cronología y DOI de estudios históricos (1975/1979/1990/1994/1997) y la revisión sistemática 2024/2025.
- Afinar clases: alcalosis con asa/tiazida frente a acidosis con acetazolamida; hiperpotasemia con ahorradores de potasio.
- No repetir el mecanismo simplista de que el diurético «deja proteínas» como certeza causal; la conclusión clínica en linfedema se apoya mejor en consenso y beneficio marginal.
- Pseudo-Bartter es un patrón adquirido que no prueba abuso; el cloro urinario depende del momento de toma/pérdida.

## Iteración 2 — pistas y contradicciones
- [x] Comparar guías de lipedema con guías de edema periférico, insuficiencia cardiaca/renal/hepática y linfedema: la indicación depende del mecanismo, no de tener o no lipedema.
- [x] Verificar si «los diuréticos siempre empeoran el lipedema» es falso o demasiado absoluto: es demasiado absoluto; la S2k permite indicación internista coexistente (consenso español 94,1%).
- [x] Precisar diferencia entre rebote transitorio, dependencia fisiológica, abuso y pseudo-Bartter clínico: entidades relacionadas pero no equivalentes.
- [x] Investigar monitorización y tiempos sin convertirlo en consejo autónomo: evidencia adyacente apunta a días-semanas y gran heterogeneidad; no existe pauta lipedema-específica.
- [x] Auditoría primaria del coordinador: NCBI/PMC y PDFs oficiales preservados; corregido DOI Lancet 1975 a `10.1016/S0140-6736(75)92833-0`, confirmado que PMID 7894988 sí corresponde a edema idiopático y detectada una discrepancia menor: la traducción española oficial alojada en AWMF imprime 94,1%, mientras el original alemán y el artículo corto imprimen 94,4%.
- [x] Subagente independiente de verificación de fuentes y errores (`source-verification-round2.md`, 35.045 bytes): terminal, sin efectos laterales; resolvió identificadores, cifras y límites, y confirmó que no existe ensayo de diuréticos específico de lipedema.

## Iteración 3 — falsación y traducción práctica
- [x] Pase crítico independiente (`falsation-round3.md`, 12.545 bytes) para buscar contraejemplos, incertidumbre y daño potencial de simplificar.
- [x] Matriz fenotipo × utilidad/riesgo × profesional/pruebas: la indicación y el riesgo cambian según lipedema puro, sobrecarga sistémica, retirada, clase y comorbilidad.
- [x] Revisar calidad comunitaria: “water pills funcionan”, “siempre hay rebote” y “natural es más seguro” son anécdota/desinformación, no evidencia.
- [x] Saturación: solo refinó redacción y seguridad; no apareció un hallazgo clínico material nuevo. Omitir cifras en la página, no decir «causa principal», no generalizar laxantes y no usar «deja proteínas atrás».

## Iteración 4 — recuperación obligatoria 2026-08-01
- [x] `main` y `origin/main` sincronizados; carpeta ya publicada localizada y evidencia previa preservada.
- [x] `researcher_queue_status`: 0 lotes abiertos/procesando; cola estable `lipedema-diureticos-20260718` reabierta una sola vez.
- [x] Pro 3 alcanzó error terminal tras 2 intentos Chack (`BROWSER_EXECUTION_FAILED`, timeout de navegación); no cuenta como evidencia Pro. El administrador completó auditoría regulatoria/científica/web/producto y preservó fuentes primarias.
- [x] Pro 4 alcanzó error terminal tras 2 intentos Chack (`BROWSER_EXECUTION_FAILED`, timeout de navegación); no cuenta como evidencia Pro. El administrador completó diferencial con especialistas científico/web/CLI y preservó fuentes.
- [x] Inspeccionados todos los resultados. Hallazgos nuevos útiles: los antagonistas mineralocorticoides pueden ser tratamiento modificador de insuficiencia cardiaca y no solo “pastillas de agua”; un cribado tardío negativo no excluye exposición; la diarrea habitual suele causar acidosis, no pseudo-Bartter.
- [x] Saturación: la nueva ronda confirmó y afinó seguridad, sin cambiar la conclusión central ni descubrir evidencia directa en lipedema.
- [x] Barrera terminal: cola Chack sin lotes abiertos/procesando. `summary.md`, `MANIFEST.md`, web y novedades completados; commit principal `c5627e3` enviado a `main`. Search Index [31250415221](https://github.com/carlospolop/puto-lipedema/actions/runs/31250415221) y GitHub Pages [31250415227](https://github.com/carlospolop/puto-lipedema/actions/runs/31250415227) terminaron con éxito; producción devolvió HTTP 200 y las frases únicas nuevas.

## Cierre previo (2026-07-19; sujeto a revalidación)
- [x] Preservar cada respuesta Chack/subagente y evidencia primaria; registrar fallos terminales.
- [x] Redactar `summary.md` y `MANIFEST.md` con bytes/SHA-256 (regenerar manifest tras la última edición de control).
- [x] Actualizar `researches/suggestions.md`.
- [x] Integrar contenido español breve y seguro en `efectos/edema-retencion.html`.
- [x] Regenerar índice con `node .github/scripts/build-search-index.js`; `node --check`, 103 entradas, frase única presente, 98 páginas HTML y enlaces internos válidos; se retiró además una referencia interna rota preexistente.
- [x] Barrera terminal confirmada: Chack sin lotes abiertos/procesando y lista de procesos vacía; commit preparado solo con esta investigación y cambios web relacionados.
- [x] Push principal `2272aba` a `main`; Search Index [29670900003](https://github.com/carlospolop/puto-lipedema/actions/runs/29670900003) y GitHub Pages [29670900002](https://github.com/carlospolop/puto-lipedema/actions/runs/29670900002) finalizaron con éxito; página e índice de producción devolvieron HTTP 200 y la frase única nueva.

## Recuperación obligatoria 2026-08-15
- Cola Chack terminal sin trabajos activos. P05 y P06 fueron intentos diferenciados pero terminaron sin salida Pro utilizable; se preservan sus artefactos y no se cuentan como evidencia Pro.
- El sitio ya contenía la actualización segura de diuréticos del commit previo; no se amplía con conclusiones nuevas de solicitudes fallidas.

## Recuperación obligatoria 2026-08-22
- `researcher_queue_status` confirmó `processing_count=0`; se reutilizó la cola estable `lipedema-diureticos-20260718` y se preservó el resultado en `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718`.
- P07 (`prochatgpt_researcher`, indicación/deprescripción y seguridad) terminó `FAILED` por `TimeoutError` tras 90 minutos; no cuenta como evidencia Pro. Se copiaron sus artefactos a `evidence/chack/pro-07-clinical-retry/` sin sobrescribir nada.
- P08 (`prochatgpt_researcher`, pseudo-Bartter/diferencial) terminó con revisión científica/web/CLI extraída, pero Chack informó que `prochatgpt_researcher` no estaba expuesto en el mapa de capacidades; por tanto no se cuenta como respuesta Pro. Se preservó en `evidence/chack/pro-08-pseudobartter-retry/`.
- P08 añadió una comprobación útil: no se encontró cohorte/caso publicado que atribuya pseudo-Bartter a lipedema; una caída de potasio tras liposucción no demuestra alcalosis ni mecanismo RAAS. También reforzó que los cribados urinarios dependen del panel, muestra y momento.
- La web se actualizará solo con estos matices de seguridad, sin dosis ni pautas de retirada. La investigación complementaria OSINT/SerpAPI previa permanece terminal y preservada; no se sustituyen fallos Pro por snippets.

## Recuperación terminal 2026-08-29 — lote `batch-4-f5310af5`
- [x] Se reutilizó la cola estable `lipedema-diureticos-20260718`; `researcher_queue_create` devolvió la misma raíz y `researcher_queue_status` confirmó `processing_count=0` antes del envío.
- [x] Se enviaron dos solicitudes nuevas, materialmente distintas, solicitando explícitamente `prochatgpt_researcher`, con `save_artifacts=true`. El lote terminó `complete=true` y preservó artefactos en `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718`.
- [x] La solicitud clínica (`research-000-6290f44d`) devolvió una auditoría terminal de científico/web/CLI; la solicitud nefrológica (`research-001-162a5277`) devolvió una auditoría terminal científico/web. El administrador indicó que `prochatgpt_researcher` no estaba expuesto en esta ejecución: no hay respuesta Pro válida y no se cuenta como tal. Los fallos de capacidad quedan documentados, sin convertir los respaldos en Pro.
- [x] Hallazgos útiles preservados: no se localizaron ensayos lipedema-específicos de diuréticos/SGLT2 ni casos que demuestren pseudo-Bartter causado por lipedema o por liposucción; los SGLT2 son modificadores de enfermedad y no “pastillas de agua” para lipedema; una caída aislada de potasio no demuestra pseudo-Bartter; la orina depende de panel, momento y muestra.
- [x] Se copió sin sobrescribir la carpeta completa de artefactos a `evidence/chack/recovery-20260829/`; se actualizaron el resumen, el launch log y el MANIFEST. La web, el índice y el commit `88e076e` ya están publicados; no se iniciarán más equivalentes: las nuevas búsquedas fueron saturantes y solo refinan seguridad/redacción.

## Recuperación 2026-09-05 — ejecución actual (en curso)

- [x] `git pull --ff-only origin main`: `Already up to date`; `main` y `origin/main` estaban sincronizados y el árbol limpio.
- [x] Se inspeccionaron `suggestions.md`, los dos nombres históricos de este plan (`current-research.md` y `curent-research.md`), el launch log y la raíz de evidencia; no se relanzó el Deep terminal ni se sobrescribió evidencia previa.
- [x] `researcher_queue_create(queue_id=lipedema-diureticos-20260718)` reutilizó la cola estable; `researcher_queue_status` confirmó primero `processing_count=0`.
- [ ] P11 (Pro solicitado): indicación por clase, SGLT2/MRA, deprescripción y seguridad; P12 (Pro solicitado): pseudo-Bartter, diferencial y límites de orina. El lote `batch-1-fc01f0c4` se lanzó con `save_artifacts=true`; la llamada bloqueante del cliente agotó 420 s, pero el estado de Chack posterior confirmó que seguía procesando dos investigaciones. No se cuenta ningún resultado hasta estado terminal extraíble.
- [x] OSINT round 5 terminó con `exit=0` y dejó un informe de 440 líneas, leído como señales/anécdotas separadas de la evidencia clínica.
- [x] SerpAPI round 5 terminó con `exit=0` y dejó un informe de 263 líneas. Se abrieron fuentes primarias/guías cuando fue posible; los 429 de algunas verticales quedaron registrados y no se usan como evidencia.
- [ ] Después de la barrera terminal: inspeccionar cada resultado, copiar artefactos sin sobrescribir, resolver contradicciones, decidir si hay hallazgo material, actualizar resumen/launch log/MANIFEST y solo entonces revisar web, novedades de más de 30 días, índice, checks, producción y push.

## Recuperación 2026-09-08 — estado encontrado y siguiente intento

- [x] Se cargó primero el workflow; se consultó la base `lipedema` antes de revisar el expediente; `git pull --ff-only origin main` devolvió `Already up to date`.
- [x] Se reutilizó una sola vez en esta sesión la cola `lipedema-diureticos-20260718`; `researcher_queue_status` informó `processing_count=0` antes de continuar.
- [x] Se inspeccionó la evidencia P11/P12 en la raíz Chack. Los cuatro JSON de salida son fallos `Researcher did not return parseable JSON`; no hay respuesta raw acompañante en esas carpetas. Los `chatgpt-run.json` Pro conservan `terminal_state=queued`, `remote_status=QUEUED`, `answer_chars=0`; por tanto no se cuentan como evidencia ni como respuestas Pro válidas. No se sobrescribirá ninguno.
- [ ] Deben intentarse dos investigaciones Pro nuevas y materialmente distintas, además de conservar y auditar los pases OSINT/SerpAPI ya terminados. No se iniciará otra temática.

- [x] Se enviaron P13/P14 en el lote Chack `batch-1-c9f2e409`, solicitud `request-1-c784dba5`, con dos prompts explícitos para `prochatgpt_researcher`, `save_artifacts=true`, `knowledge_mode=read_write` y `knowledge_base=lipedema`. La llamada bloqueante agotó el límite de cliente de 420 s; el estado posterior confirmó el lote activo (`current_research_index=0/2`, `processing_count=1`), por lo que aún no se cuenta ningún resultado.
- [x] Se lanzaron los subagentes locales de solo lectura OSINT y SerpAPI round6 (PIDs 3216996 y 3217012); sus informes y stderr se escriben separadamente en `evidence/subagents/` y siguen sin contarse hasta comprobar proceso terminal y contenido.

## Ronda 7 — estado de ejecución (2026-09-08)

- P15/P16 están en el lote Chack `batch-1-4e554f8f` / solicitud `request-1-5a51e883`, con `processing_count=1`, índice `0/2` y `max_wait_seconds=7200`; los dos prompts Pro, el modo de conocimiento `read_write` y la base `lipedema` quedaron registrados. No se cuenta ninguna respuesta antes del estado terminal y la extracción verificable.
- OSINT round7 tuvo un primer intento fallido por `Broken pipe` bajo `safe-mode`; el retry sin `safe-mode` mantiene `terminal,web,no_mcp` y sigue activo. SerpAPI round7 también sigue activo con el sentinel `no_mcp`. Los outputs están en `evidence/subagents/`; los resultados de helper, 429 y ruido comunitario son solo descubrimiento hasta abrir fuentes.

## Recuperación 2026-09-08 — P13/P14 terminales sin extracción y nuevo lanzamiento

- La comprobación actual de `researcher_queue_status` devuelve `open_batch=null`, `processing_batches=[]` y `processing_count=0`; no quedan trabajos activos en la cola. Los procesos locales no muestran `hermes chat` ni los PIDs históricos. Los dos `chatgpt-run.json` de P13/P14 terminan en `terminal_state=error`, `answer_chars=0` (P13) y `answer_chars=12` (P14), con `ChatGPTWebResearchError: Remote ChatGPT pro job was cancelled by its owning async task`; las salidas estructuradas dicen `Researcher did not return parseable JSON`. Los `researcher_jobs/*.json` conservan estado `running` obsoleto y PIDs ya inexistentes, por lo que se registran como metadatos contradictorios recuperados, no como actividad ni evidencia.
- No se sobrescribe ni elimina evidencia P13/P14. Se relanzarán dos solicitudes Pro nuevas y materialmente distintas: P15 (indicaciones por clase, SGLT2/MRA, deprescripción y seguridad) y P16 (pseudo-Bartter, diferencial ácido-base, orina y posoperatorio). Ambas exigirán `prochatgpt_researcher`, `save_artifacts=true`, `knowledge_mode=read_write` y `knowledge_base=lipedema`.

## Ronda 7 — primer resultado terminal verificado (2026-09-08)

- P16 (`research-001-d9be00f1`) tiene un resultado Pro extraído: `terminal_state=extracted`, `remote_status=SUCCEEDED`, 30.563 caracteres, artefactos en `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718/researches/research-001-d9be00f1/`. Se copió la respuesta, el prompt, los metadatos y el JSON estructurado a `evidence/chack/round7-p16/`; el recibo del administrador clasifica la respuesta como `ingest_candidate` y el prompt/metadatos como `archive_only`.
- La revisión terminal no encontró un caso, cohorte o ensayo que demostrara que el lipedema o su liposucción cause pseudo-Bartter. La evidencia adyacente sí justifica diferenciar pérdidas digestivas, diuréticos, depleción de cloro y tubulopatías cuando hay hipopotasemia/alcalosis; no se interpreta como diagnóstico ni como prueba de abuso.
- Se abrieron y preservaron PubMed 42692034 (LIPLEG, 410 mujeres aleatorizadas; eficacia y eventos adversos quirúrgicos, no una prueba de diuréticos), PubMed/Europe PMC 42377498 (116 mujeres; cambios pequeños de electrolitos dentro de rango en 24 horas, interpretados como hemodilución), y las fichas ARUP/Mayo sobre cribado urinario. La fuente 42377498 queda separada de Hoffmann 39476528 para no mezclar cohortes ni técnicas.
- OSINT round7 dejó un informe terminal útil tras un primer `Broken pipe`; SerpAPI round7 dejó un informe de búsqueda con límites de cuota/HTTP 429. Ambos se conservan como descubrimiento graduado, nunca como evidencia clínica principal. No quedan procesos locales activos.
- El lote Chack sigue en estado `processing_count=1` al último `researcher_queue_status`: P15 Pro/Deep y el Deep de P16 aún no han alcanzado estado terminal. No cerrar ni publicar hasta revisar esos resultados y el recibo de curación final.

## Ronda 7 — segundo resultado terminal verificado (2026-09-08)

- P15 (`research-000-72fa69fa`) tiene un resultado Pro extraído: `terminal_state=extracted`, `remote_status=SUCCEEDED`, 54.166 caracteres, con artefactos en `/tmp/chack-research-data/researcher-queues/lipedema-diureticos-20260718/researches/research-000-72fa69fa/`. Se copió la respuesta, el prompt, los metadatos y el JSON estructurado a `evidence/chack/round7-p15/`; el recibo clasifica la respuesta como `ingest_candidate` y el prompt/metadatos como `archive_only`.
- P15 refuerza la distinción indicación–clase–resultado: AWMF desaconseja tratar el lipedema con diuréticos, pero no elimina indicaciones cardiacas, renales, hepáticas o de hipertensión; SGLT2 y MRA pueden aportar modificación cardiorrenal y no son intercambiables con una “pastilla de agua”. La revisión de deprescripción (25 publicaciones/22 estudios, certeza baja/muy baja) contradice un rebote universal y no produce una pauta individual.
- Se abrieron y contrastaron guías/fichas adicionales descritas por P15 (AWMF, ESC 2026, KDIGO/ISL, AEMPS/CIMA, NHS/EMA y estudios primarios de retirada). Los resultados indirectos —FIND-CKD, CLICK, TRANSFORM-HF, ADVOR y EMPEROR— se mantienen etiquetados por su enfermedad original y no se extrapolan como tratamiento del lipedema.
- Los dos Pro materialmente distintos ya alcanzaron terminalidad extraída; faltan los dos trabajos Deep auxiliares del lote para cerrar la auditoría. El último `researcher_queue_status` aún muestra `processing_count=1`; no se declarará final ni se hará push hasta obtener estado terminal de todos los trabajos lanzados o documentar su error terminal y revisar sus artefactos.

## Ronda 7 — cierre de la recuperación terminal (2026-09-08)

- La comprobación final de `researcher_queue_status` devolvió `open_batch=null`, `open_batches=[]`, `processing_batches=[]` y `processing_count=0`. No quedan llamadas de cola ni trabajadores locales activos.
- P15 (`research-000-72fa69fa`) y P16 (`research-001-d9be00f1`) son las dos investigaciones Pro materialmente distintas requeridas: ambas terminaron con `terminal_state=extracted`, `remote_status=SUCCEEDED` y respuestas completas (54.166 y 30.563 caracteres). Sus respuestas y recibos de curación están preservados en `evidence/chack/round7-p15/` y `round7-p16/`; cada respuesta es `ingest_candidate`, mientras prompts/metadatos/duplicados son `archive_only`.
- Los dos Deep auxiliares del mismo lote alcanzaron estado terminal de error: P15 Deep quedó cancelado por su tarea asíncrona propietaria tras dejar solo 497 caracteres no parseables; P16 Deep terminó `CANCELLED` tras un parcial de interfaz de 504 caracteres. Se copiaron sus metadatos, solicitudes y parciales a `evidence/chack/round7-deep-terminal-errors/` y se clasificaron `archive_only`; no se cuentan como evidencia.
- El requisito Deep del programa ya estaba cubierto por D01 y D02, dos investigaciones Deep extraídas y preservadas en rondas anteriores (`evidence/chack/deep-01-*` y `evidence/chack/pro-02-fallback/deepchatgpt_researcher/`). Los errores de los Deep auxiliares no se presentan como hallazgos.
- La nueva evidencia Pro converge con las fuentes abiertas: la guía AWMF desaconseja diuréticos para tratar lipedema, pero no elimina indicaciones por otra enfermedad; la retirada no causa rebote universal; y no se verificó que lipedema o liposucción causen pseudo-Bartter. Las cohortes perioperatorias de 72 y 116 mujeres se mantienen separadas por técnica, población y resultados.
- OSINT y SerpAPI de la ronda terminaron; el primer OSINT tuvo `Broken pipe` y su reintento fue terminal, mientras parte de SerpAPI devolvió HTTP 429. Son limitaciones documentadas y descubrimiento graduado, no evidencia negativa. No se lanza otra ronda: el ledger ya contrasta las pistas materiales con AWMF, PubMed/PMC, ARUP y fuentes regulatorias, y nuevas búsquedas no cambiarían la conclusión práctica.
- **Decisión de administración:** `ingest_candidate` solo para respuestas Pro completas y fuentes primarias abiertas no duplicadas; estados, fallos, snippets, ruido social, stderr y fetches de desafío son `archive_only`/`discard` según el ledger. El cierre se puede publicar una vez regenerado y verificado el índice.

## Verificación de artefacto y sitio — 2026-09-08

- [x] Se añadió `evidence/direct-verification-round7.md` con las aperturas directas y limitaciones del extractor; no se incorporó como prueba la ficha PubMed 42692034 sin contenido útil.
- [x] `MANIFEST.md` se regeneró; una comprobación independiente confirmó rutas únicas, tamaños y todos los SHA-256 correctos.
- [x] `node .github/scripts/build-search-index.js` escribió 99 páginas; `node --check search-index.js` pasó; el índice tiene cero URLs `researches/`, contiene la frase nueva y el comprobador de enlaces encontró 0 roturas en 1.413 enlaces internos.
- [x] La página de novedades mantiene solo las entradas del 8 de septiembre, 29 de agosto y 22 de agosto de 2026; con corte 2026-08-09 no quedan entradas de más de 30 días. Se eliminaron del expediente las URLs privadas de trabajadores y se conservaron los artefactos remotos en la raíz local de Chack.

## Publicación verificada — 2026-09-08

- [x] El commit `23f095ea4fb984040a6b7fb2a8613274b22c97fc` está en `origin/main`; Search index terminó correctamente en `https://github.com/carlospolop/puto-lipedema/actions/runs/34177024959` y Deploy GitHub Pages en `https://github.com/carlospolop/puto-lipedema/actions/runs/34177024955`.
- [x] Producción devolvió HTTP 200 para la página de edema, la página de novedades y `search-index.js` con cache-buster `?v=23f095e`; la actualización del 8 de septiembre y la frase nueva estuvieron presentes y no se filtraron rutas `researches/`.
