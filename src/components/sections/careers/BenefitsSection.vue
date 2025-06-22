<template>
  <section class="benefits-section">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="benefits-grid">
        <div 
          v-for="(benefit, index) in benefits"
          :key="index"
          class="benefit-item"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 + (index * 100), duration: 600 } }"
        >
          <div class="benefit-icon">
            <i :class="benefit.icon"></i>
          </div>
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';

defineProps({
  title: {
    type: String,
    default: 'Why Work With Us'
  },
  description: {
    type: String,
    default: 'Discover the many benefits of joining The Leading Edge team'
  },
  benefits: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.benefits-section {
  padding: 5rem 0;
  background-color: white;
  
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    
    .benefit-item {
      background-color: $light-color;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 5px 15px rgba($primary-color, 0.05);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba($primary-color, 0.1);
      }
      
      .benefit-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto 1.5rem;
        background-color: rgba($accent-color, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        i {
          font-size: 2rem;
          color: $accent-color;
        }
      }
      
      h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: $primary-color;
      }
      
      p {
        color: custom-lighten($primary-color, 20%);
        line-height: 1.6;
      }
    }
  }
  
  @media (max-width: 576px) {
    .benefits-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
