<template>
  <section id="application-form" class="application-section">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div 
        class="application-form-container"
        
        
        
      >
        <form class="application-form">
          <div class="form-group">
            <label for="name">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your full name"
            >
          </div>
          
          <div class="form-group">
            <label for="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your email address"
            >
          </div>
          
          <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="Your phone number"
            >
          </div>
          
          <div class="form-group">
            <label for="position">Position of Interest *</label>
            <select 
              id="position"
            >
              <option value="">Select a position</option>
              <option v-for="position in positions" :key="position.id" :value="position.title">
                {{ position.title }}
              </option>
              <option value="other">Other/Future Opportunities</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="experience">Years of Experience *</label>
            <select 
              id="experience"
            >
              <option value="">Select experience level</option>
              <option value="0-1">Less than 1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="message">Why do you want to join our team?</label>
            <textarea 
              id="message" 
              placeholder="Tell us about yourself and why you'd like to join The Leading Edge"
              rows="4"
            ></textarea>
          </div>
          
          <div class="form-group">
            <label for="resume">Upload CV/Resume (Optional)</label>
            <div class="file-upload">
              <input type="file" id="resume">
              <p class="file-info">PDF or Word document (max 5MB)</p>
            </div>
          </div>
          
          <button type="button" class="btn primary">Submit Application</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';

defineProps({
  title: {
    type: String,
    default: 'Apply Now'
  },
  description: {
    type: String,
    default: 'Interested in joining our team? Fill out the application form below and we\'ll be in touch.'
  },
  positions: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.application-section {
  background-color: white;
  padding: 5rem 0;
  
  .application-form-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    padding: 3rem;
    box-shadow: 0 5px 20px rgba($primary-color, 0.08);
    
    @media (max-width: 576px) {
      padding: 2rem 1.5rem;
    }
    
    .application-form {
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
        }
        
        .file-upload {
          input[type="file"] {
            border: 1px dashed $light-color;
            padding: 1.5rem;
            text-align: center;
            cursor: pointer;
            
            &:hover {
              border-color: $accent-color;
            }
          }
          
          .file-info {
            font-size: 0.85rem;
            color: lighten($primary-color, 30%);
            margin-top: 0.5rem;
          }
        }
      }
      
      .btn {
        width: 100%;
      }
    }
  }
}

// Button Styles
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
      background-color: darken($accent-color, 10%);
      border-color: darken($accent-color, 10%);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
