#!/usr/bin/env python3
import os, subprocess, textwrap, datetime, pathlib, shlex
OUT = pathlib.Path('/home/tester/git/puto-lipedema/researches/20260630-215610-vibracion-plataforma-lipedema-estrenimiento/osint-results.md')
SCRIPT = '/home/tester/.hermes/profiles/lipedema/skills/research/chack-osint/scripts/chack_research.py'
if not os.path.exists(SCRIPT):
    SCRIPT = os.path.expanduser('~/.hermes/profiles/tg-dm-general/skills/research/chack-osint/scripts/chack_research.py')
queries = [
    ('serpapi','google_forums','lipedema vibration plate settings Hz oscillation bruising swelling'),
    ('serpapi','google_forums','"lipedema" "vibration plate" "Hz"'),
    ('serpapi','youtube','lipedema vibration plate lymphatic drainage settings Hz'),
    ('serpapi','youtube','whole body vibration constipation 12 Hz platform'),
    ('serpapi','google','"vibration plate" "lipedema" "12 Hz" OR "30 Hz"'),
    ('serpapi','google','"whole-body vibration" constipation "12 Hz" "2 mm"'),
    ('serpapi','bing','lipedema oscillation plate vibration platform settings frequency'),
    ('serpapi','google_news','lipedema vibration plate'),
    ('forumscout','reddit_posts','lipedema vibration plate'),
    ('forumscout','reddit_comments','lipedema vibration plate'),
    ('forumscout','reddit_posts','whole body vibration constipation'),
    ('forumscout','instagram','lipedema vibration plate'),
    ('forumscout','x','lipedema vibration plate'),
]

def run(args, timeout=90):
    try:
        p = subprocess.run(args, text=True, capture_output=True, timeout=timeout)
        return p.returncode, (p.stdout or '')[:12000], (p.stderr or '')[:4000]
    except Exception as e:
        return 999, '', repr(e)

lines=[]
lines.append('# OSINT / social / search worker results\n')
lines.append(f'Time: {datetime.datetime.now().isoformat()}\n')
lines.append(f'Helper exists: {os.path.exists(SCRIPT)} at `{SCRIPT}`\n')
lines.append('Secrets presence only: SERPAPI=%s, FORUMSCOUT=%s, BRAVE=%s\n' % (bool(os.getenv('SERPAPI_API_KEY') or os.getenv('SERPAPI_KEY')), bool(os.getenv('FORUMSCOUT_API_KEY')), bool(os.getenv('BRAVE_SEARCH_API_KEY') or os.getenv('BRAVE_API_KEY'))))
for family, engine, q in queries:
    lines.append(f'\n## {family} {engine}: `{q}`\n')
    if not os.path.exists(SCRIPT):
        lines.append('ERROR: helper missing\n'); continue
    code,out,err=run(['python', SCRIPT, family, engine, q, '-n', '10'])
    lines.append(f'Exit: {code}\n')
    if out: lines.append('```text\n'+out+'\n```\n')
    if err: lines.append('ERR:\n```text\n'+err+'\n```\n')
OUT.write_text('\n'.join(lines))
print(str(OUT))
