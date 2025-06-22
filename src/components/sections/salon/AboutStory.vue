<template>
  <section class="about-section">
    <div class="container">
      <div class="about-content">
        <div 
          class="about-image"
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
        >
          <img :src="image" :alt="imageAlt">
        </div>
        
        <div class="about-text">
          <h2 
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 400, duration: 600 } }"
          >
            {{ title }}
          </h2>
          
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Our Story'
  },
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: 'About us image'
  }
});
</script>

<style lang="scss" scoped>
.about-section {
  background-color: white;
  padding: 5rem 0;
  
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
  }
}
</style>
