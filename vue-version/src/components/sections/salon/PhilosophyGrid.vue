<template>
  <section class="philosophy-section">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="philosophy-content">
        <FeatureCard
          v-for="(item, index) in philosophyItems"
          :key="index"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
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
    default: 'Our Philosophy'
  },
  description: {
    type: String,
    default: ''
  },
  philosophyItems: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.philosophy-section {
  background-color: $light-color;
  padding: 5rem 0;
  
  .philosophy-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
}
</style>
