<template>
  <div 
    class="service-card"
    
    
    
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
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
              box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba($primary-color, 0.15);
    
    .service-image img {
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
      transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      will-change: transform;
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
    padding: 0.5rem 0.8rem;
    margin-left: -0.8rem;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    transition: all 0.3s ease;
    
    &::after {
      content: '\f054'; /* Font Awesome arrow-right icon */
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      margin-left: 0.4rem;
      font-size: 0.8rem;
      opacity: 0;
      transform: translateX(-5px);
      transition: all 0.3s ease;
    }
    
    &:hover {
      background-color: rgba($accent-color, 0.08);
      
      &::after {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
}
</style>
