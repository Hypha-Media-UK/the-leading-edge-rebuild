<template>
  <div 
    class="feature-card"
    v-motion
    :initial="{ opacity: 0, scale: 0.8 }"
    :enter="{ opacity: 1, scale: 1, transition: { delay: delay, duration: 600 } }"
    :hovered="{ scale: 1.05, transition: { duration: 300 } }"
  >
    <div class="icon" v-if="icon">
      <i :class="icon"></i>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <slot></slot>
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
  icon: {
    type: String,
    default: ''
  },
  delay: {
    type: Number,
    default: 200
  }
});
</script>

<style lang="scss" scoped>
.feature-card {
  background-color: white;
  padding: 2.5rem 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 5px 20px rgba($primary-color, 0.05);
  transition: all 0.3s ease;
  
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
    color: custom-lighten($primary-color, 20%);
    line-height: 1.6;
  }
}
</style>
