<template>
  <section class="testimonials">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="testimonials-slider">
        <div class="testimonial-container">
          <transition 
            name="testimonial-fade"
          >
            <div 
              v-if="testimonialTransition"
              class="testimonial-wrapper"
              :key="currentTestimonial.id"
            >
              <TestimonialCard
                :quote="currentTestimonial.quote"
                :name="currentTestimonial.name"
                :role="currentTestimonial.role"
                :image="currentTestimonial.image"
              />
            </div>
          </transition>
        </div>
        
        <div class="testimonial-controls">
          <div class="testimonial-arrows">
            <button 
              class="arrow prev" 
              @click="previousTestimonial"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button 
              class="arrow next" 
              @click="nextTestimonial"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import TestimonialCard from '@/components/ui/TestimonialCard.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'What Our Clients Say'
  },
  description: {
    type: String,
    default: ''
  },
  testimonials: {
    type: Array,
    required: true
  },
  autoRotate: {
    type: Boolean,
    default: true
  },
  rotationInterval: {
    type: Number,
    default: 6000 // 6 seconds
  }
});

const currentTestimonialIndex = ref(0);
const testimonialTransition = ref(true);
let testimonialInterval = null;

const currentTestimonial = computed(() => props.testimonials[currentTestimonialIndex.value]);

// Function to go to next testimonial
const nextTestimonial = () => {
  // Just hide the current testimonial
  testimonialTransition.value = false;
  
  // After it's hidden, change the content and show again
  setTimeout(() => {
    currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % props.testimonials.length;
    // Show the new testimonial
    testimonialTransition.value = true;
  }, 500);
};

// Function to go to previous testimonial
const previousTestimonial = () => {
  // Hide the current testimonial
  testimonialTransition.value = false;
  
  // After it's hidden, change the content and show again
  setTimeout(() => {
    currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + props.testimonials.length) % props.testimonials.length;
    // Show the new testimonial
    testimonialTransition.value = true;
  }, 500);
};

onMounted(() => {
  if (props.autoRotate) {
    // Start auto-rotation
    testimonialInterval = setInterval(() => {
      nextTestimonial();
    }, props.rotationInterval);
  }
});

// Clean up interval when component is unmounted
onBeforeUnmount(() => {
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
  }
});
</script>

<style lang="scss" scoped>
.testimonials {
  background-color: $secondary-color;
  color: white;
  padding: 5rem 0;
  
  .testimonials-slider {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }
  
  .testimonial-container {
    position: relative;
    height: 300px; /* Fixed height to prevent layout shifts */
    margin-bottom: 0;
    will-change: opacity, transform; /* Performance optimization */
  }
  
  .testimonial-fade-enter-active,
  .testimonial-fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  
  .testimonial-fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .testimonial-fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  .testimonial-controls {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    
    .testimonial-arrows {
      display: flex;
      justify-content: center;
      gap: 1rem;
      
      .arrow {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: white;
        color: $primary-color;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: none;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        
        &:hover {
          background-color: $accent-color;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
