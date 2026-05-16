import os

files = [
    "service-audit.html",
    "service-domain-adaptation.html",
    "service-finetuning.html",
    "service-preprocessing.html",
    "service-details.html"
]

for filename in files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Adjust the sticky top offset
        content = content.replace('sticky-top" style="top: 120px;"', 'sticky-top" style="top: 180px;"')
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Adjusted sidebar in {filename}")
    else:
        print(f"File {filename} not found")
