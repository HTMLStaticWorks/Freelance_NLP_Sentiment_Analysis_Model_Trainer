import os

files = ["signup.html", "login.html"]

for filename in files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove placeholders like "John Doe", "name@company.com", etc.
        import re
        content = re.sub(r'placeholder="[^"]*"', 'placeholder=""', content)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Removed placeholders from {filename}")
