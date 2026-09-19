# Investigación en curso: medir fibrosis y rigidez en lipedema

**Inicio:** 2026-09-19 10:02 CEST
**Estado:** plan creado; investigación externa pendiente.
**Política de conocimiento:** `knowledge_mode=read_write`, `knowledge_base=lipedema`.

## Pregunta estrecha
¿Qué medidas permiten seguir de forma prudente la **rigidez/fibrosis** en personas adultas con lipedema, en casa y en consulta, y cuáles tienen fiabilidad, capacidad de discriminar diagnósticos o sensibilidad al cambio? Se separarán tejido adiposo/fibrosis, líquido/edema, dolor a la presión y volumen; no se tratará una medida aislada como diagnóstico.

## Población y contexto
Mujeres adultas con lipedema diagnosticado o sospechado; cuando existan, comparaciones con obesidad, linfedema, insuficiencia venosa y controles sanos. Prioridad a estudios humanos 2018–19 septiembre 2026, con atención especial a 2025–2026 y a métodos reproducibles en España/Europa.

## Desenlaces a extraer
- Reproducibilidad intra/interobservador y protocolo de sitio, presión y postura.
- Validez frente a exploración clínica independiente, imagen o histología; capacidad de discriminar lipedema de obesidad/linfedema.
- Sensibilidad al cambio y diferencia mínimamente importante, si se han establecido.
- Utilidad práctica de palpación estandarizada, dolor a presión/algometría, perímetros/fotos, ecografía B, elastografía, durometría, bioimpedancia y otras técnicas.
- Coste, disponibilidad, entrenamiento, sesgos, contraindicaciones y cuándo una prueba no aporta valor.

## Exclusiones
No se hará una nueva revisión general de ondas de choque, TECAR, compresión o suplementos; no se aceptarán claims de aparatología estética, estudios animales/mecanicistas como prueba clínica, umbrales inventados, fotografías sin protocolo o mediciones caseras como diagnóstico.

## Qué cambiaría la conclusión
Una cohorte prospectiva independiente con protocolo explícito, estándar clínico independiente, umbral o cambio clínicamente interpretable y validación externa podría elevar la recomendación. Si sigue sin existir, la salida será una guía de seguimiento prudente y explícitamente no diagnóstica.

## Brechas conocidas antes de investigar
La revisión local de terapias físicas ya encontró que elastografía/durometría sirven para fenotipado/seguimiento, no como diagnóstico autónomo. Un estudio español recuperado en Qdrant dice que ecotextura y rigidez elastográfica no diferencian lipedema de obesidad. Un estudio prospectivo de ondas de choque de 2026 no cambió elastografía, grosor ni bioimpedancia pese a mejoras funcionales. El registro NCT07489248 plantea ecografía multimodal para diferenciar linfedema/lipedema, pero su utilidad clínica todavía debe comprobarse. El trabajo nuevo se centra en cómo medir y comunicar la incertidumbre, especialmente fuera de la consulta.

## Plan de trabajo
1. Completar la ronda Chack requerida (dos prompts complementarios, un administrador/cola reutilizada, Deep + dos Pro y científicos/websearcher; todos deben consultar Qdrant primero y clasificar artefactos). Cola creada: `lipedema-medicion-fibrosis-rigidez-20260919`; la primera submission y el reintento focalizado terminaron antes de investigadores por `401 invalid_refresh_token/token_expired`, sin evidencia ni ingestion; no quedan batches activos.
2. Abrir fuentes primarias y guías oficiales citadas; verificar población, protocolo, resultados y fechas. **Completado en el ledger y `summary.md`.**
3. Hacer una pasada limitada SerpAPI/OSINT de métodos prácticos y experiencias adversas; no usarla como prueba de eficacia. **Completado: SerpAPI una llamada exitosa + posterior 429; ForumScout ruido; workers terminales sin informe.**
4. Comparar contradicciones y redactar un protocolo de seguimiento seguro, con grados de evidencia y preguntas para profesionales. **Completado en `summary.md` y ledger; no hay protocolo diagnóstico doméstico.**
5. Actualizar sitio solo si el hallazgo añade una distinción práctica no cubierta; regenerar índice, ejecutar checks, revisar diff y publicar en `main` únicamente tras verificar. **Completado: página, sugerencias e índice actualizados; checks locales pasan; commit `005cd70` en `origin/main`, Search index/Pages `success`, producción HTTP 200 verificada.**
