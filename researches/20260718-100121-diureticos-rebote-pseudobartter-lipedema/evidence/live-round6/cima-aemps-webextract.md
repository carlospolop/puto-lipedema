# Aperturas primarias — round6 (2026-09-08)

Fecha local de consulta: 2026-09-08 CEST. `web_extract` abrió el contenido subyacente; las fichas son fuentes regulatorias de indicación/seguridad, no ensayos de lipedema.

## CIMA/AEMPS

| Fuente directa | Estado | Dato verificado útil | Límite |
|---|---|---|---|
| [Furosemida Cinfa 40 mg, ficha técnica CIMA](https://cima.aemps.es/cima/dochtml/ft/64140/FichaTecnica_64140.html) | abierta; revisión del texto febrero 2024 | Indica edema asociado a insuficiencia cardiaca congestiva, cirrosis con ascitis y enfermedad renal (incluido síndrome nefrótico), además de hipertensión. Contraindica hipovolemia/deshidratación, hipopotasemia o hiponatremia graves; pide control de sodio, potasio y creatinina y advierte de pérdidas adicionales por vómitos, diarrea o sudoración. | No incluye lipedema ni prueba de eficacia para grasa/edema no complicado. La ficha no autoriza una pauta de retirada autónoma. |
| [Hidrosaluretil (hidroclorotiazida) 50 mg, CIMA](https://cima.aemps.es/cima/dochtml/ft/74658/FichaTecnica_74658.html) | abierta; revisión septiembre 2023 | Indica hipertensión, edemas cardiacos/renales/hepáticos leves-moderados y otros usos concretos. Contraindica anuria, insuficiencia hepática o renal severa y depleción electrolítica; el texto advierte que puede alterar electrolitos y que las dosis altas aumentan la pérdida de potasio. | La presencia de “edema idiopático/premenstrual” en esta ficha no convierte al fármaco en tratamiento del lipedema ni permite extrapolar beneficio a su tejido adiposo. |
| [Espironolactona Accord, CIMA](https://cima.aemps.es/cima/dochtml/ft/81033/FichaTecnica_81033.html) | abierta; revisión abril 2025 | Indica edema en insuficiencia cardiaca, insuficiencia cardiaca grave, hipertensión resistente, síndrome nefrótico, cirrosis con ascitis y aldosteronismo primario. El texto de insuficiencia cardiaca exige vigilancia de potasio/creatinina y reconoce el riesgo de hiperpotasemia y deterioro renal. | No es evidencia de uso en lipedema; parte de su papel puede ser cardioprotector/anti-aldosterónico, no mera eliminación de agua. No se debe retirar ni ajustar sin quien la indicó. |
| [Edemox (acetazolamida) 250 mg, CIMA](https://cima.aemps.es/cima/dochtml/ft/24408/FT_24408.html) | abierta; revisión agosto 2024 | Indica ciertos edemas y glaucoma/epilepsia como usos adyuvantes. El texto señala pérdida renal de bicarbonato y contraindica acidosis hiperclorémica, depleción de sodio/potasio, insuficiencia renal grave, cirrosis e insuficiencia hepática grave. | No todos los diuréticos producen la misma alcalosis: la acetazolamida puede producir acidosis metabólica hiperclorémica. No hay indicación lipedema específica. |
| [AEMPS MUH (FV), 2/2016: cetoacidosis asociada a SGLT2](https://www.aemps.gob.es/informa/notasinformativas/medicamentosusohumano-3/seguridad-1/2016/ni-muh_fv_02-glifozinas/) | abierta; nota publicada/actualizada 12-02-2016 | Advierte que la cetoacidosis puede aparecer sin hiperglucemia marcada; menciona deshidratación, restricción calórica, pérdida de peso, infección, cirugía, vómitos y alcohol como factores de riesgo, y recomienda suspender ante sospecha y durante cirugía mayor/enfermedad grave según contexto clínico. | Es una comunicación antigua y no sustituye la ficha vigente del SGLT2 concreto. AEMPS no la presenta como tratamiento del lipedema. |

## Comprobaciones científicas de actualización

- [Europe PMC, búsqueda “lipedema pseudo-Bartter metabolic alkalosis”](https://europepmc.org/) no devolvió resultados; es una búsqueda negativa de descubrimiento, no prueba de inexistencia.
- La consulta Europe PMC sobre `lipedema diuretic furosemide spironolactone` devolvió ruido y un estudio de insuficiencia cardiaca, no un ensayo lipedema-específico. La consulta `lipedema liposuction potassium chloride bicarbonate electrolyte` devolvió principalmente literatura no pertinente. Se conservan las salidas helper en esta carpeta.
- El estudio directo de tendencias electrolíticas perioperatorias [Witulski et al., PMID 42377498](https://pubmed.ncbi.nlm.nih.gov/42377498/) continúa siendo una cohorte retrospectiva: sus cambios pequeños no prueban ausencia de complicaciones en toda población ni pseudo-Bartter.

## Clasificación de archivos nuevos

- `ingest_candidate`: este registro y las conclusiones que enlazan a fuentes regulatorias abiertas, sujeto a revisión administrativa.
- `archive_only`: salidas JSON de búsquedas, errores 429 y metadatos de procesos sin texto clínico.
- `discard`: ninguno todavía; se conservarán primero, se revisarán y el administrador decidirá antes de cualquier ingesta.
