<script setup>
import { ref, onMounted } from 'vue';
import PageHeader from '@/components/ui/PageHeader.vue';
import AboutStory from '@/components/sections/salon/AboutStory.vue';
import PhilosophyGrid from '@/components/sections/salon/PhilosophyGrid.vue';
import InteriorGallery from '@/components/sections/salon/InteriorGallery.vue';
import ProductsShowcase from '@/components/sections/salon/ProductsShowcase.vue';
import CallToAction from '@/components/sections/common/CallToAction.vue';

const isLoaded = ref(false);

// Philosophy items data
const philosophyItems = [
  {
    title: "Client-Centered",
    description: "We believe that every client deserves personalized attention and services tailored to their unique needs and preferences.",
    icon: "fas fa-heart"
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from the quality of our services to the ambiance of our salon.",
    icon: "fas fa-trophy"
  },
  {
    title: "Sustainability",
    description: "We are committed to sustainable practices and using products that are kind to both our clients and the environment.",
    icon: "fas fa-seedling"
  },
  {
    title: "Continuous Learning",
    description: "We believe in the power of education and ensure our team stays updated with the latest techniques and trends.",
    icon: "fas fa-book"
  }
];

// Interior gallery images
const interiorImages = [
  { src: '/images/new/internal/int1.webp', alt: 'Salon interior - Main area' },
  { src: '/images/new/internal/int2.webp', alt: 'Salon interior - Styling station' },
  { src: '/images/new/internal/int3.webp', alt: 'Salon interior - Treatment area' },
  { src: '/images/new/internal/int4.webp', alt: 'Salon interior - Reception' }
];

// Products data
const products = [
  { image: '/images/new/products/prod1.webp', alt: 'Premium Brand Product 1' },
  { image: '/images/new/products/prod2.webp', alt: 'Premium Brand Product 2' },
  { image: '/images/new/products/prod3.webp', alt: 'Premium Brand Product 3' },
  { image: '/images/new/products/prod4.webp', alt: 'Premium Brand Product 4' }
];

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="our-salon-page">
    <!-- Page Header -->
    <PageHeader
      title="Our Salon"
      description=""
    />

    <!-- About Us Section -->
    <AboutStory
      title="Our Story"
      image="/images/new/staff/team.webp"
      imageAlt="The Leading Edge salon team"
    >
      <p 
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 600, duration: 600 } }"
      >
        Founded in 2010, The Leading Edge was born from a passion for creating a salon experience that blends luxurious comfort with exceptional skill. Our journey began with a simple vision: to create a space where clients can relax, rejuvenate, and leave feeling both beautiful and confident.
      </p>
      <p 
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 800, duration: 600 } }"
      >
        Over the years, we've grown from a small team of dedicated stylists to a full-service salon with a reputation for excellence. Our commitment to continuous education ensures that our team stays at the forefront of industry trends and techniques.
      </p>
      <p 
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }"
      >
        Today, The Leading Edge stands as a testament to our dedication to the craft of hair and beauty, serving clients from all walks of life who share our appreciation for quality and attention to detail.
      </p>
    </AboutStory>

    <!-- Philosophy Section -->
    <PhilosophyGrid
      title="Our Philosophy"
      :philosophyItems="philosophyItems"
    />

    <!-- Salon Interior Section -->
    <InteriorGallery
      title="Our Space"
      description="Step into a world of relaxation and beauty"
      :images="interiorImages"
    >
      <p>Our salon is designed to be a haven of tranquility amidst the bustle of everyday life. With thoughtfully designed spaces, comfortable seating, and ambient lighting, we've created an environment that soothes the senses while our expert team takes care of your beauty needs.</p>
      <p>From our reception area to our styling stations and treatment rooms, every corner of The Leading Edge is crafted to enhance your experience and ensure you leave feeling refreshed and rejuvenated.</p>
    </InteriorGallery>

    <!-- Products Section -->
    <ProductsShowcase
      title="Premium Products"
      description="We partner with the industry's finest brands to bring you exceptional quality"
      :products="products"
      ctaText="View our Online Shop"
      ctaIcon="fas fa-shopping-cart"
      :darkMode="true"
    />

    <!-- CTA Section -->
    <CallToAction
      title="Experience The Leading Edge Difference"
      text="Book your appointment today and step into a world of luxury and expert care."
      buttonText="Book Now"
      buttonLink="/contact"
    />
  </div>
</template>

<style lang="scss" scoped>
.our-salon-page {
  // Styles specific to the salon page wrapper
  // Most styles are now in the individual components
}
</style>
