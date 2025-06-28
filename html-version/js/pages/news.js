// News page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('News page loaded');
    
    // Initialize news page functionality
    initializeNewsFilters();
    initializeNewsCards();
    initializeModal();
    initializeNewsletterForm();
});

// Initialize news filter functionality
function initializeNewsFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter news cards
            filterNewsCards(category, newsCards);
        });
    });
}

// Filter news cards by category
function filterNewsCards(category, newsCards) {
    newsCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
            // Add fade-in animation
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 100);
        } else {
            card.classList.add('hidden');
        }
    });
}

// Initialize news card hover effects
function initializeNewsCards() {
    const newsCards = document.querySelectorAll('.news-card, .featured-article');
    
    newsCards.forEach(card => {
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
    const modal = document.getElementById('article-modal');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeArticleModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeArticleModal();
        }
    });
}

// Open article modal
function openArticleModal(articleId) {
    const modal = document.getElementById('article-modal');
    const article = window.newsArticlesData.find(a => a.id === articleId);
    
    if (!article) {
        console.error('Article not found:', articleId);
        return;
    }
    
    // Populate modal content
    document.getElementById('modal-article-image').src = article.image;
    document.getElementById('modal-article-image').alt = article.title;
    document.getElementById('modal-article-category').textContent = article.category;
    document.getElementById('modal-article-date').textContent = article.date;
    document.getElementById('modal-article-title').textContent = article.title;
    document.getElementById('modal-article-author').textContent = article.author;
    document.getElementById('modal-article-content').innerHTML = article.content;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close article modal
function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize newsletter form
function initializeNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    
    // Add focus effects
    emailInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    emailInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
}

// Handle newsletter signup
function handleNewsletterSignup(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate newsletter signup
    console.log('Newsletter signup:', email);
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
    
    // Reset form
    emailInput.value = '';
    
    // In a real application, you would send this data to your backend
    // fetch('/api/newsletter-signup', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email: email })
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
    
    // Observe news cards for scroll animations
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are rendered
    setTimeout(initializeScrollAnimations, 100);
});
