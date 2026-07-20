#!/usr/bin/env python3
import os, subprocess, urllib.request, urllib.parse, json, re, datetime, pathlib
OUT = pathlib.Path('/home/tester/git/puto-lipedema/researches/20260630-215610-vibracion-plataforma-lipedema-estrenimiento/scientific-results.md')
SCRIPT = '/home/tester/.hermes/profiles/lipedema/skills/research/chack-osint/scripts/chack_research.py'
if not os.path.exists(SCRIPT):
    SCRIPT = os.path.expanduser('~/.hermes/profiles/tg-dm-general/skills/research/chack-osint/scripts/chack_research.py')
queries = [
 ('scientific','europe_pmc','"whole-body vibration" constipation'),
 ('scientific','openalex','"whole-body vibration" constipation'),
 ('serpapi','google_scholar','"Whole-body vibration for functional constipation" "12 Hz" "2 mm"'),
 ('serpapi','google_scholar','"whole body vibration" "postnatal constipation"'),
 ('serpapi','google_scholar','"low-frequency vibrotherapy" lipedema Hz'),
 ('serpapi','google_scholar','"whole body vibration" lymphatic drainage edema microcirculation frequency'),
 ('serpapi','google_scholar','"whole body vibration" cutaneous blood flow frequency amplitude'),
 ('serpapi','google_scholar','"vibration therapy" constipation review'),
]
pmids = ['22966839','29847188','37482821','30843436','41023293']

def run(args, timeout=120):
    try:
        p=subprocess.run(args,text=True,capture_output=True,timeout=timeout)
        return p.returncode,(p.stdout or '')[:14000],(p.stderr or '')[:4000]
    except Exception as e:
        return 999,'',repr(e)

def pubmed(pmid):
    url=f'https://pubmed.ncbi.nlm.nih.gov/{pmid}/'
    try:
        html=urllib.request.urlopen(url,timeout=25).read().decode('utf-8','ignore')
        title=re.search(r'<title>(.*?)</title>',html,re.S)
        abstract=re.search(r'<div class="abstract-content selected".*?>(.*?)</div>',html,re.S)
        return url, re.sub(r'\s+',' ',re.sub('<.*?>',' ',title.group(1))).strip() if title else '', re.sub(r'\s+',' ',re.sub('<.*?>',' ',abstract.group(1))).strip() if abstract else 'NO ABSTRACT FOUND'
    except Exception as e:
        return url,'ERROR',repr(e)

def crossref_title(q):
    try:
        u='https://api.crossref.org/works?rows=5&query.title='+urllib.parse.quote(q)
        return urllib.request.urlopen(u,timeout=25).read().decode('utf-8','ignore')[:10000]
    except Exception as e: return 'ERR '+repr(e)

lines=['# Scientific worker results\n', f'Time: {datetime.datetime.now().isoformat()}\n', f'Helper exists: {os.path.exists(SCRIPT)} at `{SCRIPT}`\n']
lines.append('\n## PubMed abstracts\n')
for pmid in pmids:
    url,title,abs=pubmed(pmid)
    lines.append(f'### PMID {pmid}\nURL: {url}\nTitle: {title}\n\nAbstract:\n{abs}\n')
lines.append('\n## Crossref details\n')
for q in ['Whole-body vibration for functional constipation', 'Low-frequency vibrotherapy considerably improves effectiveness manual lymphatic drainage lipedema', 'Effect Of Six Weeks Of Whole-Body Vibration In Treatment Of Postnatal Constipation']:
    lines.append(f'### {q}\n```json\n{crossref_title(q)}\n```\n')
lines.append('\n## Chack scientific/search queries\n')
for family,engine,q in queries:
    lines.append(f'\n### {family} {engine}: `{q}`\n')
    if os.path.exists(SCRIPT):
        code,out,err=run(['python',SCRIPT,family,engine,q,'-n','10'])
        lines.append(f'Exit: {code}\n')
        if out: lines.append('```text\n'+out+'\n```\n')
        if err: lines.append('ERR:\n```text\n'+err+'\n```\n')
    else: lines.append('ERROR: helper missing\n')
OUT.write_text('\n'.join(lines))
print(str(OUT))
