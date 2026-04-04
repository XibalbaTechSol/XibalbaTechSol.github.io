import os
import glob
import json
from bs4 import BeautifulSoup

def main():
    base_dir = "/home/xibalba/Projects/xibalba-solutions-site"
    html_files = glob.glob(os.path.join(base_dir, "**", "*.html"), recursive=True)
    
    charts = []
    
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            soup = BeautifulSoup(content, 'html.parser')
            mermaids = soup.find_all("div", class_="mermaid")
            
            for i, mermaid in enumerate(mermaids):
                rel_path = os.path.relpath(filepath, base_dir)
                chart_text = mermaid.get_text(strip=False).strip()
                style = mermaid.get("style", "")
                
                charts.append({
                    "id": f"{rel_path.replace('/', '_').replace('.html', '')}_chart_{i}",
                    "file": rel_path,
                    "index": i,
                    "content": chart_text,
                    "original_style": style
                })
                
    output_path = os.path.join(base_dir, "scripts", "charts.json")
    with open(output_path, 'w', encoding='utf-8') as out:
        json.dump(charts, out, indent=2)
        
    print(f"Extracted {len(charts)} Mermaid charts to {output_path}")

if __name__ == "__main__":
    main()
