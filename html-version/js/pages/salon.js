// Salon page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Salon page loaded');
    
    // Initialize any salon-specific functionality here
    initializeGalleryHover();
    initializePhilosophyCards();
});

// Gallery hover effects
function initializeGalleryHover() {
    const galleryItems = document.querySelectorAll('.interior-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Philosophy cards hover effects
function initializePhilosophyCards() {
    const philosophyItems = document.querySelectorAll('.philosophy-item');
    
    philosophyItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}
