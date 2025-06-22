<template>
  <div class="job-card">
    <div class="job-header">
      <h3>{{ title }}</h3>
      <div class="job-meta">
        <span class="job-type" :class="jobType">{{ jobType }}</span>
        <span class="job-location"><i class="fas fa-map-marker-alt"></i> {{ location }}</span>
      </div>
    </div>
    
    <div class="job-content">
      <p class="job-excerpt">{{ excerpt }}</p>
      
      <div class="job-details" v-if="isExpanded">
        <div v-if="$slots.description">
          <slot name="description"></slot>
        </div>
        <div v-else v-html="description"></div>
        
        <div v-if="requirements && requirements.length" class="job-requirements">
          <h4>Requirements</h4>
          <ul>
            <li v-for="(requirement, index) in requirements" :key="index">{{ requirement }}</li>
          </ul>
        </div>
        
        <div v-if="benefits && benefits.length" class="job-benefits">
          <h4>Benefits</h4>
          <ul>
            <li v-for="(benefit, index) in benefits" :key="index">{{ benefit }}</li>
          </ul>
        </div>
      </div>
      
      <div class="job-actions">
        <Button 
          v-if="!isExpanded"
          @click="$emit('expand', id)"
          variant="secondary"
          size="small"
        >
          View Details
        </Button>
        
        <Button 
          v-else
          @click="$emit('collapse', id)"
          variant="secondary"
          size="small"
        >
          Hide Details
        </Button>
        
        <Button 
          @click="$emit('apply', id)"
          variant="primary"
          size="small"
        >
          Apply Now
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue';

defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    default: 'Full-time',
    validator: (value) => ['Full-time', 'Part-time', 'Contract', 'Internship'].includes(value)
  },
  location: {
    type: String,
    default: 'Hyde, Cheshire'
  },
  excerpt: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  requirements: {
    type: Array,
    default: () => []
  },
  benefits: {
    type: Array,
    default: () => []
  },
  isExpanded: {
    type: Boolean,
    default: false
  },
});

defineEmits(['expand', 'collapse', 'apply']);
</script>

<style lang="scss" scoped>
.job-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba($primary-color, 0.08);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba($primary-color, 0.12);
  }
  
  .job-header {
    padding: 1.5rem;
    border-bottom: 1px solid $light-color;
    
    h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    .job-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      
      .job-type {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        border-radius: 50px;
        font-size: 0.85rem;
        font-weight: 600;
        
        &.Full-time {
          background-color: rgba($accent-color, 0.1);
          color: $accent-color;
        }
        
        &.Part-time {
          background-color: rgba(#4CAF50, 0.1);
          color: #4CAF50;
        }
        
        &.Contract {
          background-color: rgba(#FF9800, 0.1);
          color: #FF9800;
        }
        
        &.Internship {
          background-color: rgba(#2196F3, 0.1);
          color: #2196F3;
        }
      }
      
      .job-location {
        display: inline-flex;
        align-items: center;
        color: custom-lighten($primary-color, 30%);
        font-size: 0.95rem;
        
        i {
          margin-right: 0.5rem;
          color: $accent-color;
        }
      }
    }
  }
  
  .job-content {
    padding: 1.5rem;
    
    .job-excerpt {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .job-details {
      border-top: 1px solid $light-color;
      padding-top: 1.5rem;
      margin-bottom: 1.5rem;
      
      p {
        color: custom-lighten($primary-color, 20%);
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
      
      h4 {
        font-size: 1.2rem;
        margin: 1.5rem 0 1rem;
        color: $primary-color;
      }
      
      ul {
        padding-left: 1.5rem;
        margin-bottom: 1.5rem;
        
        li {
          color: custom-lighten($primary-color, 20%);
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
      }
    }
    
    .job-actions {
      display: flex;
      gap: 1rem;
      
      @media (max-width: 576px) {
        flex-direction: column;
      }
    }
  }
}
</style>
