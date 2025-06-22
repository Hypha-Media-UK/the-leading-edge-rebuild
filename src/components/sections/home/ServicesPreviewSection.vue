<template>
  <section class="services-preview">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="services-grid">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :description="service.description"
          :image="service.image"
          :link-text="service.linkText"
          :link-url="service.linkUrl"
          :delay="200 + (index * 200)"
          :motion-x="getMotionX(index)"
        />
      </div>
      
      <div class="services-cta">
        <Button :to="ctaLink" variant="primary">{{ ctaText }}</Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import ServiceCard from '@/components/ui/ServiceCard.vue';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Our Services'
  },
  description: {
    type: String,
    default: 'Discover our range of premium hair and beauty services'
  },
  services: {
    type: Array,
    required: true
  },
  ctaText: {
    type: String,
    default: 'View All Services'
  },
  ctaLink: {
    type: String,
    default: '/services'
  }
});

// Function to determine motion direction for each card
const getMotionX = (index) => {
  if (props.services.length <= 1) return -50;
  
  if (index === 0) return -50;
  else if (index === props.services.length - 1) return 50;
  else return 0;
};
</script>

<style lang="scss" scoped>
.services-preview {
  background-color: white;
  padding: 5rem 0;
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .services-cta {
    text-align: center;
  }
}
</style>
