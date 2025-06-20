<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);
const flippedCards = ref({
  friend: false,
  nhs: false,
  student: false
});

// Function to flip a card
const flipCard = (cardName) => {
  flippedCards.value[cardName] = !flippedCards.value[cardName];
};

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="offers-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Offers & Gift Vouchers
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
          Enjoy exclusive discounts and special promotions at The Leading Edge
        </p>
        
        <div 
          class="gift-voucher-cta"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 700, duration: 600 } }"
        >
          <a href="https://leadingedgehairandbeauty.co.uk/gift-vouchers" target="_blank" class="btn primary-special">
            <i class="fas fa-gift"></i> Gift Vouchers Available Here
          </a>
        </div>
      </div>
    </section>

    <!-- Offers Section -->
    <section class="offers-section">
      <div class="container">
        <div class="offers-grid">
          <!-- Refer a Friend Offer -->
          <div 
            class="offer-card-container"
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
          >
            <div class="card-flipper" :class="{ 'is-flipped': flippedCards.friend }">
              <!-- Front of Card -->
              <div class="offer-card friend-offer card-front">
                <div class="card-icon">
                  <i class="fas fa-user-friends"></i>
                </div>
                <h2>Refer a Friend</h2>
                <div class="offer-highlight">
                  <span>£10 Voucher</span>
                </div>
                <p>Receive a £10 gift voucher from us when you refer a friend. Share the beauty experience with your loved ones and get rewarded!</p>
                <button class="terms-toggle" @click="flipCard('friend')">
                  Terms & Conditions <i class="fas fa-sync"></i>
                </button>
                <div class="offer-cta">
                  <router-link to="/contact" class="btn primary">Book Now</router-link>
                </div>
              </div>
              
              <!-- Back of Card -->
              <div class="offer-card friend-offer card-back">
                <h3>Terms & Conditions</h3>
                <div class="terms-content">
                  <p>• Referral must be a new client to The Leading Edge</p>
                  <p>• Voucher issued after your friend's first appointment</p>
                  <p>• Vouchers valid for 3 months from issue date</p>
                  <p>• Cannot be combined with other offers</p>
                  <p>• Management reserves the right to withdraw this offer at any time</p>
                </div>
                <button class="flip-back-btn" @click="flipCard('friend')">
                  <i class="fas fa-arrow-left"></i> Back to Offer
                </button>
              </div>
            </div>
          </div>

          <!-- NHS & Council Staff Offer -->
          <div 
            class="offer-card-container"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
          >
            <div class="card-flipper" :class="{ 'is-flipped': flippedCards.nhs }">
              <!-- Front of Card -->
              <div class="offer-card nhs-offer card-front">
                <div class="card-icon">
                  <i class="fas fa-hospital"></i>
                </div>
                <h2>Nurses & Doctors</h2>
                <div class="offer-highlight">
                  <span>10% Discount</span>
                </div>
                <p>We're proud to support our healthcare heroes! All NHS and Council staff can enjoy a 10% discount on all services with valid ID.</p>
                <button class="terms-toggle" @click="flipCard('nhs')">
                  Terms & Conditions <i class="fas fa-sync"></i>
                </button>
                <div class="offer-cta">
                  <router-link to="/contact" class="btn primary">Book Now</router-link>
                </div>
              </div>
              
              <!-- Back of Card -->
              <div class="offer-card nhs-offer card-back">
                <h3>Terms & Conditions</h3>
                <div class="terms-content">
                  <p>• Valid NHS or Council staff ID must be presented</p>
                  <p>• Discount applies to all salon services</p>
                  <p>• Cannot be combined with other offers</p>
                  <p>• Not applicable on retail products</p>
                  <p>• Management reserves the right to withdraw this offer at any time</p>
                </div>
                <button class="flip-back-btn" @click="flipCard('nhs')">
                  <i class="fas fa-arrow-left"></i> Back to Offer
                </button>
              </div>
            </div>
          </div>

          <!-- Student Discount Offer -->
          <div 
            class="offer-card-container"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
          >
            <div class="card-flipper" :class="{ 'is-flipped': flippedCards.student }">
              <!-- Front of Card -->
              <div class="offer-card student-offer card-front">
                <div class="card-icon">
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <h2>Student Discount</h2>
                <div class="offer-highlight">
                  <span>10% OFF Tue & Wed</span>
                </div>
                <p>Calling all students! Enjoy 10% off all services every Tuesday and Wednesday with a valid student ID. Perfect for a mid-week beauty boost!</p>
                <button class="terms-toggle" @click="flipCard('student')">
                  Terms & Conditions <i class="fas fa-sync"></i>
                </button>
                <div class="offer-cta">
                  <router-link to="/contact" class="btn primary">Book Now</router-link>
                </div>
              </div>
              
              <!-- Back of Card -->
              <div class="offer-card student-offer card-back">
                <h3>Terms & Conditions</h3>
                <div class="terms-content">
                  <p>• Valid student ID must be presented</p>
                  <p>• Offer valid only on Tuesdays and Wednesdays</p>
                  <p>• Subject to availability</p>
                  <p>• Cannot be combined with other offers</p>
                  <p>• Not applicable on retail products</p>
                  <p>• Management reserves the right to withdraw this offer at any time</p>
                </div>
                <button class="flip-back-btn" @click="flipCard('student')">
                  <i class="fas fa-arrow-left"></i> Back to Offer
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Gift Vouchers Button -->
        <div 
          class="gift-voucher-button-container"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 600 } }"
        >
          <a href="https://leadingedgehairandbeauty.co.uk/gift-vouchers" target="_blank" class="btn gift-voucher-btn">
            <i class="fas fa-gift"></i> Purchase Gift Vouchers
          </a>
          <p class="voucher-subtext">The perfect gift for any occasion</p>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div 
          class="cta-content"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 200, duration: 800 } }"
        >
          <h2>Ready to Experience The Leading Edge?</h2>
          <p>Book your appointment today and take advantage of our exclusive offers.</p>
          <router-link to="/contact" class="btn primary">Book Now</router-link>
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
  
  .gift-voucher-cta {
    margin-top: 2rem;
    
    .btn.primary-special {
      background-color: white;
      color: $accent-color;
      border: 2px solid white;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      transform-origin: center;
      transition: all 0.3s ease;
      
      i {
        font-size: 1.2rem;
      }
      
      &:hover {
        background-color: $accent-color;
        color: white;
        border-color: $accent-color;
        transform: translateY(-5px) scale(1.03);
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
      }
    }
  }
  
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
    color: $primary-color;
    font-size: 1.1rem;
  }
}

// Offers Section
.offers-section {
  background-color: $light-color;
  
  .offers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .gift-voucher-button-container {
    text-align: center;
    margin-top: 1rem;
    
    .gift-voucher-btn {
      background-color: $highlight-color;
      color: $primary-color;
      border: 2px solid $highlight-color;
      padding: 1.2rem 3rem;
      font-size: 1.3rem;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      transform-origin: center;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      
      i {
        font-size: 1.5rem;
      }
      
      &:hover {
        background-color: white;
        color: $primary-color;
        border-color: $primary-color;
        transform: translateY(-7px) scale(1.05);
      }
    }
    
    .voucher-subtext {
      margin-top: 1rem;
      color: lighten($primary-color, 20%);
      font-style: italic;
      font-size: 0.95rem;
    }
  }
  
  // Card flip functionality
  .offer-card-container {
    perspective: 1000px; // Important for 3D effect
    margin-bottom: 1rem;
    height: 550px; // Fixed container height
    
    // Remove hover from container to avoid interference with flip
  }
  
  .card-flipper {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform-origin: center center;
    
    &.is-flipped {
      transform: rotateY(180deg);
    }
  }
  
  .card-front, .card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden; /* Safari */
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba($primary-color, 0.08);
  }
  
  .card-front {
    z-index: 2;
    transform: rotateY(0deg);
  }
  
  .card-back {
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    // Remove any transform on hover that could interfere with the flip
    
    h3 {
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      color: $primary-color;
      position: relative;
      
      &:after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 2px;
        background-color: $accent-color;
      }
    }
    
    .terms-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0 1rem;
      
      p {
        margin-bottom: 0.8rem;
        font-size: 0.95rem;
        color: lighten($primary-color, 15%);
        text-align: left;
      }
    }
    
    .flip-back-btn {
      background: none;
      border: none;
      color: $accent-color;
      cursor: pointer;
      font-weight: 600;
      padding: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem auto 0;
      
      i {
        margin-right: 0.5rem;
      }
      
      &:hover {
        color: darken($accent-color, 10%);
      }
    }
  }
  
  .offer-card {
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    &:not(.card-back) {
      position: relative;
    }
    
    // Only apply hover to card-front, not when inside a flipped container
    .card-front & {
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
      }
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 8px;
    }
    
    &.friend-offer::before {
      background: linear-gradient(to right, $accent-color, lighten($accent-color, 15%));
    }
    
    &.nhs-offer::before {
      background: linear-gradient(to right, #404E5C, #6A7A8C);
    }
    
    &.student-offer::before {
      background: linear-gradient(to right, #D0D171, lighten(#D0D171, 15%));
    }
    
    .card-icon {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      font-size: 1.8rem;
    }
    
    &.friend-offer .card-icon {
      background-color: rgba($accent-color, 0.1);
      color: $accent-color;
    }
    
    &.nhs-offer .card-icon {
      background-color: rgba(#404E5C, 0.1);
      color: #404E5C;
    }
    
    &.student-offer .card-icon {
      background-color: rgba(#D0D171, 0.1);
      color: darken(#D0D171, 15%);
    }
    
    h2 {
      margin-bottom: 1rem;
      font-size: 1.6rem;
      color: $primary-color;
    }
    
    .offer-highlight {
      margin: 1rem 0;
      
      span {
        display: inline-block;
        padding: 0.5rem 1.5rem;
        border-radius: 30px;
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
    
    &.friend-offer .offer-highlight span {
      background-color: rgba($accent-color, 0.1);
      color: $accent-color;
    }
    
    &.nhs-offer .offer-highlight span {
      background-color: rgba(#404E5C, 0.1);
      color: #404E5C;
    }
    
    &.student-offer .offer-highlight span {
      background-color: rgba(#D0D171, 0.1);
      color: darken(#D0D171, 20%);
    }
    
    p {
      color: lighten($primary-color, 20%);
      line-height: 1.6;
      margin-bottom: 1rem;
      flex: 1;
    }
    
    .terms-toggle {
      background: none;
      border: none;
      color: $accent-color;
      cursor: pointer;
      font-weight: 600;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      
      i {
        margin-left: 0.5rem;
        transition: transform 0.3s ease;
      }
      
      &:hover {
        color: darken($accent-color, 10%);
        
        i {
          transform: rotate(90deg);
        }
      }
    }
    
    .offer-cta {
      margin-top: 0.5rem;
      
      .btn {
        width: 100%;
      }
    }
  }
}

// CTA Section
.cta-section {
  background-image: linear-gradient(to right, rgba($primary-color, 0.9), rgba($accent-color, 0.9)), url('/images/downloaded/APR-2021-01.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  
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
    
    &:hover {
      background-color: transparent;
      color: white;
    }
  }
}

// Buttons
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &.primary {
    background-color: $accent-color;
    color: white;
    border: 2px solid $accent-color;
    
    &:hover {
      background-color: darken($accent-color, 10%);
      border-color: darken($accent-color, 10%);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
}

// Responsive adjustments
@media (max-width: 991px) {
  
}

@media (max-width: 768px) {
  section {
    padding: 4rem 0;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
  }
  
}

@media (max-width: 576px) {
  .offer-card {
    padding: 2rem;
  }
}
</style>
