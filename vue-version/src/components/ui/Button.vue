<template>
  <component 
    :is="tag" 
    :to="to" 
    :href="href" 
    :class="['btn', variant]"
    @click="$emit('click')"
  >
    <i v-if="icon" :class="icon" class="btn-icon"></i>
    <slot></slot>
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value)
  },
  to: {
    type: [String, Object],
    default: null
  },
  href: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: ''
  }
});

const tag = computed(() => {
  if (props.to) return 'router-link';
  if (props.href) return 'a';
  return 'button';
});

defineEmits(['click']);
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  
  &.primary {
    background-color: $accent-color;
    color: white;
    border-color: $accent-color;
    
    &:hover {
      background-color: custom-darken($accent-color, 10%);
      border-color: custom-darken($accent-color, 10%);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: white;
    border-color: white;
    
    &:hover {
      background-color: white;
      color: $primary-color;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.tertiary {
    background-color: custom-lighten($accent-color, 15%);
    color: white;
    border-color: custom-lighten($accent-color, 15%);
    
    &:hover {
      background-color: custom-lighten($accent-color, 25%);
      border-color: custom-lighten($accent-color, 25%);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
  
  .btn-icon {
    margin-right: 0.5rem;
  }
}
</style>
