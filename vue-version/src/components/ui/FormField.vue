<template>
  <div class="form-group">
    <label :for="id">{{ label }}{{ required ? ' *' : '' }}</label>
    
    <!-- Text, Email, Tel inputs -->
    <input 
      v-if="type === 'text' || type === 'email' || type === 'tel'"
      :type="type" 
      :id="id" 
      :value="modelValue" 
      :placeholder="placeholder"
      :class="{ 'error': error }"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    
    <!-- Textarea -->
    <textarea 
      v-else-if="type === 'textarea'"
      :id="id" 
      :value="modelValue" 
      :placeholder="placeholder"
      :rows="rows"
      :class="{ 'error': error }"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    
    <!-- Select -->
    <select 
      v-else-if="type === 'select'"
      :id="id" 
      :value="modelValue" 
      :class="{ 'error': error }"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="placeholder" value="">{{ placeholder }}</option>
      <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    
    <!-- Date -->
    <input 
      v-else-if="type === 'date'"
      type="date" 
      :id="id" 
      :value="modelValue" 
      :class="{ 'error': error }"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    
    <!-- Error message -->
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'email', 'tel', 'textarea', 'select', 'date'].includes(value)
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  },
  rows: {
    type: Number,
    default: 4
  }
});

defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: $primary-color;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid $light-color;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: $accent-color;
    }
    
    &.error {
      border-color: #FF5252;
    }
  }
  
  .error-message {
    display: block;
    color: #FF5252;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
}
</style>
