// Main JavaScript file with Barba.js for smooth page transitions
import barba from '@barba/core';
import { gsap } from 'gsap';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Barba.js for smooth page transitions
  barba.init({
    transitions: [
      {
        name: 'default-transition',
        leave(data) {
          // Animate out the current page
          return gsap.to(data.current.container, {
            duration: 0.5,
            opacity: 0,
            y: -50,
            ease: "power2.in"
          });
        },
        enter(data) {
          // Animate in the new page
          gsap.set(data.next.container, {
            opacity: 0,
            y: 50
          });
          
          return gsap.to(data.next.container, {
            duration: 0.6,
            opacity: 1,
            y: 0,
            ease: "power2.out",
            delay: 0.1
          });
        }
      }
    ]
  });

  // Initialize core functionality
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
});

// Header scroll functionality (from Vue Header.vue)
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile menu functionality (from Vue Header.vue)
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  
  if (!menuToggle || !nav || !hamburger) return;
  
  let isMenuOpen = false;
  
  menuToggle.addEventListener('click', function() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      nav.classList.add('active');
      hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when clicking on nav links
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
      isMenuOpen = false;
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        
        // Calculate offset for fixed header
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
