<template>
  <div class="tabs-container">
    <div 
      v-for="(tab, index) in tabs"
      :key="tab.id"
      class="tab" 
      :class="{ 'active': activeTab === tab.id }"
      @click="$emit('tab-change', tab.id)"
    >
      <i :class="tab.icon"></i>
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
.tabs-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba($primary-color, 0.1);
  
  .tab {
    flex: 1;
    min-width: 120px;
    padding: 1.5rem 1rem;
    text-align: center;
    background-color: $light-color;
    color: $primary-color;
    cursor: pointer;
    transition: all 0.3s ease;
    border-right: 1px solid rgba($primary-color, 0.1);
    
    &:last-child {
      border-right: none;
    }
    
    i {
      display: block;
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }
    
    span {
      font-weight: 600;
      font-size: 1rem;
    }
    
    &:hover {
      background-color: custom-darken($light-color, 5%);
    }
    
    &.active {
      background-color: $accent-color;
      color: white;
    }
    
    @media (max-width: 768px) {
      min-width: 120px;
      padding: 1.2rem 0.8rem;
      
      i {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      
      span {
        font-size: 0.9rem;
      }
    }
    
    @media (max-width: 576px) {
      flex: 1 0 50%;
      border-bottom: 1px solid rgba($primary-color, 0.1);
      
      &:nth-child(even) {
        border-right: none;
      }
      
      &:nth-child(3), &:nth-child(4) {
        border-bottom: none;
      }
    }
  }
}
</style>
