<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="our-salon-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Our Salon
        </h1>
        <div 
          class="separator"
          v-motion
          :initial="{ opacity: 0, scale: 0 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 600 } }"
        ></div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div 
            class="about-image"
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
          >
            <img src="/images/new/staff/team.webp" alt="The Leading Edge salon team">
          </div>
          
          <div class="about-text">
            <h2 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 400, duration: 600 } }"
            >
              Our Story
            </h2>
            <p 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 600, duration: 600 } }"
            >
              Founded in 2010, The Leading Edge was born from a passion for creating a salon experience that blends luxurious comfort with exceptional skill. Our journey began with a simple vision: to create a space where clients can relax, rejuvenate, and leave feeling both beautiful and confident.
            </p>
            <p 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 800, duration: 600 } }"
            >
              Over the years, we've grown from a small team of dedicated stylists to a full-service salon with a reputation for excellence. Our commitment to continuous education ensures that our team stays at the forefront of industry trends and techniques.
            </p>
            <p 
              v-motion
              :initial="{ opacity: 0 }"
              :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }"
            >
              Today, The Leading Edge stands as a testament to our dedication to the craft of hair and beauty, serving clients from all walks of life who share our appreciation for quality and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="philosophy-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Philosophy</h2>
          <div class="separator"></div>
        </div>
        
        <div class="philosophy-content">
          <div 
            class="philosophy-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }"
          >
            <div class="icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Client-Centered</h3>
            <p>We believe that every client deserves personalized attention and services tailored to their unique needs and preferences.</p>
          </div>
          
          <div 
            class="philosophy-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 600 } }"
          >
            <div class="icon">
              <i class="fas fa-trophy"></i>
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, from the quality of our services to the ambiance of our salon.</p>
          </div>
          
          <div 
            class="philosophy-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 600, duration: 600 } }"
          >
            <div class="icon">
              <i class="fas fa-seedling"></i>
            </div>
            <h3>Sustainability</h3>
            <p>We are committed to sustainable practices and using products that are kind to both our clients and the environment.</p>
          </div>
          
          <div 
            class="philosophy-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 800, duration: 600 } }"
          >
            <div class="icon">
              <i class="fas fa-book"></i>
            </div>
            <h3>Continuous Learning</h3>
            <p>We believe in the power of education and ensure our team stays updated with the latest techniques and trends.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Salon Interior Section -->
    <section class="interior-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Space</h2>
          <div class="separator"></div>
          <p>Step into a world of relaxation and beauty</p>
        </div>
        
        <div class="gallery">
          <div 
            class="gallery-item item-1"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
          >
            <img src="/images/new/internal/int1.webp" alt="Salon interior - Main area">
          </div>
          <div 
            class="gallery-item item-2"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
          >
            <img src="/images/new/internal/int2.webp" alt="Salon interior - Styling station">
          </div>
          <div 
            class="gallery-item item-3"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
          >
            <img src="/images/new/internal/int3.webp" alt="Salon interior - Treatment area">
          </div>
          <div 
            class="gallery-item item-4"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 600 } }"
          >
            <img src="/images/new/internal/int4.webp" alt="Salon interior - Reception">
          </div>
        </div>
        
        <div 
          class="interior-description"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }"
        >
          <p>Our salon is designed to be a haven of tranquility amidst the bustle of everyday life. With thoughtfully designed spaces, comfortable seating, and ambient lighting, we've created an environment that soothes the senses while our expert team takes care of your beauty needs.</p>
          <p>From our reception area to our styling stations and treatment rooms, every corner of The Leading Edge is crafted to enhance your experience and ensure you leave feeling refreshed and rejuvenated.</p>
        </div>
      </div>
    </section>

    <!-- Products Section -->
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

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div 
          class="cta-content"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        >
          <h2>Experience The Leading Edge Difference</h2>
          <p>Book your appointment today and step into a world of luxury and expert care.</p>
          <router-link to="/contact" class="btn primary">Book Now</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

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
    margin: 0 auto;
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
    color: lighten($primary-color, 20%);
    font-size: 1.1rem;
  }
}

// About Section
.about-section {
  background-color: white;
  
  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  
  .about-image {
    height: 500px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba($primary-color, 0.1);
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
    
    @media (max-width: 991px) {
      height: 400px;
      margin-bottom: 2rem;
    }
  }
  
  .about-text {
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
      color: $primary-color;
    }
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.8;
      color: lighten($primary-color, 20%);
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

// Philosophy Section
.philosophy-section {
  background-color: $light-color;
  
  .philosophy-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .philosophy-item {
    background-color: white;
    padding: 2.5rem 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 20px rgba($primary-color, 0.05);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba($primary-color, 0.1);
    }
    
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

// Interior Section
.interior-section {
  background-color: white;
  
  .gallery {
    display: grid;
    grid-template-areas:
      "item1 item1 item2 item3"
      "item1 item1 item4 item4";
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 1.5rem;
    margin-bottom: 3rem;
    
    @media (max-width: 991px) {
      grid-template-areas:
        "item1 item1"
        "item2 item3"
        "item4 item4";
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 200px);
    }
    
    @media (max-width: 576px) {
      grid-template-areas:
        "item1"
        "item2"
        "item3"
        "item4";
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 250px);
    }
  }
  
  .gallery-item {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba($primary-color, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.03);
      box-shadow: 0 10px 25px rgba($primary-color, 0.15);
      
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
    
    &.item-1 {
      grid-area: item1;
    }
    
    &.item-2 {
      grid-area: item2;
    }
    
    &.item-3 {
      grid-area: item3;
    }
    
    &.item-4 {
      grid-area: item4;
    }
  }
  
  .interior-description {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.8;
      color: lighten($primary-color, 20%);
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

// Products Section
.products-section {
  background-color: $secondary-color;
  color: white;
  
  .section-header {
    h2, p {
      color: white;
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
      background-color: white;
      color: $primary-color;
      border: 2px solid white;
      transition: all 0.3s ease;
      
      i {
        margin-right: 0.8rem;
        font-size: 1.2rem;
      }
      
      &:hover {
        background-color: transparent;
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

// CTA Section
.cta-section {
  background-image: linear-gradient(to right, rgba($primary-color, 0.9), rgba($accent-color, 0.9));
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
</style>
