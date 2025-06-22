<template>
  <section class="hero" :style="backgroundStyle">
    <div class="container">
      <div class="hero-content">
        <div class="text-content">
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
            v-html="heading"
          ></h1>
          <p 
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }"
          >
            {{ text }}
          </p>
        </div>
        
        <div 
          class="hero-buttons"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 800 } }"
        >
          <Button 
            v-for="(button, index) in buttons" 
            :key="index"
            :to="button.to"
            :variant="button.variant"
          >
            {{ button.text }}
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
  heading: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  buttons: {
    type: Array,
    default: () => []
  },
  backgroundImage: {
    type: String,
    default: '/images/new/heros/hero3.webp'
  }
});

const backgroundStyle = computed(() => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${props.backgroundImage}')`
}));
</script>

<style lang="scss" scoped>
.hero {
  height: 70vh;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: grid;
  align-items: center;
  color: white;
  margin-top: -80px; // Offset the header padding
  border-bottom: 2px solid white;
  
  .hero-content {
    width: 100%;
    max-width: 1200px;
    position: relative;
    margin-top: 100px;
    z-index: 1;
    color: white;
    flex-direction: column;
    justify-content: center;
    
    .text-content {
      max-width: 700px;
      margin-bottom: 2rem;
    }
    
    h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      color: $accent-color;
      
      span {
        color: white;
      }
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      max-width: 600px;
      line-height: 1.6;
    }
  }
  
  .hero-buttons {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    margin-top: 1.5rem;
    
    @media (max-width: 1200px) {
      gap: 0.8rem;
    }
    
    @media (max-width: 991px) {
      flex-wrap: wrap;
      gap: 0.7rem;
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      gap: 0.6rem;
    }
  }
}
</style>
