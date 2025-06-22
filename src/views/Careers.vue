<script setup>
import { ref, onMounted } from 'vue';

// Only keep isLoaded for animations
const isLoaded = ref(false);

// Keep position data for display purposes
const positions = [
  {
    id: 1,
    title: 'Senior Hair Stylist',
    type: 'Full-time',
    location: 'London',
    description: 'We are looking for an experienced hair stylist with a minimum of 5 years in the industry. The ideal candidate will have expertise in cutting, coloring, and styling techniques for all hair types.',
    responsibilities: [
      'Provide exceptional hair services to clients including cutting, coloring, and styling',
      'Stay updated on the latest hair trends and techniques',
      'Maintain a clean and organized workspace',
      'Build and maintain a loyal client base',
      'Collaborate with team members for special events and promotions'
    ],
    requirements: [
      'Minimum 5 years of experience as a hair stylist',
      'Valid cosmetology license',
      'Strong portfolio demonstrating technical skills',
      'Excellent customer service skills',
      'Ability to work weekends and some evenings'
    ]
  },
  {
    id: 2,
    title: 'Beauty Therapist',
    type: 'Part-time / Full-time',
    location: 'London',
    description: 'We are seeking a skilled beauty therapist to join our team. The successful candidate will provide a range of beauty treatments including facials, body treatments, and makeup application.',
    responsibilities: [
      'Perform various beauty treatments to the highest standard',
      'Provide skincare consultations and recommend appropriate products',
      'Keep up-to-date with the latest beauty trends and techniques',
      'Maintain treatment room cleanliness and hygiene',
      'Assist with retail sales and promotions'
    ],
    requirements: [
      'NVQ Level 3 in Beauty Therapy or equivalent',
      'At least 2 years of experience in a professional salon setting',
      'Knowledge of premium skincare brands and treatments',
      'Excellent communication and interpersonal skills',
      'Flexibility to work evenings and weekends'
    ]
  },
  {
    id: 3,
    title: 'Salon Receptionist',
    type: 'Full-time',
    location: 'London',
    description: 'We are looking for a friendly and organized receptionist to be the first point of contact for our clients. The ideal candidate will have excellent communication skills and a passion for customer service.',
    responsibilities: [
      'Greet clients and manage the reception desk',
      'Handle booking appointments and managing the salon schedule',
      'Process payments and maintain accurate records',
      'Answer phone calls and respond to emails',
      'Assist with retail sales and inventory management'
    ],
    requirements: [
      'Previous experience in a customer service role, preferably in a salon environment',
      'Proficiency with scheduling software and point-of-sale systems',
      'Excellent organizational and multitasking abilities',
      'Professional appearance and friendly demeanor',
      'Available to work flexible hours including weekends'
    ]
  }
];

// Sample form structure for display only - no functionality
const form = {
  name: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  message: '',
};

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="careers-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Join Our Team
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
          Be part of The Leading Edge family and grow your career with us
        </p>
      </div>
    </section>

    <!-- Why Join Us Section -->
    <section class="why-join-section">
      <div class="container">
        <div class="section-header">
          <h2>Why Join The Leading Edge?</h2>
          <div class="separator"></div>
          <p>At The Leading Edge, we believe in nurturing talent and providing our team members with the tools and environment they need to thrive.</p>
        </div>
        
        <div class="benefits-grid">
          <div 
            class="benefit-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }"
          >
            <div class="icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>Continuous Education</h3>
            <p>We invest in our team's growth with regular training sessions, workshops, and opportunities to attend industry events.</p>
          </div>
          
          <div 
            class="benefit-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 600 } }"
          >
            <div class="icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Career Growth</h3>
            <p>Clear career pathways and mentorship opportunities allow you to advance your skills and take on new challenges.</p>
          </div>
          
          <div 
            class="benefit-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 600 } }"
          >
            <div class="icon">
              <i class="fas fa-user-friends"></i>
            </div>
            <h3>Supportive Team</h3>
            <p>Join a collaborative and inclusive environment where creativity and individual expression are valued.</p>
          </div>
          
          <div 
            class="benefit-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 600 } }"
          >
            <div class="icon">
              <i class="fas fa-award"></i>
            </div>
            <h3>Recognition & Rewards</h3>
            <p>Competitive compensation, performance bonuses, and employee recognition programs to celebrate your achievements.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Openings -->
    <section class="openings-section">
      <div class="container">
        <div class="section-header">
          <h2>Current Openings</h2>
          <div class="separator"></div>
          <p>Explore our current job opportunities and find the perfect role for your skills and passion.</p>
        </div>
        
        <div class="positions-grid">
          <div 
            v-for="(position, index) in positions" 
            :key="position.id"
            class="position-card"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 + (index * 100), duration: 600 } }"
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

    <!-- Application Form -->
    <section id="application-form" class="application-section">
      <div class="container">
        <div class="section-header">
          <h2>Apply Now</h2>
          <div class="separator"></div>
          <p>Interested in joining our team? Fill out the application form below and we'll be in touch.</p>
        </div>
        
        <div 
          class="application-form-container"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
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

    <!-- Workplace Culture -->
    <section class="culture-section">
      <div class="container">
        <div 
          class="culture-content"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 800 } }"
        >
          <div class="culture-text">
            <h2>Our Workplace Culture</h2>
            <p>At The Leading Edge, we foster a culture of creativity, respect, and continuous growth. We believe that happy team members provide the best service to our clients, which is why we prioritize creating a positive and supportive work environment.</p>
            <p>We celebrate diversity and believe that each team member brings unique perspectives and talents that contribute to our collective success. Our collaborative approach encourages sharing ideas and learning from one another.</p>
            <p>If you're passionate about beauty, dedicated to excellence, and love making people feel their best, we'd love to hear from you!</p>
          </div>
          
          <div class="culture-image"></div>
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

// Section Styling
section {
  padding: 5rem 0;
}

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
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: lighten($primary-color, 20%);
    font-size: 1.1rem;
  }
}

// Why Join Us Section
.why-join-section {
  background-color: white;
  
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .benefit-item {
    background-color: $light-color;
    padding: 2.5rem 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 5px 20px rgba($primary-color, 0.05);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba($primary-color, 0.1);
    }
    
    .icon {
      font-size: 2.5rem;
      color: $accent-color;
      margin-bottom: 1.5rem;
    }
    
    h3 {
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }
    
    p {
      color: lighten($primary-color, 20%);
      line-height: 1.6;
    }
  }
}

// Openings Section
.openings-section {
  background-color: $light-color;
  
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

// Application Form
.application-section {
  background-color: white;
  
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
        line-height: 1.6;
      }
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
}

// Culture Section
.culture-section {
  background-color: $light-color;
  
  .culture-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
    
    .culture-text {
      h2 {
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
        color: $primary-color;
      }
      
      p {
        margin-bottom: 1.5rem;
        line-height: 1.8;
        color: lighten($primary-color, 20%);
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    
    .culture-image {
      height: 400px;
      background-image: url('/images/downloaded/staff/LeadingEdge_300317-028-Copy.jpg');
      background-size: cover;
      background-position: center;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba($primary-color, 0.1);
      object-fit: cover;
      
      @media (max-width: 991px) {
        height: 300px;
        margin-top: 2rem;
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
