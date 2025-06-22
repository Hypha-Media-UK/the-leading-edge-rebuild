<template>
  <section class="openings-section">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="positions-grid">
        <div 
          v-for="(position, index) in positions" 
          :key="position.id"
          class="position-card"
        >
          <h3>{{ position.title }}</h3>
          <div class="position-meta">
            <span class="type">{{ position.type }}</span>
            <span class="location"><i class="fas fa-map-marker-alt"></i> {{ position.location }}</span>
          </div>
          <p class="position-excerpt">{{ position.description.substring(0, 120) }}...</p>
          <button class="btn-text">View Details</button>
        </div>
      </div>
      
      <!-- No positions message (if needed) -->
      <div v-if="positions.length === 0" class="no-positions">
        <p>We don't have any openings at the moment, but we're always interested in meeting talented professionals. Please feel free to submit your application for future consideration.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';

defineProps({
  title: {
    type: String,
    default: 'Current Openings'
  },
  description: {
    type: String,
    default: 'Explore our current job opportunities and find the perfect role for your skills and passion.'
  },
  positions: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.openings-section {
  background-color: $light-color;
  padding: 5rem 0;
  
  .positions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .position-card {
    background-color: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba($primary-color, 0.05);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba($primary-color, 0.1);
    }
    
    h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    .position-meta {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      
      .type {
        background-color: rgba($accent-color, 0.1);
        color: $accent-color;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
        margin-right: 1rem;
      }
      
      .location {
        color: lighten($primary-color, 30%);
        font-size: 0.9rem;
        
        i {
          margin-right: 0.3rem;
        }
      }
    }
    
    .position-excerpt {
      color: lighten($primary-color, 20%);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
  }
  
  .no-positions {
    text-align: center;
    background-color: white;
    border-radius: 8px;
    padding: 3rem 2rem;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 5px 15px rgba($primary-color, 0.05);
    
    p {
      color: lighten($primary-color, 20%);
      line-height: 1.6;
    }
  }
}

.btn-text {
  color: $accent-color;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $accent-color;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
}
</style>
