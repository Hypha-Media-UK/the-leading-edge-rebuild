<template>
  <div class="team-modal" v-if="member" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="$emit('close')">&times;</button>
      
      <div class="modal-body">
        <div 
          class="member-details"
          
          
          
        >
          <div class="member-profile-grid">
            <div class="member-image-container">
              <img :src="member.image" :alt="member.name">
            </div>
            
            <div class="member-content">
              <h2>{{ member.name }}</h2>
              <p class="member-title">{{ member.role }}</p>
              
              <div class="member-bio">
                <p>{{ member.bio }}</p>
              </div>
              
              <div class="member-specialties">
                <h3>Specialties</h3>
                <div class="specialty-tags">
                  <span v-for="(specialty, i) in member.specialties" :key="i" class="specialty-tag">
                    {{ specialty }}
                  </span>
                </div>
              </div>
              
              <div class="member-social">
                <a href="#" class="instagram-link">
                  <i class="fab fa-instagram"></i> {{ member.instagram }}
                </a>
              </div>
              
              <div class="booking-cta">
                <router-link to="/contact" class="btn primary">Book with {{ member.name.split(' ')[0] }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  member: {
    type: Object,
    default: null
  }
});

defineEmits(['close']);
</script>

<style lang="scss" scoped>
.team-modal {
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
    max-width: 900px;
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
      padding: 0;
      
      .member-profile-grid {
        display: grid;
        grid-template-columns: 40% 60%;
        width: 100%;
        height: 100%;
        
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
      }
      
      .member-image-container {
        height: 100%;
        min-height: 450px;
        overflow: hidden;
        position: relative;
        
        @media (max-width: 768px) {
          min-height: 350px;
        }
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
      }
      
      .member-content {
        padding: 2.5rem;
        
        h2 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          color: $primary-color;
        }
        
        .member-title {
          font-size: 1.2rem;
          color: $accent-color;
          margin-bottom: 1.8rem;
          font-weight: 500;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba($primary-color, 0.1);
        }
        
        .member-bio {
          margin-bottom: 2rem;
          
          p {
            line-height: 1.8;
            color: custom-lighten($primary-color, 20%);
          }
        }
        
        .member-specialties {
          margin-bottom: 2rem;
          
          h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: $primary-color;
          }
          
          .specialty-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            
            .specialty-tag {
              background-color: $light-color;
              padding: 0.5rem 1rem;
              border-radius: 30px;
              font-size: 0.9rem;
              color: $primary-color;
              font-weight: 500;
              display: inline-block;
            }
          }
        }
        
        .member-social {
          margin-bottom: 2rem;
          
          .instagram-link {
            color: #C13584;
            font-weight: 500;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            
            &:hover {
              transform: translateY(-2px);
            }
            
            i {
              margin-right: 0.5rem;
            }
          }
        }
        
        .booking-cta {
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
  .team-modal .modal-content {
    width: 95%;
    max-height: 90vh;
  }
}

@media (max-width: 576px) {
  .team-modal {
    align-items: flex-start;
  }
  
  .team-modal .modal-content {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
  }
  
  .team-modal .modal-content .close-button {
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2.2rem;
    color: white;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    z-index: 20;
    position: fixed;
  }
}
</style>
