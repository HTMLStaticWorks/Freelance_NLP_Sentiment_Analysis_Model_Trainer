/**
 * main.js
 * Core website logic and mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const menuToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-close');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (mobileClose && mobileMenu) {
        mobileClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Mobile Dropdown Toggle
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.closest('.mobile-dropdown');
            parent.classList.toggle('active');
        });
    });

    // Scroll Header
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Form Handling (Placeholder)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted successfully! (Demo Mode)');
        });
    });

    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.id = 'backToTop';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to Top');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Active Link Highlighting
    const currentPath = window.location.pathname;
    const page = currentPath.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav-links a, .mobile-menu-links a');

    // First, remove active class from all links and their parents
    allLinks.forEach(link => {
        link.classList.remove('active');
        const parentNav = link.closest('.dropdown')?.querySelector('.nav-item');
        if (parentNav) parentNav.classList.remove('active');
        
        const mobileDropdown = link.closest('.mobile-dropdown');
        if (mobileDropdown) {
            mobileDropdown.classList.remove('active');
            const toggle = mobileDropdown.querySelector('.mobile-dropdown-toggle');
            if (toggle) toggle.classList.remove('active');
        }
    });

    allLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === page || (page === 'index.html' && linkHref === '/')) {
            link.classList.add('active');

            // If it's a dropdown item, highlight the parent too
            if (link.classList.contains('dropdown-item')) {
                const parentDropdown = link.closest('.dropdown');
                const parentNav = parentDropdown?.querySelector('.nav-item');
                if (parentNav) parentNav.classList.add('active');
            }

            // For mobile dropdown items
            const mobileDropdownMenu = link.closest('.mobile-dropdown-menu');
            if (mobileDropdownMenu) {
                const mobileDropdown = mobileDropdownMenu.closest('.mobile-dropdown');
                if (mobileDropdown) {
                    mobileDropdown.classList.add('active');
                    const toggle = mobileDropdown.querySelector('.mobile-dropdown-toggle');
                    if (toggle) toggle.classList.add('active');
                }
            }
        }
    });

    // Dashboard Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const dashboardSidebar = document.querySelector('.dashboard-sidebar');
    
    if (sidebarToggle && dashboardSidebar) {
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dashboardSidebar.classList.toggle('active');
        });

        // Close sidebar button
        const sidebarClose = document.querySelector('.sidebar-close');
        if (sidebarClose) {
            sidebarClose.addEventListener('click', () => {
                dashboardSidebar.classList.remove('active');
            });
        }

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                if (!dashboardSidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                    dashboardSidebar.classList.remove('active');
                }
            }
        });
    }
});
