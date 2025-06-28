// Contact page JavaScript - simple placeholder functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact page loaded');
    
    // Initialize contact page functionality
    initializeFAQAccordion();
    initializeFormPlaceholder();
});

// Initialize FAQ accordion functionality
function initializeFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const index = item.getAttribute('data-index');
            toggleFAQ(index);
        });
    });
}

// Toggle FAQ item
function toggleFAQ(index) {
    const faqItem = document.querySelector(`.faq-item[data-index="${index}"]`);
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't already active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Initialize form placeholder functionality
function initializeFormPlaceholder() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        // Add focus effects to form fields
        const formFields = form.querySelectorAll('input, select, textarea');
        
        formFields.forEach(field => {
            field.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.01)';
            });
            
            field.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });
    }
}

// Handle form submission (placeholder)
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Simple placeholder functionality
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    
    // Show simple success message
    alert('Thank you for your booking request! We\'ll contact you shortly to confirm your appointment.');
    
    // Reset form
    event.target.reset();
    
    // In a real application, you would send this data to your backend
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    // });
}

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Initialize animations on scroll (optional enhancement)
function initializeScrollAnimations() {
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
    
    // Observe contact cards for scroll animations
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe FAQ items for scroll animations
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are rendered
    setTimeout(initializeScrollAnimations, 100);
});
