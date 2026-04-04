import os
import re
import json

def get_image_for_content(content):
    c = content.lower()
    if 'hermes' in c or 'recursive' in c or 'mcp' in c or 'logic pass' in c:
        return 'flowchart_hermes_reasoning.png'
    elif 'openclaw' in c or 'cli execution' in c or 'python sandbox' in c:
        return 'flowchart_openclaw_execution.png'
    elif 'trust vacuum' in c or 'xao' in c or 'slashing event' in c or 'slash' in c or 'burn' in c or 'integrity protocol' in c:
        if 'enclave' in c or 'bond' in c:
            return 'flowchart_enclave_contract.png'
        return 'flowchart_xao_integrity.png'
    elif 'consensus' in c or 'swarm' in c or 'voting' in c:
        return 'flowchart_swarm_consensus.png'
    elif 'enclave' in c or 'bond' in c:
        return 'flowchart_enclave_contract.png'
    else:
        return 'flowchart_swarm_consensus.png' # Fallback

def main():
    base_dir = "/home/xibalba/Projects/xibalba-solutions-site"
    charts_file = os.path.join(base_dir, "scripts", "charts.json")
    
    with open(charts_file, 'r', encoding='utf-8') as f:
        charts = json.load(f)
        
    # Group charts by file
    file_charts = {}
    for chart in charts:
        if chart['file'] not in file_charts:
            file_charts[chart['file']] = []
        file_charts[chart['file']].append(chart)
        
    for file_rel, file_chart_list in file_charts.items():
        filepath = os.path.join(base_dir, file_rel)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # We need to replace them dynamically
        # Regex to find <div class="mermaid"...> ... </div>
        pattern = re.compile(r'<div\s+class=["\']mermaid["\'][^>]*>.*?</div>', re.DOTALL | re.IGNORECASE)
        
        matches = list(pattern.finditer(content))
        if len(matches) != len(file_chart_list):
            print(f"Warning: Count mismatch in {file_rel}. Found {len(matches)} divs but {len(file_chart_list)} in json.")
            continue
            
        # Reconstruct the string from back to front to avoid shifting indices
        for i, match in reversed(list(enumerate(matches))):
            chart_info = file_chart_list[i]
            img_filename = get_image_for_content(chart_info['content'])
            
            # Figure out the relative path to screenshots/ based on depth
            depth = file_rel.count('/')
            prefix = '../' * depth if depth > 0 else ''
            
            # Maintain some of the old styling
            old_style = chart_info.get('original_style', '')
            if old_style and not 'margin' in old_style:
                old_style += ' margin: 2rem 0;'
                
            img_path = f"{prefix}screenshots/{img_filename}"
            img_tag = f'<img src="{img_path}" alt="Generated Cybernetic Architecture Diagram" style="max-width: 100%; border-radius: 12px; {old_style}" class="generated-flowchart">'
            
            # Splice
            start, end = match.span()
            content = content[:start] + img_tag + content[end:]
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Patched {len(matches)} charts in {file_rel}")

if __name__ == "__main__":
    main()
