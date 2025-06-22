<template>
  <section class="instagram-feed">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="instagram-grid">
        <InstagramItem
          v-for="(image, index) in images"
          :key="index"
          :image="image.src || getInstagramImage(index + 1)"
          :alt="`${index + 1}`"
          :delay="(index + 1) * 100"
        />
      </div>
      
      <div class="instagram-cta">
        <Button 
          :href="instagramUrl" 
          target="_blank" 
          variant="secondary"
          icon="fab fa-instagram"
        >
          {{ ctaText }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';
import InstagramItem from '@/components/ui/InstagramItem.vue';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Follow Our Journey'
  },
  description: {
    type: String,
    default: 'Stay updated with our latest styles and salon updates'
  },
  images: {
    type: Array,
    default: () => []
  },
  instagramUrl: {
    type: String,
    default: 'https://instagram.com'
  },
  ctaText: {
    type: String,
    default: 'Follow Us @TheLeadingEdge'
  }
});

// Instagram image mapping function - used as fallback if no src is provided
const getInstagramImage = (index) => {
  const imageMap = {
    1: 'insta1.webp',
    2: 'insta2.webp',
    3: 'insta3.webp',
    4: 'insta4.webp',
    5: 'insta5.webp',
    6: 'insta6.webp'
  };
  return imageMap[index] || 'insta1.webp';
};
</script>

<style lang="scss" scoped>
.instagram-feed {
  background-color: $light-color;
  padding: 5rem 0;
  
  .instagram-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .instagram-cta {
    text-align: center;
    
    :deep(.btn.secondary) {
      color: $primary-color;
      border-color: $primary-color;
      
      &:hover {
        background-color: $primary-color;
        color: white;
      }
    }
  }
}
</style>
