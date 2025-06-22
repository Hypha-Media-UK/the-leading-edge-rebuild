<template>
  <section class="newsletter-section" :class="{ 'dark': darkMode }">
    <div class="container">
      <div class="newsletter-content">
        <div 
          class="newsletter-text"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
        >
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
        
        <form 
          @submit.prevent="handleSubmit" 
          class="newsletter-form"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
        >
          <div class="form-group">
            <input 
              type="email" 
              v-model="email" 
              :placeholder="placeholder"
              required
              :class="{ 'error': error }"
            >
            <button type="submit" class="newsletter-btn">
              <i :class="buttonIcon"></i>
              {{ buttonText }}
            </button>
          </div>
          <div class="form-notice" v-if="formNotice">
            {{ formNotice }}
          </div>
          <div class="form-error" v-if="error">
            {{ error }}
          </div>
          <div class="form-success" v-if="success">
            {{ success }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Subscribe to Our Newsletter'
  },
  description: {
    type: String,
    default: 'Stay updated with the latest news, beauty tips, and exclusive offers straight to your inbox.'
  },
  placeholder: {
    type: String,
    default: 'Your email address'
  },
  buttonText: {
    type: String,
    default: 'Subscribe'
  },
  buttonIcon: {
    type: String,
    default: 'far fa-envelope'
  },
  formNotice: {
    type: String,
    default: 'We respect your privacy and will never share your email address.'
  },
  darkMode: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['subscribe']);

const email = ref('');
const error = ref('');
const success = ref('');

const handleSubmit = () => {
  error.value = '';
  success.value = '';
  
  if (!email.value) {
    error.value = 'Please enter your email address.';
    return;
  }
  
  if (!validateEmail(email.value)) {
    error.value = 'Please enter a valid email address.';
    return;
  }
  
  // Emit the subscribe event with the email
  emit('subscribe', email.value);
  
  // Show success message
  success.value = 'Thank you for subscribing to our newsletter!';
  
  // Reset the form
  email.value = '';
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
</script>

<style lang="scss" scoped>
.newsletter-section {
  padding: 5rem 0;
  background-color: white;
  
  &.dark {
    background-color: $secondary-color;
    
    .newsletter-text {
      h2, p {
        color: white;
      }
    }
    
    .form-notice {
      color: rgba(white, 0.7);
    }
  }
  
  .newsletter-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  
  .newsletter-text {
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    p {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
    }
  }
  
  .newsletter-form {
    .form-group {
      display: flex;
      margin-bottom: 1rem;
      
      @media (max-width: 576px) {
        flex-direction: column;
      }
      
      input {
        flex: 1;
        padding: 1rem;
        border: 1px solid rgba($primary-color, 0.1);
        border-radius: 4px 0 0 4px;
        font-size: 1rem;
        
        &:focus {
          outline: none;
          border-color: $accent-color;
        }
        
        &.error {
          border-color: #FF5252;
        }
        
        @media (max-width: 576px) {
          border-radius: 4px;
          margin-bottom: 1rem;
        }
      }
      
      .newsletter-btn {
        background-color: $accent-color;
        color: white;
        border: none;
        padding: 0 1.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 0 4px 4px 0;
        display: inline-flex;
        align-items: center;
        
        i {
          margin-right: 0.5rem;
        }
        
        &:hover {
          background-color: custom-darken($accent-color, 10%);
        }
        
        @media (max-width: 576px) {
          border-radius: 4px;
          width: 100%;
          justify-content: center;
          padding: 1rem;
        }
      }
    }
    
    .form-notice {
      font-size: 0.85rem;
      color: custom-lighten($primary-color, 30%);
    }
    
    .form-error {
      color: #FF5252;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
    
    .form-success {
      color: #4CAF50;
      font-size: 0.9rem;
      margin-top: 0.5rem;
      font-weight: 500;
    }
  }
}
</style>
