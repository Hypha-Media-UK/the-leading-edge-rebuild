<template>
  <div class="section-header">
    <h2>{{ title }}</h2>
    <div class="separator"></div>
    <p v-if="description">{{ description }}</p>
  </div>
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
.section-header {
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: $primary-color;
    
    @media (max-width: 1200px) {
      font-size: 2.2rem;
      margin-bottom: 0.9rem;
    }
    
    @media (max-width: 992px) {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 0.7rem;
    }
    
    @media (max-width: 576px) {
      font-size: 1.6rem;
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
    color: custom-lighten($primary-color, 20%);
    font-size: 1.1rem;
    
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
