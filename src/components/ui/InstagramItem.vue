<template>
  <div 
    class="instagram-item"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: delay, duration: 600 } }"
  >
    <img 
      :src="imageSrc"
      :alt="`Instagram post ${alt}`"
      class="instagram-image"
    >
    <div class="overlay">
      <i :class="overlayIcon"></i>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  delay: {
    type: Number,
    default: 200
  },
  overlayIcon: {
    type: String,
    default: 'fab fa-instagram'
  },
  basePath: {
    type: String,
    default: '/images/new/insta/'
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
</style>
