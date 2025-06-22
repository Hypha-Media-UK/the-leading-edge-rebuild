<template>
  <section class="interior-section">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="gallery">
        <div 
          v-for="(image, index) in images"
          :key="index"
          :class="['gallery-item', `item-${index + 1}`]"
          
          
          
        >
          <img :src="image.src" :alt="image.alt || 'Salon interior'">
        </div>
      </div>
      
      <div 
        class="interior-description"
        
        
        
      >
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';

defineProps({
  title: {
    type: String,
    default: 'Our Space'
  },
  description: {
    type: String,
    default: 'Step into a world of relaxation and beauty'
  },
  images: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.interior-section {
  background-color: white;
  padding: 5rem 0;
  
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
      color: custom-lighten($primary-color, 20%);
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
