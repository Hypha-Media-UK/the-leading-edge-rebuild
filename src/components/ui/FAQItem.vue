<template>
  <div 
    class="faq-item"
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: delay, duration: 600 } }"
  >
    <h3>{{ question }}</h3>
    <p>{{ answer }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  delay: {
    type: Number,
    default: 200
  }
});
</script>

<style lang="scss" scoped>
.faq-item {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba($primary-color, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba($primary-color, 0.1);
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: $primary-color;
  }
  
  p {
    color: custom-lighten($primary-color, 20%);
    line-height: 1.6;
    margin: 0;
  }
}
</style>
