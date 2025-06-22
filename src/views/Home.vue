<script setup>
import { ref, onMounted } from 'vue';
import HeroSection from '@/components/sections/home/HeroSection.vue';
import FeaturesSection from '@/components/sections/home/FeaturesSection.vue';
import ServicesPreviewSection from '@/components/sections/home/ServicesPreviewSection.vue';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection.vue';
import InstagramFeed from '@/components/sections/home/InstagramFeed.vue';
import CallToAction from '@/components/sections/common/CallToAction.vue';

const isLoaded = ref(false);

// Features data
const features = [
  {
    icon: 'fas fa-crown',
    title: 'Premium Experience',
    description: 'Luxurious environment and personalized service that exceeds expectations.'
  },
  {
    icon: 'fas fa-certificate',
    title: 'Expert Stylists',
    description: 'Our team of highly trained professionals stay ahead of the latest trends and techniques.'
  },
  {
    icon: 'fas fa-leaf',
    title: 'Quality Products',
    description: 'We use only premium, sustainable products that are gentle on your hair and the environment.'
  }
];

// Services data
const services = [
  {
    title: 'Styling, Cutting & Colouring',
    description: 'Expert cutting, styling and coloring services to create the perfect look tailored to your unique style.',
    image: '/images/new/services/service1.webp',
    linkText: 'Learn More',
    linkUrl: '/services'
  },
  {
    title: 'Nail & Beauty Services',
    description: 'Complete nail care, facial treatments, and beauty services to enhance your natural features.',
    image: '/images/new/services/service2.webp',
    linkText: 'Learn More',
    linkUrl: '/services'
  },
  {
    title: 'Massage & Aesthetic Treatments',
    description: 'Relaxing massage therapy and advanced aesthetic treatments for total body wellness and beauty.',
    image: '/images/new/services/service3.webp',
    linkText: 'Learn More',
    linkUrl: '/services'
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: "The Leading Edge has completely transformed my hair care routine. The team is professional, knowledgeable, and always makes me feel welcome.",
    name: "Sarah Johnson",
    role: "Regular Client",
    image: "test001.webp"
  },
  {
    id: 2,
    quote: "Absolutely love the results every time I visit. The stylists here are true artists and always keep up with the latest trends and techniques.",
    name: "Michael Thompson",
    role: "Loyal Customer",
    image: "test002.webp"
  },
  {
    id: 3,
    quote: "Their attention to detail is incredible. I came in with a vague idea of what I wanted and left with exactly the style I didn't even know I needed!",
    name: "Emma Wilson",
    role: "First-time Client",
    image: "test003.webp"
  },
  {
    id: 4,
    quote: "The spa treatments here are divine. The perfect place to relax and unwind while being pampered by true professionals.",
    name: "James Reynolds",
    role: "Spa Regular",
    image: "test004.webp"
  },
  {
    id: 5,
    quote: "I've been to many salons, but none compare to The Leading Edge. The quality of service and products they use are simply unmatched.",
    name: "Olivia Garcia",
    role: "VIP Member",
    image: "test003.webp"
  }
];

// Instagram images
const instagramImages = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/new/insta/insta${i + 1}.webp`
}));

// Hero buttons
const heroButtons = [
  { text: 'Explore Services', to: '/services', variant: 'secondary' },
  { text: 'Book Appointment', to: '/contact', variant: 'secondary' },
  { text: 'Offers & Gift Vouchers', to: '/offers', variant: 'primary' }
];

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <HeroSection
      heading="Experience True <span>Beauty</span> &amp; <span>Elegance</span>"
      text="At The Leading Edge, we blend artistry with expertise to create looks that enhance your natural beauty."
      :buttons="heroButtons"
      backgroundImage="/images/new/heros/hero3.webp"
    />

    <!-- Features Section -->
    <FeaturesSection
      title="Why Choose Us"
      :features="features"
    />

    <!-- Services Preview -->
    <ServicesPreviewSection
      title="Our Services"
      description="Discover our range of premium hair and beauty services"
      :services="services"
      ctaText="View All Services"
      ctaLink="/services"
    />

    <!-- Testimonials -->
    <TestimonialsSection
      title="What Our Clients Say"
      :testimonials="testimonials"
    />

    <!-- Instagram Feed -->
    <InstagramFeed
      title="Follow Our Journey"
      description="Stay updated with our latest styles and salon updates"
      :images="instagramImages"
      instagramUrl="https://instagram.com"
      ctaText="Follow Us @TheLeadingEdge"
    />

    <!-- CTA Section -->
    <CallToAction
      title="Ready for a Transformation?"
      text="Book your appointment today and experience the difference at The Leading Edge."
      buttonText="Book Now"
      buttonLink="/contact"
      backgroundImage="/images/new/internal/int1.webp"
    />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  // Styles specific to the home page wrapper
  // Most styles are now in the individual components
}
</style>
