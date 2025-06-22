<template>
  <div class="services-content">
    <div class="services-intro">
      <h2>{{ title }}</h2>
      <div v-if="$slots.description">
        <slot name="description"></slot>
      </div>
      <p v-else-if="description">{{ description }}</p>
    </div>
    
    <ServiceGallery 
      v-if="images && images.length > 0" 
      :images="images" 
    />
    
    <div v-if="$slots.additionalContent" class="additional-content">
      <slot name="additionalContent"></slot>
    </div>
    
    <div class="services-list">
      <div 
        v-for="(service, index) in services"
        :key="index"
        class="service-item"
        
        
        
      >
        <div class="service-info">
          <h3>{{ service.title }}</h3>
          <p v-if="service.description">{{ service.description }}</p>
        </div>
        <div class="service-price">{{ service.price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceGallery from '@/components/sections/services/ServiceGallery.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  services: {
    type: Array,
    required: true
  },
  images: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
.services-content {
  .services-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
      color: $primary-color;
    }
    
    p {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  }
  
  .additional-content {
    max-width: 900px;
    margin: 0 auto 2rem;
  }
  
  .services-list {
    max-width: 900px;
    margin: 0 auto;
    
    .service-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      background-color: $light-color;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba($primary-color, 0.05);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba($primary-color, 0.1);
      }
      
      .service-info {
        flex: 1;
        
        h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: $primary-color;
        }
        
        p {
          color: custom-lighten($primary-color, 20%);
          margin: 0;
        }
      }
      
      .service-price {
        font-size: 1.2rem;
        font-weight: 700;
        color: $accent-color;
        margin-left: 1.5rem;
        white-space: nowrap;
      }
      
      @media (max-width: 576px) {
        flex-direction: column;
        text-align: center;
        
        .service-info {
          margin-bottom: 1rem;
        }
        
        .service-price {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
