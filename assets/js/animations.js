/**
 * animations.js
 * GSAP implementations
 */

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Hero Animations
    gsap.from('.hero-content > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Reveal on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleClass: 'reveal-visible',
                once: true
            }
        });
    });

    // Metric Cards Counter Animation
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        const value = parseInt(metric.innerText);
        gsap.from(metric, {
            scrollTrigger: {
                trigger: metric,
                start: 'top 90%'
            },
            innerText: 0,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out'
        });
    });
});
