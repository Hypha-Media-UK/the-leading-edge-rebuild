<template>
  <div class="tab-content-wrapper">
    <div class="services-content" :class="{ 'active': isActive, 'inactive': !isActive }">
      <div class="services-intro">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      
      <slot></slot>
    </div>
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
.tab-content-wrapper {
  position: relative;
  min-height: 400px; /* Ensure container doesn't collapse between transitions */
  width: 100%;
  overflow: hidden; /* Prevent content overflow during animations */
}

.services-content {
  width: 100%;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  
  &.active {
    opacity: 1;
    transform: translateY(0);
    z-index: 2;
  }
  
  &.inactive {
    opacity: 0;
    transform: translateY(50px);
    z-index: 1;
    pointer-events: none;
  }
  
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
