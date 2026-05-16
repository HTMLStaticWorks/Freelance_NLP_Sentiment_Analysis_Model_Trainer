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
        
        # Add a sidebar-col class to the lg-4 column
        content = content.replace('<div class="col-lg-4">', '<div class="col-lg-4 sidebar-col">')
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added sidebar-col class to {filename}")
    else:
        print(f"File {filename} not found")
