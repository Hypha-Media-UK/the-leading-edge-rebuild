// Services page JavaScript - GSAP-powered tab functionality
// IE11 compatible code

document.addEventListener('DOMContentLoaded', function() {
    // Initialize services page functionality
    initServicesTabs();
    initScrollAnimations();
    initHoverEffects();
});

// Services tabs functionality
function initServicesTabs() {
    const mainTabs = document.querySelectorAll('.main-tab');
    const subTabsGroups = document.querySelectorAll('.sub-tabs-group');
    const contentSections = document.querySelectorAll('.content-section');
    
    let currentMainTab = 'allHair';
    let currentSubTab = 'cuttingStyling';
    
    // Main tab click handlers
    for (let i = 0; i < mainTabs.length; i++) {
        mainTabs[i].addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            if (tabId !== currentMainTab) {
                setActiveMainTab(tabId);
            }
        });
    }
    
    // Sub tab click handlers
    const subTabs = document.querySelectorAll('.sub-tab');
    for (let i = 0; i < subTabs.length; i++) {
        subTabs[i].addEventListener('click', function() {
            const subTabId = this.getAttribute('data-sub-tab');
            if (subTabId !== currentSubTab) {
                setActiveSubTab(subTabId);
            }
        });
    }
    
    function setActiveMainTab(tabId) {
        // Update main tab active state
        for (let i = 0; i < mainTabs.length; i++) {
            mainTabs[i].classList.remove('active');
        }
        
        const activeMainTab = document.querySelector('.main-tab[data-tab="' + tabId + '"]');
        if (activeMainTab) {
            activeMainTab.classList.add('active');
        }
        
        // Hide all sub-tab groups
        for (let i = 0; i < subTabsGroups.length; i++) {
            subTabsGroups[i].classList.remove('active');
        }
        
        // Show relevant sub-tab group
        const activeSubTabGroup = document.querySelector('.sub-tabs-group[data-main-tab="' + tabId + '"]');
        if (activeSubTabGroup) {
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(activeSubTabGroup, 
                    { opacity: 0, y: 20 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.3,
                        onStart: function() {
                            activeSubTabGroup.classList.add('active');
                        }
                    }
                );
            } else {
                activeSubTabGroup.classList.add('active');
            }
        }
        
        // Set default sub-tab based on main tab
        let defaultSubTab;
        if (tabId === 'allHair') {
            defaultSubTab = 'cuttingStyling';
        } else if (tabId === 'beautyNails') {
            defaultSubTab = 'bodyWaxing';
        } else if (tabId === 'massageAesthetics') {
            defaultSubTab = 'bodyMassage';
        }
        
        currentMainTab = tabId;
        
        // Reset sub-tab active states
        const currentSubTabs = activeSubTabGroup ? activeSubTabGroup.querySelectorAll('.sub-tab') : [];
        for (let i = 0; i < currentSubTabs.length; i++) {
            currentSubTabs[i].classList.remove('active');
        }
        
        // Set default sub-tab as active
        const defaultSubTabElement = activeSubTabGroup ? activeSubTabGroup.querySelector('.sub-tab[data-sub-tab="' + defaultSubTab + '"]') : null;
        if (defaultSubTabElement) {
            defaultSubTabElement.classList.add('active');
        }
        
        currentSubTab = defaultSubTab;
        showContentSection(currentMainTab + '-' + currentSubTab);
    }
    
    function setActiveSubTab(subTabId) {
        // Update sub-tab active state
        const activeSubTabGroup = document.querySelector('.sub-tabs-group.active');
        if (activeSubTabGroup) {
            const subTabs = activeSubTabGroup.querySelectorAll('.sub-tab');
            for (let i = 0; i < subTabs.length; i++) {
                subTabs[i].classList.remove('active');
            }
            
            const activeSubTab = activeSubTabGroup.querySelector('.sub-tab[data-sub-tab="' + subTabId + '"]');
            if (activeSubTab) {
                activeSubTab.classList.add('active');
            }
        }
        
        currentSubTab = subTabId;
        showContentSection(currentMainTab + '-' + currentSubTab);
    }
    
    function showContentSection(contentId) {
        // Hide all content sections
        for (let i = 0; i < contentSections.length; i++) {
            const section = contentSections[i];
            
            if (section.classList.contains('active')) {
                if (typeof gsap !== 'undefined') {
                    gsap.to(section, {
                        duration: 0.2,
                        opacity: 0,
                        y: -20,
                        onComplete: function() {
                            section.classList.remove('active');
                            section.style.opacity = '';
                            section.style.transform = '';
                        }
                    });
                } else {
                    section.classList.remove('active');
                }
            }
        }
        
        // Show target content section
        const targetSection = document.querySelector('.content-section[data-content="' + contentId + '"]');
        if (targetSection) {
            if (typeof gsap !== 'undefined') {
                setTimeout(function() {
                    targetSection.classList.add('active');
                    gsap.fromTo(targetSection,
                        { opacity: 0, y: 20 },
                        { 
                            opacity: 1, 
                            y: 0, 
                            duration: 0.4,
                            ease: "power2.out"
                        }
                    );
                }, 200);
            } else {
                setTimeout(function() {
                    targetSection.classList.add('active');
                }, 200);
            }
        }
    }
}

// Scroll-triggered animations
function initScrollAnimations() {
    if (typeof gsap === 'undefined') return;
    
    // Page header animation
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) {
        gsap.fromTo(pageHeader.querySelector('h1'),
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                delay: 0.2,
                ease: "power2.out"
            }
        );
        
        gsap.fromTo(pageHeader.querySelector('p'),
            { opacity: 0, y: 20 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.6,
                delay: 0.4,
                ease: "power2.out"
            }
        );
    }
    
    // Services intro animation
    const introContent = document.querySelector('.services-intro .intro-content');
    if (introContent) {
        const introParagraphs = introContent.querySelectorAll('p');
        gsap.set(introParagraphs, { opacity: 0, y: 30 });
        
        gsap.to(introParagraphs, {
            scrollTrigger: {
                trigger: introContent,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "power2.out"
        });
    }
    
    // Main tabs animation
    const mainTabs = document.querySelectorAll('.main-tab');
    if (mainTabs.length > 0) {
        gsap.set(mainTabs, { opacity: 0, y: 30 });
        
        gsap.to(mainTabs, {
            scrollTrigger: {
                trigger: '.main-tabs-container',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.5,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power2.out"
        });
    }
    
    // Service items animation
    const serviceItems = document.querySelectorAll('.service-item');
    if (serviceItems.length > 0) {
        gsap.set(serviceItems, { opacity: 0, x: -30 });
        
        gsap.to(serviceItems, {
            scrollTrigger: {
                trigger: '.services-list',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.4,
            opacity: 1,
            x: 0,
            stagger: 0.1,
            ease: "power2.out"
        });
    }
    
    // Gallery items animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        gsap.set(galleryItems, { opacity: 0, scale: 0.8 });
        
        gsap.to(galleryItems, {
            scrollTrigger: {
                trigger: '.service-gallery',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.5,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
    }
}

// Hover effects and interactions
function initHoverEffects() {
    // Main tab hover effects
    const mainTabs = document.querySelectorAll('.main-tab');
    mainTabs.forEach(function(tab) {
        tab.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active') && typeof gsap !== 'undefined') {
                gsap.to(this, {
                    duration: 0.2,
                    scale: 1.05,
                    ease: "power2.out"
                });
            }
        });
        
        tab.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active') && typeof gsap !== 'undefined') {
                gsap.to(this, {
                    duration: 0.2,
                    scale: 1,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // Sub tab hover effects
    const subTabs = document.querySelectorAll('.sub-tab');
    subTabs.forEach(function(tab) {
        tab.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active') && typeof gsap !== 'undefined') {
                gsap.to(this, {
                    duration: 0.2,
                    y: -3,
                    ease: "power2.out"
                });
            }
        });
        
        tab.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active') && typeof gsap !== 'undefined') {
                gsap.to(this, {
                    duration: 0.2,
                    y: 0,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // Service item hover effects
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(item, {
                    duration: 0.3,
                    y: -8,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                    ease: "power2.out"
                });
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(item, {
                    duration: 0.3,
                    y: 0,
                    boxShadow: "0 5px 15px rgba(64, 78, 92, 0.05)",
                    ease: "power2.out"
                });
            }
        });
    });
    
    // Gallery item hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item) {
        const img = item.querySelector('img');
        if (!img) return;
        
        item.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(img, {
                    duration: 0.4,
                    scale: 1.1,
                    ease: "power2.out"
                });
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(img, {
                    duration: 0.4,
                    scale: 1,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(btn, {
                    duration: 0.2,
                    scale: 1.05,
                    ease: "power2.out"
                });
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(btn, {
                    duration: 0.2,
                    scale: 1,
                    ease: "power2.out"
                });
            }
        });
    });
}

// Initialize ScrollTrigger if available
if (typeof gsap !== 'undefined' && gsap.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}

// Export functions for debugging (optional)
window.ServicesPage = window.ServicesPage || {};
window.ServicesPage.initServicesTabs = initServicesTabs;
window.ServicesPage.initScrollAnimations = initScrollAnimations;
window.ServicesPage.initHoverEffects = initHoverEffects;
