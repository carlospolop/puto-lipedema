# Investigación actual: diuréticos, rebote y pseudo-Bartter en lipedema

**Carpeta:** `20260718-100121-diureticos-rebote-pseudobartter-lipedema`  
**Cola Chack:** `lipedema-diureticos-20260718`  
**Estado:** cerrada y verificada el 2026-08-22; evidencia preservada, web publicada y barrera terminal confirmada

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
