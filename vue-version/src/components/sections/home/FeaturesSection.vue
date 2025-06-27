<template>
  <section class="features">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="features-grid">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          :delay="200 + (index * 200)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';
import FeatureCard from '@/components/ui/FeatureCard.vue';

defineProps({
  title: {
    type: String,
    default: 'Why Choose Us'
  },
  description: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.features {
  background-color: $light-color;
  padding: 5rem 0;
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
}
</style>
