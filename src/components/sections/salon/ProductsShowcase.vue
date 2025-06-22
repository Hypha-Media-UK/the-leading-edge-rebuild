<template>
  <section class="products-section" :class="{ 'dark': darkMode }">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="brands-container">
        <div 
          v-for="(product, index) in products"
          :key="index"
          class="brand"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 200 + (index * 200), duration: 600 } }"
        >
          <img :src="product.image" :alt="product.alt || 'Premium product'">
        </div>
      </div>
      
      <div class="products-cta" v-if="ctaText">
        <Button 
          :href="ctaLink" 
          :variant="darkMode ? 'primary' : 'secondary'" 
          :icon="ctaIcon"
        >
          {{ ctaText }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';
import Button from '@/components/ui/Button.vue';

defineProps({
  title: {
    type: String,
    default: 'Premium Products'
  },
  description: {
    type: String,
    default: 'We partner with the industry\'s finest brands to bring you exceptional quality'
  },
  products: {
    type: Array,
    required: true
  },
  ctaText: {
    type: String,
    default: 'View our Online Shop'
  },
  ctaLink: {
    type: String,
    default: '#'
  },
  ctaIcon: {
    type: String,
    default: 'fas fa-shopping-cart'
  },
  darkMode: {
    type: Boolean,
    default: true
  }
});
</script>

<style lang="scss" scoped>
.products-section {
  padding: 5rem 0;
  background-color: white;
  
  &.dark {
    background-color: $secondary-color;
    color: white;
    
    .section-header {
      :deep(h2), :deep(p) {
        color: white;
      }
    }
  }
  
  .brands-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    
    .brand {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba($primary-color, 0.1);
      transition: all 0.3s ease;
      background-color: white;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      
      &:hover {
        transform: scale(1.03);
        box-shadow: 0 10px 25px rgba($primary-color, 0.15);
      }
      
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        display: block;
        transition: transform 0.5s ease;
      }
    }
  }
  
  .products-cta {
    text-align: center;
    
    .shop-btn {
      display: inline-flex;
      align-items: center;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      
      i {
        margin-right: 0.8rem;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
