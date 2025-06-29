// Home page specific JavaScript

// Home page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Testimonials slider functionality (if needed)
    const testimonialsTrack = document.querySelector('.testimonials-track');
    if (testimonialsTrack) {
        // Add any testimonials-specific functionality here
        // For now, the grid layout handles the display
    }

    // Instagram feed interactions
    const instagramItems = document.querySelectorAll('.instagram-item');
    instagramItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Add hover effects if needed beyond CSS
        });
    });

    // Products showcase interactions
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click functionality if needed
        });
    });

    // GSAP specific animations for home page
    if (typeof gsap !== 'undefined') {
        
        // Products grid animation
        gsap.utils.toArray('.product-item').forEach((item, index) => {
            gsap.fromTo(item,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Instagram grid animation
        gsap.utils.toArray('.instagram-item').forEach((item, index) => {
            gsap.fromTo(item,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: index * 0.05,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Call to action animation
        const ctaSection = document.querySelector('.call-to-action');
        if (ctaSection) {
            gsap.fromTo(ctaSection.querySelector('.cta-content'),
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ctaSection,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    }
});
