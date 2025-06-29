// Careers page specific JavaScript

// Store positions data for modal functionality
const positionsData = [
    {
        id: 1,
        title: 'Senior Hair Stylist',
        type: 'Full-time',
        location: 'London',
        description: 'We are looking for an experienced hair stylist with a minimum of 5 years in the industry. The ideal candidate will have expertise in cutting, coloring, and styling techniques for all hair types.',
        responsibilities: [
            'Provide exceptional hair services to clients including cutting, coloring, and styling',
            'Stay updated on the latest hair trends and techniques',
            'Maintain a clean and organized workspace',
            'Build and maintain a loyal client base',
            'Collaborate with team members for special events and promotions'
        ],
        requirements: [
            'Minimum 5 years of experience as a hair stylist',
            'Valid cosmetology license',
            'Strong portfolio demonstrating technical skills',
            'Excellent customer service skills',
            'Ability to work weekends and some evenings'
        ]
    },
    {
        id: 2,
        title: 'Beauty Therapist',
        type: 'Part-time / Full-time',
        location: 'London',
        description: 'We are seeking a skilled beauty therapist to join our team. The successful candidate will provide a range of beauty treatments including facials, body treatments, and makeup application.',
        responsibilities: [
            'Perform various beauty treatments to the highest standard',
            'Provide skincare consultations and recommend appropriate products',
            'Keep up-to-date with the latest beauty trends and techniques',
            'Maintain treatment room cleanliness and hygiene',
            'Assist with retail sales and promotions'
        ],
        requirements: [
            'NVQ Level 3 in Beauty Therapy or equivalent',
            'At least 2 years of experience in a professional salon setting',
            'Knowledge of premium skincare brands and treatments',
            'Excellent communication and interpersonal skills',
            'Flexibility to work evenings and weekends'
        ]
    },
    {
        id: 3,
        title: 'Salon Receptionist',
        type: 'Full-time',
        location: 'London',
        description: 'We are looking for a friendly and organized receptionist to be the first point of contact for our clients. The ideal candidate will have excellent communication skills and a passion for customer service.',
        responsibilities: [
            'Greet clients and manage the reception desk',
            'Handle booking appointments and managing the salon schedule',
            'Process payments and maintain accurate records',
            'Answer phone calls and respond to emails',
            'Assist with retail sales and inventory management'
        ],
        requirements: [
            'Previous experience in a customer service role, preferably in a salon environment',
            'Proficiency with scheduling software and point-of-sale systems',
            'Excellent organizational and multitasking abilities',
            'Professional appearance and friendly demeanor',
            'Available to work flexible hours including weekends'
        ]
    }
];

// Careers page functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Position modal functionality
    const modal = document.getElementById('position-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    
    // Open modal when "View Details" is clicked
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const positionCard = this.closest('.position-card');
            const positionId = parseInt(positionCard.getAttribute('data-position-id'));
            showPositionModal(positionId);
        });
    });
    
    // Close modal functionality
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    function showPositionModal(positionId) {
        const position = positionsData.find(p => p.id === positionId);
        if (!position || !modal) return;
        
        // Populate modal content
        const modalBody = modal.querySelector('.modal-body');
        modalBody.querySelector('.position-title').textContent = position.title;
        modalBody.querySelector('.position-meta .type').textContent = position.type;
        modalBody.querySelector('.position-meta .location-text').textContent = position.location;
        modalBody.querySelector('.position-description').textContent = position.description;
        
        // Populate responsibilities
        const responsibilitiesList = modalBody.querySelector('.responsibilities-list');
        responsibilitiesList.innerHTML = '';
        position.responsibilities.forEach(responsibility => {
            const li = document.createElement('li');
            li.textContent = responsibility;
            responsibilitiesList.appendChild(li);
        });
        
        // Populate requirements
        const requirementsList = modalBody.querySelector('.requirements-list');
        requirementsList.innerHTML = '';
        position.requirements.forEach(requirement => {
            const li = document.createElement('li');
            li.textContent = requirement;
            requirementsList.appendChild(li);
        });
        
        // Update apply button to scroll to form and pre-select position
        const applyBtn = modalBody.querySelector('.apply-btn');
        applyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
            
            // Pre-select the position in the form
            const positionSelect = document.getElementById('position');
            if (positionSelect) {
                positionSelect.value = position.title;
            }
            
            // Scroll to application form
            const applicationForm = document.getElementById('application-form');
            if (applicationForm) {
                applicationForm.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
    
    // Form submission handling
    const careersForm = document.getElementById('careers-form');
    if (careersForm) {
        careersForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = careersForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Here you would typically send the form data to your server
                alert('Thank you for your application! We will be in touch soon.');
                careersForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // GSAP animations for careers page
    if (typeof gsap !== 'undefined') {
        
        // Animate page header
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            gsap.fromTo(pageHeader.querySelector('h1'),
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 0.2 }
            );
            
            gsap.fromTo(pageHeader.querySelector('.separator'),
                { opacity: 0, scaleX: 0 },
                { opacity: 1, scaleX: 1, duration: 0.8, delay: 0.5 }
            );
            
            gsap.fromTo(pageHeader.querySelector('p'),
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, delay: 0.7 }
            );
        }

        // Animate benefit items
        gsap.utils.toArray('.benefit-item').forEach((item, index) => {
            gsap.fromTo(item,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Animate position cards
        gsap.utils.toArray('.position-card').forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    delay: index * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Animate application form
        const applicationForm = document.querySelector('.application-form-container');
        if (applicationForm) {
            gsap.fromTo(applicationForm,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: applicationForm,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        // Animate culture section
        const cultureContent = document.querySelector('.culture-content');
        if (cultureContent) {
            gsap.fromTo(cultureContent.querySelector('.culture-text'),
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: cultureContent,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
            
            gsap.fromTo(cultureContent.querySelector('.culture-image'),
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: cultureContent,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }

        // Add hover animations for position cards
        gsap.utils.toArray('.position-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }
});
