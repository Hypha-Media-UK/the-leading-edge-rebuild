<script setup>
import PageHeader from '@/components/ui/PageHeader.vue';
import BenefitsSection from '@/components/sections/careers/BenefitsSection.vue';
import JobsGrid from '@/components/sections/careers/JobsGrid.vue';
import CareersApplicationForm from '@/components/sections/careers/CareersApplicationForm.vue';
import CultureSection from '@/components/sections/careers/CultureSection.vue';

// Career positions data
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

// Benefits data for BenefitsSection
const benefits = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Continuous Education',
    description: 'We invest in our team\'s growth with regular training sessions, workshops, and opportunities to attend industry events.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Career Growth',
    description: 'Clear career pathways and mentorship opportunities allow you to advance your skills and take on new challenges.'
  },
  {
    icon: 'fas fa-user-friends',
    title: 'Supportive Team',
    description: 'Join a collaborative and inclusive environment where creativity and individual expression are valued.'
  },
  {
    icon: 'fas fa-award',
    title: 'Recognition & Rewards',
    description: 'Competitive compensation, performance bonuses, and employee recognition programs to celebrate your achievements.'
  }
];

// Culture section paragraphs
const cultureParagraphs = [
  'At The Leading Edge, we foster a culture of creativity, respect, and continuous growth. We believe that happy team members provide the best service to our clients, which is why we prioritize creating a positive and supportive work environment.',
  'We celebrate diversity and believe that each team member brings unique perspectives and talents that contribute to our collective success. Our collaborative approach encourages sharing ideas and learning from one another.',
  'If you\'re passionate about beauty, dedicated to excellence, and love making people feel their best, we\'d love to hear from you!'
];

</script>

<template>
  <div class="careers-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>
          Join Our Team
        </h1>
        <div class="separator"></div>
        <p>
          Be part of The Leading Edge family and grow your career with us
        </p>
      </div>
    </section>

    <!-- Benefits Section -->
    <BenefitsSection :benefits="benefits" />

    <!-- Jobs Grid -->
    <JobsGrid :positions="positions" />

    <!-- Application Form -->
    <CareersApplicationForm :positions="positions" />

    <!-- Culture Section -->
    <CultureSection :paragraphs="cultureParagraphs" />
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
</style>
