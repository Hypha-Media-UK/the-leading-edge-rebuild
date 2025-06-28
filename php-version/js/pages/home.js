// Home page JavaScript - GSAP animations and interactions
// IE11 compatible code

document.addEventListener('DOMContentLoaded', function() {
    // Initialize home page functionality
    initHeroAnimations();
    initTestimonialsCarousel();
    initScrollAnimations();
    initHoverEffects();
});

// Hero section animations
function initHeroAnimations() {
    if (typeof gsap === 'undefined') return;
    
    const heroContent = document.querySelector('.hero-content');
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    
    if (!heroContent) return;
    
    // Set initial states
    gsap.set([heroTitle, heroText, heroButtons], {
        opacity: 0,
        y: 30
    });
    
    // Create timeline for hero animations
    const heroTimeline = gsap.timeline({ delay: 0.5 });
    
    heroTimeline
        .to(heroTitle, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            ease: "power2.out"
        })
        .to(heroText, {
            duration: 0.6,
            opacity: 1,
            y: 0,
            ease: "power2.out"
        }, "-=0.4")
        .to(heroButtons, {
            duration: 0.5,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.3");
}

// Testimonials carousel functionality
function initTestimonialsCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    if (!carousel || slides.length === 0) return;
    
    let currentSlide = 0;
    let isAnimating = false;
    
    // Auto-advance interval
    let autoAdvanceInterval;
    
    function showSlide(index, direction) {
        if (isAnimating || index === currentSlide) return;
        
        isAnimating = true;
        const currentSlideEl = slides[currentSlide];
        const nextSlideEl = slides[index];
        
        // Remove active class from current slide
        currentSlideEl.classList.remove('active');
        
        if (typeof gsap !== 'undefined') {
            // GSAP animation
            const timeline = gsap.timeline({
                onComplete: function() {
                    isAnimating = false;
                    nextSlideEl.classList.add('active');
                    currentSlide = index;
                }
            });
            
            timeline
                .to(currentSlideEl, {
                    duration: 0.3,
                    opacity: 0,
                    x: direction === 'next' ? -50 : 50,
                    ease: "power2.in"
                })
                .set(nextSlideEl, {
                    opacity: 0,
                    x: direction === 'next' ? 50 : -50,
                    display: 'block'
                })
                .to(nextSlideEl, {
                    duration: 0.4,
                    opacity: 1,
                    x: 0,
                    ease: "power2.out"
                })
                .set(currentSlideEl, { display: 'none' });
        } else {
            // Fallback without GSAP
            setTimeout(function() {
                currentSlideEl.style.display = 'none';
                nextSlideEl.style.display = 'block';
                nextSlideEl.classList.add('active');
                currentSlide = index;
                isAnimating = false;
            }, 300);
        }
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next, 'next');
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev, 'prev');
    }
    
    function startAutoAdvance() {
        autoAdvanceInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoAdvance() {
        if (autoAdvanceInterval) {
            clearInterval(autoAdvanceInterval);
        }
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            stopAutoAdvance();
            nextSlide();
            startAutoAdvance();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            stopAutoAdvance();
            prevSlide();
            startAutoAdvance();
        });
    }
    
    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoAdvance);
    carousel.addEventListener('mouseleave', startAutoAdvance);
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoAdvance();
    });
    
    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoAdvance();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left - next slide
            } else {
                prevSlide(); // Swipe right - previous slide
            }
        }
    }
    
    // Start auto-advance
    startAutoAdvance();
}

// Scroll-triggered animations
function initScrollAnimations() {
    if (typeof gsap === 'undefined') return;
    
    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
        gsap.set(featureCards, { opacity: 0, y: 50 });
        
        gsap.to(featureCards, {
            scrollTrigger: {
                trigger: '.features-section',
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
    
    // Service cards animation
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
        gsap.set(serviceCards, { opacity: 0, y: 50 });
        
        gsap.to(serviceCards, {
            scrollTrigger: {
                trigger: '.services-preview-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            opacity: 1,
            y: 0,
            stagger: 0.15,
            ease: "power2.out"
        });
    }
    
    // Product items animation
    const productItems = document.querySelectorAll('.product-item');
    if (productItems.length > 0) {
        gsap.set(productItems, { opacity: 0, scale: 0.8 });
        
        gsap.to(productItems, {
            scrollTrigger: {
                trigger: '.products-showcase',
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
    
    // Instagram items animation
    const instagramItems = document.querySelectorAll('.instagram-item');
    if (instagramItems.length > 0) {
        gsap.set(instagramItems, { opacity: 0, scale: 0.9 });
        
        gsap.to(instagramItems, {
            scrollTrigger: {
                trigger: '.instagram-feed',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.4,
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            ease: "power2.out"
        });
    }
}

// Hover effects and interactions
function initHoverEffects() {
    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    duration: 0.3,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    ease: "power2.out"
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    duration: 0.3,
                    y: 0,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
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
    
    // Instagram item hover effects
    const instagramItems = document.querySelectorAll('.instagram-item');
    instagramItems.forEach(function(item) {
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
}

// Parallax effect for hero background (optional)
function initParallaxEffect() {
    if (typeof gsap === 'undefined') return;
    
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    gsap.to(hero, {
        scrollTrigger: {
            trigger: hero,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        backgroundPosition: '50% 100%',
        ease: "none"
    });
}

// Initialize parallax if ScrollTrigger is available
if (typeof gsap !== 'undefined' && gsap.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    document.addEventListener('DOMContentLoaded', initParallaxEffect);
}
