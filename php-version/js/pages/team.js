// Team page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Team page loaded');
    
    // Initialize team page functionality
    initializeTeamCards();
    initializeModal();
});

// Initialize team card hover effects
function initializeTeamCards() {
    const teamCards = document.querySelectorAll('.team-member-card');
    
    teamCards.forEach(card => {
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
    const modal = document.getElementById('team-member-modal');
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeTeamMemberModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeTeamMemberModal();
        }
    });
}

// Open team member modal
function openTeamMemberModal(memberId) {
    const modal = document.getElementById('team-member-modal');
    const member = window.teamMembersData.find(m => m.id === memberId);
    
    if (!member) {
        console.error('Team member not found:', memberId);
        return;
    }
    
    // Populate modal content
    document.getElementById('modal-member-image').src = member.image;
    document.getElementById('modal-member-image').alt = member.name;
    document.getElementById('modal-member-name').textContent = member.name;
    document.getElementById('modal-member-role').textContent = member.role;
    document.getElementById('modal-member-bio').textContent = member.bio;
    
    // Populate specialties
    const specialtiesList = document.getElementById('modal-member-specialties');
    specialtiesList.innerHTML = '';
    member.specialties.forEach(specialty => {
        const li = document.createElement('li');
        li.textContent = specialty;
        specialtiesList.appendChild(li);
    });
    
    // Populate Instagram link
    const instagramLink = document.getElementById('modal-member-instagram');
    const instagramHandle = document.getElementById('modal-instagram-handle');
    instagramLink.href = `https://instagram.com/${member.instagram.replace('@', '')}`;
    instagramHandle.textContent = member.instagram;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close team member modal
function closeTeamMemberModal() {
    const modal = document.getElementById('team-member-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Value items hover effects
function initializeValueItems() {
    const valueItems = document.querySelectorAll('.value-item');
    
    valueItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize value items when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeValueItems();
});
