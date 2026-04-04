import os
import re
import json
import glob

def main():
    base_dir = "/home/xibalba/Projects/xibalba-solutions-site"
    charts_file = os.path.join(base_dir, "scripts", "charts.json")
    
    if not os.path.exists(charts_file):
        print(f"Error: {charts_file} does not exist. Cannot restore charts.")
        return
        
    with open(charts_file, 'r', encoding='utf-8') as f:
        charts = json.load(f)
        
    # Group charts by file
    file_charts = {}
    for chart in charts:
        if chart['file'] not in file_charts:
            file_charts[chart['file']] = []
        file_charts[chart['file']].append(chart)
        
    # Phase 1: Revert <img> to <div> for each file
    for file_rel, file_chart_list in file_charts.items():
        filepath = os.path.join(base_dir, file_rel)
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Pattern to find our injected images
        # <img src="..." alt="..." style="..." class="generated-flowchart">
        pattern = re.compile(r'<img\s+src=["\'][^>]*generated-flowchart["\'][^>]*>', re.DOTALL | re.IGNORECASE)
        
        matches = list(pattern.finditer(content))
        if len(matches) != len(file_chart_list):
            # Try to search for ANY class="generated-flowchart" as fallback
            pattern = re.compile(r'<img[^>]*class=["\']generated-flowchart["\'][^>]*>', re.DOTALL | re.IGNORECASE)
            matches = list(pattern.finditer(content))
            
        if len(matches) != len(file_chart_list):
            print(f"Warning: Count mismatch in {file_rel}. Found {len(matches)} images but {len(file_chart_list)} in json.")
            # We continue anyway to see if individual charts can be restored manually
            
        # Reconstruct string from back to front
        for i, match in reversed(list(enumerate(matches))):
            # This logic assumes the images were injected in the same order as the Mermaid divs were extracted
            # If the user added/removed things it might be messy, but for this task it should be 1-to-1.
            chart_info = file_chart_list[i]
            
            # Recreate the Mermaid <div>
            style_attr = f' style="{chart_info["original_style"]}"' if chart_info["original_style"] else ''
            mermaid_div = f'<div class="mermaid"{style_attr}>\n{chart_info["content"]}\n</div>'
            
            start, end = match.span()
            content = content[:start] + mermaid_div + content[end:]
            
        # Phase 2: Update mermaid.initialize in this content
        # Update the theme to a custom 2-color theme
        theme_script = """mermaid.initialize({
        startOnLoad: true,
        theme: 'base',
        themeVariables: {
            darkMode: true,
            primaryColor: '#00F2FF',
            primaryTextColor: '#000',
            primaryBorderColor: '#00F2FF',
            lineColor: '#FFD600',
            secondaryColor: '#FFD600',
            tertiaryColor: '#1e293b',
            edgeLabelBackground: '#000',
            nodeBorder: '#00F2FF',
            fontFamily: 'Raleway'
        }
    });"""
        
        # Replace existing mermaid.initialize script tags
        content = re.sub(r'mermaid.initialize\(\{.*?\}\);', theme_script.strip(), content, flags=re.DOTALL)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Restored and themed {len(matches)} charts in {file_rel}")

    # Also update any other HTML files that might have mermaid.initialize but no charts extracted
    all_html = glob.glob(os.path.join(base_dir, "**", "*.html"), recursive=True)
    for filepath in all_html:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if "mermaid.initialize" in content and "themeVariables" not in content:
            theme_script = """mermaid.initialize({
        startOnLoad: true,
        theme: 'base',
        themeVariables: {
            darkMode: true,
            primaryColor: '#00F2FF',
            primaryTextColor: '#000',
            primaryBorderColor: '#00F2FF',
            lineColor: '#FFD600',
            secondaryColor: '#FFD600',
            tertiaryColor: '#1e293b',
            edgeLabelBackground: '#000',
            nodeBorder: '#00F2FF',
            fontFamily: 'Raleway'
        }
    });"""
            content = re.sub(r'mermaid.initialize\(\{.*?\}\);', theme_script.strip(), content, flags=re.DOTALL)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated theme in {os.path.relpath(filepath, base_dir)}")

if __name__ == "__main__":
    main()
