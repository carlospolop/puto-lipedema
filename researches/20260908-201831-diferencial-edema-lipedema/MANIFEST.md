# MANIFEST — diferencial de edema en lipedema

**Estado:** cerrado para publicación; investigación completada el 2026-09-08.

## Conservado en Git

| Ruta | Clasificación | Motivo |
|---|---|---|
| `current-research.md` | durable synthesis | pregunta, población, límites, gaps y gate |
| `launch-log.md` | durable receipt/log | cola, investigadores terminales, búsquedas, fallos y decisiones |
| `summary.md` | durable synthesis | síntesis práctica, grados, riesgos, incertidumbre y preguntas |
| `MANIFEST.md` | durable receipt | inventario y política de artefactos |
| `evidence/source-ledger.md` | durable evidence ledger | URL/DOI/PMID, apertura, tipo, grado, hallazgo y limitaciones |
| `evidence/community-signals.md` | archive_only evidence note | una conversación abierta clasificada como anécdota, sin peso clínico |
| `evidence/queue-receipt.md` | durable ingestion receipt | conteos, curación, hashes representativos y búsqueda posterior |
| `osint-worker-prompt.md` | archive_only | encargo reproducible del auxiliar que falló; no contiene credenciales |
| `serpapi-worker-prompt.md` | archive_only | encargo reproducible del auxiliar que terminó sin informe; no contiene credenciales |
| `osint-worker-report.md` | archive_only | fallo terminal honestamente preservado; sin evidencia usada |
| `serpapi-worker-report.md` | archive_only | fallo terminal honestamente preservado; sin evidencia usada |

## Artefactos externos no copiados

- El árbol bruto de la cola Chack permanece en su almacenamiento de evidencia con su manifiesto y recibos. No se copió a Git.
- Los 50 `ingest_candidate` fueron embebidos e identificados por hash; 58 `archive_only` no entraron en Qdrant; 1 `discard` se limpió tras la decisión. El administrador registró 1 archivo `archive_only_missing` y 2 metadatos internos ignorados.
- No se conservaron HTML/PDF/XML/textos duplicados de la cola ni snippets, respuestas crudas o URLs privadas de trabajadores.

## Política

Cada artefacto de investigación se revisó o quedó registrado por la curación como `approved_for_knowledge`, `archive_only` o `discard`. Solo se publican afirmaciones sostenidas por fuentes directas y el ledger. La presencia de una fuente en el ledger no convierte una observación indirecta, encuesta o anécdota en prueba diagnóstica.

## Verificación local completada

- `node .github/scripts/build-search-index.js` → 100 páginas; `node --check search-index.js` pasó.
- Validador propio: 100 páginas HTML públicas, 1.428 enlaces internos, 0 roturas; nueva página indexada; 0 rutas `researches/`/marcadores privados en HTML público.
- Servidor local: 100/100 páginas respondieron HTTP 200; página nueva sirvió 11.501 bytes y mostró su título/resumen.
- `git diff --check` pasó. No quedaron procesos auxiliares ni trabajos de cola activos al cerrar la investigación.

## Pendiente de registrar tras la publicación

- hash/URL del commit final;
- estado de los workflows Search index y Deploy GitHub Pages;
- comprobación HTTP de producción con la ruta nueva y una página enlazada.
