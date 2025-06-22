<template>
  <div class="tabs-container">
    <TabItem
      v-for="tab in tabs"
      :key="tab.id"
      :label="tab.label"
      :icon="tab.icon"
      :isActive="activeTab === tab.id"
      @click="$emit('tab-change', tab.id)"
    />
  </div>
</template>

<script setup>
import TabItem from '@/components/ui/TabItem.vue';

defineProps({
  tabs: {
    type: Array,
    required: true
  },
  activeTab: {
    type: String,
    required: true
  }
});

defineEmits(['tab-change']);
</script>

<style lang="scss" scoped>
.tabs-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba($primary-color, 0.1);
  
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
