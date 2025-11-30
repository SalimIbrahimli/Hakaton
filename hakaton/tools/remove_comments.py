#!/usr/bin/env python3
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXT_HTML = {'.html', '.htm'}
EXT_JS = {'.js'}
EXT_CSS = {'.css'}
EXT_PY = {'.py'}

def remove_html_comments(text):
    # remove <!-- ... -->
    return re.sub(r'<!--([\s\S]*?)-->','', text)

def remove_css_comments(text):
    # remove /* ... */
    text = re.sub(r'/\*([\s\S]*?)\*/', '', text)
    return text

def remove_js_comments(text):
    # remove /* ... */ first, then // comments
    text = re.sub(r'/\*([\s\S]*?)\*/', '', text)
    text = re.sub(r'//.*?$', '', text, flags=re.M)
    return text

def remove_py_comments(text):
    # remove triple-quoted strings (both ''' and """) and hash comments
    text = re.sub(r'(?:"""|\'\'\')(?:.|\n)*?(?:"""|\'\'\')', '', text)
    text = re.sub(r'#.*?$', '', text, flags=re.M)
    return text

COUNT = 0

for p in ROOT.rglob('*'):
    if p.is_file():
        ext = p.suffix.lower()
        try:
            s = p.read_text(encoding='utf-8')
        except Exception:
            # skip binary or unreadable files
            continue
        orig = s
        if ext in EXT_HTML:
            s = remove_html_comments(s)
        elif ext in EXT_CSS:
            s = remove_css_comments(s)
        elif ext in EXT_JS:
            s = remove_js_comments(s)
        elif ext in EXT_PY:
            s = remove_py_comments(s)
        else:
            continue
        if s != orig:
            p.write_text(s, encoding='utf-8')
            COUNT += 1
            print(f"Stripped comments: {p.relative_to(ROOT)}")

print(f"Done. Files modified: {COUNT}")
