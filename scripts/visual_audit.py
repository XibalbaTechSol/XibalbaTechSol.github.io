import os
import subprocess
import sys

SCREENSHOT_DIR = "screenshots/audit"
REPORT_FILE = "reports/visual_audit_report.md"

PROMPT = """
You are a custom UI/UX Auditor. Analyze this screenshot from the Xibalba Solutions site.
The theme is 'Sovereign Obsidian' (Premium Technical Studio).
Criteria:
1. Palette: Deep Obsidian backgrounds with Indigo/Cyan highlights and soft atmospheric glows.
2. Typography: Premium Sans-Serif (Outfit for headers, Inter for body). Precise hierarchy.
3. Aesthetic: High-fidelity Glassmorphism (blur/translucency), smooth gradients, and visionary vibes.
4. Layout: Elegant, spacious, and visionary. Avoid 'Industrial' or 'Brutalist' clutter.

Provide a verdict: APPROVED or REJECTED.
If REJECTED, provide a specific fix instruction for the developer to achieve 'Sovereign Obsidian' excellence.
"""

def run_audit():
    # Ensure screenshot directory exists
    os.makedirs(SCREENSHOT_DIR, exist_ok=True) 
    os.makedirs(os.path.dirname(REPORT_FILE), exist_ok=True)
    
    if not os.path.exists(SCREENSHOT_DIR):
        print(f"Error: {SCREENSHOT_DIR} does not exist.")
        return

    screenshots = [f for f in os.listdir(SCREENSHOT_DIR) if f.endswith('.png')]
    results = []

    print(f"--- Starting Visual Audit of {len(screenshots)} images ---")

    for img in screenshots:
        img_path = os.path.join(SCREENSHOT_DIR, img)
        print(f"Auditing: {img}...")
        
        try:
            # Using the gemini CLI via subprocess to analyze the image
            # Note: The @ symbol is used to pass the file path to gemini
            cmd = ["gemini", "-p", PROMPT, f"@{img_path}"]
            output = subprocess.check_output(cmd, text=True)
            results.append(f"### {img}\n\n**Feedback:**\n{output}\n---\n")
        except Exception as e:
            print(f"Error auditing {img}: {e}")
            results.append(f"### {img}\n\n**Error:** Could not process image.\n---\n")

    with open(REPORT_FILE, "w") as f:
        f.write("# Visual UI/UX Audit Report\n\n")
        f.write("## Screenshots Audited:\n")
        for img in screenshots:
            f.write(f"- {img}\n")
        f.write("\n## LLM Analysis Results:\n\n")
        f.write("\n".join(results))

    print(f"Audit complete. Report generated at {REPORT_FILE}")

if __name__ == "__main__":
    run_audit()
