<template>
  <div class="sub-tabs-container">
    <div
      v-for="(tab, index) in tabs"
      :key="tab.id"
      class="sub-tab"
      :class="{ 'active': activeTab === tab.id }"
      @click="$emit('tab-change', tab.id)"
    >
      <span>{{ tab.label }}</span>
    </div>
  </div>
</template>

<script setup>
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
.sub-tabs-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  gap: 0.8rem;
  
  .sub-tab {
    padding: 0.8rem 1.2rem;
    background-color: white;
    border: 1px solid $light-color;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    span {
      font-weight: 500;
      font-size: 0.95rem;
      color: $primary-color;
    }
    
    &:hover {
      border-color: $accent-color;
      transform: translateY(-2px);
    }
    
    &.active {
      background-color: $accent-color;
      border-color: $accent-color;
      
      span {
        color: white;
      }
    }
    
    @media (max-width: 576px) {
      width: 100%;
      text-align: center;
      border-radius: 4px;
    }
  }
}
</style>
