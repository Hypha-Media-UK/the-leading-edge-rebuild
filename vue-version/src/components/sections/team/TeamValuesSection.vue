<template>
  <section class="values-section">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="values-content">
        <ValueCard
          v-for="(value, index) in values"
          :key="index"
          :title="value.title"
          :description="value.description"
          :icon="value.icon"
          :delay="200 + (index * 200)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';
import ValueCard from '@/components/ui/ValueCard.vue';

defineProps({
  title: {
    type: String,
    default: 'Our Team Values'
  },
  description: {
    type: String,
    default: ''
  },
  values: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.values-section {
  background-color: $light-color;
  padding: 5rem 0;
  
  .values-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}
</style>
