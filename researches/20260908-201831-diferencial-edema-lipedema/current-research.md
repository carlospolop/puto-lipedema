# Investigación en curso: diferenciar tipos de edema en el contexto de lipedema

**Carpeta:** `20260908-201831-diferencial-edema-lipedema`
**Inicio:** 2026-09-08 (UTC; ejecución programada)
**Estado:** investigación, curación y síntesis completadas; verificación local pasada; lista para commit/push y verificación de producción.

## Pregunta estrecha
En adultas con lipedema confirmado o sospechado, ¿qué hallazgos y pruebas ayudan a distinguir (a) tejido lipedematoso y cambios de dolor/pesadez sin edema objetivo, (b) edema venoso, (c) afectación linfática/lipolinfedema, (d) edema idiopático/ortostático/cíclico, (e) sobrecarga sistémica y (f) edema inducido por fármacos? ¿Qué puede medirse en casa de forma segura, qué debe valorar un profesional y qué signos requieren atención urgente?

## Límites
- **Población:** principalmente adultas no embarazadas en ámbito ambulatorio; se señalarán límites para embarazo, infancia y enfermedad aguda.
- **Resultados:** signos clínicos, evolución temporal, mediciones objetivas, pruebas complementarias, derivación y señales de alarma.
- **No se estudiará como objetivo principal:** eficacia de tratamientos, retirada de medicamentos, ni recomendaciones individuales de diuréticos/compresión.
- **Fuente jerárquica:** guías y consensos; estudios comparativos/validación; revisiones sistemáticas; cohortes y series; fuentes oficiales; después opinión clínica y experiencias comunitarias solo para lenguaje/señales prácticas.
- **Corte temporal:** preferencia 2015–2026, recuperando fuentes seminales anteriores cuando definan una prueba o criterio que siga usándose.

## Qué cambiaría la conclusión
Cambiaría la síntesis si aparecieran: cohortes lipedema-específicas que validen umbrales de fóvea, perímetro, bioimpedancia, ecografía, dúplex, linfografía/ICG/NIRFLI o laboratorio; ensayos que demuestren que una prueba distingue de forma fiable los fenotipos; o guías oficiales españolas/europeas con un algoritmo más preciso que el actualmente disponible.

## Gaps previstos y no asumidos
- No se asumirá que el lipedema sea sinónimo de edema ni que la ausencia de fóvea descarte toda afectación linfática.
- No se asumirán como diagnósticos los signos de población general ni los algoritmos CART publicados en la web.
- Se comprobará la diferencia entre volumen de grasa, líquido intersticial, congestión sistémica y variación diaria.
- Se buscarán datos directos sobre NIRFLI/ICG, linfoscintigrafía, ecografía, dúplex y bioimpedancia; si son extrapolados se etiquetarán así.

## Consultas iniciales en la base `lipedema`
Antes de revisar el repositorio se consultó el estado y se hicieron búsquedas centradas en: `edema venoso linfático sistémico lipedema diagnóstico diferencial pruebas`, `lipedema fóvea Stemmer NIRFLI dúplex bioimpedancia`, y `edema cíclico diuréticos medicamentos lipedema`.

La base informó **357 fuentes y 7.103 fragmentos**. Los pasajes recuperados indican que ya existen páginas del sitio sobre algoritmos/CART, edema cíclico, diuréticos y edema inducido por fármacos; también advierten que la evidencia lipedema-específica es escasa y que los signos/pruebas no deben presentarse como una prueba definitiva. Esos pasajes fueron leads, no evidencia final: se reabrieron fuentes primarias y guías. Tras la ingestión, una búsqueda focalizada recuperó el nuevo hallazgo de que no hay umbral instrumental universal y que los signos son probabilísticos.

## Evidencia y artefactos

- **Cola:** `lipedema-edema-differential-20260908-201831`; batch `batch-1-7c59a6fd`; request `request-1-2014997f`; administrador `research-000-825d1cc5` terminal.
- **Ruta de evidencia externa:** `/tmp/chack-research-data/researcher-queues/lipedema-edema-differential-20260908-201831` (inspeccionada; no copiada).
- **Cierre Chack:** 1 Deep, 2 Pro, 1 scientific y 1 websearcher; todos terminales, `research_worked=true`, `required_researchers_satisfied=true`, cero fallos y `processing_count=0`.
- `launch-log.md`: consultas, trabajos, estados, fallos y decisiones de curación.
- `MANIFEST.md`: inventario compacto de artefactos conservados; no se copió el árbol bruto de la cola.
- `summary.md`: síntesis final en español, grados de evidencia, riesgos, preguntas clínicas y cambios de sitio.
- `evidence/`: source-ledger, señales comunitarias y recibo de ingestión; los artefactos aprobados permanecen en Qdrant tras hash verificado.
- **Sitio:** nueva guía `deteccion/diferencial-edema-lipedema.html`, enlaces desde portada, checklist y edema/retención; índice de búsqueda pendiente de regenerar en la verificación final.

## Criterio de cierre
No se publicará hasta que todos los trabajos Chack lanzados estén terminales, cada administrador reporte `research_worked=true`, `required_researchers_satisfied=true`, los cuatro tipos de investigador estén terminales y no haya ledgers duraderos en ejecución; se hayan abierto las fuentes centrales; exista decisión de curación/recibo; se haya verificado una búsqueda KB posterior; y pasen las comprobaciones del sitio.
