<template>
  <section class="cta-section" :style="backgroundStyle">
    <div class="container">
      <div 
        class="cta-content"
        
        
        
      >
        <SectionHeader 
          :title="title" 
          :description="text"
        />
        <Button :to="buttonLink" :variant="buttonVariant">{{ buttonText }}</Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import Button from '@/components/ui/Button.vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
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
  backgroundImage: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: 'gradient' // 'gradient' or any CSS color
  }
});

const backgroundStyle = computed(() => {
  if (props.backgroundImage) {
    return {
      backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('${props.backgroundImage}')`
    };
  }
  
  if (props.backgroundColor === 'gradient') {
    return {
      backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))'
    };
  }
  
  return {
    backgroundColor: props.backgroundColor
  };
});
</script>

<style lang="scss" scoped>
.cta-section {
  background-size: cover;
  background-position: center;
  color: $primary-color;
  text-align: center;
  padding: 5rem 0;
  
  .cta-content {
    max-width: 700px;
    margin: 0 auto;
    
    :deep(.section-header) {
      margin-bottom: 2rem;
    }
    
    .btn.primary {
      background-color: $accent-color;
      color: white;
      border-color: $accent-color;
      
      &:hover {
        background-color: transparent;
        color: $accent-color;
      }
    }
  }
}
</style>
