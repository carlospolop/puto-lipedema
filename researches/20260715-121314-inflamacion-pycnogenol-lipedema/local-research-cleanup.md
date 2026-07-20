# Limpieza de investigaciones locales pendientes

Fecha: 2026-07-20

No se eliminó material científico único. Las raíces locales se clasificaron, se añadieron notas de estado y se prepararon para versionado. Solo se deduplicaron seis ficheros idénticos que contenían exclusivamente `403 Forbidden`; el fallo quedó documentado en un único archivo.

| Ruta | Ficheros | Bytes | Decisión |
|---|---:|---:|---|
| `2026-07-02_00-52-41-lactosa-inflamacion-lipedema/chatgpt` | 10 | 83113 | Archivo complementario de respuestas y metadatos recuperados; se conserva dentro de la investigación publicada. |
| `2026-07-02_11-01-29-lipolisis-grasa-lipedema` | 20 | 235894 | Investigación completa ya reflejada en la web; se versiona el archivo omitido y se consolidan seis stubs 403 idénticos. |
| `20260630-215610-vibracion-plataforma-lipedema-estrenimiento` | 15 | 158882 | Investigación legado única; se archiva con etiqueta de no publicada/no conforme al estándar actual. |
| `20260701-171348-super-remedios-estrenimiento-redo` | 17 | 399531 | Ronda legado complementaria y distinta de la investigación publicada; se conserva sin sobrescribir el resumen público. |
| `20260715-121314-inflamacion-pycnogenol-lipedema` | 69 | 540844 | Investigación actual cerrada, reconciliada y preparada para publicación. |

Después del commit, estas rutas dejarán de ser material local accidental y quedarán preservadas en el repositorio.
