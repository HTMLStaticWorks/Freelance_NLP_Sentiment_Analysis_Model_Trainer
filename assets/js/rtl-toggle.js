/**
 * RTL Toggle Script
 * Project: NLP Sentiment Analysis Model Trainer
 */

document.addEventListener('DOMContentLoaded', () => {
    const rtlToggles = document.querySelectorAll('.rtl-toggle');
    const htmlElement = document.documentElement;

    // Check for saved RTL preference
    const isRTL = localStorage.getItem('rtl-mode') === 'true';
    if (isRTL) {
        htmlElement.setAttribute('dir', 'rtl');
        rtlToggles.forEach(btn => btn.textContent = 'LTR');
    }

    rtlToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentlyRTL = htmlElement.getAttribute('dir') === 'rtl';
            if (currentlyRTL) {
                htmlElement.removeAttribute('dir');
                rtlToggles.forEach(b => b.textContent = 'RTL');
                localStorage.setItem('rtl-mode', 'false');
            } else {
                htmlElement.setAttribute('dir', 'rtl');
                rtlToggles.forEach(b => b.textContent = 'LTR');
                localStorage.setItem('rtl-mode', 'true');
            }
        });
    });
});
