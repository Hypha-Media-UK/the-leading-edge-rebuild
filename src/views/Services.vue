<script setup>
import { ref, onMounted } from 'vue';
import PageHeader from '@/components/ui/PageHeader.vue';
import ServicesTabsSection from '@/components/sections/services/ServicesTabsSection.vue';
import CallToAction from '@/components/sections/common/CallToAction.vue';

const isLoaded = ref(false);
const activeTab = ref('hair');

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

// Define tabs
const tabs = [
  {
    id: 'hair',
    label: 'Hair',
    icon: 'fas fa-cut'
  },
  {
    id: 'beauty',
    label: 'Beauty',
    icon: 'fas fa-spa'
  },
  {
    id: 'nails',
    label: 'Nails',
    icon: 'fas fa-hand-sparkles'
  },
  {
    id: 'packages',
    label: 'Packages',
    icon: 'fas fa-gift'
  }
];

// Hair services data
const hairServices = [
  {
    title: "Women's Haircut & Style",
    description: "Includes consultation, shampoo, conditioner, cut, and style.",
    price: "from £65"
  },
  {
    title: "Men's Haircut & Style",
    description: "Precision cut tailored to your style and face shape.",
    price: "from £45"
  },
  {
    title: "Color & Highlights",
    description: "Full or partial highlights, balayage, or all-over color.",
    price: "from £85"
  },
  {
    title: "Balayage/Ombre",
    description: "Hand-painted highlights for a naturally sun-kissed look.",
    price: "from £120"
  },
  {
    title: "Hair Treatments",
    description: "Deep conditioning, keratin, or specialized repair treatments.",
    price: "from £50"
  },
  {
    title: "Bridal & Special Occasion",
    description: "Consultation and styling for your special day.",
    price: "from £90"
  }
];

// Beauty services data
const beautyServices = [
  {
    title: "Signature Facial",
    description: "Customized facial to address your specific skin concerns.",
    price: "£75"
  },
  {
    title: "Anti-Aging Facial",
    description: "Targets fine lines and wrinkles for a more youthful appearance.",
    price: "£95"
  },
  {
    title: "Makeup Application",
    description: "Professional makeup for special occasions or everyday glamour.",
    price: "from £60"
  },
  {
    title: "Brow Shaping & Tinting",
    description: "Perfect your brows with expert shaping and color.",
    price: "£35"
  },
  {
    title: "Eyelash Extensions",
    description: "Full set of classic or volume lashes for a dramatic look.",
    price: "from £120"
  },
  {
    title: "Waxing Services",
    description: "Smooth, hair-free skin for face and body.",
    price: "from £20"
  }
];

// Nail services data
const nailServices = [
  {
    title: "Classic Manicure",
    description: "Nail shaping, cuticle care, hand massage, and polish.",
    price: "£35"
  },
  {
    title: "Gel Manicure",
    description: "Long-lasting gel polish that stays chip-free for weeks.",
    price: "£45"
  },
  {
    title: "Luxury Pedicure",
    description: "Foot soak, exfoliation, nail care, massage, and polish.",
    price: "£55"
  },
  {
    title: "Gel Pedicure",
    description: "Our luxury pedicure with long-lasting gel polish.",
    price: "£65"
  },
  {
    title: "Nail Art",
    description: "Custom designs, French tips, glitter, or rhinestones.",
    price: "from £10"
  },
  {
    title: "Nail Repair",
    description: "Fix broken nails or remove and replace gel polish.",
    price: "from £15"
  }
];

// Packages data
const packages = [
  {
    title: "Essential Package",
    price: "£140",
    description: "A perfect introduction to our salon services, designed to refresh and rejuvenate.",
    includes: [
      "Women's Haircut & Style",
      "Classic Manicure",
      "Express Facial"
    ],
    duration: "Approx. 3 hours"
  },
  {
    title: "Luxury Package",
    price: "£240",
    description: "Our premium package for those seeking the ultimate pampering experience.",
    includes: [
      "Women's Haircut & Style",
      "Partial Highlights or Color",
      "Signature Facial",
      "Gel Manicure",
      "Luxury Pedicure"
    ],
    duration: "Approx. 5 hours"
  },
  {
    title: "Bridal Package",
    price: "£320",
    description: "Everything you need to look and feel your best on your special day.",
    includes: [
      "Bridal Hair Trial",
      "Bridal Hair Styling",
      "Makeup Application",
      "Gel Manicure",
      "Gel Pedicure",
      "Glass of Champagne"
    ],
    duration: "Varies (includes pre-wedding trial)"
  }
];

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="services-page">
    <!-- Page Header -->
    <PageHeader
      title="Our Services"
      description="Discover our range of premium services designed to enhance your natural beauty"
    />

    <!-- Services Tabs -->
    <ServicesTabsSection
      :activeTab="activeTab"
      :tabs="tabs"
      :hairServices="hairServices"
      :beautyServices="beautyServices"
      :nailServices="nailServices"
      :packages="packages"
      @tab-change="setActiveTab"
    />

    <!-- Booking CTA -->
    <CallToAction
      title="Ready to book your appointment?"
      text="Our team of expert stylists and beauty professionals are ready to help you look and feel your best."
      buttonText="Book Appointment"
      buttonLink="/contact"
    />
  </div>
</template>

<style lang="scss" scoped>
.services-page {
  // Styles specific to the services page wrapper
  // Most styles are now in the individual components
}
</style>
