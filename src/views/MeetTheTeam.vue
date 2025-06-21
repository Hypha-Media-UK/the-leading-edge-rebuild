<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);
const selectedTeamMember = ref(null);

const showTeamMemberDetails = (id) => {
  selectedTeamMember.value = id;
  // Prevent body scrolling while modal is open
  document.body.style.overflow = 'hidden';
};

const closeTeamMemberDetails = () => {
  selectedTeamMember.value = null;
  // Re-enable body scrolling
  document.body.style.overflow = '';
};

// Team members data
const teamMembers = [
  {
    id: 10,
    name: 'Alan',
    role: 'Merketing Director',
    bio: 'Alex brings creative vision and exceptional technical skill to our makeup services. With a background in fashion and editorial work, Alex specializes in creating personalized looks that enhance each client\'s natural beauty while reflecting their individual style and personality.',
    specialties: ['Bridal Makeup', 'Editorial Looks', 'Special Effects'],
    image: '/images/new/staff/staff10.webp',
    instagram: '@alexjohnsonmakeup'
  },
  {
    id: 4,
    name: 'Carolyn',
    role: 'Finance Director',
    bio: 'Carolyn\'s passion for hair began at a young age, and he\'s spent the last decade perfecting his craft. His work has been featured in leading fashion magazines, and he brings his editorial expertise to every client\'s experience.',
    specialties: ['Editorial Styling', 'Hair Extensions', 'Curly Hair Specialist'],
    image: '/images/new/staff/staff4.webp',
    instagram: '@oliverbaker'
  },
  {
    id: 1,
    name: 'Abigail',
    role: 'Stylist',
    bio: 'With over 15 years in the industry, Abigail founded The Leading Edge with a vision to create a salon that combines luxury with exceptional skill. Her expertise in hair color transformations and cutting-edge styling techniques has earned her numerous industry awards.',
    specialties: ['Hair Color Transformation', 'Precision Cutting', 'Bridal Styling'],
    image: '/images/new/staff/staff1.webp',
    instagram: '@emmathompson'
  },
  {
    id: 2,
    name: 'Nina',
    role: 'Nail Technician',
    bio: 'Nina brings a wealth of international experience to our team, having trained in Paris, New York, and London. His innovative approach to hair styling and dedication to understanding each client\'s unique needs has made him a favorite among our regulars.',
    specialties: ['Avant-garde Styling', 'Men\'s Grooming', 'Texture Specialist'],
    image: '/images/new/staff/staff2.webp',
    instagram: '@jameswilson'
  },
  {
    id: 3,
    name: 'Natasha',
    role: 'Gel Nail Technician',
    bio: 'Sophia is our in-house color expert, known for her ability to create the perfect shade for every skin tone. Her background in chemistry gives her a unique understanding of hair color science, ensuring beautiful, long-lasting results.',
    specialties: ['Balayage', 'Color Correction', 'Fashion Colors'],
    image: '/images/new/staff/staff3.webp',
    instagram: '@sophiachen'
  },
  {
    id: 5,
    name: 'Lauren',
    role: 'Stylist',
    bio: 'Lauren is our senior beauty therapist with extensive training in skincare and holistic treatments. Her nurturing approach and technical expertise ensure that every client leaves feeling relaxed and rejuvenated.',
    specialties: ['Facial Treatments', 'Brow Artistry', 'Lash Extensions'],
    image: '/images/new/staff/staff5.webp',
    instagram: '@zoemartinez'
  },
  {
    id: 6,
    name: 'Jayne',
    role: 'Stylist',
    bio: 'Jayne\'s artistic background is evident in his detailed nail art and precise technique. His passion for nail health and beautiful designs has earned him a loyal client base and recognition in the industry.',
    specialties: ['Nail Art', 'Gel Extensions', 'Hand Treatments'],
    image: '/images/new/staff/staff6.webp',
    instagram: '@nathanpatel'
  },
  {
    id: 7,
    name: 'Hayley',
    role: 'Stylist',
    bio: 'Hayley specializes in advanced aesthetic treatments, combining cutting-edge technology with traditional techniques. Her extensive knowledge of skin biology and aging processes allows her to create customized treatment plans for each client.',
    specialties: ['Micro-needling', 'Chemical Peels', 'Skin Rejuvenation'],
    image: '/images/new/staff/staff7.webp',
    instagram: '@oliviareynolds'
  },
  {
    id: 8,
    name: 'Gary',
    role: 'Stylist',
    bio: 'Gary brings a wealth of international experience to our team, having trained in Paris, New York, and London. His innovative approach to hair styling and dedication to understanding each client\'s unique needs has made him a favorite among our regulars.',
    specialties: ['Deep Tissue Massage', 'Hot Stone Therapy', 'Sports Recovery'],
    image: '/images/new/staff/staff8.webp',
    instagram: '@michaelchang'
  },
  {
    id: 9,
    name: 'Emily',
    role: 'Stylist',
    bio: 'Emily brings a wealth of international experience to our team, having trained in Paris, New York, and London. His innovative approach to hair styling and dedication to understanding each client\'s unique needs has made him a favorite among our regulars.',
    specialties: ['Modern Cuts', 'Blow Dry Styling', 'Natural Highlights'],
    image: '/images/new/staff/staff9.webp',
    instagram: '@isabellamoore'
  }
];

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="team-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Meet Our Team
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
          The heart and soul of The Leading Edge – our talented professionals dedicated to your beauty journey
        </p>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="team-intro">
          <h2>Our Talented Professionals</h2>
          <p>The Leading Edge team consists of passionate, highly-trained professionals who are dedicated to their craft. Each team member brings their unique expertise and creative vision to provide you with an exceptional salon experience.</p>
        </div>
        
        <div class="team-grid">
          <div 
            v-for="(member, index) in teamMembers" 
            :key="member.id"
            class="team-member"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 + (index * 100), duration: 600 } }"
            @click="showTeamMemberDetails(member.id)"
          >
            <div class="member-image">
              <img :src="member.image" :alt="`${member.name} - ${member.role}`">
              <div class="member-overlay">
                <span>View Profile</span>
              </div>
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Member Modal -->
    <teleport to="#modal-portal">
      <div class="team-modal" v-if="selectedTeamMember" @click="closeTeamMemberDetails">
        <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeTeamMemberDetails">&times;</button>
        
        <div class="modal-body" v-if="selectedTeamMember">
          <div 
            class="member-details"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 400 } }"
          >
            <div class="member-selected" v-if="teamMembers.find(m => m.id === selectedTeamMember)">
              <div class="member-profile-grid">
                <div class="member-image-container">
                  <img :src="teamMembers.find(m => m.id === selectedTeamMember).image" 
                      :alt="teamMembers.find(m => m.id === selectedTeamMember).name">
                </div>
                
                <div class="member-content">
                  <h2>{{ teamMembers.find(m => m.id === selectedTeamMember).name }}</h2>
                  <p class="member-title">{{ teamMembers.find(m => m.id === selectedTeamMember).role }}</p>
                  
                  <div class="member-bio">
                    <p>{{ teamMembers.find(m => m.id === selectedTeamMember).bio }}</p>
                  </div>
                  
                  <div class="member-specialties">
                    <h3>Specialties</h3>
                    <div class="specialty-tags">
                      <span v-for="(specialty, i) in teamMembers.find(m => m.id === selectedTeamMember).specialties" :key="i" class="specialty-tag">
                        {{ specialty }}
                      </span>
                    </div>
                  </div>
                  
                  <div class="member-social">
                    <a href="#" class="instagram-link">
                      <i class="fab fa-instagram"></i> {{ teamMembers.find(m => m.id === selectedTeamMember).instagram }}
                    </a>
                  </div>
                  
                  <div class="booking-cta">
                    <router-link to="/contact" class="btn primary">Book with {{ teamMembers.find(m => m.id === selectedTeamMember).name.split(' ')[0] }}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </teleport>

    <!-- Our Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Team Values</h2>
          <div class="separator"></div>
        </div>
        
        <div class="values-content">
          <div 
            class="value-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 600 } }"
            :hovered="{ y: -10, transition: { duration: 300 } }"
          >
            <div class="icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3>Continuous Education</h3>
            <p>Our team regularly attends workshops, training sessions, and industry events to stay at the forefront of the latest techniques and trends.</p>
          </div>
          
          <div 
            class="value-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 600 } }"
            :hovered="{ y: -10, transition: { duration: 300 } }"
          >
            <div class="icon">
              <i class="fas fa-handshake"></i>
            </div>
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and often collaborate on client services to ensure the best possible results for every individual.</p>
          </div>
          
          <div 
            class="value-item"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 600, duration: 600 } }"
            :hovered="{ y: -10, transition: { duration: 300 } }"
          >
            <div class="icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Passion for Service</h3>
            <p>Our team members are selected not just for their technical skills, but for their genuine passion for making clients feel beautiful and confident.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Our Team CTA -->
    <section class="join-team-cta">
      <div class="container">
        <div 
          class="cta-content"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        >
          <h2>Interested in Joining Our Team?</h2>
          <p>We're always looking for talented and passionate professionals to join The Leading Edge family. If you're dedicated to excellence and love what you do, we'd love to hear from you.</p>
          <router-link to="/careers" class="btn primary">View Careers</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
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

// Team Section
.team-section {
  padding: 5rem 0;
  background-color: white;
  
  .team-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
    
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
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  
  .team-member {
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      
      .member-overlay {
        opacity: 1;
      }
    }
    
    .member-image {
      height: 350px;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 5px 15px rgba($primary-color, 0.1);
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
      }
      
      &:hover img {
        transform: scale(1.05);
      }
      
      .member-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($accent-color, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        
        span {
          color: white;
          font-weight: 600;
          font-size: 1.2rem;
          padding: 0.8rem 1.5rem;
          border: 2px solid white;
          border-radius: 4px;
        }
      }
    }
    
    .member-info {
      padding: 1.5rem 0;
      text-align: center;
      
      h3 {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
        color: $primary-color;
      }
      
      .member-role {
        color: $accent-color;
        font-weight: 500;
      }
    }
  }
}

// Team Modal
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
      
      .member-selected {
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
}

// Values Section
.values-section {
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
  
  .values-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    
    .value-item {
      background-color: white;
      padding: 2.5rem 2rem;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 5px 20px rgba($primary-color, 0.05);
      transition: all 0.3s ease;
      
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
        color: custom-lighten($primary-color, 20%);
        line-height: 1.6;
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
  
  .member-profile-grid .member-image-container {
    min-height: 280px;
  }
  
  .member-profile-grid .member-content {
    padding: 1.5rem;
  }
  
  .member-profile-grid .member-content h2 {
    font-size: 1.8rem;
  }
}

// Join Team CTA
.join-team-cta {
  background-image: linear-gradient(to right, rgba($primary-color, 0.9), rgba($accent-color, 0.9)), url('/images/new/internal/int2.webp');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 5rem 0;
  
  .cta-content {
    max-width: 700px;
    margin: 0 auto;
    
    h2 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    p {
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }
  }
  
  .btn.primary {
    background-color: white;
    color: $primary-color;
    border-color: white;
    padding: 1rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: transparent;
      color: white;
      border-color: white;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
