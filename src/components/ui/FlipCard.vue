<template>
  <div class="flip-card-container" :style="containerStyle">
    <div 
      class="card-flipper" 
      :class="{ 'is-flipped': isFlipped }"
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: delay, duration: 600 } }"
    >
      <!-- Front Side -->
      <div class="card-front" :class="frontClass">
        <slot name="front"></slot>
      </div>
      
      <!-- Back Side -->
      <div class="card-back" :class="backClass">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  isFlipped: {
    type: Boolean,
    default: false
  },
  height: {
    type: [String, Number],
    default: '550px'
  },
  frontClass: {
    type: String,
    default: ''
  },
  backClass: {
    type: String,
    default: ''
  },
  delay: {
    type: Number,
    default: 0
  }
});

// Convert height to CSS value
const containerStyle = computed(() => ({
  height: typeof props.height === 'number' ? `${props.height}px` : props.height
}));
</script>

<style lang="scss" scoped>
.flip-card-container {
  perspective: 1000px; // Important for 3D effect
  margin-bottom: 1rem;
  width: 100%;
}

.card-flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform-origin: center center;
  
  &.is-flipped {
    transform: rotateY(180deg);
  }
}

.card-front, .card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden; /* Safari */
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba($primary-color, 0.08);
  overflow: hidden;
}

.card-front {
  z-index: 2;
  transform: rotateY(0deg);
}

.card-back {
  transform: rotateY(180deg);
}
</style>
