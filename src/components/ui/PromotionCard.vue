<template>
  <div 
    class="promotion-card"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: delay, duration: 600 } }"
  >
    <div class="promotion-tag" v-if="tag">{{ tag }}</div>
    <div class="promotion-image" v-if="image">
      <img :src="image" :alt="title">
    </div>
    <div class="promotion-content">
      <h3>{{ title }}</h3>
      <p class="promotion-description">{{ description }}</p>
      
      <div class="promotion-price" v-if="originalPrice || price">
        <span class="original-price" v-if="originalPrice">{{ originalPrice }}</span>
        <span class="price">{{ price }}</span>
      </div>
      
      <div class="promotion-meta">
        <p class="validity" v-if="validity">Valid until: {{ validity }}</p>
        <p class="conditions" v-if="conditions">{{ conditions }}</p>
      </div>
      
      <div class="promotion-actions">
        <slot name="actions">
          <Button 
            :to="buttonLink" 
            :variant="buttonVariant"
            :size="buttonSize"
          >
            {{ buttonText }}
          </Button>
        </slot>
      </div>
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
    default: ''
  },
  originalPrice: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  },
  tag: {
    type: String,
    default: ''
  },
  validity: {
    type: String,
    default: ''
  },
  conditions: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: 'Book Now'
  },
  buttonLink: {
    type: String,
    default: '/contact'
  },
  buttonVariant: {
    type: String,
    default: 'primary'
  },
  buttonSize: {
    type: String,
    default: 'small'
  },
  delay: {
    type: Number,
    default: 200
  }
});
</script>

<style lang="scss" scoped>
.promotion-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba($primary-color, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba($primary-color, 0.12);
  }
  
  .promotion-tag {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: $accent-color;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 1;
  }
  
  .promotion-image {
    height: 200px;
    overflow: hidden;
    
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
  
  .promotion-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    
    h3 {
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
      color: $primary-color;
    }
    
    .promotion-description {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
      margin-bottom: 1.2rem;
      flex: 1;
    }
    
    .promotion-price {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      
      .original-price {
        color: custom-lighten($primary-color, 30%);
        text-decoration: line-through;
        margin-right: 1rem;
        font-size: 1.1rem;
      }
      
      .price {
        color: $accent-color;
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
    
    .promotion-meta {
      margin-bottom: 1.5rem;
      
      .validity, .conditions {
        font-size: 0.9rem;
        color: custom-lighten($primary-color, 30%);
        margin-bottom: 0.3rem;
      }
    }
    
    .promotion-actions {
      margin-top: auto;
    }
  }
}
</style>
