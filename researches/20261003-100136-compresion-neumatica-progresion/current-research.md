# Investigación cerrada: compresión neumática y progresión a lipolinfedema

Inicio: 2026-10-03 08:01 UTC; reanudación y cierre: 2026-10-17. Estado: revisión completada y contenido público corregido; la prevención sigue sin prueba directa.

## Pregunta y límites
En mujeres adultas con lipedema sin linfedema secundario basal confirmado, ¿añadir compresión neumática intermitente/avanzada a cuidados conservadores evita la aparición posterior de lipolinfedema, comparado con cuidados sin dispositivo? Distinguir este resultado incidente de reducción de dolor, volumen, fluido o medidas linfáticas a 1–12 semanas; analizar por separado pacientes con lipolinfedema ya establecido. Horizonte bibliográfico hasta 2026-10-03. Excluir marketing de fabricantes como prueba, edema transitorio como progresión, cirugía perioperatoria y reducción ecográfica de grosor como prueba de pérdida adiposa. Cambiaría la conclusión un estudio prospectivo comparativo con diagnóstico basal y nuevos casos adjudicados a ≥12 meses, seguridad, adherencia, pérdidas y control de confusión.

## Antes de fuentes externas
Qdrant `lipedema`: status 404 fuentes/8403 fragmentos. Dos búsquedas: general de sugerencias y focal de compresión. Existe investigación física previa 2026-06-29 y página `manejo/compresion-neumatica.html`; RCT 2023 PMID 36519532 estudia personas con lipolinfedema secundario preexistente, y estudio 2025 PMID 40430153 / PMC12113227 exige lectura crítica de su frase sobre riesgo. El consenso estadounidense PMC8652358 recomienda uso sintomático. Abrir las fuentes originales y revisar si hay prevención real.

## Plan iterativo
1. Chack dos prompts complementarios: eficacia e incidencia / falsación y sesgos; administrador y cuatro investigadores exigidos, política `read_write`/`lipedema`, nominaciones de archivos.
2. Comprobar métodos/resultados/financiación/registro de artículos, guías y nuevas cohortes; búsqueda focal de fuente no resuelta si Chack insuficiente.
3. Ledger de URLs abiertas, síntesis en español, decisión de sitio y verificación de recuperación Qdrant, índice, CI/deploy.

## Resultado provisional y bloqueo
Dos administradores terminales, ambos fallidos por Deep Research no disponible en `/deep-research` (3+2 intentos `BROWSER_EXECUTION_FAILED`). Pro, científico y web del primer administrador sí devolvieron contenido; no cumplen la condición de éxito conjunta. Ninguna ingesta autorizada (`knowledge_update.indexed=[]`; motivo: puertas de éxito no satisfechas); búsqueda de recuperación focal no acredita hallazgo nuevo. Cola sin lotes abiertos/procesándose al cierre. `web_extract` no extrae con el backend Brave search-only; fuente primaria sí abierta mediante texto completo Europe PMC 200 de ambos ensayos y API de ClinicalTrials.gov 200. No lanzar auxiliar de OSINT/SerpAPI cuando el problema es una ruta Deep caída y la pregunta clínica queda resuelta por primarios; no sustituir el investigador obligatorio con otro tipo de fuente.

La conclusión provisional de los primarios abiertos: el ensayo de 2025 n=46 duró 30 días de intervención tras lavado, midió L-Dex/fluido y síntomas, no incidencia adjudicada de lipolinfedema ni prevención a 12 meses. El ensayo de 2023 incluyó linfedema secundario ya existente. El registro de 2025 se registró públicamente después de finalizar el estudio, sin resultado de incidencia a largo plazo. Hay señal sintomática/volumétrica de corto plazo, no prueba de prevención.

## Reanudación 2026-10-17
Catálogo ahora operativo: 426 fuentes/10516 fragmentos y búsquedas focales antes de volver a fuentes externas. Pregunta y desenlace siguen siendo prevención de **nuevos casos clínicos** en lipedema sin linfedema inicial frente a alivio de dolor/agua a 30 días; horizonte actualizado 2026-10-17. Nuevo lote Chack con dos perspectivas complementarias y administrador exigido; no publicar si no pasan todas las puertas. La fuente de consenso mundial 2026 contiene una afirmación sobre progresión basada en opinión; contrastar con seguimiento longitudinal e incidencia real, y distinguir financiación de fabricante. La selección de este tema se debe a fallo técnico anterior, no a una nueva afirmación de beneficio.

## Cierre de la reanudación
Nuevo administrador `research-000-e08adff2` completó 1 Deep, 2 Pro, 1 científico y 1 web; los tres indicadores de éxito positivos. Fuentes primarias reabiertas HTTP 200 y Qdrant recuperó síntesis recientemente ingerida. No se halló ensayo de incidencia adjudicada a ≥12 meses; el beneficio posible es sintomático/de líquido a corto plazo y heterogéneo. Recibo y auditoría compactos en `MANIFEST.md`, fuentes en `source-ledger.md`. Decisión editorial: corregir sobreinterpretación del dolor en 2023 y precisar prevención y riesgos en página de compresión, sin anunciar reversión de enfermedad.

## Control de alcance
Cambios preexistentes ajenos en `researches/suggestions.md` y carpetas no rastreadas `researches/20260926-100259-sii-sibo-fodmap-lipedema/` y `researches/20261010-080127-corrientes-bioelectricas-lipedema/`: conservarlos y no incluir carpetas ajenas en commit. El bloqueo descrito más arriba es histórico del 3 de octubre, no el estado de esta revisión.
