const fs = require('fs');
const path = 'assets/css/style.css';

let content = fs.readFileSync(path, 'utf8');
let lines = content.split('\n');

// We want to keep up to line 733 (index 732)
let newLines = lines.slice(0, 733);

const enhancedCss = `
/* Social Login */
.social-login-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
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
`;

fs.writeFileSync(path, newLines.join('\n') + enhancedCss);
