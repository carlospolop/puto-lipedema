# Round 1 subresearch: direct genetics / genomics / transcriptomics of lipedema

**Scope.** Direct human lipedema/lipoedema evidence only, with mechanism and confidence separated from speculation. Sources searched/read via PubMed/Europe PMC/PubMed Central full text where available, plus Europe PMC query results. **Important caveat:** several PubMed XML pulls include reference-level ArticleIds if parsed naively; the identifiers below were checked against Europe PMC/PubMed metadata when possible.

## Executive bullets

- **Familial aggregation is well supported**, but causal genetics are heterogeneous. A classic pedigree series proposed **autosomal dominant inheritance with sex limitation** (or less likely X-linked dominant), estrogen-requiring onset at puberty (Child et al., PMID **20358611**, DOI **10.1002/ajmg.a.33313**). A 2024 family WES study of **31 people from 9 families** found candidate protein-altering variants in **469 genes** but **no single gene shared across all families**, supporting genetic heterogeneity rather than one major exonic cause (Morgan et al., PMID **38407896**, PMCID **PMC11044871**, DOI **10.1089/lrb.2023.0065**).
- **Best direct germline candidate:** **AKR1C1** p.Leu213Gln from a sex-limited autosomal-dominant nonsyndromic lipedema family (3 affected women) discovered by WES; mechanism proposed as partial loss of 20α-HSD activity → impaired progesterone inactivation and altered steroid/prostaglandin effects on adipogenesis (Michelini et al., PMID **32872468**, PMCID **PMC7503355**, DOI **10.3390/ijms21176264**). Still a single-family candidate, not replicated as a high-penetrance gene.
- **Second aldo-keto reductase candidate:** **AKR1C2** (one truncating/activating C-terminal variant, Ser320PheTer2, plus qPCR overexpression in 5/21 lipedema patients without AKR1C2 mutations). Evidence is direct but small, from one group, and partly expression-based; there was a later author correction involving conflicts/patents (PMID **38112953**, DOI **10.26355/eurrev_202312_34697**; correction PMID **38567622**).
- **Candidate-gene panel (305 genes; 162 patients)** found rare predicted deleterious heterozygous variants in **PLIN1, LIPE, ALDH18A1, PPARG, GHR, INSR, RYR1, NPC1, POMC, NR0B2, GCKR, PPARA** in 17 patients. This is hypothesis-generating; many genes are differential diagnosis/overlap genes for lipodystrophy, obesity, endocrine, or fat-distribution disorders, not proven lipedema genes (PMID **35207755**, PMCID **PMC8877075**, DOI **10.3390/jpm12020268**).
- **GWAS status is mixed.** A tightly phenotyped UK cohort GWAS (130 genotyped of 200 cases) found only **suggestive** loci; top SNP rs1409440 upstream of **LHFPL6** (OR meta ≈2.01, P≈4×10^-6), not genome-wide significant (PMID **36227936**, PMCID **PMC9560129**, DOI **10.1371/journal.pone.0274867**). A later UK Biobank **proxy/inferred lipedema phenotype** GWAS in women identified **18 genome-wide significant loci** and replicated **VEGFA** and **GRB14-COBLL1** in an independent clinically diagnosed cohort (PMID **36385154**, PMCID **PMC9995497**, DOI **10.1038/s41431-022-01231-6**). Because the discovery phenotype was based on body composition (high leg fat + relatively small waist), it is genetic evidence for lipedema-like fat distribution, not unequivocal clinical lipedema.
- **Direct tissue transcriptomics/multi-omics consistently implicate adipose stem/progenitor proliferation, ECM/fibrosis, lipid metabolism, mitochondrial/metabolic rewiring, vascular/lymphatic biology, and immune/macrophage pathways**, but individual genes from these studies are mostly biomarkers/mechanistic nodes rather than inherited-risk genes.
- **Strongest transcriptomic/mechanistic node:** **BUB1** in adipose-derived stem cells (ADSCs). RNA-seq of whole tissue and ADSCs found thousands of DE genes; lipedema ADSCs had upregulated cell-cycle genes including **BUB1, BUB1B, CDC20, CENPF, ASPM, BIRC5, KIF2C, KIF14**. BUB1 inhibition or CRISPR depletion reduced ADSC hyperproliferation, making BUB1 a direct functional target, though not a germline association (Ishaq et al., PMID **34764426**, PMCID **PMC8873020**, DOI **10.1038/s41366-021-01002-1**).
- **Other direct molecular evidence:** 2025 Diabetes study found thigh SAT in women with obesity + lipedema had higher macrophage/inflammation/fibrosis markers and lower lymphatic/vascular genes including **VEGFC** and **FLT4/VEGFR3** versus abdominal SAT; weight loss reduced leg fat and improved insulin sensitivity but did not normalize inflammation/fibrosis markers (PMID **39652636**, PMCID **PMC11842599**, DOI **10.2337/db24-0890**). 2026 multi-omics in advanced lipedema identified **AKT1 promoter hypomethylation**, higher AKT1 expression/phosphorylation, and metabolic reprogramming (PMID **41580786**, PMCID **PMC12911300**, DOI **10.1186/s12967-026-07726-w**).
- **Estrogen/hormone axis is plausible but not yet a simple ESR1/ESR2 genetic story.** Direct genetic links are through steroid-metabolism genes (**AKR1C1/AKR1C2**) and hormone/endocrine candidates (**POU1F1/PIT-1**, **GHR**, **POMC**, **NR0B2**, **PPARG/PPARA**), plus GWAS/proxy loci related to female fat distribution and estrogen biology. A 2024 miRNA study reported dysregulated miRNAs with monitored targets **ESR1** and **VEGFA**, but this is expression/regulatory evidence, not inherited ESR1/VEGFA causality (PMID **39590304**, PMCID **PMC11592672**, DOI **10.3390/cimb46110710**).
- **FOXC2 evidence for primary lymphedema is not direct lipedema evidence in the searches performed.** It should be treated as a lymphatic-disease differential/candidate pathway unless a direct lipedema cohort shows variants/expression changes.

## Gene / locus evidence table

| Gene/locus | Evidence type | Directness/confidence | Proposed mechanism in lipedema | Key source(s) |
|---|---|---:|---|---|
| **AKR1C1** | Family WES; missense p.Leu213Gln in 3 affected women; molecular dynamics/structural bioinformatics; later computational variant screen | **Moderate-high as direct candidate; not definitive** | Partial loss of aldo-keto reductase / 20α-HSD activity; slower progesterone → 20α-hydroxyprogesterone conversion; possible altered progesterone/prostaglandin signaling increasing SC adipogenesis | Michelini 2020 PMID **32872468**, PMCID **PMC7503355**, DOI **10.3390/ijms21176264**; computational follow-up PMID **38112954**, DOI **10.26355/eurrev_202312_34698** |
| **AKR1C2** | One patient with C-terminal Ser320PheTer2; qPCR overexpression in 5/21 patients | **Moderate/weak; small and needs replication** | Possible increased enzyme activity or overexpression affecting steroid hormone metabolism | PMID **38112953**, DOI **10.26355/eurrev_202312_34697**; correction PMID **38567622** |
| **POU1F1 / PIT-1** | Family with PIT-1 p.P24L and lipoedema in females over 4 generations; combined pituitary deficiency | **Weak/moderate but syndromic/endocrine** | Interaction of growth hormone deficiency/sex steroids at puberty → abnormal fat distribution in predisposed subjects | Bano 2010 PMID **19609847**, DOI **10.1055/s-0029-1224154** |
| **NSD1** | Familial Sotos syndrome with NSD1 C2175S and severe lipedema in affected mother | **Weak, syndromic association** | Overgrowth/developmental syndrome; altered body composition; not isolated lipedema | Zechner 2009 PMID **19545651**, DOI **10.1016/j.ejmg.2009.06.001** |
| **ELN** | Williams syndrome preliminary report with altered body composition/lipedema | **Weak, syndromic association** | Elastin/connective tissue/vascular biology; altered fat distribution and bone density | Waxler 2017 PMID **28254647**, DOI **10.1016/j.ejmg.2017.02.007** |
| **VEGFA** | UK Biobank lipedema-proxy GWAS locus; replicated in clinical cohort; also miRNA target in lipedema tissue | **Moderate for locus/pathway; proxy phenotype caveat** | Angiogenesis/vascular adipose biology; possible female fat-distribution locus | PMID **36385154**, PMCID **PMC9995497**, DOI **10.1038/s41431-022-01231-6**; miRNA PMID **39590304** |
| **GRB14-COBLL1** | UK Biobank lipedema-proxy GWAS locus; replicated in clinical cohort | **Moderate for locus; proxy phenotype caveat** | Insulin signaling/body fat distribution locus; adipose biology | PMID **36385154**, DOI **10.1038/s41431-022-01231-6** |
| **LHFPL6** | Strict UK clinical GWAS top suggestive SNP rs1409440 upstream; supported by 100,000 Genomes cohort; not genome-wide significant | **Weak/moderate suggestive** | LHFPL6 linked to lipoma formation; relevance to lipedema uncertain; variant carriers more likely to report maternal relative symptoms | PMID **36227936**, PMCID **PMC9560129**, DOI **10.1371/journal.pone.0274867** |
| **ZNF25 / ZNF37A / ZNF33A** | Suggestive GWAS/eQTL signals in UK cohort; also mentioned in reviews as estrogen biology | **Weak** | eQTLs in SAT/adrenal/breast; possible sex-hormone/fat distribution links | PMID **36227936** |
| **KLHL2** | Suggestive GWAS/eQTL signal | **Weak** | eQTL in adrenal gland; uncertain link | PMID **36227936** |
| **CPE** | Mentioned in review as one of six gene regions from clinical cohort GWAS associated with sex hormone/body shape biology | **Weak unless primary result verified** | Prohormone processing/neuroendocrine regulation; body shape/adiposity | Review PMID **41548036**, PMCID **PMC12812162**, DOI **10.1038/s44324-025-00093-y** |
| **PLIN1** | Rare predicted deleterious variant in NGS panel patient | **Weak candidate/differential diagnosis** | Lipid droplet biology; partial lipodystrophy/fat storage | PMID **35207755**, PMCID **PMC8877075**, DOI **10.3390/jpm12020268** |
| **LIPE** | Rare predicted deleterious variant in NGS panel | **Weak** | Hormone-sensitive lipase; lipolysis/fat distribution | PMID **35207755** |
| **ALDH18A1** | Rare predicted deleterious variant in NGS panel; known cutis laxa/lipodystrophy overlap | **Weak/syndromic overlap** | Connective tissue/fat distribution differential | PMID **35207755** |
| **PPARG** | Rare predicted deleterious variant in NGS panel; adipocyte master regulator | **Weak candidate; strong adipose biology prior** | Adipogenesis/insulin sensitivity/lipodystrophy | PMID **35207755**; in vitro ASCs showed increased **PPAR-γ** expression in abdominal lipedema-derived adipocytes, PMID **32059474**, DOI **10.3390/cells9020430** |
| **GHR** | Rare predicted deleterious variant in NGS panel | **Weak/endocrine candidate** | Growth hormone signaling and fat distribution | PMID **35207755** |
| **INSR** | Rare predicted deleterious variant in NGS panel | **Weak/metabolic candidate** | Insulin signaling/adipose storage | PMID **35207755** |
| **RYR1** | Rare predicted deleterious variant in NGS panel | **Weak; uncertain** | Prior animal/adipose distribution association cited by authors | PMID **35207755** |
| **NPC1** | Rare predicted deleterious variant in NGS panel | **Weak; obesity/lipid trafficking overlap** | Cholesterol trafficking; adiposity/weight gain | PMID **35207755** |
| **POMC** | Rare predicted deleterious/nonsense variant in NGS panel | **Weak/neuroendocrine obesity overlap** | Melanocortin appetite/adiposity pathway; may mimic/contribute rather than cause lipedema | PMID **35207755** |
| **NR0B2 / SHP** | Rare predicted deleterious/nonsense variant in NGS panel | **Weak but hormone-relevant** | Nuclear receptor that can inhibit estrogen receptor function; associated with SAT accumulation | PMID **35207755** |
| **GCKR** | Rare frameshift/nonsense variant in NGS panel | **Weak/metabolic candidate** | Hepatic glucose/lipid metabolism; authors speculate fatty liver/lymph load could modify risk | PMID **35207755** |
| **PPARA** | Rare predicted deleterious variant in NGS panel | **Weak** | Fatty acid β-oxidation; lipid metabolism/inflammation | PMID **35207755** |
| **MTHFR rs1801133 (C677T)** | Case-control/body-composition association, 45 lipedema + 50 controls | **Weak; OR CI appears wide and includes/near 1 in abstract** | Folate/methylation/homocysteine biology; associated with leg fat/lean-fat metrics | PMID **36876707**, DOI **10.26355/eurrev_202302_31407** |
| **BUB1** | Tissue/ADSC RNA-seq; upregulated in ADSCs; functional inhibition/CRISPR reduced hyperproliferation | **High direct functional transcriptomic target; not germline** | Cell-cycle/kinetochore signaling; histone H2A activation; ADSC hyperproliferation → adipose expansion | PMID **34764426**, PMCID **PMC8873020**, DOI **10.1038/s41366-021-01002-1** |
| **BUB1B, CDC20, CENPF, ASPM, BIRC5, KIF2C, KIF14** | RNA-seq/qRT-PCR validation in lipedema ADSCs | **Moderate transcriptomic pathway genes** | Mitotic spindle/cell cycle/proliferation | PMID **34764426** |
| **ZIC1, UGT1A7, GREM1, TRIM67, HOTAIR** | Whole-tissue RNA-seq highly differential/proliferation-related genes | **Moderate transcriptomic markers** | Cell proliferation/adipose hyperproliferation, ECM/inflammation context | PMID **34764426** |
| **LEP** | Increased leptin expression in lipedema adipocytes differentiated from thigh ASCs | **Moderate in vitro expression evidence** | Adipocyte differentiation/adipokine dysregulation | PMID **32059474**, PMCID **PMC7072543**, DOI **10.3390/cells9020430** |
| **ADIPOQ, LPL, PPARG, GLUT4/SLC2A4** | Increased adipogenic gene expression in 3D differentiated lipedema ASC spheroids | **Moderate in vitro model evidence** | Adipogenesis/metabolic differentiation | PMID **33171717**, PMCID **PMC7664323**, DOI **10.3390/ijms21218350** |
| **MMP2, MMP9, MMP11; collagen/fibronectin/laminin/COL6** | 3D spheroid ECM remodeling model; decreased MMPs; IF showed ECM protein changes | **Moderate pathway evidence** | ECM remodeling/fibrosis | PMID **33171717** |
| **VEGFC / FLT4 (VEGFR3)** | Bulk RNA-seq/biopsy comparison thigh vs abdominal SAT in obese lipedema women | **Moderate direct expression evidence** | Lower lymphangiogenic/vascular signaling in affected thigh SAT; lymphatic/vascular dysfunction | PMID **39652636**, PMCID **PMC11842599**, DOI **10.2337/db24-0890** |
| **CD68 and macrophage/inflammatory genes** | Histology/IHC and transcriptomics; increased macrophages in lipedema thigh skin/fat | **Moderate direct tissue evidence** | Chronic inflammation, macrophage infiltration, angiogenesis; independent of obesity in non-obese group | PMID **30949365**, PMCID **PMC6425411**, DOI **10.1155/2019/8747461**; PMID **39652636** |
| **AKT1** | Genome-wide DNA methylation + RNA-seq + protein phosphorylation in advanced-stage lipedema | **Moderate/high epigenomic multi-omics target; not inherited** | Promoter hypomethylation → increased AKT1 expression/phosphorylation; altered RTK/immune/phosphometabolism, mitochondrial and redox/energy metabolism | PMID **41580786**, PMCID **PMC12911300**, DOI **10.1186/s12967-026-07726-w** |
| **ESR1** | Monitored target of dysregulated miRNA (hsa-miR-205-5p) in lipedema adipose tissue | **Weak direct regulatory evidence; no germline association** | Estrogen signaling regulation in adipose tissue | PMID **39590304**, PMCID **PMC11592672**, DOI **10.3390/cimb46110710** |
| **SMAD2** | Target of upregulated hsa-let-7g-5p in miRNA study | **Weak/moderate regulatory marker** | TGF-β/fibrosis/inflammation-related signaling | PMID **39590304** |

## Direct transcriptomic / omics pathways

1. **ADSC hyperproliferation and cell-cycle activation**
   - Whole tissue RNA-seq: **>4400** significant mRNA differences; pathways: lipid metabolism, cell-cycle/proliferation, cell adhesion, inflammation, immunity.
   - ADSC RNA-seq: **>3400** DE genes; validated mitotic/cell-cycle genes **BUB1, BUB1B, CDC20, CENPF, ASPM, BIRC5, KIF2C, KIF14**.
   - Functional validation: BUB1 inhibitor 2OH-BNPP1 and CRISPR/Cas9-mediated **BUB1** depletion inhibited ADSC hyperproliferation.
   - Source: Ishaq et al., PMID **34764426**.

2. **Fibrosis / ECM remodeling**
   - Ishaq et al. RNA-seq and omics: ECM/cell adhesion/fibrosis signatures.
   - 3D ASC spheroids: adipogenic genes increased; **MMP2/9/11** decreased; fibronectin/laminin/collagen VI changes (PMID **33171717**).
   - Diabetes 2025 biopsy/RNA-seq: thigh SAT had increased fibrosis gene expression vs abdominal SAT; weight loss did not normalize fibrosis markers (PMID **39652636**).

3. **Inflammation/macrophages**
   - Histology/IHC: increased **CD68+ macrophages** in lipedema skin/fat, larger adipocytes, increased dermal vessels/angiogenesis and lymphatic vessel area depending on obesity group (PMID **30949365**).
   - Diabetes 2025: thigh SAT showed increased macrophage content and inflammation genes (PMID **39652636**).
   - Metabolism 2025 multi-omics contrasts: early/late stage transcriptomics/proteomics found **local downregulation of inflammatory factors**, little systemic cytokine/chemokine change but trend to increased VEGF (PMID **40097137**, DOI **10.1016/j.metabol.2025.156191**). This conflicts with macrophage/inflammation-up studies and may reflect stage, depot, cohort, or analytic differences.

4. **Lymphatic / vascular genes**
   - Biopsy/RNA-seq: lower **VEGFC** and **FLT4/VEGFR3** expression in thigh SAT vs abdominal SAT in women with obesity + lipedema (PMID **39652636**).
   - Histology: dilated lymphatic/blood microvessels, angiogenesis, increased vessel staining in lipedema tissue (PMID **30949365**).
   - GWAS/proxy: **VEGFA** locus replicated; follow-up showed enrichment for genes expressed in blood vessels and adipose tissue (PMID **36385154**).

5. **Mitochondrial / metabolic rewiring**
   - Metabolism 2025: upregulated cellular respiration, oxidative phosphorylation, mitochondrial organization; altered glutamic acid, glutathione, sphingolipids; candidate serum model (PMID **40097137**).
   - J Transl Med 2026 advanced lipedema: transcriptomics showed downregulation of mitochondrial functions (OXPHOS/TCA/fatty acid β-oxidation), sirtuin disruption, ECM remodeling; methylation/transcript/protein/metabolite integration centered **AKT1** (PMID **41580786**). Direction of mitochondrial signal differs across cohorts/stages.

6. **miRNA regulation**
   - SVF extracellular vesicles: lipedema-relevant sEV miRNAs **miR-16-5p, miR-29a-3p, miR-24-3p, miR-454, miR-144-5p, miR-130a-3p, let-7c-5p**; cCM miR-188-5p downregulated (PMID **32350368**, PMCID **PMC7190633**, DOI **10.1038/s41598-020-64215-w**).
   - Tissue miRNA nCounter: upregulated **hsa-let-7g-5p**; multiple downregulated miRNAs including **hsa-miR-205-5p** and **hsa-miR-302b-3p**; monitored targets **SMAD2, ESR1, VEGFA** (PMID **39590304**).

## Contradictions / negative evidence / gaps

- **No single exomic gene across families:** the 2024 WES family study is the strongest negative genetic evidence against a simple monogenic model across all lipedema families (PMID **38407896**).
- **GWAS power/phenotyping problems:** the strict clinical UK cohort was underpowered and found no genome-wide significant SNP; the larger UK Biobank study used a body-composition proxy, raising misclassification risk.
- **Inflammation direction is inconsistent:** histology/biopsy studies often show increased macrophages/inflammation/fibrosis, while a 2025 multi-omics study reported local downregulation of inflammatory factors with little systemic inflammatory signal. Stratification by stage, depot, menopause, BMI, and treatment history is needed.
- **Most “genes” are not inherited-risk genes.** BUB1/AKT1/VEGFC/FLT4/ESR1 evidence is expression, epigenetic, miRNA, or tissue biology. These are useful mechanisms/targets but not proven germline susceptibility genes.
- **Syndromic genes (POU1F1, NSD1, ELN, ALDH18A1 etc.) are often overlap/differential diagnoses.** They may illuminate endocrine/connective tissue mechanisms but should not be counted as isolated lipedema genes without careful phenotyping.
- **FOXC2/primary lymphedema genes:** no direct lipedema cohort evidence found in this round; treat as lymphatic-dysfunction background/differential until direct data are identified.
- **Replication gap:** AKR1C1/AKR1C2 and panel findings need independent replication, segregation analysis, functional validation in adipose/lymphatic-relevant cells, and ancestry-matched controls.

## High-confidence direct genes/mechanisms for parent synthesis

- **Direct candidate germline:** **AKR1C1** (highest-confidence direct inherited candidate, but single-family), **AKR1C2** (smaller/less replicated).
- **Direct GWAS/proxy loci:** **VEGFA**, **GRB14-COBLL1** (replicated from UK Biobank proxy to clinical cohort); **LHFPL6** (suggestive strict cohort), **ZNF25/ZNF37A/ZNF33A/KLHL2** (weaker eQTL/suggestive).
- **Direct functional transcriptomic targets:** **BUB1** and associated cell-cycle genes; **AKT1** epigenetic/trans-omic node; **VEGFC/FLT4** lymphangiogenic downregulation; fibrosis/ECM genes and macrophage markers.
- **Direct hormone/adipogenesis axes:** aldo-keto reductases (**AKR1C1/AKR1C2**), **PPARG/LEP/ADIPOQ/LPL/GLUT4**, miRNA-regulated **ESR1/VEGFA/SMAD2**, and endocrine overlap **POU1F1/GHR/POMC/NR0B2**.

## Recommended next searches

1. Pull supplemental tables for: UK Biobank GWAS 18 loci; UK Lipoedema top SNPs/eQTLs; 2024 family WES candidate gene lists; 2022 305-gene panel full variant table.
2. Search by datasets/accessions: **SRA PRJNA940039**, ProteomeXchange **PXD058489**, ArrayExpress **E-MTAB-15365**; extract DE gene tables if available.
3. Search exact terms: `lipedema FOXC2`, `lipedema FLT4 VEGFC`, `lipedema PROX1`, `lipedema VEGFR3`, `lipedema estrogen receptor ESR1 ESR2`, `lipedema GWAS supplementary loci`.
4. Check patent/conflict context for AKR1C1/AKR1C2 and commercial NGS panel papers; do not overstate causality.
5. Separate **clinical lipedema** from **lipedema-like fat distribution proxy** and from **obesity/lymphedema/lipodystrophy/syndromic fat disorders** in all final tables.
