# Curation y conocimiento — receipts

## Estado antes

`knowledge_status(lipedema)` al inicio: 302 fuentes, 3.738 chunks, 5.743.098 bytes; 302 compatibles. La lectura inicial buscó gaps sobre edema por fármacos, clases cardiovasculares/analgésicas/metabólicas/hormonales y diferencial sistémico.

## Decisiones administrativas de Chack

| Ejecución | Research ID | approved_for_knowledge | archive_only | discard | indexados | omitidos | chunks | eliminados tras verificación |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| Inicial | `research-000-984349d0` | 38 | 62 | 0 | 37 | 1 | 1.640 | 25 |
| Recovery | `research-000-b97858cf` | 26 | 125 | 0 | 24 | 2 | 1.938 | 12 |

Las decisiones, conteos y hashes verificables se resumen en este receipt y permanecen en el catálogo/runtime de Chack. La eliminación de archivos aprobados fue hecha por el runtime solo tras la verificación de embedding/hash; no se borró la cola manualmente. Los artifacts `archive_only` y `discard` no se nominaron a Qdrant. El árbol bruto no se copia a git para evitar duplicar el contenido ya almacenado en Qdrant.

## Verificación posterior

El estado posterior fue 357 fuentes, 7.103 chunks, 16.213.763 bytes y 84 fuentes eliminadas tras ingesta verificada. Una búsqueda focal (`edema farmacológico lipedema 346 588 58,8% anticonceptivos amlodipino pregabalina pioglitazona`) devolvió el hallazgo hormonal de 346/588 y los informes/artefactos de esta ronda; por tanto se verificó recuperación de conocimiento nuevo o deduplicado.

## Terminales

Primera administración: trabajó y satisfizo tipos requeridos, pero un Pro terminó `TIMED_OUT`; se registró como fallo y se pidió recovery. Recovery: Deep/Pro/scientific/websearcher terminales y `researcher_usage_complete=true`. Estado final de cola: sin batches abiertos ni processing.
