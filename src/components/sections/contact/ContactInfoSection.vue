<template>
  <section class="contact-info-section">
    <div class="container">
      <div class="contact-grid">
        <div 
          class="contact-form-container"
          
          
          
        >
          <ContactForm 
            :title="formTitle"
            :subtitle="formSubtitle"
            :serviceOptions="serviceOptions"
            :timeOptions="timeOptions"
            @submit="handleFormSubmit"
            @reset="handleFormReset"
          />
        </div>

        <div 
          class="contact-details"
          
          
          
        >
          <ContactCard
            type="location"
            title="Our Location"
            icon="fas fa-map-marker-alt"
            :address="locationAddress"
            :mapImage="mapImage"
            :mapLink="mapLink"
          />

          <ContactCard
            type="hours"
            title="Opening Hours"
            icon="far fa-clock"
            :hours="openingHours"
          />

          <ContactCard
            type="connect"
            title="Connect With Us"
            icon="fas fa-phone-alt"
            :contactItems="contactItems"
            :socialLinks="socialLinks"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from '@/components/forms/ContactForm.vue';
import ContactCard from '@/components/ui/ContactCard.vue';

const props = defineProps({
  formTitle: {
    type: String,
    default: 'Book an Appointment'
  },
  formSubtitle: {
    type: String,
    default: 'Fill out the form below and we\'ll get back to you within 24 hours to confirm your booking.'
  },
  serviceOptions: {
    type: Array,
    default: () => []
  },
  timeOptions: {
    type: Array,
    default: () => []
  },
  locationAddress: {
    type: String,
    default: '61 Dowson Road\nHyde\nCheshire\nSK14 1QS'
  },
  mapImage: {
    type: String,
    default: '/images/new/misc/misc001.webp'
  },
  mapLink: {
    type: String,
    default: 'https://maps.google.com/?q=61+Dowson+Road,+Hyde,+Cheshire,+SK14+1QS'
  },
  openingHours: {
    type: Array,
    default: () => [
      { day: 'Monday', time: 'Closed', closed: true },
      { day: 'Tuesday', time: '09:00 - 18:00' },
      { day: 'Wednesday', time: '09:00 - 18:00' },
      { day: 'Thursday', time: '09:00 - 20:00' },
      { day: 'Friday', time: '09:00 - 19:00' },
      { day: 'Saturday', time: '09:00 - 17:00' },
      { day: 'Sunday', time: 'Closed', closed: true }
    ]
  },
  contactItems: {
    type: Array,
    default: () => [
      { icon: 'fas fa-phone', text: '0161 368 9999', link: 'tel:01613689999' },
      { icon: 'fas fa-envelope', text: 'enquiries@leadingedgehairandbeauty.co.uk', link: 'mailto:enquiries@leadingedgehairandbeauty.co.uk' }
    ]
  },
  socialLinks: {
    type: Array,
    default: () => [
      { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' },
      { icon: 'fab fa-instagram', url: '#', label: 'Instagram' },
      { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
      { icon: 'fab fa-pinterest-p', url: '#', label: 'Pinterest' }
    ]
  }
});

const emit = defineEmits(['form-submit', 'form-reset']);

const handleFormSubmit = (formData) => {
  emit('form-submit', formData);
};

const handleFormReset = () => {
  emit('form-reset');
};
</script>

<style lang="scss" scoped>
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
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
