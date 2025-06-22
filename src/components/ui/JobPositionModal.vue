<template>
  <div class="position-modal" v-if="position" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="$emit('close')">&times;</button>
      
      <div class="modal-body">
        <div class="position-details">
          <div class="position-content">
            <h2>{{ position.title }}</h2>
            <div class="position-meta">
              <span class="type">{{ position.type }}</span>
              <span class="location"><i class="fas fa-map-marker-alt"></i> {{ position.location }}</span>
            </div>
            
            <div class="position-description">
              <p>{{ position.description }}</p>
            </div>
            
            <div class="position-responsibilities">
              <h3>Responsibilities</h3>
              <ul>
                <li v-for="(item, i) in position.responsibilities" :key="i">
                  {{ item }}
                </li>
              </ul>
            </div>
            
            <div class="position-requirements">
              <h3>Requirements</h3>
              <ul>
                <li v-for="(item, i) in position.requirements" :key="i">
                  {{ item }}
                </li>
              </ul>
            </div>
            
            <div class="apply-cta">
              <a href="#application-form" class="btn primary" @click="$emit('close')">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  position: {
    type: Object,
    default: null
  }
});

defineEmits(['close']);
</script>

<style lang="scss" scoped>
.position-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .modal-content {
    position: relative;
    background-color: white;
    border-radius: 8px;
    max-width: 800px;
    width: 90%;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
    animation: modalFadeIn 0.3s ease-out forwards;
    
    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 2rem;
      color: $primary-color;
      cursor: pointer;
      z-index: 10;
      
      &:hover {
        color: $accent-color;
      }
    }
    
    .modal-body {
      padding: 2.5rem;
      
      .position-content {
        h2 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          color: $primary-color;
        }
        
        .position-meta {
          display: flex;
          align-items: center;
          margin-bottom: 1.8rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba($primary-color, 0.1);
          
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
        
        .position-description {
          margin-bottom: 2rem;
          
          p {
            line-height: 1.8;
            color: custom-lighten($primary-color, 20%);
          }
        }
        
        .position-responsibilities, 
        .position-requirements {
          margin-bottom: 2rem;
          
          h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: $primary-color;
          }
          
          ul {
            margin-left: 1.5rem;
            
            li {
              color: custom-lighten($primary-color, 20%);
              margin-bottom: 0.8rem;
              line-height: 1.6;
              position: relative;
            }
          }
        }
        
        .apply-cta {
          margin-top: 2.5rem;
          
          .btn {
            display: inline-block;
            padding: 1rem 2.5rem;
            border-radius: 4px;
            font-weight: 600;
            font-size: 1.1rem;
            text-decoration: none;
            text-align: center;
            transition: all 0.3s ease;
            
            &.primary {
              background-color: $accent-color;
              color: white;
              border: 2px solid $accent-color;
              
              &:hover {
                background-color: custom-darken($accent-color, 10%);
                border-color: custom-darken($accent-color, 10%);
                transform: translateY(-3px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
              }
            }
          }
        }
      }
    }
  }
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .position-modal .modal-content {
    width: 95%;
    max-height: 90vh;
  }
}

@media (max-width: 576px) {
  .position-modal {
    align-items: flex-start;
  }
  
  .position-modal .modal-content {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
  }
  
  .position-modal .modal-content .close-button {
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2.2rem;
    color: $primary-color;
    z-index: 20;
  }
}
</style>
