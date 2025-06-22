<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PageHeader from '@/components/ui/PageHeader.vue';
import PromotionsGrid from '@/components/sections/offers/PromotionsGrid.vue';
import GiftVoucherSection from '@/components/sections/offers/GiftVoucherSection.vue';
import CallToAction from '@/components/sections/common/CallToAction.vue';
import type { Promotion } from '@/types/offers';

const isLoaded = ref<boolean>(false);

// Promotions data
const promotions: Promotion[] = [
  {
    id: 'friend',
    title: 'Refer a Friend',
    icon: 'fas fa-user-friends',
    highlight: '£10 Voucher',
    description: 'Receive a £10 gift voucher from us when you refer a friend. Share the beauty experience with your loved ones and get rewarded!',
    buttonText: 'Book Now',
    buttonLink: '/contact',
    cardClass: 'friend-offer',
    terms: [
      'Referral must be a new client to The Leading Edge',
      'Voucher issued after your friend\'s first appointment',
      'Vouchers valid for 3 months from issue date',
      'Cannot be combined with other offers',
      'Management reserves the right to withdraw this offer at any time'
    ]
  },
  {
    id: 'nhs',
    title: 'Nurses & Doctors',
    icon: 'fas fa-hospital',
    highlight: '10% Discount',
    description: 'We\'re proud to support our healthcare heroes! All NHS and Council staff can enjoy a 10% discount on all services with valid ID.',
    buttonText: 'Book Now',
    buttonLink: '/contact',
    cardClass: 'nhs-offer',
    terms: [
      'Valid NHS or Council staff ID must be presented',
      'Discount applies to all salon services',
      'Cannot be combined with other offers',
      'Not applicable on retail products',
      'Management reserves the right to withdraw this offer at any time'
    ]
  },
  {
    id: 'student',
    title: 'Student Discount',
    icon: 'fas fa-graduation-cap',
    highlight: '10% OFF Tue & Wed',
    description: 'Calling all students! Enjoy 10% off all services every Tuesday and Wednesday with a valid student ID. Perfect for a mid-week beauty boost!',
    buttonText: 'Book Now',
    buttonLink: '/contact',
    cardClass: 'student-offer',
    terms: [
      'Valid student ID must be presented',
      'Offer valid only on Tuesdays and Wednesdays',
      'Subject to availability',
      'Cannot be combined with other offers',
      'Not applicable on retail products',
      'Management reserves the right to withdraw this offer at any time'
    ]
  }
];

onMounted((): void => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="offers-page">
    <!-- Page Header -->
    <PageHeader
      title="Offers & Gift Vouchers"
      description="Enjoy exclusive discounts and special promotions at The Leading Edge"
    >
      <template #extra>
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
      </template>
    </PageHeader>

    <!-- Promotions Grid -->
    <PromotionsGrid
      :promotions="promotions"
    />

    <!-- Gift Vouchers Section -->
    <GiftVoucherSection
      buttonText="Purchase Gift Vouchers"
      link="https://leadingedgehairandbeauty.co.uk/gift-vouchers"
      :external="true"
    />

    <!-- CTA Section -->
    <CallToAction
      title="Ready to Experience The Leading Edge?"
      text="Book your appointment today and take advantage of our exclusive offers."
      buttonText="Book Now"
      buttonLink="/contact"
      backgroundColor="gradient"
    />
  </div>
</template>

<style lang="scss" scoped>
.offers-page {
  // Page-specific styles
  
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
      text-decoration: none;
      
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
}
</style>
