<template>
  <div 
    class="service-card"
    v-motion
    :initial="{ opacity: 0, x: motionX }"
    :enter="{ opacity: 1, x: 0, transition: { delay: delay, duration: 600 } }"
  >
    <div class="service-image">
      <img :src="image" :alt="title">
    </div>
    <div class="service-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <Button v-if="linkText" :to="linkUrl" class="btn-text">{{ linkText }}</Button>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    default: 'Learn More'
  },
  linkUrl: {
    type: String,
    default: '/services'
  },
  delay: {
    type: Number,
    default: 200
  },
  motionX: {
    type: Number,
    default: 0
  }
});
</script>

<style lang="scss" scoped>
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
      color: custom-lighten($primary-color, 20%);
      margin-bottom: 1rem;
      line-height: 1.6;
    }
  }

  :deep(.btn-text) {
    color: $accent-color;
    text-decoration: none;
    font-weight: 600;
    position: relative;
    background: none;
    border: none;
    padding: 0;
    display: inline;
    
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
}
</style>
