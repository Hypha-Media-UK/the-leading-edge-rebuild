<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import PageHeader from '@/components/ui/PageHeader.vue';
import JobsGrid from '@/components/sections/careers/JobsGrid.vue';
import BenefitsSection from '@/components/sections/careers/BenefitsSection.vue';
import ProcessSteps from '@/components/sections/careers/ProcessSteps.vue';
import Button from '@/components/ui/Button.vue';
import CallToAction from '@/components/sections/common/CallToAction.vue';
import type { Job, Benefit, ApplicationStep } from '@/types/careers';

const isLoaded = ref<boolean>(false);
const showApplicationForm = ref<boolean>(false);
const selectedJobId = ref<number | null>(null);

// Sample jobs data
const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Hair Stylist',
    jobType: 'Full-time',
    location: 'Hyde, Cheshire',
    excerpt: 'We are looking for an experienced hair stylist to join our team at The Leading Edge. The ideal candidate will have at least 5 years of experience and a passion for creating beautiful hair transformations.',
    description: 'As a Senior Hair Stylist at The Leading Edge, you will be responsible for providing exceptional hair services to our clients, including cutting, coloring, and styling. You will also be expected to stay up-to-date with the latest trends and techniques in the industry.',
    requirements: [
      'At least 5 years of experience as a professional hair stylist',
      'Advanced training in hair cutting and coloring techniques',
      'Experience with a variety of hair types and textures',
      'Strong communication and customer service skills',
      'Ability to work well in a team environment',
      'Portfolio of previous work'
    ],
    benefits: [
      'Competitive salary plus commission',
      'Ongoing professional development and training',
      'Employee discount on products and services',
      'Flexible scheduling',
      'Friendly and supportive work environment'
    ]
  },
  {
    id: 2,
    title: 'Beauty Therapist',
    jobType: 'Full-time',
    location: 'Hyde, Cheshire',
    excerpt: 'Join our team as a Beauty Therapist and help our clients look and feel their best. We are seeking a qualified professional with experience in a range of beauty treatments.',
    description: 'As a Beauty Therapist at The Leading Edge, you will perform a variety of beauty treatments including facials, waxing, manicures, pedicures, and more. You will be responsible for providing personalized recommendations to clients and ensuring they have a relaxing and enjoyable experience.',
    requirements: [
      'NVQ Level 3 in Beauty Therapy or equivalent qualification',
      'At least 2 years of experience in a professional salon or spa',
      'Proficiency in a wide range of beauty treatments',
      'Knowledge of skincare products and treatments',
      'Excellent customer service skills',
      'Ability to work weekends and some evenings'
    ],
    benefits: [
      'Competitive salary plus commission',
      'Ongoing professional development and training',
      'Employee discount on products and services',
      'Flexible scheduling',
      'Friendly and supportive work environment'
    ]
  },
  {
    id: 3,
    title: 'Nail Technician',
    jobType: 'Part-time',
    location: 'Hyde, Cheshire',
    excerpt: 'We are currently recruiting a skilled Nail Technician to join our team. If you have a passion for nail art and providing exceptional service, we want to hear from you.',
    description: 'As a Nail Technician at The Leading Edge, you will be responsible for providing a range of nail services including manicures, pedicures, gel nails, and nail art. You will work closely with clients to understand their needs and provide personalized recommendations.',
    requirements: [
      'Relevant qualification in nail technology',
      'At least 1 year of experience in a professional salon',
      'Proficiency in a variety of nail techniques including gel, acrylic, and nail art',
      'Attention to detail and creativity',
      'Excellent customer service skills',
      'Availability to work flexible hours including weekends'
    ],
    benefits: [
      'Competitive hourly rate plus commission',
      'Training opportunities to learn new techniques',
      'Employee discount on products and services',
      'Flexible scheduling',
      'Positive and creative work environment'
    ]
  },
  {
    id: 4,
    title: 'Salon Receptionist',
    jobType: 'Part-time',
    location: 'Hyde, Cheshire',
    excerpt: 'We are looking for a friendly and organized Salon Receptionist to be the first point of contact for our clients. This role is essential in creating a positive first impression and ensuring smooth salon operations.',
    description: 'As a Receptionist at The Leading Edge, you will be responsible for greeting clients, managing appointments, answering phone calls and emails, processing payments, and maintaining the reception area. You will play a key role in ensuring our clients have a seamless and enjoyable experience from the moment they contact us.',
    requirements: [
      'Previous experience in a customer service or reception role',
      'Excellent communication and interpersonal skills',
      'Proficiency in using appointment booking systems',
      'Basic computer skills and familiarity with point-of-sale systems',
      'Ability to multitask in a fast-paced environment',
      'Professional appearance and positive attitude'
    ],
    benefits: [
      'Competitive hourly rate',
      'Employee discount on products and services',
      'Opportunity to learn about the beauty industry',
      'Friendly and supportive work environment',
      'Potential for career growth within the salon'
    ]
  }
];

// Benefits data
const benefits: Benefit[] = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Continuous Education',
    description: 'We invest in our team\'s development with regular training sessions, workshops, and opportunities to attend industry events.'
  },
  {
    icon: 'fas fa-users',
    title: 'Supportive Team',
    description: 'Join a collaborative, friendly team that supports each other and celebrates achievements together.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Career Growth',
    description: 'We offer clear paths for advancement and promotion based on performance, skills, and dedication.'
  },
  {
    icon: 'fas fa-percentage',
    title: 'Competitive Pay',
    description: 'Enjoy competitive base salaries plus commission structures that reward your hard work and talent.'
  },
  {
    icon: 'fas fa-balance-scale',
    title: 'Work-Life Balance',
    description: 'We value your personal time with flexible scheduling options and a healthy work environment.'
  },
  {
    icon: 'fas fa-heart',
    title: 'Employee Discounts',
    description: 'Access to exclusive discounts on our premium services and professional products.'
  }
];

// Application process steps
const applicationSteps: ApplicationStep[] = [
  {
    title: 'Submit Your Application',
    description: 'Send your CV and cover letter to our careers email or apply through our website for open positions.'
  },
  {
    title: 'Initial Phone Interview',
    description: 'Our team will reach out to discuss your experience and interest in the role and answer any questions you may have.'
  },
  {
    title: 'In-Person Interview',
    description: 'Visit our salon to meet the team and demonstrate your skills with a practical assessment relevant to the position.'
  },
  {
    title: 'Final Decision',
    description: 'We\'ll make a decision quickly and reach out with an offer if you\'re the right fit for our team.'
  }
];

// Function to handle job application

const handleJobApplication = (jobId: number | null): void => {
  selectedJobId.value = jobId;
  showApplicationForm.value = true;
  // Scroll to application form
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
};

// Get selected job details for the application form
const selectedJob = computed<Job | null>(() => {
  if (!selectedJobId.value) return null;
  return jobs.find(job => job.id === selectedJobId.value) || null;
});

onMounted((): void => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="careers-page">
    <!-- Page Header -->
    <PageHeader
      title="Join Our Team"
      description="Become part of the Leading Edge family and grow your career in a supportive, creative environment"
    />

    <!-- Jobs Grid Section -->
    <JobsGrid
      :jobs="jobs"
      :jobTypes="['Full-time', 'Part-time', 'Contract', 'Internship']"
      @apply-job="handleJobApplication"
    />

    <!-- Benefits Section -->
    <BenefitsSection
      title="Why Work With Us"
      description="Discover the many benefits of joining The Leading Edge team"
      :benefits="benefits"
    />

    <!-- Application Process Section -->
    <ProcessSteps
      title="Our Application Process"
      description="Here's how you can join our team in just a few simple steps"
      :steps="applicationSteps"
    >
      <template #cta>
        <Button 
          variant="primary" 
          size="large"
          icon="fas fa-paper-plane"
          @click="handleJobApplication(null)"
        >
          Apply Now
        </Button>
      </template>
    </ProcessSteps>

    <!-- Application Form (simplified version) -->
    <section v-if="showApplicationForm" class="application-form-section">
      <div class="container">
        <div 
          class="application-form"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h2>{{ selectedJob ? `Apply for ${selectedJob.title}` : 'Job Application' }}</h2>
          
          <p class="form-notice">
            To apply for {{ selectedJob ? `the ${selectedJob.title} position` : 'a position at The Leading Edge' }}, please email your CV and cover letter to:
          </p>
          
          <div class="email-contact">
            <a href="mailto:careers@leadingedgehairandbeauty.co.uk">careers@leadingedgehairandbeauty.co.uk</a>
          </div>
          
          <p class="application-note">
            Please include the position you're applying for in the subject line. We look forward to reviewing your application!
          </p>
          
          <div class="form-actions">
            <Button 
              @click="showApplicationForm = false" 
              variant="secondary"
              size="small"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <CallToAction
      title="Ready to Take the Next Step in Your Career?"
      text="We're always looking for talented individuals to join our team. Apply today and be part of something special."
      buttonText="View Open Positions"
      buttonLink="#open-positions"
      backgroundColor="#486581"
    />
  </div>
</template>

<style lang="scss" scoped>
.careers-page {
  // Most styles are now in the individual components
  
  .application-form-section {
    padding: 5rem 0;
    background-color: $light-color;
    
    .application-form {
      max-width: 800px;
      margin: 0 auto;
      background-color: white;
      padding: 2.5rem;
      border-radius: 8px;
      box-shadow: 0 5px 20px rgba($primary-color, 0.08);
      text-align: center;
      
      h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: $primary-color;
      }
      
      .form-notice {
        color: custom-lighten($primary-color, 20%);
        margin-bottom: 1.5rem;
        line-height: 1.6;
      }
      
      .email-contact {
        margin-bottom: 1.5rem;
        
        a {
          font-size: 1.3rem;
          color: $accent-color;
          font-weight: 600;
          text-decoration: none;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
      
      .application-note {
        color: custom-lighten($primary-color, 20%);
        margin-bottom: 2rem;
        line-height: 1.6;
      }
      
      .form-actions {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
