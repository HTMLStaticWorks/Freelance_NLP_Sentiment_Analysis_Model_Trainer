/**
 * RTL Toggle Script
 * Project: NLP Sentiment Analysis Model Trainer
 */

document.addEventListener('DOMContentLoaded', () => {
    const rtlToggle = document.getElementById('rtl-toggle');
    const htmlElement = document.documentElement;

    // Check for saved RTL preference
    const isRTL = localStorage.getItem('rtl-mode') === 'true';
    if (isRTL) {
        htmlElement.setAttribute('dir', 'rtl');
        rtlToggle.textContent = 'LTR';
    }

    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const currentlyRTL = htmlElement.getAttribute('dir') === 'rtl';
            if (currentlyRTL) {
                htmlElement.removeAttribute('dir');
                rtlToggle.textContent = 'RTL';
                localStorage.setItem('rtl-mode', 'false');
            } else {
                htmlElement.setAttribute('dir', 'rtl');
                rtlToggle.textContent = 'LTR';
                localStorage.setItem('rtl-mode', 'true');
            }
        });
    }
});
