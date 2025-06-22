<template>
  <div class="services-content" v-if="isActive">
    <div class="services-intro">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    
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
  isActive: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.services-content {
  .services-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    p {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
    }
  }
}
</style>
