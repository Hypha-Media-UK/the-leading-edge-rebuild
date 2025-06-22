<template>
  <section class="services-tabs">
    <div class="container">
      <TabsContainer
        :tabs="tabs"
        :activeTab="activeTab"
        @tab-change="$emit('tab-change', $event)"
      />
      
      <ServiceTabContent
        title="Hair Services"
        description="Our expert stylists are trained in the latest techniques to give you the perfect cut, color, or style. Whether you're looking for a subtle change or a complete transformation, we're here to make your vision a reality."
        :isActive="activeTab === 'hair'"
      >
        <ServicesList :services="hairServices" />
      </ServiceTabContent>
      
      <ServiceTabContent
        title="Beauty Services"
        description="Enhance your natural beauty with our range of facial treatments, makeup services, and more. Our licensed estheticians use premium products to help you look and feel your best."
        :isActive="activeTab === 'beauty'"
      >
        <ServicesList :services="beautyServices" />
      </ServiceTabContent>
      
      <ServiceTabContent
        title="Nail Services"
        description="Our nail technicians are skilled in creating beautiful, long-lasting manicures and pedicures using the highest quality products for healthy, beautiful nails."
        :isActive="activeTab === 'nails'"
      >
        <ServicesList :services="nailServices" />
      </ServiceTabContent>
      
      <ServiceTabContent
        title="Spa Packages"
        description="Treat yourself or a loved one to one of our comprehensive spa packages, designed to provide a complete pampering experience."
        :isActive="activeTab === 'packages'"
      >
        <PackagesList :packages="packages" />
      </ServiceTabContent>
    </div>
  </section>
</template>

<script setup>
import TabsContainer from '@/components/ui/TabsContainer.vue';
import ServiceTabContent from '@/components/sections/services/ServiceTabContent.vue';
import ServicesList from '@/components/sections/services/ServicesList.vue';
import PackagesList from '@/components/sections/services/PackagesList.vue';

defineProps({
  activeTab: {
    type: String,
    required: true
  },
  tabs: {
    type: Array,
    required: true
  },
  hairServices: {
    type: Array,
    required: true
  },
  beautyServices: {
    type: Array,
    required: true
  },
  nailServices: {
    type: Array,
    required: true
  },
  packages: {
    type: Array,
    required: true
  }
});

defineEmits(['tab-change']);
</script>

<style lang="scss" scoped>
.services-tabs {
  padding: 5rem 0;
  background-color: white;
}
</style>
