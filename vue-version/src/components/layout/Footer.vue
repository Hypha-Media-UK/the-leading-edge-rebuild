<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        
        <div class="footer-section links">
          <h3>Quick Links</h3>
          <div class="links-grid">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/our-salon">Our Salon</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/meet-the-team">Meet the Team</router-link></li>
              <li><router-link to="/contact">Contact Us</router-link></li>
              <li><router-link to="/careers">Careers</router-link></li>
              <li><router-link to="/news">Latest News</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-section hours">
          <h3>Opening Hours</h3>
          <div class="hours-grid">
            <div class="day-row closed">
              <span class="day">Monday:</span>
              <span class="hours">Closed</span>
            </div>
            <div class="day-row">
              <span class="day">Tuesday:</span>
              <span class="hours">09:00 - 18:00</span>
            </div>
            <div class="day-row">
              <span class="day">Wednesday:</span>
              <span class="hours">09:00 - 18:00</span>
            </div>
            <div class="day-row">
              <span class="day">Thursday:</span>
              <span class="hours">09:00 - 20:00</span>
            </div>
            <div class="day-row">
              <span class="day">Friday:</span>
              <span class="hours">09:00 - 19:00</span>
            </div>
            <div class="day-row">
              <span class="day">Saturday:</span>
              <span class="hours">09:00 - 17:00</span>
            </div>
            <div class="day-row closed">
              <span class="day">Sunday:</span>
              <span class="hours">Closed</span>
            </div>
          </div>
        </div>
        
        <div class="footer-section contact">
          <h3>Contact Us</h3>
          <p><i class="fas fa-map-marker-alt"></i> 61 Dowson Road, Hyde, Cheshire, SK14 1QS</p>
          <p><i class="fas fa-phone"></i> 0161 368 9999</p>
          <p><i class="fas fa-envelope"></i> enquiries@leadingedgehairandbeauty.co.uk</p>
          
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="X"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} The Leading Edge. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

footer {
  background-color: $primary-color;
  color: $light-color;
  padding: 4rem 0 1.5rem;
  margin-top: 0.125rem; /* 2px equivalent */
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.footer-section {
  h3 {
    color: white;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 50px;
      height: 2px;
      background-color: $accent-color;
    }
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    
    @media (max-width: 992px) {
      font-size: 0.95rem;
    }
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  
  &.contact {
    i {
      margin-right: 10px;
      color: $accent-color;
    }
    
    .social-icons {
      margin-top: 1.5rem;
    }
  }
  
  &.hours {
    .hours-grid {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 6px;
      padding: 0.5rem 0;
      margin-top: 1.5rem;
      
      .day-row {
        display: flex;
        font-size: 0.9rem;
        justify-content: space-between;
        padding: 0.5rem 1.9rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        transition: background-color 0.2s ease;
        
        @media (max-width: 768px) {
          font-size: 0.85rem;
          padding: 0.5rem 1.5rem;
        }
        
        &:last-child {
          border-bottom: none;
        }
        
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        &.closed {
          .hours {
            color: $accent-color;
            font-style: italic;
          }
        }
        
        .day {
          font-weight: 500;
        }
        
        .hours {
          text-align: right;
        }
      }
    }
  }
  
  &.links {
    .links-grid {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 6px;
      padding: 0.5rem 0;
      margin-top: 1.5rem;
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: background-color 0.2s ease;
          
          &:last-child {
            border-bottom: none;
          }
          
          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
          
          a {
            color: $light-color;
            text-decoration: none;
            transition: color 0.3s ease;
            display: block;
            padding: 0.5rem 1.9rem;
            font-size: 0.9rem;
            
            @media (max-width: 768px) {
              font-size: 0.85rem;
              padding: 0.5rem 1.5rem;
            }
            
            &:hover {
              color: $accent-color;
            }
          }
        }
      }
    }
  }
}

.social-icons {
  display: flex;
  gap: 15px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    transition: all 0.3s ease;
    
    i {
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: color 0.3s ease;
      transform: translateX(5px);
    }
    
    &:hover {
      background-color: $accent-color;
      transform: translateY(-3px);
      
      i {
        color: white;
      }
    }
  }
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
}

@media (max-width: 992px) {
  /* Removed the negative margin that was pushing contact up */
}


@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .footer-section {
    margin-bottom: 0.5rem;
  }
}
</style>
