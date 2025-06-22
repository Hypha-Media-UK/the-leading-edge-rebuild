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
  }
  
  .separator {
    width: 80px;
    height: 3px;
    background-color: $accent-color;
    margin: 0 auto 1.5rem;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: custom-lighten($primary-color, 20%);
    font-size: 1.1rem;
  }
}
</style>
