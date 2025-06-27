<template>
  <section class="process-section">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="process-steps">
        <div 
          v-for="(step, index) in steps"
          :key="index"
          class="process-step"
          
          
          
        >
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
      
      <div 
        v-if="$slots.cta"
        class="process-cta"
        
        
        
      >
        <slot name="cta"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';

defineProps({
  title: {
    type: String,
    default: 'Our Application Process'
  },
  description: {
    type: String,
    default: 'Here\'s how you can join our team in just a few simple steps'
  },
  steps: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.process-section {
  padding: 5rem 0;
  background-color: $light-color;
  
  .process-steps {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 28px;
      width: 2px;
      height: calc(100% - 40px);
      background-color: rgba($accent-color, 0.3);
      
      @media (max-width: 576px) {
        left: 23px;
      }
    }
    
    .process-step {
      display: flex;
      margin-bottom: 2.5rem;
      position: relative;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      .step-number {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        background-color: $accent-color;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin-right: 1.5rem;
        z-index: 1;
        box-shadow: 0 5px 15px rgba($accent-color, 0.2);
        
        @media (max-width: 576px) {
          width: 50px;
          height: 50px;
          font-size: 1.3rem;
          margin-right: 1rem;
        }
      }
      
      .step-content {
        background-color: white;
        padding: 1.5rem 2rem;
        border-radius: 8px;
        flex: 1;
        box-shadow: 0 5px 15px rgba($primary-color, 0.05);
        
        h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: $primary-color;
        }
        
        p {
          color: custom-lighten($primary-color, 20%);
          line-height: 1.6;
          margin: 0;
        }
        
        @media (max-width: 576px) {
          padding: 1.2rem;
        }
      }
    }
  }
  
  .process-cta {
    text-align: center;
    margin-top: 3rem;
  }
}
</style>
