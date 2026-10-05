#!/usr/bin/env python3
"""
TypesetOK Website CI Validation Script
Validates HTML syntax, CSS balance, JS syntax, asset references, and GitHub Pages requirements.
"""

import os
import sys
import re
import glob
from html.parser import HTMLParser

def log_pass(msg):
    print(f"  \033[92m[PASS]\033[0m {msg}")

def log_fail(msg):
    print(f"  \033[91m[FAIL]\033[0m {msg}")

def main():
    print("==================================================")
    print("TypesetOK Website — CI Integrity & Quality Checker")
    print("==================================================\n")

    has_errors = False

    # 1. Critical Files Check
    print("1. Checking Required Project Files:")
    required_files = [
        "index.html",
        "404.html",
        ".nojekyll",
        "site.webmanifest",
        "robots.txt",
        "sitemap.xml",
        "README.md",
        "assets/images/logo.jpg",
        "assets/images/favicon.svg",
        "assets/css/tokens.css",
        "assets/css/reset.css",
        "assets/css/main.css",
        "assets/css/components.css",
        "assets/css/a11y-motion.css",
        "assets/js/main.js",
        "assets/js/i18n.js",
        "assets/js/a11y.js",
        "assets/js/before-after.js"
    ]

    for f in required_files:
        if os.path.exists(f) and os.path.getsize(f) > 0:
            log_pass(f"{f} exists ({os.path.getsize(f)} bytes)")
        else:
            log_fail(f"Missing or empty file: {f}")
            has_errors = True

    # 2. HTML Tag Balance Validation
    print("\n2. Validating HTML Tag Balance & Well-formedness:")
    class TagChecker(HTMLParser):
        def __init__(self, filename):
            super().__init__()
            self.filename = filename
            self.stack = []
            self.void_tags = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}
            self.errors = []

        def handle_starttag(self, tag, attrs):
            if tag.lower() not in self.void_tags:
                self.stack.append(tag)

        def handle_endtag(self, tag):
            tag = tag.lower()
            if tag in self.void_tags:
                return
            if not self.stack:
                self.errors.append(f"Unexpected closing </{tag}> with empty stack")
                return
            last = self.stack.pop()
            if last != tag:
                self.errors.append(f"Mismatched tag: expected </{last}>, got </{tag}>")

    for html_file in ["index.html", "404.html"]:
        with open(html_file, "r", encoding="utf-8") as f:
            content = f.read()
        checker = TagChecker(html_file)
        checker.feed(content)
        if checker.errors or checker.stack:
            log_fail(f"{html_file} has errors: {checker.errors} (unclosed: {checker.stack})")
            has_errors = True
        else:
            log_pass(f"{html_file} is strictly well-formed with zero tag errors")

    # 3. Asset Reference Validation
    print("\n3. Validating Asset References (Relative paths):")
    for html_file in ["index.html", "404.html"]:
        with open(html_file, "r", encoding="utf-8") as f:
            html = f.read()
        srcs = re.findall(r'src=["\']([^"\']+)["\']', html)
        hrefs = re.findall(r'href=["\']([^"\']+)["\']', html)

        for src in srcs:
            if not src.startswith("http") and not src.startswith("//"):
                clean_src = src.split("?")[0].split("#")[0]
                if os.path.exists(clean_src):
                    log_pass(f"{html_file} -> src: {clean_src}")
                else:
                    log_fail(f"{html_file} -> broken src: {clean_src}")
                    has_errors = True

        for href in hrefs:
            if not href.startswith("http") and not href.startswith("#") and not href.startswith("//") and not href.startswith("mailto:"):
                clean_href = href.split("?")[0].split("#")[0]
                if clean_href == "./" or clean_href == "":
                    continue
                if os.path.exists(clean_href):
                    log_pass(f"{html_file} -> href: {clean_href}")
                else:
                    log_fail(f"{html_file} -> broken href: {clean_href}")
                    has_errors = True

    # 4. CSS Syntax & Rule Balances
    print("\n4. Validating CSS Syntax & Braces Balance:")
    for css in glob.glob("assets/css/*.css"):
        with open(css, "r", encoding="utf-8") as f:
            code = f.read()
        open_b = code.count('{')
        close_b = code.count('}')
        if open_b == close_b and open_b > 0:
            log_pass(f"{css} balanced: {open_b} rules")
        else:
            log_fail(f"{css} unbalanced: {open_b} open vs {close_b} close")
            has_errors = True

    # 5. JS Syntax & Brackets Balance
    print("\n5. Validating JS Syntax & Brackets Balance:")
    for js in glob.glob("assets/js/*.js"):
        with open(js, "r", encoding="utf-8") as f:
            code = f.read()
        stack = []
        pairs = {')': '(', ']': '[', '}': '{'}
        in_string = False
        str_char = ''
        in_comment = False
        in_multiline_comment = False
        js_err = []

        line_no = 1
        for idx, ch in enumerate(code):
            if ch == '\n':
                line_no += 1
                if in_comment:
                    in_comment = False
                continue
            if in_comment:
                continue
            if in_multiline_comment:
                if ch == '*' and idx + 1 < len(code) and code[idx + 1] == '/':
                    in_multiline_comment = False
                continue

            if not in_string:
                if ch == '/' and idx + 1 < len(code):
                    if code[idx + 1] == '/':
                        in_comment = True
                        continue
                    elif code[idx + 1] == '*':
                        in_multiline_comment = True
                        continue
                if ch in ('"', "'", '`'):
                    in_string = True
                    str_char = ch
                    continue
                if ch in '([{':
                    stack.append((ch, line_no))
                elif ch in ')]}':
                    if not stack:
                        js_err.append(f"Unexpected {ch} at line {line_no}")
                    else:
                        last, l_no = stack.pop()
                        if last != pairs[ch]:
                            js_err.append(f"Mismatched {last} (line {l_no}) with {ch} (line {line_no})")
            else:
                if ch == str_char and (idx == 0 or code[idx - 1] != '\\'):
                    in_string = False

        if js_err or stack:
            log_fail(f"{js} syntax error: {js_err} (unclosed: {stack})")
            has_errors = True
        else:
            log_pass(f"{js} syntax balanced")

    print("\n==================================================")
    if has_errors:
        print("\033[91mFAILED: CI Validation encountered errors.\033[0m")
        sys.exit(1)
    else:
        print("\033[92mSUCCESS: All CI integrity and quality checks passed.\033[0m")
        sys.exit(0)

if __name__ == "__main__":
    main()
