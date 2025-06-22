<template>
  <div 
    class="package-item"
    
    
    
  >
    <div class="package-header">
      <h3>{{ title }}</h3>
      <div class="package-price">{{ price }}</div>
    </div>
    <div class="package-content">
      <p class="package-description">{{ description }}</p>
      <ul class="package-includes">
        <li v-for="(item, index) in includes" :key="index">
          {{ item }}
        </li>
      </ul>
      <p class="package-duration" v-if="duration">
        <i class="far fa-clock"></i> Duration: {{ duration }}
      </p>
      <Button 
        class="btn primary" 
        :to="bookingLink"
        @click="$emit('book')"
      >
        {{ buttonText }}
      </Button>
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
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  includes: {
    type: Array,
    default: () => []
  },
  duration: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: 'Book This Package'
  },
  bookingLink: {
    type: String,
    default: '/contact'
  },
  delay: {
    type: Number,
    default: 200
  }
});

defineEmits(['book']);
</script>

<style lang="scss" scoped>
.package-item {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba($primary-color, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba($primary-color, 0.15);
  }
  
  .package-header {
    background-color: $primary-color;
    padding: 1.5rem;
    color: white;
    text-align: center;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: white;
    }
    
    .package-price {
      font-size: 2rem;
      font-weight: 700;
      color: $accent-color;
    }
  }
  
  .package-content {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    
    .package-description {
      margin-bottom: 1.5rem;
      line-height: 1.6;
      color: custom-lighten($primary-color, 20%);
    }
    
    .package-includes {
      list-style: none;
      padding: 0;
      margin-bottom: 1.5rem;
      
      li {
        padding: 0.8rem 0;
        border-bottom: 1px solid rgba($primary-color, 0.1);
        color: $primary-color;
        
        &:last-child {
          border-bottom: none;
        }
        
        &::before {
          content: '✓';
          color: $accent-color;
          margin-right: 0.8rem;
          font-weight: 700;
        }
      }
    }
    
    .package-duration {
      font-style: italic;
      color: custom-lighten($primary-color, 30%);
      margin-bottom: 1.5rem;
      
      i {
        margin-right: 0.5rem;
      }
    }
    
    .btn {
      width: 100%;
      margin-top: auto;
    }
  }
}
</style>
