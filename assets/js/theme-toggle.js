/**
 * theme-toggle.js
 * Handles theme switching and persistence
 */

const themeToggles = document.querySelectorAll('.theme-toggle');
const body = document.documentElement;

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateToggleIcons(savedTheme);

themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcons(newTheme);
    });
});

function updateToggleIcons(theme) {
    themeToggles.forEach(toggle => {
        const icon = toggle.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    });
}
