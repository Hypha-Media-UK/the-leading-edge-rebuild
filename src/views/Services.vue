<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);
const activeTab = ref('hair');

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="services-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Our Services
        </h1>
        <div 
          class="separator"
          v-motion
          :initial="{ opacity: 0, scale: 0 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 600 } }"
        ></div>
        <p
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 500, duration: 800 } }"
        >
          Discover our range of premium services designed to enhance your natural beauty
        </p>
      </div>
    </section>

    <!-- Services Tabs -->
    <section class="services-tabs">
      <div class="container">
        <div 
          class="tabs-container"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        >
          <div 
            class="tab" 
            :class="{ 'active': activeTab === 'hair' }"
            @click="setActiveTab('hair')"
          >
            <i class="fas fa-cut"></i>
            <span>Hair</span>
          </div>
          <div 
            class="tab" 
            :class="{ 'active': activeTab === 'beauty' }"
            @click="setActiveTab('beauty')"
          >
            <i class="fas fa-spa"></i>
            <span>Beauty</span>
          </div>
          <div 
            class="tab" 
            :class="{ 'active': activeTab === 'nails' }"
            @click="setActiveTab('nails')"
          >
            <i class="fas fa-hand-sparkles"></i>
            <span>Nails</span>
          </div>
          <div 
            class="tab" 
            :class="{ 'active': activeTab === 'packages' }"
            @click="setActiveTab('packages')"
          >
            <i class="fas fa-gift"></i>
            <span>Packages</span>
          </div>
        </div>
        
        <!-- Hair Services -->
        <div class="services-content" v-if="activeTab === 'hair'">
          <div class="services-intro">
            <h2>Hair Services</h2>
            <p>Our expert stylists are trained in the latest techniques to give you the perfect cut, color, or style. Whether you're looking for a subtle change or a complete transformation, we're here to make your vision a reality.</p>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Women's Haircut & Style</h3>
                <p>Includes consultation, shampoo, conditioner, cut, and style.</p>
              </div>
              <div class="service-price">from £65</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Men's Haircut & Style</h3>
                <p>Precision cut tailored to your style and face shape.</p>
              </div>
              <div class="service-price">from £45</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Color & Highlights</h3>
                <p>Full or partial highlights, balayage, or all-over color.</p>
              </div>
              <div class="service-price">from £85</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Balayage/Ombre</h3>
                <p>Hand-painted highlights for a naturally sun-kissed look.</p>
              </div>
              <div class="service-price">from £120</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Hair Treatments</h3>
                <p>Deep conditioning, keratin, or specialized repair treatments.</p>
              </div>
              <div class="service-price">from £50</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 700, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Bridal & Special Occasion</h3>
                <p>Consultation and styling for your special day.</p>
              </div>
              <div class="service-price">from £90</div>
            </div>
          </div>
        </div>
        
        <!-- Beauty Services -->
        <div class="services-content" v-if="activeTab === 'beauty'">
          <div class="services-intro">
            <h2>Beauty Services</h2>
            <p>Enhance your natural beauty with our range of facial treatments, makeup services, and more. Our licensed estheticians use premium products to help you look and feel your best.</p>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Signature Facial</h3>
                <p>Customized facial to address your specific skin concerns.</p>
              </div>
              <div class="service-price">£75</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Anti-Aging Facial</h3>
                <p>Targets fine lines and wrinkles for a more youthful appearance.</p>
              </div>
              <div class="service-price">£95</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Makeup Application</h3>
                <p>Professional makeup for special occasions or everyday glamour.</p>
              </div>
              <div class="service-price">from £60</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Brow Shaping & Tinting</h3>
                <p>Perfect your brows with expert shaping and color.</p>
              </div>
              <div class="service-price">£35</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Eyelash Extensions</h3>
                <p>Full set of classic or volume lashes for a dramatic look.</p>
              </div>
              <div class="service-price">from £120</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 700, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Waxing Services</h3>
                <p>Smooth, hair-free skin for face and body.</p>
              </div>
              <div class="service-price">from £20</div>
            </div>
          </div>
        </div>
        
        <!-- Nail Services -->
        <div class="services-content" v-if="activeTab === 'nails'">
          <div class="services-intro">
            <h2>Nail Services</h2>
            <p>Our nail technicians are skilled in creating beautiful, long-lasting manicures and pedicures using the highest quality products for healthy, beautiful nails.</p>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Classic Manicure</h3>
                <p>Nail shaping, cuticle care, hand massage, and polish.</p>
              </div>
              <div class="service-price">£35</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Gel Manicure</h3>
                <p>Long-lasting gel polish that stays chip-free for weeks.</p>
              </div>
              <div class="service-price">£45</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Luxury Pedicure</h3>
                <p>Foot soak, exfoliation, nail care, massage, and polish.</p>
              </div>
              <div class="service-price">£55</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Gel Pedicure</h3>
                <p>Our luxury pedicure with long-lasting gel polish.</p>
              </div>
              <div class="service-price">£65</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Nail Art</h3>
                <p>Custom designs, French tips, glitter, or rhinestones.</p>
              </div>
              <div class="service-price">from £10</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 700, duration: 600 } }"
            >
              <div class="service-info">
                <h3>Nail Repair</h3>
                <p>Fix broken nails or remove and replace gel polish.</p>
              </div>
              <div class="service-price">from £15</div>
            </div>
          </div>
        </div>
        
        <!-- Packages -->
        <div class="services-content" v-if="activeTab === 'packages'">
          <div class="services-intro">
            <h2>Spa Packages</h2>
            <p>Treat yourself or a loved one to one of our comprehensive spa packages, designed to provide a complete pampering experience.</p>
          </div>
          
          <div class="packages-list">
            <div 
              class="package-item"
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }"
            >
              <div class="package-header">
                <h3>Essential Package</h3>
                <div class="package-price">£140</div>
              </div>
              <div class="package-content">
                <p class="package-description">A perfect introduction to our salon services, designed to refresh and rejuvenate.</p>
                <ul class="package-includes">
                  <li>Women's Haircut & Style</li>
                  <li>Classic Manicure</li>
                  <li>Express Facial</li>
                </ul>
                <p class="package-duration"><i class="far fa-clock"></i> Duration: Approx. 3 hours</p>
                <button class="btn primary">Book This Package</button>
              </div>
            </div>
            
            <div 
              class="package-item"
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 600 } }"
            >
              <div class="package-header">
                <h3>Luxury Package</h3>
                <div class="package-price">£240</div>
              </div>
              <div class="package-content">
                <p class="package-description">Our premium package for those seeking the ultimate pampering experience.</p>
                <ul class="package-includes">
                  <li>Women's Haircut & Style</li>
                  <li>Partial Highlights or Color</li>
                  <li>Signature Facial</li>
                  <li>Gel Manicure</li>
                  <li>Luxury Pedicure</li>
                </ul>
                <p class="package-duration"><i class="far fa-clock"></i> Duration: Approx. 5 hours</p>
                <button class="btn primary">Book This Package</button>
              </div>
            </div>
            
            <div 
              class="package-item"
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :enter="{ opacity: 1, scale: 1, transition: { delay: 600, duration: 600 } }"
            >
              <div class="package-header">
                <h3>Bridal Package</h3>
                <div class="package-price">£320</div>
              </div>
              <div class="package-content">
                <p class="package-description">Everything you need to look and feel your best on your special day.</p>
                <ul class="package-includes">
                  <li>Bridal Hair Trial</li>
                  <li>Bridal Hair Styling</li>
                  <li>Makeup Application</li>
                  <li>Gel Manicure</li>
                  <li>Gel Pedicure</li>
                  <li>Glass of Champagne</li>
                </ul>
                <p class="package-duration"><i class="far fa-clock"></i> Duration: Varies (includes pre-wedding trial)</p>
                <button class="btn primary">Book This Package</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="booking-cta">
      <div class="container">
        <div 
          class="cta-content"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        >
          <h2>Ready to book your appointment?</h2>
          <p>Our team of expert stylists and beauty professionals are ready to help you look and feel your best.</p>
          <router-link to="/contact" class="btn primary">Book Appointment</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// Page Header
.page-header {
  background-color: $primary-color;
  color: white;
  text-align: center;
  padding: 5rem 0 3rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: white;
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
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
  }
}

// Services Tabs
.services-tabs {
  padding: 5rem 0;
  background-color: white;
  
  .tabs-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba($primary-color, 0.1);
    
    .tab {
      flex: 1;
      min-width: 150px;
      padding: 1.5rem 1rem;
      text-align: center;
      background-color: $light-color;
      color: $primary-color;
      cursor: pointer;
      transition: all 0.3s ease;
      border-right: 1px solid rgba($primary-color, 0.1);
      
      &:last-child {
        border-right: none;
      }
      
      i {
        display: block;
        font-size: 1.8rem;
        margin-bottom: 0.8rem;
      }
      
      span {
        font-weight: 600;
        font-size: 1.1rem;
      }
      
      &:hover {
        background-color: custom-darken($light-color, 5%);
      }
      
      &.active {
        background-color: $accent-color;
        color: white;
      }
      
      @media (max-width: 768px) {
        min-width: 120px;
        padding: 1.2rem 0.8rem;
        
        i {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        span {
          font-size: 0.9rem;
        }
      }
      
      @media (max-width: 576px) {
        flex: 1 0 50%;
        border-bottom: 1px solid rgba($primary-color, 0.1);
        
        &:nth-child(even) {
          border-right: none;
        }
        
        &:nth-child(3), &:nth-child(4) {
          border-bottom: none;
        }
      }
    }
  }
}

// Services Content
.services-content {
  .services-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    p {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
    }
  }
  
  .services-list {
    max-width: 900px;
    margin: 0 auto;
    
    .service-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      background-color: $light-color;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba($primary-color, 0.05);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba($primary-color, 0.1);
      }
      
      .service-info {
        flex: 1;
        
        h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: $primary-color;
        }
        
        p {
          color: custom-lighten($primary-color, 20%);
          margin: 0;
        }
      }
      
      .service-price {
        font-size: 1.2rem;
        font-weight: 700;
        color: $accent-color;
        margin-left: 1.5rem;
        white-space: nowrap;
      }
      
      @media (max-width: 576px) {
        flex-direction: column;
        text-align: center;
        
        .service-info {
          margin-bottom: 1rem;
        }
        
        .service-price {
          margin-left: 0;
        }
      }
    }
  }
  
  .packages-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    
    .package-item {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba($primary-color, 0.1);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba($primary-color, 0.15);
      }
      
      .package-header {
        background-color: $primary-color;
        padding: 1.5rem;
        color: white;
        text-align: center;
        
        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .package-price {
          font-size: 2rem;
          font-weight: 700;
          color: $accent-color;
        }
      }
      
      .package-content {
        padding: 2rem;
        
        .package-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: custom-lighten($primary-color, 20%);
        }
        
        .package-includes {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
          
          li {
            padding: 0.8rem 0;
            border-bottom: 1px solid rgba($primary-color, 0.1);
            color: $primary-color;
            
            &:last-child {
              border-bottom: none;
            }
            
            &::before {
              content: '✓';
              color: $accent-color;
              margin-right: 0.8rem;
              font-weight: 700;
            }
          }
        }
        
        .package-duration {
          font-style: italic;
          color: custom-lighten($primary-color, 30%);
          margin-bottom: 1.5rem;
          
          i {
            margin-right: 0.5rem;
          }
        }
        
        .btn {
          width: 100%;
        }
      }
    }
  }
}

// Booking CTA
.booking-cta {
  background-image: linear-gradient(to right, rgba($primary-color, 0.9), rgba($accent-color, 0.9));
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 5rem 0;
  
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
  
  .btn.primary {
    background-color: white;
    color: $primary-color;
    border-color: white;
    
    &:hover {
      background-color: transparent;
      color: white;
      border-color: white;
    }
  }
}

// Button Styles
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &.primary {
    background-color: $accent-color;
    color: white;
    border: 2px solid $accent-color;
    
    &:hover {
      background-color: custom-darken($accent-color, 10%);
      border-color: custom-darken($accent-color, 10%);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
