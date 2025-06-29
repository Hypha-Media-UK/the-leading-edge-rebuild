// Team page specific JavaScript

// Team page functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // GSAP animations for team page
    if (typeof gsap !== 'undefined') {
        
        // Animate team member cards
        gsap.utils.toArray('.team-member').forEach((member, index) => {
            gsap.fromTo(member,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: member,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Animate team values cards
        gsap.utils.toArray('.philosophy-section .feature-card').forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Animate team intro section
        const teamIntro = document.querySelector('.team-intro');
        if (teamIntro) {
            gsap.fromTo(teamIntro,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: teamIntro,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    }

    // Team member click functionality (for future modal implementation)
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member-id');
            // Future: Open modal with team member details
            console.log('Team member clicked:', memberId);
        });
    });
});
