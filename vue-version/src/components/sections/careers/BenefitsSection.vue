<template>
  <section class="why-join-section">
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
        >
          <div class="icon">
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
    default: 'Why Join The Leading Edge?'
  },
  description: {
    type: String,
    default: 'At The Leading Edge, we believe in nurturing talent and providing our team members with the tools and environment they need to thrive.'
  },
  benefits: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.why-join-section {
  background-color: white;
  padding: 5rem 0;
  
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .benefit-item {
    background-color: $light-color;
    padding: 2.5rem 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 20px rgba($primary-color, 0.05);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba($primary-color, 0.1);
    }
    
    .icon {
      font-size: 2.5rem;
      color: $accent-color;
      margin-bottom: 1.5rem;
    }
    
    h3 {
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }
    
    p {
      color: lighten($primary-color, 20%);
      line-height: 1.6;
    }
  }
  
  @media (max-width: 576px) {
    .benefits-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
