<template>
  <section class="page-header">
    <div class="container">
      <h1>
        {{ title }}
      </h1>
      <div class="separator"></div>
      <p v-if="description">
        {{ description }}
      </p>
      
      <!-- Additional content slot -->
      <slot name="extra"></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss" scoped>
.page-header {
  background-color: $primary-color;
  color: white;
  text-align: center;
  padding: 5rem 0 3rem;
  
  @media (max-width: 992px) {
    padding: 4.5rem 0 2.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 0 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 3.5rem 0 1.5rem;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: white;
    
    @media (max-width: 1200px) {
      font-size: 2.7rem;
      margin-bottom: 0.9rem;
    }
    
    @media (max-width: 992px) {
      font-size: 2.4rem;
      margin-bottom: 0.8rem;
    }
    
    @media (max-width: 768px) {
      font-size: 2.1rem;
      margin-bottom: 0.7rem;
    }
    
    @media (max-width: 576px) {
      font-size: 1.9rem;
      margin-bottom: 0.6rem;
    }
  }
  
  .separator {
    width: 80px;
    height: 3px;
    background-color: $accent-color;
    margin: 0 auto 1.5rem;
    
    @media (max-width: 992px) {
      width: 70px;
      margin-bottom: 1.3rem;
    }
    
    @media (max-width: 768px) {
      width: 60px;
      height: 2px;
      margin-bottom: 1.2rem;
    }
    
    @media (max-width: 576px) {
      width: 50px;
      margin-bottom: 1rem;
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    
    @media (max-width: 992px) {
      font-size: 1.05rem;
      max-width: 650px;
    }
    
    @media (max-width: 768px) {
      font-size: 1rem;
      max-width: 600px;
    }
    
    @media (max-width: 576px) {
      font-size: 0.9rem;
      max-width: 100%;
      line-height: 1.5;
    }
  }
}
</style>
