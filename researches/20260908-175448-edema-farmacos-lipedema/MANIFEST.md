# MANIFEST — edema-farmacos-lipedema

**Creado:** 2026-09-08 17:54 CEST
**Tema:** edema inducido o agravado por medicamentos en personas con lipedema y diferencial de sobrecarga sistémica.
**Política Chack:** `knowledge_mode=read_write`, `knowledge_base=lipedema`; cola `lipedema-edema-farmacos-20260908`.

## Archivos principales

- `current-research.md`: pregunta, método, estado y conclusión de trabajo.
- `launch-log.md`: lanzamientos, terminales, errores y receipts.
- `source-ledger.md`: fuentes abiertas, tipo de evidencia y grado.
- `synthesis.md`: síntesis práctica, riesgos, incertidumbre y preguntas clínicas.
- `summary.md`: resumen legible para mantenimiento/publicación.
- `evidence/knowledge-search.md`: estado y leads de Qdrant antes de investigar.
- `evidence/queue-curation.md`: curation, hash/ingesta y verificación post-ingesta.
- `evidence/osint-direct.md`: búsquedas auxiliares, resultados y fallos.
- `serpapi-worker-prompt.md`, `osint-worker-prompt.md`: briefs absolutos y autosuficientes.
- `*-worker*.stdout.txt`/`stderr.txt`: salidas terminales, incluidos fallos honestos y sesiones seguras.

## Clasificación y seguridad

La clasificación de cada artefacto producido por la investigación quedó registrada por el administrador como `approved_for_knowledge`, `archive_only` o `discard`. Inicial: 38/62/0; recovery: 26/125/0. Solo la capa Chack gestionó embeddings y limpieza tras verificación. Para no duplicar Qdrant ni llenar git con descargas temporales, este repositorio conserva únicamente los receipts resumidos, hashes, URLs, ledger y síntesis; no copia el árbol bruto de la cola. No se publican credenciales, URLs privadas, rutas temporales ni session IDs.

## Publicación

Se actualizó `efectos/edema-retencion.html` y `anexos/ultimas-incorporaciones.html`. Se regeneró el índice con `.github/scripts/build-search-index.js`: 99 páginas; verificación HTTP local 99/99, enlaces internos 1.940/1.940 y sin rutas de investigación en el índice.
