<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const isLoaded = ref(false);
const currentTestimonialIndex = ref(0);
const testimonialTransition = ref(true);

// Instagram image mapping function
const getInstagramImage = (index) => {
  const imageMap = {
    1: 'test001.webp',
    2: 'test002.webp',
    3: 'test003.webp',
    4: 'test004.webp',
    5: 'test002.webp',
    6: 'test002.webp'
  };
  return imageMap[index] || 'test001.webp';
};

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: "The Leading Edge has completely transformed my hair care routine. The team is professional, knowledgeable, and always makes me feel welcome.",
    name: "Sarah Johnson",
    role: "Regular Client",
    image: "test001.webp"
  },
  {
    id: 2,
    quote: "Absolutely love the results every time I visit. The stylists here are true artists and always keep up with the latest trends and techniques.",
    name: "Michael Thompson",
    role: "Loyal Customer",
    image: "test002.webp"
  },
  {
    id: 3,
    quote: "Their attention to detail is incredible. I came in with a vague idea of what I wanted and left with exactly the style I didn't even know I needed!",
    name: "Emma Wilson",
    role: "First-time Client",
    image: "test003.webp"
  },
  {
    id: 4,
    quote: "The spa treatments here are divine. The perfect place to relax and unwind while being pampered by true professionals.",
    name: "James Reynolds",
    role: "Spa Regular",
    image: "test004.webp"
  },
  {
    id: 5,
    quote: "I've been to many salons, but none compare to The Leading Edge. The quality of service and products they use are simply unmatched.",
    name: "Olivia Garcia",
    role: "VIP Member",
    image: "test003.webp"
  }
];

const currentTestimonial = computed(() => testimonials[currentTestimonialIndex.value]);

// Function to go to next testimonial
const nextTestimonial = () => {
  // Just hide the current testimonial
  testimonialTransition.value = false;
  
  // After it's hidden, change the content and show again
  setTimeout(() => {
    currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.length;
    // Show the new testimonial
    testimonialTransition.value = true;
  }, 500);
};

// Set up auto-rotation for testimonials
let testimonialInterval;

onMounted(() => {
  isLoaded.value = true;
  
  // Start auto-rotation
  testimonialInterval = setInterval(() => {
    nextTestimonial();
  }, 6000); // Rotate every 6 seconds
});

// Clean up interval when component is unmounted
onBeforeUnmount(() => {
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
  }
});
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="text-content">
            <h1 
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
            >
              Experience True <span>Beauty</span> &amp; <span>Elegance</span>
            </h1>
            <p 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }"
            >
              At The Leading Edge, we blend artistry with expertise to create looks that enhance your natural beauty.
            </p>
          </div>
          
          <div 
            class="hero-buttons"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 800 } }"
          >
            <router-link to="/services" class="btn secondary">Explore Services</router-link>
            <router-link to="/contact" class="btn secondary">Book Appointment</router-link>
            <router-link to="/offers" class="btn primary">Offers & Gift Vouchers</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose Us</h2>
          <div class="separator"></div>
        </div>
        
        <div class="features-grid">
          <div 
            class="feature-card"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }"
            :hovered="{ scale: 1.05, transition: { duration: 300 } }"
          >
            <div class="icon">
              <i class="fas fa-crown"></i>
            </div>
            <h3>Premium Experience</h3>
            <p>Luxurious environment and personalized service that exceeds expectations.</p>
          </div>
          
          <div 
            class="feature-card"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 600 } }"
            :hovered="{ scale: 1.05, transition: { duration: 300 } }"
          >
            <div class="icon">
              <i class="fas fa-certificate"></i>
            </div>
            <h3>Expert Stylists</h3>
            <p>Our team of highly trained professionals stay ahead of the latest trends and techniques.</p>
          </div>
          
          <div 
            class="feature-card"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 600, duration: 600 } }"
            :hovered="{ scale: 1.05, transition: { duration: 300 } }"
          >
            <div class="icon">
              <i class="fas fa-leaf"></i>
            </div>
            <h3>Quality Products</h3>
            <p>We use only premium, sustainable products that are gentle on your hair and the environment.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="services-preview">
      <div class="container">
        <div class="section-header">
          <h2>Our Services</h2>
          <div class="separator"></div>
          <p>Discover our range of premium hair and beauty services</p>
        </div>
        
        <div class="services-grid">
          <div 
            class="service-card"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
          >
            <div class="service-image">
              <img src="/images/new/services/service1.webp" alt="Hair styling services">
            </div>
            <div class="service-content">
              <h3>Styling, Cutting & Colouring</h3>
              <p>Expert cutting, styling and coloring services to create the perfect look tailored to your unique style.</p>
              <router-link to="/services" class="btn-text">Learn More</router-link>
            </div>
          </div>
          
          <div 
            class="service-card"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
          >
            <div class="service-image">
              <img src="/images/new/services/service2.webp" alt="Beauty treatment services">
            </div>
            <div class="service-content">
              <h3>Nail & Beauty Services</h3>
              <p>Complete nail care, facial treatments, and beauty services to enhance your natural features.</p>
              <router-link to="/services" class="btn-text">Learn More</router-link>
            </div>
          </div>
          
          <div 
            class="service-card"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
          >
            <div class="service-image">
              <img src="/images/new/services/service3.webp" alt="Spa and wellness services">
            </div>
            <div class="service-content">
              <h3>Massage & Aesthetic Treatments</h3>
              <p>Relaxing massage therapy and advanced aesthetic treatments for total body wellness and beauty.</p>
              <router-link to="/services" class="btn-text">Learn More</router-link>
            </div>
          </div>
        </div>
        
        <div class="services-cta">
          <router-link to="/services" class="btn primary">View All Services</router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>What Our Clients Say</h2>
          <div class="separator"></div>
        </div>
        
        <div class="testimonials-slider">
          <div class="testimonial-container">
            <transition 
              name="testimonial-fade"
            >
              <div 
                v-if="testimonialTransition"
                class="testimonial"
                :key="currentTestimonial.id"
              >
                <div class="quote">"</div>
                <p>{{ currentTestimonial.quote }}</p>
                <div class="client">
                  <div class="client-image">
                    <img :src="`/images/new/testimonials/${currentTestimonial.image}`" :alt="`${currentTestimonial.name} - ${currentTestimonial.role}`">
                  </div>
                  <div class="client-info">
                    <h4>{{ currentTestimonial.name }}</h4>
                    <span>{{ currentTestimonial.role }}</span>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          
          <div class="testimonial-controls">
            <div class="testimonial-arrows">
              <button 
                class="arrow prev" 
                @click="currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length; testimonialTransition = true"
              >
                <i class="fas fa-chevron-left"></i>
              </button>
              <button 
                class="arrow next" 
                @click="nextTestimonial()"
              >
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Products Section -->
    <section class="products-section">
      <div class="container">
        <div class="section-header">
          <h2>Premium Products</h2>
          <div class="separator"></div>
          <p>We partner with the industry's finest brands to bring you exceptional quality</p>
        </div>
        
        <div class="brands-container">
          <div 
            class="brand"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 200, duration: 600 } }"
          >
            <img src="/images/new/products/prod1.webp" alt="Premium Brand Product 1">
          </div>
          <div 
            class="brand"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 400, duration: 600 } }"
          >
            <img src="/images/new/products/prod2.webp" alt="Premium Brand Product 2">
          </div>
          <div 
            class="brand"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 600, duration: 600 } }"
          >
            <img src="/images/new/products/prod3.webp" alt="Premium Brand Product 3">
          </div>
          <div 
            class="brand"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 800, duration: 600 } }"
          >
            <img src="/images/new/products/prod4.webp" alt="Premium Brand Product 4">
          </div>
        </div>
        
        <div class="products-cta">
          <a href="#" class="btn primary shop-btn">
            <i class="fas fa-shopping-cart"></i> View our Online Shop
          </a>
        </div>
      </div>
    </section>

    <!-- Instagram Feed -->
    <section class="instagram-feed">
      <div class="container">
        <div class="section-header">
          <h2>Follow Our Journey</h2>
          <div class="separator"></div>
          <p>Stay updated with our latest styles and salon updates</p>
        </div>
        
        <div class="instagram-grid">
          <div 
            v-for="n in 6" 
            :key="n" 
            class="instagram-item"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: n * 100, duration: 600 } }"
          >
            <img 
              :src="`/images/downloaded/${getInstagramImage(n)}`"
              :alt="`Instagram post ${n}`"
              class="instagram-image"
            >
            <div class="overlay">
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </div>
        
        <div class="instagram-cta">
          <a href="https://instagram.com" target="_blank" class="btn secondary">
            <i class="fab fa-instagram"></i> Follow Us @TheLeadingEdge
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div 
          class="cta-content"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        >
          <h2>Ready for a Transformation?</h2>
          <p>Book your appointment today and experience the difference at The Leading Edge.</p>
          <router-link to="/contact" class="btn primary">Book Now</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

// Hero Section
.hero {
  height: 70vh;
  min-height: 600px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/new/heros/hero3.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  color: white;
  margin-top: -80px; // Offset the header padding
  border-bottom: 2px solid white;
  
  .hero-content {
    width: 100%;
    max-width: 1200px;
    padding: 2rem;
    position: relative;
    z-index: 1;
    color: white;
    
    .text-content {
      max-width: 700px;
      margin-bottom: 2rem;
    }
    
    h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      color: $accent-color;
      
      span {
        color: white;
      }
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      max-width: 600px;
      line-height: 1.6;
    }
  }
  
  .hero-buttons {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    
    @media (max-width: 991px) {
      flex-wrap: wrap;
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }
  }
}

// Buttons
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: $accent-color;
    color: white;
    border: 2px solid $accent-color;
    
    &:hover {
      background-color: darken($accent-color, 10%);
      border-color: darken($accent-color, 10%);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background-color: white;
      color: $primary-color;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.tertiary {
    background-color: lighten($accent-color, 15%);
    color: white;
    border: 2px solid lighten($accent-color, 15%);
    
    &:hover {
      background-color: lighten($accent-color, 25%);
      border-color: lighten($accent-color, 25%);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
}

.btn-text {
  color: $accent-color;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $accent-color;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
}

// Section Styling
section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .separator {
    width: 80px;
    height: 3px;
    background-color: $accent-color;
    margin: 0 auto 1.5rem;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: $primary-color;
    font-size: 1.1rem;
  }
}

// Features Section
.features {
  background-color: $light-color;
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .feature-card {
    background-color: white;
    padding: 2.5rem 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 20px rgba($primary-color, 0.05);
    transition: all 0.3s ease;
    
    .icon {
      font-size: 2.5rem;
      color: $accent-color;
      margin-bottom: 1.5rem;
    }
    
    h3 {
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }
    
    p {
      color: lighten($primary-color, 20%);
      line-height: 1.6;
    }
  }
}

// Services Preview
.services-preview {
  background-color: white;
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .service-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba($primary-color, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba($primary-color, 0.15);
      
      .service-image {
        transform: scale(1.05);
      }
    }
    
    .service-image {
      height: 250px;
      overflow: hidden;
      position: relative;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
      }
      
      &:hover img {
        transform: scale(1.05);
      }
    }
    
    .service-content {
      padding: 1.5rem;
      
      h3 {
        margin-bottom: 0.8rem;
        font-size: 1.4rem;
      }
      
      p {
        color: lighten($primary-color, 20%);
        margin-bottom: 1rem;
        line-height: 1.6;
      }
    }
  }
  
  .services-cta {
    text-align: center;
  }
}

// Testimonials
.testimonials {
  background-color: $secondary-color;
  color: white;
  
  .testimonials-slider {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }
  
  .testimonial-container {
    position: relative;
    height: 300px; /* Slightly reduced height to prevent layout shifts */
    margin-bottom: 0;
    will-change: opacity, transform; /* Performance optimization */
  }
  
  .testimonial-fade-enter-active,
  .testimonial-fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  
  .testimonial-fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .testimonial-fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  .testimonial {
    position: relative;
    padding: 3rem;
    background-color: white;
    color: $primary-color;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    min-height: 280px; // Ensure consistent height
    
    .quote {
      position: absolute;
      top: 10px;
      left: 20px;
      font-size: 6rem;
      color: rgba($accent-color, 0.1);
      font-family: 'Georgia', serif;
      line-height: 1;
    }
    
    p {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 2rem;
      position: relative;
      z-index: 1;
    }
    
    .client {
      display: flex;
      align-items: center;
      
    .client-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 1rem;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
      
      .client-info {
        h4 {
          margin: 0 0 0.3rem;
          font-size: 1.1rem;
        }
        
        span {
          color: lighten($primary-color, 30%);
          font-size: 0.9rem;
        }
      }
    }
  }
  .testimonial-controls {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    
    .testimonial-arrows {
      display: flex;
      justify-content: center;
      gap: 1rem;
      
      .arrow {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        color: $primary-color;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        
        &:hover {
          background-color: $accent-color;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}

// Instagram Feed
.instagram-feed {
  background-color: $light-color;
  
  .instagram-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .instagram-item {
    position: relative;
    aspect-ratio: 1 / 1; // Modern square approach
    overflow: hidden;
    border-radius: 4px;
    
    .instagram-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($primary-color, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      
      i {
        color: white;
        font-size: 2rem;
      }
    }
    
    &:hover {
      .instagram-image {
        transform: scale(1.05);
      }
      
      .overlay {
        opacity: 1;
      }
    }
  }
  
  .instagram-cta {
    text-align: center;
    
    .btn.secondary {
      color: $primary-color;
      border-color: $primary-color;
      
      &:hover {
        background-color: $primary-color;
        color: white;
      }
      
      i {
        margin-right: 0.5rem;
      }
    }
  }
}

// CTA Section
.cta-section {
  background-image: linear-gradient(to right, rgba($primary-color, 0.9), rgba($accent-color, 0.9)), url('/images/new/internal/int1.webp');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  
  .cta-content {
    max-width: 700px;
    margin: 0 auto;
    
    h2 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    p {
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }
  }
}

// Products Section
.products-section {
  background-color: white;
  color: $primary-color;
  
  .section-header {
    h2, p {
      color: $primary-color;
    }
  }
  
  .brands-container {
    display: grid;
    grid-template-areas:
      "prod1 prod1 prod2 prod3"
      "prod1 prod1 prod4 prod4";
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 1.5rem;
    margin-bottom: 3rem;
    
    @media (max-width: 991px) {
      grid-template-areas:
        "prod1 prod1"
        "prod2 prod3"
        "prod4 prod4";
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 200px);
    }
    
    @media (max-width: 576px) {
      grid-template-areas:
        "prod1"
        "prod2"
        "prod3"
        "prod4";
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 200px);
    }
    
    .brand {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      background-color: white;
      
      &:hover {
        transform: scale(1.03);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        
        img {
          transform: scale(1.1);
        }
      }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
      }
      
      &:nth-child(1) {
        grid-area: prod1;
      }
      
      &:nth-child(2) {
        grid-area: prod2;
      }
      
      &:nth-child(3) {
        grid-area: prod3;
      }
      
      &:nth-child(4) {
        grid-area: prod4;
      }
    }
  }
  
  .products-cta {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    
    .shop-btn {
      display: inline-flex;
      align-items: center;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      background-color: $accent-color;
      color: white;
      border: 2px solid $accent-color;
      transition: all 0.3s ease;
      
      i {
        margin-right: 0.8rem;
        font-size: 1.2rem;
      }
      
      &:hover {
        background-color: transparent;
        color: $accent-color;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

// Responsive adjustments
@media (max-width: 991px) {
  .hero {
    background-attachment: scroll;
  }
}

@media (max-width: 768px) {
  section {
    padding: 4rem 0;
  }
  
  .features-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .instagram-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 576px) {
  .instagram-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
