# Investigación actual: diuréticos, rebote y pseudo-Bartter en lipedema

**Carpeta:** `20260718-100121-diureticos-rebote-pseudobartter-lipedema`  
**Cola Chack:** `lipedema-diureticos-20260718`  
**Estado:** en curso

## Pregunta central
¿Cuándo están indicados o contraindicados los diuréticos en una persona con lipedema y edema coexistente, qué evidencia existe sobre edema por diuréticos/rebote y pseudo-Bartter, y cómo explicar una revisión o retirada segura sin inducir a suspender tratamientos necesarios?

## Alcance y decisiones que debe permitir
- Separar lipedema puro, insuficiencia venosa/linfática, edema idiopático/ortostático y edema sistémico (cardíaco, renal, hepático u otros).
- Diferenciar clases: asa, tiazidas, antagonistas de aldosterona/ahorradores de potasio, acetazolamida y productos OTC/herbales.
- Aclarar qué significa «pseudo-Bartter», en qué contextos aparece (uso crónico, abuso, trastornos alimentarios), mecanismos RAAS/aldosterona y evolución al reducir/retirar.
- Identificar señales de alarma, analíticas y supervisión clínica; nunca dar una pauta individual de retirada.
- Buscar evidencia directa de lipedema y evidencia indirecta relevante; separar guías, estudios, opinión clínica, anécdotas y marketing.

## Iteración 1 — mapa amplio
- [x] Recuperación tras interrupción: `main` estaba actualizado y la cola sin trabajos activos; se preservó la petición Deep terminal ya completada (respuesta extraída, 26.711 caracteres; dos salidas internas convergentes).
- [x] Recuperación de Pro huérfano: el lote antiguo figuraba `running` en disco pero Chack informó 0 trabajos abiertos/en proceso; se conserva como fallo interrumpido y no cuenta como evidencia.
- [x] Chack: 2 Deep Research extraídos en total: mapa amplio previo y respaldo centrado en retirada/pseudo-Bartter.
- [x] Chack Pro 1 solicitado (fisiología/clases/indicaciones): terminó `timeout` con respuesta parcial de 4.429 caracteres; se preserva pero no cuenta como evidencia Pro completa.
- [x] Chack Pro 2 solicitado (retirada/pseudo-Bartter): no alcanzó terminal extraíble; el administrador compensó con un Deep extraído de 25.683 caracteres. Cola confirmada sin trabajos activos; el Pro no cuenta como evidencia.
- [x] OSINT: comunidades/pacientes, adversos y lenguaje práctico; 900 líneas, fuentes abiertas y ruido comercial separado.
- [x] SerpAPI: Google/Bing/Scholar/Forums/News/YouTube; 20 fuentes principales abiertas, sin ensayo directo de diuréticos en lipedema.
- [x] Científico: PubMed/PMC/Europe PMC/OpenAlex y guías primarias; 796 líneas y 32 referencias.

### Pistas nuevas para profundizar
- Diferenciar rebote fisiológico transitorio de recaída de insuficiencia cardiaca/renal/hepática que seguía necesitando tratamiento.
- Verificar cronología y DOI de estudios históricos (1975/1979/1990/1994/1997) y la revisión sistemática 2024/2025.
- Afinar clases: alcalosis con asa/tiazida frente a acidosis con acetazolamida; hiperpotasemia con ahorradores de potasio.
- No repetir el mecanismo simplista de que el diurético «deja proteínas» como certeza causal; la conclusión clínica en linfedema se apoya mejor en consenso y beneficio marginal.
- Pseudo-Bartter es un patrón adquirido que no prueba abuso; el cloro urinario depende del momento de toma/pérdida.

## Iteración 2 — pistas y contradicciones
- [x] Comparar guías de lipedema con guías de edema periférico, insuficiencia cardiaca/renal/hepática y linfedema: la indicación depende del mecanismo, no de tener o no lipedema.
- [x] Verificar si «los diuréticos siempre empeoran el lipedema» es falso o demasiado absoluto: es demasiado absoluto; la S2k permite indicación internista coexistente (consenso español 94,1%).
- [x] Precisar diferencia entre rebote transitorio, dependencia fisiológica, abuso y pseudo-Bartter clínico: entidades relacionadas pero no equivalentes.
- [x] Investigar monitorización y tiempos sin convertirlo en consejo autónomo: evidencia adyacente apunta a días-semanas y gran heterogeneidad; no existe pauta lipedema-específica.
- [x] Auditoría primaria del coordinador: NCBI/PMC y PDFs oficiales preservados; corregido DOI Lancet 1975 a `10.1016/S0140-6736(75)92833-0`, confirmado que PMID 7894988 sí corresponde a edema idiopático y detectada una discrepancia menor: la traducción española oficial alojada en AWMF imprime 94,1%, mientras el original alemán y el artículo corto imprimen 94,4%.
- [x] Subagente independiente de verificación de fuentes y errores (`source-verification-round2.md`, 35.045 bytes): terminal, sin efectos laterales; resolvió identificadores, cifras y límites, y confirmó que no existe ensayo de diuréticos específico de lipedema.

## Iteración 3 — falsación y traducción práctica
- [x] Pase crítico independiente (`falsation-round3.md`, 12.545 bytes) para buscar contraejemplos, incertidumbre y daño potencial de simplificar.
- [x] Matriz fenotipo × utilidad/riesgo × profesional/pruebas: la indicación y el riesgo cambian según lipedema puro, sobrecarga sistémica, retirada, clase y comorbilidad.
- [x] Revisar calidad comunitaria: “water pills funcionan”, “siempre hay rebote” y “natural es más seguro” son anécdota/desinformación, no evidencia.
- [x] Saturación: solo refinó redacción y seguridad; no apareció un hallazgo clínico material nuevo. Omitir cifras en la página, no decir «causa principal», no generalizar laxantes y no usar «deja proteínas atrás».

## Cierre
- [x] Preservar cada respuesta Chack/subagente y evidencia primaria; registrar fallos terminales.
- [x] Redactar `summary.md` y `MANIFEST.md` con bytes/SHA-256 (regenerar manifest tras la última edición de control).
- [x] Actualizar `researches/suggestions.md`.
- [x] Integrar contenido español breve y seguro en `efectos/edema-retencion.html`.
- [x] Regenerar índice con `node .github/scripts/build-search-index.js`; `node --check`, 103 entradas, frase única presente, 98 páginas HTML y enlaces internos válidos; se retiró además una referencia interna rota preexistente.
- [x] Barrera terminal confirmada: Chack sin lotes abiertos/procesando y lista de procesos vacía; commit preparado solo con esta investigación y cambios web relacionados.
- [ ] Push a `main`; verificar Search Index, GitHub Pages y producción.
