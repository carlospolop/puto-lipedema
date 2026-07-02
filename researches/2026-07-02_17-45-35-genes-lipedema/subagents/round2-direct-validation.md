# Round 2 direct validation: lipedema genetics/omics leads

Concise evidence check for exact variants, sample sizes, tissue/phenotype, effect direction, supplementary data, and directness. Key rule: none of these are validated diagnostic tests.

## Supplement retrieval status

Downloaded/parsed locally under `subagents/round2_supp/`:
- UKBB proxy GWAS supplement DOCX: `41431_2022_1231_MOESM1_ESM.docx` from Springer static content.
- UK Lipoedema PLOS supplements S1-S8 (`pone.0274867.s002`-`.s009`) and reviewer docs; downloaded from PLOS storage and parsed.

Blocked/missing:
- Morgan 2024 family WES `Suppl_TableS2.csv` / `Suppl_Data.docx`: PMC file links returned reCAPTCHA HTML; Liebert/SAGE supplement URLs returned Cloudflare 403. Exact 469-gene variant table not recovered.
- PRS Global Open/LWW 2024 transcriptomics full text/supplement: DOI page returned 403; only PubMed abstract available.
- Elsevier Metabolism 2025 multi-omics full text/supplement: Cloudflare 403; PubMed abstract and accessions available.

## 1. UK Biobank lipedema-like phenotype GWAS

**Source:** Klimentidis et al., *EJHG* 2023. PMID 36385154; PMCID PMC9995497; DOI 10.1038/s41431-022-01231-6. Nature: https://www.nature.com/articles/s41431-022-01231-6 ; PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC9995497/ ; supplement: https://static-content.springer.com/esm/art%3A10.1038%2Fs41431-022-01231-6/MediaObjects/41431_2022_1231_MOESM1_ESM.docx

**Directness:** discovery is not clinical lipedema; it is a UKBB **proxy phenotype** in women: high leg fat % + relatively small waist, adjusted for hip circumference. Replication used clinical UK Lipoedema cases.

**Sample sizes:** UKBB discovery: **24,450 inferred cases**, **165,227 controls**. Replication: **130 clinical UK Lipoedema cases** + **5,848 Understanding Society female controls**; 14/18 lead loci testable after QC.

**Parsed top loci from supplementary table (HC-adjusted UKBB OR for A1):**

| SNP | nearest gene(s) | A1/A0 | OR | P | direction |
|---|---|---|---:|---:|---|
| rs72959041 | RSPO3 | G/A | 1.24 | 2.7E-19 | A1 increases proxy odds |
| rs1128249 | GRB14-COBLL1 | G/T | 0.92 | 3.0E-16 | A1 protective; T risk direction |
| rs11057418 | ZNF664-FAM101A / CCDC92 region | G/C | 1.10 | 5.6E-14 | increases |
| rs6905288 | VEGFA | G/A | 1.07 | 1.8E-13 | increases |
| rs4616635 | ADAMTS9 | C/G | 0.93 | 4.9E-12 | A1 protective |
| rs749853052 | LYPLAL1 | TG/T | 0.93 | 1.5E-11 | A1 protective |
| rs5868014 | ANKRD55-MAP3K1 | GC/G | 1.08 | 2.7E-10 | increases |
| rs6602994 | ADAMTSL3 | T/C | 0.92 | 6.9E-13 | A1 protective |
| rs10649697 | SLC12A2 | T/TAGA | 0.92 | 1.3E-12 | A1 protective |
| rs62492368 | ABP1/AOC1 | G/A | 1.07 | 4.0E-11 | increases |

The article reports **VEGFA** and **GRB14-COBLL1** as the only loci significantly associated in clinical replication after correction. Do not state all 18 loci replicated. Mechanistic follow-up suggests blood-vessel/adipose-tissue enrichment, not causal proof.

## 2. UK Lipoedema clinical GWAS: rs1409440 / LHFPL6-LHFP region

**Source:** Bano et al., *PLOS ONE* 2022. PMID 36227936; PMCID PMC9560129; DOI 10.1371/journal.pone.0274867. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0274867 ; PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC9560129/

**Directness:** direct clinical lipedema cohort, but small and only suggestive.

**Sample sizes:** 200 recruited/tightly phenotyped; GWAS on **130 cases**. Replication/support from 100,000 Genomes: **27 cases**, **11,409 controls**. Discovery allele counts in S5 imply ~5,400 controls at lead SNP.

**Exact lead row parsed from S5 Table:**
- **rs1409440**, chr13, POS_HG19 **39,685,567**, POS_HG38 **39,111,430**, A1 **T**, A0 **C**.
- Discovery: OR **2.034**, beta **0.709994**, P_glm **2.12207E-5**.
- Replication: OR **1.919**, beta **0.651994**, P_glm **0.072647**; same direction but underpowered/not significant alone.
- Meta-analysis: direction **++**, OR_meta **2.01335**, SE **0.1517**, P_meta **3.979E-6**.

**Regulatory/eQTL details:** S6 places rs1409440 in ENCODE cCRE **EH38E1669206**, distal enhancer-like and CTCF-bound. GeneHancer labels the element **LHFPL6/GH13J039035**. However S7/S8 eQTL/colocalization tables name **LHFP** as the significant colocalized gene; S8 SSP: LHFP Esophagus Muscularis **4.88**, Pancreas **3.89**, while Adipose Subcutaneous is only **0.0838**. Therefore call this the **LHFPL6/LHFP region**, not a proven adipose LHFPL6 causal effect.

## 3. AKR1C1 and AKR1C2 family candidates

**AKR1C1 source:** Michelini et al., *IJMS* 2020. PMID 32872468; PMCID PMC7503355; DOI 10.3390/ijms21176264. https://pmc.ncbi.nlm.nih.gov/articles/PMC7503355/

Direct one-family WES. Sex-limited autosomal-dominant nonsyndromic primary lipedema with **three affected females**. Exact variant: **AKR1C1 c.638T>A; p.Leu213Gln (L213Q)**. Sanger confirmed in affected females and excluded in unaffected family members. qPCR in blood did not show altered mRNA stability; modeling predicts partial loss of progesterone-reduction/20α-HSD activity. Strong family lead, not population-validated.

**AKR1C2 source:** Michelini et al., *European Review for Medical and Pharmacological Sciences* 2023. PMID 38112953; DOI 10.26355/eurrev_202312_34697; correction PMID 38567622.

Small direct candidate report. Index patient variant **AKR1C2 Ser320PheTer2** plus 19 additional patients and 2 affected family members; qPCR overexpression in **5/21 (24%)** lipedema patients without AKR1C2 mutations. Treat as exploratory; note later correction/conflict/patent caveat.

## 4. Family-based WES: heterogeneous pathways, not a shared gene

**Source:** Morgan et al., *Lymphatic Research and Biology* 2024. PMID 38407896; PMCID PMC11044871; DOI 10.1089/lrb.2023.0065. https://pmc.ncbi.nlm.nih.gov/articles/PMC11044871/

Direct family WES: **31 individuals from 9 families**, including **10 probands** (2 monozygotic twins). Rare predicted protein-altering variants after filtering across **469 genes**; no individual gene/variant shared across all families; no variant found in >4 families.

GO categories significantly overrepresented after FDR: **vasopressin receptor activity**, **microfibril binding**, **patched binding**. Named overlap genes with Michelini panel: **BBS1, BBS4, POMC, NCOA1, RREB1, STAB1, TNXB**. Main text gives POMC examples: Morgan missense **NC_000002.12:g.25161709G>A / rs752644128**; Michelini panel truncating **NC_000002.12:g.25161269C>A / rs202127120**. **STAB1/TNXB** are ECM-compatible candidates, not replicated causal hits.

## 5. 305-gene panel in 162 patients

**Source:** Michelini et al., *Journal of Personalized Medicine* 2022. PMID 35207755; PMCID PMC8877075; DOI 10.3390/jpm12020268. https://pmc.ncbi.nlm.nih.gov/articles/PMC8877075/

Direct patient panel, but candidate/differential-diagnosis design. **162 Italian/American lipedema patients**, 305 genes. Reported **21 predicted deleterious variants** in **17 patients** in: **PLIN1, LIPE, ALDH18A1, PPARG, GHR, INSR, RYR1, NPC1, POMC, NR0B2, GCKR, PPARA**. These are best treated as overlap/mimic/modifier genes (lipodystrophy, obesity/endocrine/metabolic disorders), not validated lipedema genes.

## 6. Transcriptomic tissue genes

**Source:** *Plastic and Reconstructive Surgery Global Open* 2024. PMID 39525887; DOI 10.1097/GOX.0000000000006288. PubMed: https://pubmed.ncbi.nlm.nih.gov/39525887/

Direct subcutaneous tissue transcriptomics, not germline genetics. Sample: lipedema stage I **n=12**, II **n=9**, III **n=8** (total 29) versus hypertrophied subcutaneous tissue controls **n=4**; ClinicalTrials.gov **NCT05861583**.

Named genes from abstract: adipogenesis/adipocyte maturation **PRKG2, MEDAG, CSF1R, BICC1, ERBB4, ACP5**; lipid accumulation/hypertrophy/inflammation **MAFB, C1Q, C2, CD68, CD209, CD163, CD84, BCAT1, TREM2**. Evidence is direct tissue signature but not inherited-risk. Need missing supplement for log2FC/FDR/direction.

## 7. Multi-omics: Metabolism 2025 and AKT1 2026

**Metabolism 2025 source:** PMID 40097137; DOI 10.1016/j.metabol.2025.156191. PubMed: https://pubmed.ncbi.nlm.nih.gov/40097137/ ; ScienceDirect: https://www.sciencedirect.com/science/article/pii/S0026049525000605

Direct multi-omics, but full text blocked. Accessions: RNA-seq **PRJNA940039**, proteomics **PXD058489**. Abstract: adipokine dysregulation; local downregulation of inflammation factors in early/late lipedema tissue; upregulation of cellular respiration/OXPHOS/mitochondrial organization; serum trend toward increased VEGF; altered glutamic acid, glutathione, sphingolipids.

**AKT1 source:** Santella/Salvati/Papp et al., *Journal of Translational Medicine* 2026. PMID 41580786; DOI 10.1186/s12967-026-07726-w. https://link.springer.com/article/10.1186/s12967-026-07726-w

Direct advanced-stage subcutaneous adipose tissue multi-omics; not germline genetics. Accessible methods: lipedema tissue from extremity liposuction/reductive surgery; non-lipedema controls from breast reduction/abdominoplasty. Genome-wide methylation and RNA-seq used **n=8 total: 4 lipedema, 4 controls**. Methylation accession **E-MTAB-15365**. Effect direction: **AKT1 promoter hypomethylation**, increased AKT1 expression and AKT phosphorylation; mitochondrial/OXPHOS/TCA/FAO downregulation; ECM/sirtuin disruption; metabolites altered (L-arginine, NADP+, ATP, guanosine, glycerol, glutamate). Interesting mechanistic node, but very small and needs replication.

## Evidence classification

| Lead | Direct lipedema data? | Best interpretation |
|---|---|---|
| VEGFA / rs6905288 | Proxy GWAS + clinical replication | Strongest population lead, but proxy discovery and locus-level only |
| GRB14-COBLL1 / rs1128249 | Proxy GWAS + clinical replication | Strong population lead; A1 G protective in UKBB table, T risk direction |
| RSPO3, LYPLAL1, ADAMTS9, ANKRD55-MAP3K1, ZNF664/CCDC92 | Mostly proxy GWAS | plausible fat-distribution loci; not all clinically replicated |
| rs1409440 LHFPL6/LHFP region | Clinical GWAS | suggestive direct association; OR_meta ~2.01, P~3.98E-6 |
| AKR1C1 p.Leu213Gln | One family | concrete family candidate, not generalizable |
| AKR1C2 Ser320PheTer2/overexpression | Small candidate report | exploratory |
| TNXB/STAB1 | Family WES/pathway overlap | ECM candidates, not causal hits |
| PLIN1/LIPE/PPARG/etc. panel | Direct panel | overlap/mimic/modifier candidates, not validated lipedema genes |
| PRKG2/MEDAG/CSF1R/etc. | Direct tissue transcriptomics | mechanistic/biomarker signature, not inherited genetics |
| AKT1 | Direct n=4 vs n=4 multi-omics | mechanistic node in advanced disease; needs replication |

## Priority missing data next

1. Morgan 2024 `Suppl_TableS2.csv`: exact 469-gene variant table by family.
2. PRS Global Open 2024 transcriptomics supplement: log2FC/FDR/direction for PRKG2, MEDAG, CSF1R, etc.
3. Metabolism 2025 supplement: sample sizes by omics layer and DEG/protein effect directions; raw accessions PRJNA940039/PXD058489.
4. AKT1 2026 Springer supplements: parse if CpG IDs, transcript/protein fold-changes, or metabolite p-values are needed.
5. 2026 medRxiv clinical meta-analysis loci (preprint): GRB14-COBLL1 **rs6753142**, VEGFA **rs4711750**, ANKRD55-MAP3K1 **rs3936510**; useful but not peer-reviewed.
