<template>
  <div class="packages-list">
    <PackageCard
      v-for="(pkg, index) in packages"
      :key="index"
      :title="pkg.title"
      :price="pkg.price"
      :description="pkg.description"
      :includes="pkg.includes"
      :duration="pkg.duration"
      :buttonText="pkg.buttonText || 'Book This Package'"
      :bookingLink="pkg.bookingLink || '/contact'"
      :delay="200 + (index * 200)"
    />
  </div>
</template>

<script setup>
import PackageCard from '@/components/ui/PackageCard.vue';

defineProps({
  packages: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.packages-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
