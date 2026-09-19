# MANIFEST — medición de fibrosis/rigidez en lipedema

## Alcance
Investigación timestamped iniciada el 2026-09-19. Tema: medición clínica y doméstica de rigidez/fibrosis, diferenciando líquido, dolor, volumen y tejido.

## Política y procedencia
- Knowledge base consultada antes de investigación externa: `lipedema`.
- Política prevista para Chack: `read_write` / `lipedema`.
- No se copiará al repositorio el árbol raw de la cola ni URLs privadas, credenciales, datos de pacientes o logs duplicados.

## Archivos
| Archivo | Clasificación | Estado |
|---|---|---|
| `current-research.md` | `archive_only` (plan vivo) | Creado; se actualizará durante la ronda. |
| `launch-log.md` | `archive_only` (auditoría compacta) | Creado; registrar estados, fallos y recibos. |
| `MANIFEST.md` | `archive_only` (provenance) | Este archivo. |
| `evidence/knowledge-search-initial.md` | `archive_only` | Consulta inicial de Qdrant y selección de brechas. |
| `evidence/queue-round-1-receipt.md` | `archive_only` (fallo de plataforma) | Recibo compacto; no contiene evidencia científica. |
| `evidence/queue-retry-receipt.md` | `archive_only` (fallo de plataforma) | Reintento compacto; `knowledge_update=0`. |
| `evidence/source-ledger.md` | `archive_only` (sin curation Chack) | Ledger compacto de fuentes abiertas y grados; no se envió a Qdrant. |
| `evidence/auxiliary-search-ledger.md` | `archive_only` | Herramientas, errores y filtro OSINT; no raw responses. |
| `evidence/knowledge-search-final.md` | `archive_only` | Verificación de hallazgo deduplicado; `knowledge_update=0`. |
| `evidence/hashes.sha256` | `archive_only` | Huellas SHA-256 de los archivos compactos; no incluye su propia huella. |
| `workers/*query.md` | `archive_only` | Prompts de workers auxiliares; no contienen secretos. |
| `workers/*stdout.txt`, `workers/*stderr.txt` | `archive_only` | Salidas terminales; solo contienen el aviso de toolset y están fuera de evidencia científica. |
| `evidence/` | `archive_only` | No hubo administrador Chack que aprobara ingestión; no se copiará el árbol raw de Chack ni se reclamará una aprobación inexistente. |
| `summary.md` | `archive_only` (síntesis publicable local) | Síntesis con fuentes abiertas; la curation/ingestión queda pendiente de reparar autenticación. |

## Regla de limpieza
Los artefactos útiles para ingestión se mantienen en la cola hasta la decisión administrativa. Los rechazados o `archive_only` no entran en Qdrant; no se borran manualmente artefactos de la cola. En git solo se conservarán síntesis, ledger, hashes, URLs públicas, recibos compactos y fallos relevantes.
