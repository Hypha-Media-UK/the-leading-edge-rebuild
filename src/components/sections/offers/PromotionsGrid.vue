<template>
  <section class="promotions-section">
    <div class="container">
      <SectionHeader
        v-if="title || description"
        :title="title"
        :description="description"
      />
      
      <div class="promotions-grid">
        <div
          v-for="(promotion, index) in promotions"
          :key="promotion.id || index"
          class="promotion-item"
        >
          <FlipCard
            :is-flipped="flippedCards[promotion.id]"
            :delay="200 + (index * 200)"
            :height="cardHeight"
          >
            <!-- Front Side -->
            <template #front>
              <div :class="['promotion-card', promotion.cardClass]">
                <div class="card-icon" v-if="promotion.icon">
                  <i :class="promotion.icon"></i>
                </div>
                <h2>{{ promotion.title }}</h2>
                <div class="offer-highlight" v-if="promotion.highlight">
                  <span>{{ promotion.highlight }}</span>
                </div>
                <p class="promotion-description">{{ promotion.description }}</p>
                <button class="terms-toggle" @click="flipCard(promotion.id)">
                  Terms & Conditions <i class="fas fa-sync"></i>
                </button>
                <div class="promotion-actions">
                  <Button 
                    :to="promotion.buttonLink || '#'" 
                    :variant="promotion.buttonVariant || 'primary'"
                    :size="promotion.buttonSize || 'small'"
                  >
                    {{ promotion.buttonText || 'Book Now' }}
                  </Button>
                </div>
              </div>
            </template>
            
            <!-- Back Side -->
            <template #back>
              <div :class="['promotion-card', promotion.cardClass]">
                <h3>Terms & Conditions</h3>
                <div class="terms-content">
                  <p v-for="(term, tIndex) in promotion.terms" :key="tIndex">• {{ term }}</p>
                </div>
                <button class="flip-back-btn" @click="flipCard(promotion.id)">
                  <i class="fas fa-arrow-left"></i> Back to Offer
                </button>
              </div>
            </template>
          </FlipCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import FlipCard from '@/components/ui/FlipCard.vue';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  promotions: {
    type: Array,
    required: true
  },
  cardHeight: {
    type: [String, Number],
    default: '550px'
  }
});

// Create a reactive object to track which cards are flipped
const flippedCards = ref({});

// Initialize the flippedCards state based on promotion IDs
props.promotions.forEach(promotion => {
  if (promotion.id) {
    flippedCards.value[promotion.id] = false;
  }
});

// Function to flip a card
const flipCard = (promotionId) => {
  if (promotionId in flippedCards.value) {
    flippedCards.value[promotionId] = !flippedCards.value[promotionId];
  }
};
</script>

<style lang="scss" scoped>
.promotions-section {
  background-color: $light-color;
  padding: 5rem 0;
  
  .promotions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .promotion-card {
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 8px;
    }
    
    &.friend-offer::before {
      background: linear-gradient(to right, $accent-color, custom-lighten($accent-color, 15%));
    }
    
    &.nhs-offer::before {
      background: linear-gradient(to right, #404E5C, #6A7A8C);
    }
    
    &.student-offer::before {
      background: linear-gradient(to right, #D0D171, custom-lighten(#D0D171, 15%));
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
      color: custom-darken(#D0D171, 15%);
    }
    
    h2 {
      margin-bottom: 1rem;
      font-size: 1.6rem;
      color: $primary-color;
    }
    
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
      color: custom-darken(#D0D171, 20%);
    }
    
    .promotion-description {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
      margin-bottom: 1rem;
      flex: 1;
    }
    
    .terms-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0 1rem;
      margin-bottom: 1.5rem;
      
      p {
        margin-bottom: 0.8rem;
        font-size: 0.95rem;
        color: custom-lighten($primary-color, 15%);
        text-align: left;
      }
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
        color: custom-darken($accent-color, 10%);
        
        i {
          transform: rotate(90deg);
        }
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
        color: custom-darken($accent-color, 10%);
      }
    }
    
    .promotion-actions {
      margin-top: auto;
      
      :deep(.btn) {
        width: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  .promotions-section {
    padding: 4rem 0;
  }
}

@media (max-width: 576px) {
  .promotion-card {
    padding: 1.5rem;
  }
}
</style>
