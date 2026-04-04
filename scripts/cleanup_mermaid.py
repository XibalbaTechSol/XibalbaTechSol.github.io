import os
import glob
import re

def cleanup_mermaid_init(content):
    # Remove existing mermaid initialization scripts (multiline support)
    content = re.sub(r'<script>\s*mermaid\.initialize\(\{.*?\}\);\s*</script>', '', content, flags=re.DOTALL | re.IGNORECASE)
    content = re.sub(r'<script src="https://cdn\.jsdelivr\.net/npm/mermaid.*?"></script>', '', content, flags=re.IGNORECASE)
    
    # New footer block (load mermaid and initialize)
    mermaid_footer = """
    <!-- Mermaid: High-Fidelity Vector Flowcharts -->
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10.6.1/dist/mermaid.min.js"></script>
    <script>
        mermaid.initialize({
            startOnLoad: true,
            theme: 'base',
            themeVariables: {
                primaryColor: '#00F2FF',
                primaryTextColor: '#00F2FF',
                primaryBorderColor: '#00F2FF',
                lineColor: '#FFD600',
                secondaryColor: '#FFD600',
                tertiaryColor: '#1e293b',
                fontFamily: 'Raleway'
            }
        });
    </script>
    """
    
    # Find mermaid divs and strip internal 'style' lines
    def strip_style(match):
        div_opening = match.group(1)
        graph_content = match.group(2)
        # Strip lines starting with 'style ' or 'classDef ' or 'linkStyle '
        lines = graph_content.split('\n')
        clean_lines = [l for l in lines if not l.strip().startswith(('style ', 'classDef ', 'linkStyle '))]
        return f'{div_opening}\n{"\n".join(clean_lines)}\n</div>'

    content = re.sub(r'(<div\s+class=["\']mermaid["\'][^>]*>)(.*?)</div>', strip_style, content, flags=re.DOTALL | re.IGNORECASE)

    # Inject footer before </body>
    if '</body>' in content:
        content = content.replace('</body>', mermaid_footer + '\n</body>')
    else:
        content += mermaid_footer

    return content

def main():
    base_dir = "/home/xibalba/Projects/xibalba-solutions-site"
    html_files = glob.glob(os.path.join(base_dir, "**", "*.html"), recursive=True)
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if '<div class="mermaid"' in content or 'mermaid.initialize' in content:
            new_content = cleanup_mermaid_init(content)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Sanitized and Unified Mermaid in {os.path.relpath(filepath, base_dir)}")

if __name__ == "__main__":
    main()
