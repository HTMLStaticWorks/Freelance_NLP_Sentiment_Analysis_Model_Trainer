import sys

file_path = r'c:\Users\sriva\OneDrive\Desktop\may websites\Freelance_NLP_Sentiment_Analysis_Model_Trainer\assets\css\style.css'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the last good line
# We know line 733 is "[data-theme="dark"] .bg-dark-subtle {\n"
# No, wait, line 733 is "}\n" in my last view? 
# Let's check view_file output again.
# 731: [data-theme="dark"] .bg-dark-subtle {
# 732:     background-color: rgba(15, 23, 42, 0.4) !important;
# 733: }

new_lines = lines[:733]

enhanced_css = """
/* Social Login */
.social-login-group {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.btn-social {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background: var(--surface-color);
    color: var(--text-primary);
    font-size: 1.5rem;
    transition: var(--transition-base);
    text-decoration: none;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.btn-social:hover {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(37, 99, 235, 0.2);
}

.btn-social i {
    transition: transform 0.3s ease;
}

.btn-social:hover i {
    transform: scale(1.1);
}

.divider {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 1.5rem 0;
    color: var(--secondary-color);
    font-size: 0.85rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.divider::before, .divider::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--border-color);
}

.divider:not(:empty)::before {
    margin-right: 1rem;
}

.divider:not(:empty)::after {
    margin-left: 1rem;
}
"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
    f.write(enhanced_css)
