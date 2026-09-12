# MANIFEST — 20260912-100130-biomarcadores-sangre-nlr-plr-lipedema

**Corte:** 2026-09-12
**Tema:** NLR, PLR, CRP/PCR, ESR/VSG, plaquetas y derivados en adultas con lipedema.
**Política Chack:** `knowledge_mode=read_write`; `knowledge_base=lipedema`; `save_artifacts=true`.
**Cola:** `lipedema-20260912-biomarcadores-sangre-nlr-plr-crp`
**Estado:** síntesis local completada con fuentes primarias abiertas; puerta Chack operativa no satisfecha (`research_worked=false` en las dos rondas); sin ingesta nueva.

## Archivos conservados en git

| Archivo | Clasificación | SHA-256 |
|---|---|---|
| `current-research.md` | `archive_only` — plan, decisiones y estado operativo | `b38ea4d402a1d5e9fdfd9d4f28762b4f82f11c50339b64456c49f33fe3b472a9` |
| `launch-log.md` | `archive_only` — IDs, fallos, terminalidad y búsquedas | `7f95d2b83b824561f82da266d245ae440eb8b11e9232bda37bbc32f4e54ba395` |
| `summary.md` | `archive_only` — síntesis pública y límites | `1002cfa972941d901699f4e76550954c02cf4debbd5ae46a8e030b7706bf6d48` |
| `evidence/source-ledger.md` | `archive_only` — ledger compacto de fuentes abiertas; no es un duplicado de artículos | `88b465b36107e0bf78585f3ea957dbce941ae5f3789d237a0d3b5b4cc0ead90f` |
| `MANIFEST.md` | `archive_only` — este recibo (no se auto-hashea) | — |

## Conocimiento y artefactos

- **`approved_for_knowledge`:** 0 archivos; ningún administrador confirmó una nominación ni un receipt de ingestión.
- **`archive_only`:** los cuatro documentos compactos anteriores. Conservan decisiones, hashes, URLs públicas y síntesis; no se copió el árbol bruto de la cola.
- **`discard`:** `osint-query.txt`, `osint-worker.out` y `osint-worker.err` del auxiliar fallido; se eliminaron del árbol después de registrar el error `Broken pipe`. Los artefactos temporales de Chack permanecen bajo su carpeta de cola y no se borraron manualmente.
- No se conservaron HTML, PDF, XML, respuestas de búsqueda, snippets ni espejos de investigadores. Las fuentes se reabrieron con `web_extract` y se guardaron solo como URLs, metadatos y hallazgos compactos.

## Fuentes centrales abiertas

PubMed **42261591**, **42249859** y **42379186**; DOI **10.1177/15578585261454779** y **10.1055/a-2897-4203**; PMC **13278978**, **13409243**, **9659629** y **7406300**; MedlinePlus CRP y ESR. Los bloqueos de Thieme/mirror comercial no se contaron como evidencia.

## Verificación

`knowledge_status` antes y después: 404 fuentes, 8.403 fragmentos, 19.699.571 bytes. La búsqueda final recuperó pasajes previamente aprobados sobre ausencia de pruebas sanguíneas estandarizadas y confusión con obesidad; es retrieval deduplicado, no una nueva ingesta. `researcher_queue_status`: sin batches activos y `processing_count=0`.
