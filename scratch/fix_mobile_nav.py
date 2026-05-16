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
    "service-preprocessing.html"
]

mobile_toggle = """                <button class="mobile-toggle">
                    <i class="fas fa-bars"></i>
                </button>"""

mobile_menu = """    <!-- Mobile Menu -->
    <div class="mobile-menu">
        <button class="mobile-close">
            <i class="fas fa-times"></i>
        </button>
        <div class="mobile-menu-links">
            <div class="mobile-dropdown">
                <a href="#" class="mobile-dropdown-toggle">Home <i class="fas fa-chevron-down ms-2"></i></a>
                <div class="mobile-dropdown-menu">
                    <a href="index.html">Layout 1</a>
                    <a href="home-2.html">Layout 2</a>
                </div>
            </div>
            <a href="services.html">Services</a>
            <a href="models.html">Models</a>
            <a href="domain-adaptation.html">Domain Adaptation</a>
            <a href="blog.html">Blog</a>
            <a href="contact.html">Contact</a>
            <a href="dashboard.html">Dashboard</a>
        </div>
        <div class="mobile-menu-actions">
            <button class="rtl-toggle btn btn-outline w-100">RTL</button>
            <button class="theme-toggle btn btn-outline w-100">
                <i class="fas fa-sun"></i> Theme
            </button>
            <a href="signup.html" class="btn btn-primary w-100">Sign Up</a>
        </div>
    </div>"""

for filename in files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Add mobile-toggle inside nav-actions if missing
        if 'mobile-toggle' not in content:
            content = content.replace('<a href="signup.html" class="btn btn-primary">Sign Up</a>', 
                                     '<a href="signup.html" class="btn btn-primary">Sign Up</a>\n' + mobile_toggle)
        
        # Add mobile-menu after navbar if missing
        if 'mobile-menu' not in content:
            content = content.replace('</nav>', '</nav>\n\n' + mobile_menu)
            
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed navigation in {filename}")
    else:
        print(f"File {filename} not found")
