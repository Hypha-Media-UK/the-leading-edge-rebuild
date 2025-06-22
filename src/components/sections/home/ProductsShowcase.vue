<template>
  <section class="products-section" :class="{ 'dark': darkMode }">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
        :isDark="darkMode"
      />
      
      <div class="brands-container">
        <div 
          v-for="(product, index) in products"
          :key="index"
          :class="['brand', `brand-position-${index}`]"
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
  color: $primary-color; // Default dark text for light background
  
  &.dark {
    background-color: $primary-color;
    color: white;
    
    .section-header {
      :deep(h2), :deep(p) {
        color: white;
      }
    }
  }
  
  .brands-container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
      "main top-right-1"
      "main top-right-2"
      "main bottom-right";
    gap: 1.5rem;
    margin-bottom: 3rem;
    height: 500px;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto;
      grid-template-areas: 
        "main"
        "top-right-1"
        "top-right-2"
        "bottom-right";
      height: auto;
    }
    
    .brand {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba($primary-color, 0.1);
      transition: all 0.3s ease;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      
      &.brand-position-0 {
        grid-area: main;
        min-height: 460px;
        
        @media (max-width: 768px) {
          min-height: 300px;
        }
      }
      
      &.brand-position-1, &.brand-position-2 {
        grid-area: top-right-1;
        min-height: 150px;
        
        @media (max-width: 768px) {
          min-height: 200px;
        }
      }
      
      &.brand-position-2 {
        grid-area: top-right-2;
      }
      
      &.brand-position-3 {
        grid-area: bottom-right;
        min-height: 150px;
        
        @media (max-width: 768px) {
          min-height: 200px;
        }
      }
      
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
