<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);
const formSubmitted = ref(false);
const formError = ref(false);

// Form data
const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  date: '',
  time: ''
});

// Form validation
const errors = ref({});

const validateForm = () => {
  errors.value = {};
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required';
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address';
  }
  
  if (!form.value.phone.trim()) {
    errors.value.phone = 'Phone number is required';
  }
  
  if (!form.value.service) {
    errors.value.service = 'Please select a service';
  }
  
  if (!form.value.date) {
    errors.value.date = 'Please select a preferred date';
  }
  
  if (!form.value.time) {
    errors.value.time = 'Please select a preferred time';
  }
  
  return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
  if (validateForm()) {
    // This would be replaced with actual API call to backend
    setTimeout(() => {
      formSubmitted.value = true;
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        date: '',
        time: ''
      };
    }, 1000);
  } else {
    formError.value = true;
    setTimeout(() => {
      formError.value = false;
    }, 3000);
  }
};

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Contact Us
        </h1>
        <div 
          class="separator"
          v-motion
          :initial="{ opacity: 0, scale: 0 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 600 } }"
        ></div>
        <p
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 500, duration: 800 } }"
        >
          Book your appointment or get in touch with our team
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="contact-info-section">
      <div class="container">
        <div class="contact-grid">
          <div 
            class="contact-form-container"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
          >
            <div class="form-header">
              <h2>Book an Appointment</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours to confirm your booking.</p>
            </div>

            <div v-if="formSubmitted" class="form-success">
              <div class="success-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <h3>Thank You!</h3>
              <p>Your appointment request has been received. We'll contact you shortly to confirm your booking.</p>
              <button @click="formSubmitted = false" class="btn primary">Book Another Appointment</button>
            </div>

            <form v-else @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  :class="{ 'error': errors.name }"
                  placeholder="Your full name"
                >
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  :class="{ 'error': errors.email }"
                  placeholder="Your email address"
                >
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  :class="{ 'error': errors.phone }"
                  placeholder="Your phone number"
                >
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
              </div>

              <div class="form-group">
                <label for="service">Service *</label>
                <select 
                  id="service" 
                  v-model="form.service" 
                  :class="{ 'error': errors.service }"
                >
                  <option value="">Select a service</option>
                  <option value="haircut">Haircut & Styling</option>
                  <option value="color">Hair Color & Highlights</option>
                  <option value="treatment">Hair Treatment</option>
                  <option value="facial">Facial Treatment</option>
                  <option value="makeup">Makeup Application</option>
                  <option value="manicure">Manicure</option>
                  <option value="pedicure">Pedicure</option>
                  <option value="package">Spa Package</option>
                  <option value="other">Other</option>
                </select>
                <span v-if="errors.service" class="error-message">{{ errors.service }}</span>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="date">Preferred Date *</label>
                  <input 
                    type="date" 
                    id="date" 
                    v-model="form.date" 
                    :class="{ 'error': errors.date }"
                  >
                  <span v-if="errors.date" class="error-message">{{ errors.date }}</span>
                </div>

                <div class="form-group">
                  <label for="time">Preferred Time *</label>
                  <select 
                    id="time" 
                    v-model="form.time" 
                    :class="{ 'error': errors.time }"
                  >
                    <option value="">Select a time</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                  <span v-if="errors.time" class="error-message">{{ errors.time }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Additional Notes</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  placeholder="Tell us about any special requirements or questions"
                  rows="4"
                ></textarea>
              </div>

              <div class="form-alert" v-if="formError">
                <p>Please fix the errors in the form before submitting.</p>
              </div>

              <button type="submit" class="btn primary">Book Appointment</button>
            </form>
          </div>

          <div 
            class="contact-details"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
          >
            <div class="contact-card location">
              <div class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Location</h3>
              <p>61 Dowson Road<br>Hyde<br>Cheshire<br>SK14 1QS</p>
          <div class="map-container">
            <div class="map-image" style="background-image: url('/images/downloaded/DJI_0136.jpg'); background-size: cover; background-position: center;">
            </div>
            <a href="https://maps.google.com/?q=61+Dowson+Road,+Hyde,+Cheshire,+SK14+1QS" target="_blank" class="btn secondary">Get Directions</a>
          </div>
            </div>

            <div class="contact-card hours">
              <div class="icon">
                <i class="far fa-clock"></i>
              </div>
              <h3>Opening Hours</h3>
              <ul class="hours-list">
                <li class="closed">
                  <span class="day">Monday:</span>
                  <span class="time">Closed</span>
                </li>
                <li>
                  <span class="day">Tuesday:</span>
                  <span class="time">09:00 - 18:00</span>
                </li>
                <li>
                  <span class="day">Wednesday:</span>
                  <span class="time">09:00 - 18:00</span>
                </li>
                <li>
                  <span class="day">Thursday:</span>
                  <span class="time">09:00 - 20:00</span>
                </li>
                <li>
                  <span class="day">Friday:</span>
                  <span class="time">09:00 - 19:00</span>
                </li>
                <li>
                  <span class="day">Saturday:</span>
                  <span class="time">09:00 - 17:00</span>
                </li>
                <li class="closed">
                  <span class="day">Sunday:</span>
                  <span class="time">Closed</span>
                </li>
              </ul>
            </div>

            <div class="contact-card connect">
              <div class="icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <h3>Connect With Us</h3>
              <ul class="contact-list">
                <li>
                  <i class="fas fa-phone"></i>
                  <a href="tel:01613689999">0161 368 9999</a>
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  <a href="mailto:enquiries@leadingedgehairandbeauty.co.uk">enquiries@leadingedgehairandbeauty.co.uk</a>
                </li>
              </ul>
              <div class="social-icons">
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
          <div class="separator"></div>
        </div>
        
        <div class="faq-grid">
          <div 
            class="faq-item"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
          >
            <h3>How far in advance should I book an appointment?</h3>
            <p>We recommend booking at least 1-2 weeks in advance for regular services and 3-4 weeks for special occasions or bridal appointments to ensure availability with your preferred stylist.</p>
          </div>
          
          <div 
            class="faq-item"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
          >
            <h3>What is your cancellation policy?</h3>
            <p>We kindly request 24 hours' notice for any cancellations or rescheduling. Late cancellations or no-shows may incur a fee of 50% of the service cost.</p>
          </div>
          
          <div 
            class="faq-item"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
          >
            <h3>Do you offer consultations before services?</h3>
            <p>Yes, we offer complimentary consultations before color services and major changes. These can be scheduled separately or at the beginning of your appointment.</p>
          </div>
          
          <div 
            class="faq-item"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 600 } }"
          >
            <h3>What forms of payment do you accept?</h3>
            <p>We accept all major credit cards, debit cards, cash, and mobile payment methods such as Apple Pay and Google Pay. Gift certificates are also available for purchase.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/main.scss';

// Page Header
.page-header {
  background-color: $primary-color;
  color: white;
  text-align: center;
  padding: 5rem 0 3rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: white;
  }
  
  .separator {
    width: 80px;
    height: 3px;
    background-color: $accent-color;
    margin: 0 auto 1.5rem;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
  }
}

// Contact Information Section
.contact-info-section {
  padding: 5rem 0;
  background-color: white;
  
  .contact-grid {
    display: grid;
    grid-template-columns: 6fr 4fr;
    gap: 3rem;
    
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  
  .contact-form-container {
    background-color: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 5px 20px rgba($primary-color, 0.08);
    
    .form-header {
      text-align: center;
      margin-bottom: 2rem;
      
      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: $primary-color;
      }
      
      p {
        color: lighten($primary-color, 20%);
      }
    }
    
    .form-success {
      text-align: center;
      padding: 2rem;
      
      .success-icon {
        font-size: 4rem;
        color: #4CAF50;
        margin-bottom: 1rem;
      }
      
      h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: $primary-color;
      }
      
      p {
        margin-bottom: 2rem;
        color: lighten($primary-color, 20%);
      }
    }
    
    .contact-form {
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
      
      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        
        @media (max-width: 576px) {
          grid-template-columns: 1fr;
        }
      }
      
      .form-alert {
        background-color: #FFEBEE;
        color: #C62828;
        padding: 1rem;
        border-radius: 4px;
        margin-bottom: 1.5rem;
        
        p {
          margin: 0;
        }
      }
      
      .btn {
        width: 100%;
      }
    }
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    .contact-card {
      background-color: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 5px 20px rgba($primary-color, 0.08);
      
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
        color: lighten($primary-color, 20%);
        line-height: 1.6;
        margin-bottom: 1rem;
      }
      
      .map-container {
        margin-top: 1.5rem;
        
      .map-image {
        height: 180px;
        border-radius: 4px;
        margin-bottom: 1rem;
        object-fit: cover;
      }
        
        .btn {
          width: 100%;
        }
      }
      
      .hours-list {
        list-style: none;
        padding: 0;
        
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
            color: lighten($primary-color, 20%);
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
            color: lighten($primary-color, 20%);
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
  }
}

// FAQ Section
.faq-section {
  background-color: $light-color;
  padding: 5rem 0;
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .separator {
      width: 80px;
      height: 3px;
      background-color: $accent-color;
      margin: 0 auto 1.5rem;
    }
  }
  
  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 2rem;
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
  
  .faq-item {
    background-color: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba($primary-color, 0.05);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba($primary-color, 0.1);
    }
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    p {
      color: lighten($primary-color, 20%);
      line-height: 1.6;
      margin: 0;
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
  
  &.secondary {
    background-color: transparent;
    color: $primary-color;
    border-color: $primary-color;
    
    &:hover {
      background-color: $primary-color;
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
