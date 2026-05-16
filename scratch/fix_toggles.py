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
    "service-finetuning.html"
]

for filename in files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace id="theme-toggle" with class="theme-toggle"
        # Since it already has class="btn btn-outline", we should append the class
        content = content.replace('id="theme-toggle" class="btn btn-outline"', 'class="theme-toggle btn btn-outline"')
        content = content.replace('id="rtl-toggle" class="btn btn-outline"', 'class="rtl-toggle btn btn-outline"')
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filename}")
    else:
        print(f"File {filename} not found")
