<template>
  <div class="testimonial">
    <div class="quote">"</div>
    <p>{{ quote }}</p>
    <div class="client">
      <div class="client-image">
        <img :src="imageSrc" :alt="`${name} - ${role}`">
      </div>
      <div class="client-info">
        <h4>{{ name }}</h4>
        <span>{{ role }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  quote: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  basePath: {
    type: String,
    default: '/images/new/testimonials/'
  }
});

const imageSrc = computed(() => {
  if (props.image.startsWith('/') || props.image.startsWith('http')) {
    return props.image;
  }
  return `${props.basePath}${props.image}`;
});
</script>

<style lang="scss" scoped>
.testimonial {
  position: relative;
  padding: 3rem;
  background-color: white;
  color: $primary-color;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  min-height: 280px; // Ensure consistent height
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
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
    
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
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
        color: custom-lighten($primary-color, 30%);
        font-size: 0.9rem;
      }
    }
  }
}
</style>
