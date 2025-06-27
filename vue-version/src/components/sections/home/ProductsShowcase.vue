<template>
  <section class="products-section">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="brands-container">
        <div 
          v-for="(product, index) in products"
          :key="index"
          :class="['brand', `brand-position-${index}`]"
          
          
          
        >
          <img :src="product.image" :alt="product.alt || 'Premium product'">
        </div>
      </div>
      
      <div class="products-cta" v-if="ctaText">
        <Button 
          :href="ctaLink" 
          variant="primary" 
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
  }
});
</script>

<style lang="scss" scoped>
.products-section {
  padding: 5rem 0;
  background-color: white;
  color: $primary-color;
  
  .brands-container {
    display: grid;
    grid-template-areas:
      "prod1 prod1 prod2 prod3"
      "prod1 prod1 prod4 prod4";
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 1.5rem;
    margin-bottom: 3rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      grid-template-areas: 
        "prod1 prod2"
        "prod3 prod4";
      gap: 1rem;
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
      padding: 0;
      
      &.brand-position-0 {
        grid-area: prod1;
        
        @media (max-width: 768px) {
          height: 200px;
        }
      }
      
      &.brand-position-1 {
        grid-area: prod2;
        
        @media (max-width: 768px) {
          height: 200px;
        }
      }
      
      &.brand-position-2 {
        grid-area: prod3;
        
        @media (max-width: 768px) {
          height: 200px;
        }
      }
      
      &.brand-position-3 {
        grid-area: prod4;
        
        @media (max-width: 768px) {
          height: 200px;
        }
      }
      
      &:hover {
        transform: scale(1.03);
        box-shadow: 0 10px 25px rgba($primary-color, 0.15);
      }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
