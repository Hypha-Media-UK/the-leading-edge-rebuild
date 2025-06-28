// Main JavaScript file - Core functionality with GSAP
// IE11 compatible code

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core functionality
    initHeader();
    initScrollEffects();
    initMobileMenu();
});

// Header functionality
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    // Scroll effect for header
    let isScrolled = false;
    
    function handleScroll() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const shouldBeScrolled = scrollY > 50;
        
        if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;
            
            if (isScrolled) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }
    
    // Throttle scroll events for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
            setTimeout(function() { ticking = false; }, 16);
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    
    if (!menuToggle || !hamburger || !nav) return;
    
    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            hamburger.classList.add('active');
            nav.classList.add('active');
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    function closeMenu() {
        if (isMenuOpen) {
            isMenuOpen = false;
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Toggle menu on click
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on nav links
    const navLinks = nav.querySelectorAll('a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 27 && isMenuOpen) { // Escape key
            closeMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1200 && isMenuOpen) {
            closeMenu();
        }
    });
}

// Scroll effects and animations
function initScrollEffects() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Calculate offset for fixed header
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                // Smooth scroll using GSAP if available, fallback to native
                if (typeof gsap !== 'undefined') {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: targetPosition,
                        ease: "power2.out"
                    });
                } else {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const later = function() {
            clearTimeout(timeout);
            func.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function() { inThrottle = false; }, limit);
        }
    };
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    for (let i = 0; i < navLinks.length; i++) {
        const link = navLinks[i];
        const href = link.getAttribute('href');
        
        // Remove existing active class
        link.classList.remove('active');
        
        // Add active class to current page link
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    }
}

// Initialize active nav link
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Export functions for use in other scripts (if needed)
window.LeadingEdge = window.LeadingEdge || {};
window.LeadingEdge.core = {
    debounce: debounce,
    throttle: throttle,
    setActiveNavLink: setActiveNavLink
};
