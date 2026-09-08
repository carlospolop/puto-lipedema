# Recibo de curación — Deep auxiliares de la ronda 7

- **Fecha:** 2026-09-08
- **Cola:** `lipedema-diureticos-20260718`
- **Investigaciones:** `research-000-72fa69fa` (P15) y `research-001-d9be00f1` (P16)
- **Estado de la cola:** sin lotes abiertos ni procesos en curso en la comprobación final.

## Resultado terminal

- P15 Deep: `terminal_state=error`, `remote_status=RUNNING` en el metadato preservado; la tarea asíncrona propietaria terminó cancelándola. Se conservan el estado, la solicitud y el JSON estructurado sin inventar un informe.
- P16 Deep: `terminal_state=error`, `remote_status=CANCELLED`; quedó un parcial de interfaz con el plan de búsqueda, pero no una revisión extraída.

## Decisión administrativa

- `chatgpt-run.json`, `chatgpt-request.md`, el JSON de salida no parseable y el parcial de interfaz → **archive_only**: son trazabilidad y fallos terminales, no evidencia clínica.
- No se nomina ningún archivo como `ingest_candidate`; los dos Deep Research extraídos válidos del programa son los conservados en `evidence/chack/deep-01-*` y `evidence/chack/pro-02-fallback/deepchatgpt_researcher/`.
- No se usa un fallo de plataforma, una cancelación, un parcial, un ID de solicitud ni un sobre de transporte como evidencia.
