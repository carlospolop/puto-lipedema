#!/usr/bin/env bash
set -u
OUTDIR="/home/tester/git/puto-lipedema/researches/20260701-153705-super-remedios-estrenimiento"
SCRIPT="${HERMES_HOME:-$HOME/.hermes}/skills/research/chack-osint/scripts/chack_research.py"
[ -f "$SCRIPT" ] || SCRIPT="$HOME/.hermes/profiles/tg-dm-general/skills/research/chack-osint/scripts/chack_research.py"
{
  echo "# Source collection log"
  date
  echo "Helper: $SCRIPT"
  echo "SERPAPI present: $([ -n "${SERPAPI_API_KEY:-${SERPAPI_KEY:-}}" ] && echo yes || echo no)"
  echo "FORUMSCOUT present: $([ -n "${FORUMSCOUT_API_KEY:-}" ] && echo yes || echo no)"
} > "$OUTDIR/source-collection-log.md"
run(){ name="$1"; shift; echo "## $name" >> "$OUTDIR/source-collection-log.md"; "$@" > "$OUTDIR/$name.txt" 2>&1; echo "exit=$?" >> "$OUTDIR/source-collection-log.md"; }
run scientific-guidelines python "$SCRIPT" scientific europe_pmc "chronic constipation guideline polyethylene glycol prucalopride linaclotide lubiprostone plecanatide biofeedback"
run scientific-diet python "$SCRIPT" scientific europe_pmc "dietary management chronic constipation psyllium kiwi prunes magnesium sulfate mineral water probiotic guideline"
run scientific-oic python "$SCRIPT" scientific europe_pmc "opioid induced constipation naldemedine naloxegol methylnaltrexone guideline"
run scientific-dyssynergia python "$SCRIPT" scientific europe_pmc "dyssynergic defecation biofeedback randomized trial constipation"
run scientific-methane python "$SCRIPT" scientific europe_pmc "intestinal methanogen overgrowth methane constipation neomycin rifaximin"
run serpapi-scholar-drugs python "$SCRIPT" serpapi google_scholar "chronic constipation linaclotide plecanatide lubiprostone prucalopride tenapanor elobixibat review"
run serpapi-google-forums python "$SCRIPT" serpapi google_forums "constipation what worked psyllium kiwi magnesium PEG reddit IBS-C"
run serpapi-youtube python "$SCRIPT" serpapi youtube "constipation relief psyllium kiwi magnesium PEG pelvic floor biofeedback"
run forum-reddit-posts python "$SCRIPT" forumscout reddit_posts "constipation psyllium PEG magnesium kiwi pelvic floor"
run forum-reddit-comments python "$SCRIPT" forumscout reddit_comments "IBS-C constipation linaclotide prucalopride magnesium psyllium"
python - <<'PY' > "$OUTDIR/pmc-key-extracts.md" 2>&1
import urllib.request, re, html
urls = [
('AGA_ACG_CIC_2023','https://pmc.ncbi.nlm.nih.gov/articles/PMC10542656/'),
('BDA_diet_constipation_2025','https://pmc.ncbi.nlm.nih.gov/articles/PMC12623288/'),
('OIC_AGA_technical_review','https://pmc.ncbi.nlm.nih.gov/articles/PMC6685294/'),
('Biofeedback_dyssynergia_review','https://pmc.ncbi.nlm.nih.gov/articles/PMC4087765/'),
('Biofeedback_longterm_RCT','https://pmc.ncbi.nlm.nih.gov/articles/PMC3910270/'),
('Biofeedback_superior_RCT','https://pmc.ncbi.nlm.nih.gov/articles/PMC3855426/'),
('Methane_IMO_constipation','https://pmc.ncbi.nlm.nih.gov/articles/PMC11308632/'),
('Estrobolome_beta_glucuronidase','https://pmc.ncbi.nlm.nih.gov/articles/PMC10416750/'),
('Mineral_water_constipation','https://pmc.ncbi.nlm.nih.gov/articles/PMC7400933/'),
('Magnesium_oxide_RCT','https://pmc.ncbi.nlm.nih.gov/articles/PMC6786451/'),
]
for name,url in urls:
    print(f"\n# {name}\n{url}")
    try:
        txt=urllib.request.urlopen(url,timeout=25).read().decode('utf-8','ignore')
    except Exception as e:
        print('ERROR',e); continue
    text=re.sub('<script.*?</script>|<style.*?</style>',' ',txt,flags=re.S)
    text=re.sub('<[^>]+>',' ',text)
    text=html.unescape(re.sub(r'\s+',' ',text))
    for kw in ['recommend','strong','conditional','polyethylene','psyllium','kiwi','prune','magnesium','biofeedback','naldemedine','naloxegol','methylnaltrexone','methane','linaclotide','plecanatide','lubiprostone','prucalopride','safety','adverse']:
        idx=text.lower().find(kw.lower())
        if idx!=-1:
            print(f"\n## around {kw}\n"+text[max(0,idx-700):idx+1200])
PY
