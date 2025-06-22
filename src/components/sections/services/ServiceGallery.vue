<template>
  <div class="services-gallery">
    <div 
      v-for="(image, index) in images" 
      :key="index"
      class="gallery-item"
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: 200 + (index * 150), duration: 600 } }"
    >
      <img :src="image.src" :alt="image.alt || 'Service Gallery Image'">
    </div>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.services-gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  .gallery-item {
    flex: 0 0 calc(25% - 1.5rem);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba($primary-color, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba($primary-color, 0.15);
    }
    
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      display: block;
    }
    
    @media (max-width: 991px) {
      flex: 0 0 calc(50% - 1.5rem);
    }
    
    @media (max-width: 576px) {
      flex: 0 0 100%;
    }
  }
}
</style>
