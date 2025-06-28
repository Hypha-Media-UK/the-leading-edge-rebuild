// Offers page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Offers page loaded');
    
    // Initialize offers page functionality
    initializePromotionCards();
    initializeTermsModal();
    initializeAnimations();
});

// Initialize promotion card hover effects
function initializePromotionCards() {
    const promotionCards = document.querySelectorAll('.promotion-card');
    
    promotionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize terms modal functionality
function initializeTermsModal() {
    const modal = document.getElementById('terms-modal');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeTermsModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeTermsModal();
        }
    });
}

// Show terms modal for specific promotion
function showTerms(promotionId) {
    const modal = document.getElementById('terms-modal');
    const promotion = window.promotionsData.find(p => p.id === promotionId);
    
    if (!promotion) {
        console.error('Promotion not found:', promotionId);
        return;
    }
    
    // Update modal title
    document.getElementById('terms-modal-title').textContent = `${promotion.title} - Terms & Conditions`;
    
    // Populate terms list
    const termsList = document.getElementById('terms-list');
    termsList.innerHTML = '';
    
    promotion.terms.forEach(term => {
        const li = document.createElement('li');
        li.textContent = term;
        termsList.appendChild(li);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close terms modal
function closeTermsModal() {
    const modal = document.getElementById('terms-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize scroll animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe promotion cards for scroll animations
    const promotionCards = document.querySelectorAll('.promotion-card');
    promotionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe gift voucher section
    const voucherSection = document.querySelector('.gift-voucher-content');
    if (voucherSection) {
        voucherSection.style.opacity = '0';
        voucherSection.style.transform = 'translateY(30px)';
        voucherSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(voucherSection);
    }
}

// Add special effects to gift voucher buttons
function initializeGiftVoucherEffects() {
    const giftButtons = document.querySelectorAll('.btn.primary-special, .btn[href*="gift-voucher"]');
    
    giftButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.03)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Initialize feature items animation
function initializeFeatureItems() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        // Trigger animation when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(item);
    });
}

// Initialize all effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are rendered
    setTimeout(() => {
        initializeGiftVoucherEffects();
        initializeFeatureItems();
    }, 100);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
