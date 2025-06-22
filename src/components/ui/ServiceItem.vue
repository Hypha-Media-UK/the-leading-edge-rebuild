<template>
  <div class="service-item">
    <div class="service-info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="service-price">{{ price }}</div>
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
    required: true
  },
  price: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
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
</style>
