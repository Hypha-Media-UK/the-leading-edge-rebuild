<template>
  <div class="contact-card">
    <div class="icon" v-if="icon">
      <i :class="icon"></i>
    </div>
    <h3>{{ title }}</h3>
    
    <!-- Default slot for content -->
    <slot></slot>
    
    <!-- Location Card Content -->
    <template v-if="type === 'location'">
      <p v-if="address">{{ address }}</p>
      <div v-if="mapImage || mapLink" class="map-container">
        <div 
          v-if="mapImage" 
          class="map-image" 
          :style="{ backgroundImage: `url('${mapImage}')` }"
        ></div>
        <Button 
          v-if="mapLink" 
          :href="mapLink" 
          target="_blank" 
          variant="secondary"
        >
          Get Directions
        </Button>
      </div>
    </template>
    
    <!-- Hours Card Content -->
    <template v-else-if="type === 'hours' && hours && hours.length">
      <ul class="hours-list">
        <li 
          v-for="(day, index) in hours" 
          :key="index"
          :class="{ 'closed': day.closed }"
        >
          <span class="day">{{ day.day }}:</span>
          <span class="time">{{ day.time }}</span>
        </li>
      </ul>
    </template>
    
    <!-- Connect Card Content -->
    <template v-else-if="type === 'connect'">
      <ul v-if="contactItems && contactItems.length" class="contact-list">
        <li v-for="(item, index) in contactItems" :key="index">
          <i v-if="item.icon" :class="item.icon"></i>
          <a v-if="item.link" :href="item.link">{{ item.text }}</a>
          <span v-else>{{ item.text }}</span>
        </li>
      </ul>
      
      <div v-if="socialLinks && socialLinks.length" class="social-icons">
        <a 
          v-for="(link, index) in socialLinks" 
          :key="index"
          :href="link.url" 
          :aria-label="link.label"
          target="_blank"
        >
          <i :class="link.icon"></i>
        </a>
      </div>
    </template>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue';

defineProps({
  type: {
    type: String,
    default: 'default',
    validator: value => ['default', 'location', 'hours', 'connect'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  // Location props
  address: {
    type: String,
    default: ''
  },
  mapImage: {
    type: String,
    default: ''
  },
  mapLink: {
    type: String,
    default: ''
  },
  // Hours props
  hours: {
    type: Array,
    default: () => []
  },
  // Connect props
  contactItems: {
    type: Array,
    default: () => []
  },
  socialLinks: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
.contact-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba($primary-color, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .icon {
    width: 60px;
    height: 60px;
    background-color: rgba($accent-color, 0.1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    
    i {
      font-size: 1.5rem;
      color: $accent-color;
    }
  }
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: $primary-color;
  }
  
  p {
    color: custom-lighten($primary-color, 20%);
    line-height: 1.6;
    margin-bottom: 1rem;
    white-space: pre-line; // Respect line breaks in address
  }
  
  .map-container {
    margin-top: 1.5rem;
    
    .map-image {
      height: 180px;
      border-radius: 4px;
      margin-bottom: 1rem;
      background-size: cover;
      background-position: center;
    }
  }
  
  .hours-list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      display: flex;
      justify-content: space-between;
      padding: 0.8rem 0;
      border-bottom: 1px solid rgba($primary-color, 0.1);
      
      &:last-child {
        border-bottom: none;
      }
      
      .day {
        font-weight: 500;
        color: $primary-color;
      }
      
      .time {
        color: custom-lighten($primary-color, 20%);
      }
      
      &.closed {
        .time {
          color: $accent-color;
          font-style: italic;
        }
      }
    }
  }
  
  .contact-list {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
    
    li {
      margin-bottom: 1rem;
      
      i {
        width: 20px;
        margin-right: 0.5rem;
        color: $accent-color;
      }
      
      a {
        color: custom-lighten($primary-color, 20%);
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: $accent-color;
        }
      }
    }
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
    margin-top: auto;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba($primary-color, 0.1);
      color: $primary-color;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: $accent-color;
        color: white;
        transform: translateY(-3px);
      }
    }
  }
}
</style>
