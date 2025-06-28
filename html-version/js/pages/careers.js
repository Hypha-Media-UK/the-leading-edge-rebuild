// Careers page JavaScript - placeholder functionality with modals
document.addEventListener('DOMContentLoaded', function() {
    console.log('Careers page loaded');
    
    // Initialize careers page functionality
    initializeBenefitCards();
    initializePositionCards();
    initializeModal();
    initializeApplicationForm();
    initializeAnimations();
});

// Initialize benefit card hover effects
function initializeBenefitCards() {
    const benefitCards = document.querySelectorAll('.benefit-item');
    
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize position card hover effects
function initializePositionCards() {
    const positionCards = document.querySelectorAll('.position-card');
    
    positionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize modal functionality
function initializeModal() {
    const modal = document.getElementById('position-modal');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closePositionDetails();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closePositionDetails();
        }
    });
}

// Show position details modal
function showPositionDetails(positionId) {
    const modal = document.getElementById('position-modal');
    const position = window.positionsData.find(p => p.id === positionId);
    
    if (!position) {
        console.error('Position not found:', positionId);
        return;
    }
    
    // Populate modal content
    document.getElementById('modal-position-title').textContent = position.title;
    document.getElementById('modal-position-type').textContent = position.type;
    document.getElementById('modal-position-location').querySelector('span').textContent = position.location;
    document.getElementById('modal-position-description').textContent = position.description;
    
    // Populate responsibilities
    const responsibilitiesList = document.getElementById('modal-position-responsibilities');
    responsibilitiesList.innerHTML = '';
    position.responsibilities.forEach(responsibility => {
        const li = document.createElement('li');
        li.textContent = responsibility;
        responsibilitiesList.appendChild(li);
    });
    
    // Populate requirements
    const requirementsList = document.getElementById('modal-position-requirements');
    requirementsList.innerHTML = '';
    position.requirements.forEach(requirement => {
        const li = document.createElement('li');
        li.textContent = requirement;
        requirementsList.appendChild(li);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close position details modal
function closePositionDetails() {
    const modal = document.getElementById('position-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize application form
function initializeApplicationForm() {
    const form = document.querySelector('.application-form');
    
    if (form) {
        // Add focus effects to form fields
        const formFields = form.querySelectorAll('input, select, textarea');
        
        formFields.forEach(field => {
            field.addEventListener('focus', function() {
                this.style.borderColor = '#d4a574';
            });
            
            field.addEventListener('blur', function() {
                this.style.borderColor = '#f8f9fa';
            });
        });
        
        // File upload styling
        const fileInput = document.getElementById('resume');
        if (fileInput) {
            fileInput.addEventListener('change', function() {
                const fileName = this.files[0] ? this.files[0].name : 'No file selected';
                const fileInfo = this.parentElement.querySelector('.file-info');
                if (fileInfo) {
                    fileInfo.textContent = fileName;
                }
            });
        }
    }
}

// Handle application form submission (placeholder)
function handleApplicationSubmit(event) {
    event.preventDefault();
    
    // Simple placeholder functionality
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.log('Application submitted:', data);
    
    // Show simple success message
    alert('Thank you for your application! We\'ll review your submission and get back to you soon.');
    
    // Reset form
    event.target.reset();
    
    // Reset file info text
    const fileInfo = document.querySelector('.file-info');
    if (fileInfo) {
        fileInfo.textContent = 'PDF or Word document (max 5MB)';
    }
    
    // In a real application, you would send this data to your backend
    // fetch('/api/careers/apply', {
    //     method: 'POST',
    //     body: formData
    // });
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
    
    // Observe benefit cards for scroll animations
    const benefitCards = document.querySelectorAll('.benefit-item');
    benefitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe position cards for scroll animations
    const positionCards = document.querySelectorAll('.position-card');
    positionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe culture section
    const cultureSection = document.querySelector('.culture-content');
    if (cultureSection) {
        cultureSection.style.opacity = '0';
        cultureSection.style.transform = 'translateY(30px)';
        cultureSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(cultureSection);
    }
    
    // Observe application form
    const applicationForm = document.querySelector('.application-form-container');
    if (applicationForm) {
        applicationForm.style.opacity = '0';
        applicationForm.style.transform = 'translateY(30px)';
        applicationForm.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(applicationForm);
    }
}

// Smooth scroll to application form
function scrollToApplication() {
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
        applicationForm.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add button hover effects
function initializeButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('primary')) {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (this.classList.contains('primary')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            }
        });
    });
}

// Initialize all effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are rendered
    setTimeout(() => {
        initializeButtonEffects();
    }, 100);
});

// Add smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});
