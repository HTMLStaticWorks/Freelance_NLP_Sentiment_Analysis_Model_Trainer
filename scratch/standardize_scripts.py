import os

files = [
    "blog-autolabeling.html",
    "blog-entity-aware.html",
    "blog-multimodal.html",
    "blog-sarcasm.html",
    "blog-transformer.html",
    "blog-zero-shot.html",
    "service-audit.html",
    "service-domain-adaptation.html",
    "service-finetuning.html",
    "service-preprocessing.html",
    "service-details.html",
    "blog-details.html"
]

script_block = """    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/theme-toggle.js"></script>
    <script src="assets/js/rtl-toggle.js"></script>
    <script src="assets/js/animations.js"></script>"""

for filename in files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace existing theme/rtl scripts with the full standard block
        # We search for the pattern of scripts at the end
        if 'assets/js/theme-toggle.js' in content:
            # Simple replacement of the specific area
            import re
            content = re.sub(r'<script src="assets/js/theme-toggle.js"></script>\s*<script src="assets/js/rtl-toggle.js"></script>', script_block, content)
        else:
            # If not found, append before </body>
            content = content.replace('</body>', script_block + '\n</body>')
            
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Standardized scripts in {filename}")
    else:
        print(f"File {filename} not found")
