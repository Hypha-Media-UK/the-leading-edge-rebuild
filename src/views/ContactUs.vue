<script setup lang="ts">
import { ref } from 'vue';
import PageHeader from '@/components/ui/PageHeader.vue';
import ContactInfoSection from '@/components/sections/contact/ContactInfoSection.vue';
import FAQSection from '@/components/sections/contact/FAQSection.vue';
import type { 
  FAQ, 
  ServiceOption, 
  TimeOption, 
  OpeningHour, 
  ContactItem, 
  SocialLink,
  FormData 
} from '@/types/contact';


// FAQs data
const faqs: FAQ[] = [
  {
    question: "How far in advance should I book an appointment?",
    answer: "We recommend booking at least 1-2 weeks in advance for regular services and 3-4 weeks for special occasions or bridal appointments to ensure availability with your preferred stylist."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We kindly request 24 hours' notice for any cancellations or rescheduling. Late cancellations or no-shows may incur a fee of 50% of the service cost."
  },
  {
    question: "Do you offer consultations before services?",
    answer: "Yes, we offer complimentary consultations before color services and major changes. These can be scheduled separately or at the beginning of your appointment."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, debit cards, cash, and mobile payment methods such as Apple Pay and Google Pay. Gift certificates are also available for purchase."
  }
];

// Service options for the form
const serviceOptions: ServiceOption[] = [
  { value: 'haircut', label: 'Haircut & Styling' },
  { value: 'color', label: 'Hair Color & Highlights' },
  { value: 'treatment', label: 'Hair Treatment' },
  { value: 'facial', label: 'Facial Treatment' },
  { value: 'makeup', label: 'Makeup Application' },
  { value: 'manicure', label: 'Manicure' },
  { value: 'pedicure', label: 'Pedicure' },
  { value: 'package', label: 'Spa Package' },
  { value: 'other', label: 'Other' }
];

// Time options for the form
const timeOptions: TimeOption[] = [
  { value: '9:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '13:00', label: '1:00 PM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '16:00', label: '4:00 PM' },
  { value: '17:00', label: '5:00 PM' },
  { value: '18:00', label: '6:00 PM' }
];

// Opening hours data
const openingHours: OpeningHour[] = [
  { day: 'Monday', time: 'Closed', closed: true },
  { day: 'Tuesday', time: '09:00 - 18:00' },
  { day: 'Wednesday', time: '09:00 - 18:00' },
  { day: 'Thursday', time: '09:00 - 20:00' },
  { day: 'Friday', time: '09:00 - 19:00' },
  { day: 'Saturday', time: '09:00 - 17:00' },
  { day: 'Sunday', time: 'Closed', closed: true }
];

// Contact items data
const contactItems: ContactItem[] = [
  { icon: 'fas fa-phone', text: '0161 368 9999', link: 'tel:01613689999' },
  { icon: 'fas fa-envelope', text: 'enquiries@leadingedgehairandbeauty.co.uk', link: 'mailto:enquiries@leadingedgehairandbeauty.co.uk' }
];

// Social media links data
const socialLinks: SocialLink[] = [
  { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' },
  { icon: 'fab fa-instagram', url: '#', label: 'Instagram' },
  { icon: 'fab fa-twitter', url: '#', label: 'Twitter' },
  { icon: 'fab fa-pinterest-p', url: '#', label: 'Pinterest' }
];

// Form submission handler
const handleFormSubmit = (formData: FormData): void => {
  console.log('Form submitted:', formData);
  // In a real application, you would send this data to your backend
};

// Form reset handler
const handleFormReset = (): void => {
  console.log('Form reset');
};

</script>

<template>
  <div class="contact-page">
    <!-- Page Header -->
    <PageHeader
      title="Contact Us"
      description="Book your appointment or get in touch with our team"
    />

    <!-- Contact Information -->
    <ContactInfoSection
      formTitle="Book an Appointment"
      formSubtitle="Fill out the form below and we'll get back to you within 24 hours to confirm your booking."
      :serviceOptions="serviceOptions"
      :timeOptions="timeOptions"
      locationAddress="61 Dowson Road\nHyde\nCheshire\nSK14 1QS"
      mapImage="/images/new/misc/misc001.webp"
      mapLink="https://maps.google.com/?q=61+Dowson+Road,+Hyde,+Cheshire,+SK14+1QS"
      :openingHours="openingHours"
      :contactItems="contactItems"
      :socialLinks="socialLinks"
      @form-submit="handleFormSubmit"
      @form-reset="handleFormReset"
    />

    <!-- FAQ Section -->
    <FAQSection
      title="Frequently Asked Questions"
      :faqs="faqs"
    />
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
  // Styles specific to the contact page wrapper
  // Most styles are now in the individual components
}
</style>
