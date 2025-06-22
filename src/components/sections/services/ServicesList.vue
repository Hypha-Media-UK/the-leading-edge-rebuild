<template>
  <div class="services-list">
    <ServiceItem
      v-for="(service, index) in services"
      :key="index"
      :title="service.title"
      :description="service.description"
      :price="service.price"
    />
  </div>
</template>

<script setup>
import ServiceItem from '@/components/ui/ServiceItem.vue';

defineProps({
  services: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.services-list {
  max-width: 900px;
  margin: 0 auto;
}
</style>
