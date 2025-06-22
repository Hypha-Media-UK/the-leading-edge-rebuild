<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import PageHeader from '@/components/ui/PageHeader.vue';
import TeamGrid from '@/components/sections/team/TeamGrid.vue';
import TeamMemberModal from '@/components/ui/TeamMemberModal.vue';
import TeamValuesSection from '@/components/sections/team/TeamValuesSection.vue';
import CallToAction from '@/components/sections/common/CallToAction.vue';
import type { TeamMember, TeamValue } from '@/types/team';

const isLoaded = ref<boolean>(false);
const selectedTeamMember = ref<number | null>(null);

const showTeamMemberDetails = (id: number): void => {
  selectedTeamMember.value = id;
  // Prevent body scrolling while modal is open
  document.body.style.overflow = 'hidden';
};

const closeTeamMemberDetails = (): void => {
  selectedTeamMember.value = null;
  // Re-enable body scrolling
  document.body.style.overflow = '';
};

// Extended TeamMember type for this specific view
interface ExtendedTeamMember extends TeamMember {
  specialties?: string[];
  instagram?: string;
}

// Team members data
const teamMembers: ExtendedTeamMember[] = [
  {
    id: 10,
    name: 'Alan',
    role: 'Merketing Director',
    bio: 'Alex brings creative vision and exceptional technical skill to our makeup services. With a background in fashion and editorial work, Alex specializes in creating personalized looks that enhance each client\'s natural beauty while reflecting their individual style and personality.',
    specialties: ['Bridal Makeup', 'Editorial Looks', 'Special Effects'],
    image: '/images/new/staff/staff10.webp',
    instagram: '@alexjohnsonmakeup'
  },
  {
    id: 4,
    name: 'Carolyn',
    role: 'Finance Director',
    bio: 'Carolyn\'s passion for hair began at a young age, and he\'s spent the last decade perfecting his craft. His work has been featured in leading fashion magazines, and he brings his editorial expertise to every client\'s experience.',
    specialties: ['Editorial Styling', 'Hair Extensions', 'Curly Hair Specialist'],
    image: '/images/new/staff/staff4.webp',
    instagram: '@oliverbaker'
  },
  {
    id: 1,
    name: 'Abigail',
    role: 'Stylist',
    bio: 'With over 15 years in the industry, Abigail founded The Leading Edge with a vision to create a salon that combines luxury with exceptional skill. Her expertise in hair color transformations and cutting-edge styling techniques has earned her numerous industry awards.',
    specialties: ['Hair Color Transformation', 'Precision Cutting', 'Bridal Styling'],
    image: '/images/new/staff/staff1.webp',
    instagram: '@emmathompson'
  },
  {
    id: 2,
    name: 'Nina',
    role: 'Nail Technician',
    bio: 'Nina brings a wealth of international experience to our team, having trained in Paris, New York, and London. His innovative approach to hair styling and dedication to understanding each client\'s unique needs has made him a favorite among our regulars.',
    specialties: ['Avant-garde Styling', 'Men\'s Grooming', 'Texture Specialist'],
    image: '/images/new/staff/staff2.webp',
    instagram: '@jameswilson'
  },
  {
    id: 3,
    name: 'Natasha',
    role: 'Gel Nail Technician',
    bio: 'Sophia is our in-house color expert, known for her ability to create the perfect shade for every skin tone. Her background in chemistry gives her a unique understanding of hair color science, ensuring beautiful, long-lasting results.',
    specialties: ['Balayage', 'Color Correction', 'Fashion Colors'],
    image: '/images/new/staff/staff3.webp',
    instagram: '@sophiachen'
  },
  {
    id: 5,
    name: 'Lauren',
    role: 'Stylist',
    bio: 'Lauren is our senior beauty therapist with extensive training in skincare and holistic treatments. Her nurturing approach and technical expertise ensure that every client leaves feeling relaxed and rejuvenated.',
    specialties: ['Facial Treatments', 'Brow Artistry', 'Lash Extensions'],
    image: '/images/new/staff/staff5.webp',
    instagram: '@zoemartinez'
  },
  {
    id: 6,
    name: 'Jayne',
    role: 'Stylist',
    bio: 'Jayne\'s artistic background is evident in his detailed nail art and precise technique. His passion for nail health and beautiful designs has earned him a loyal client base and recognition in the industry.',
    specialties: ['Nail Art', 'Gel Extensions', 'Hand Treatments'],
    image: '/images/new/staff/staff6.webp',
    instagram: '@nathanpatel'
  },
  {
    id: 7,
    name: 'Hayley',
    role: 'Stylist',
    bio: 'Hayley specializes in advanced aesthetic treatments, combining cutting-edge technology with traditional techniques. Her extensive knowledge of skin biology and aging processes allows her to create customized treatment plans for each client.',
    specialties: ['Micro-needling', 'Chemical Peels', 'Skin Rejuvenation'],
    image: '/images/new/staff/staff7.webp',
    instagram: '@oliviareynolds'
  },
  {
    id: 8,
    name: 'Gary',
    role: 'Stylist',
    bio: 'Gary brings a wealth of international experience to our team, having trained in Paris, New York, and London. His innovative approach to hair styling and dedication to understanding each client\'s unique needs has made him a favorite among our regulars.',
    specialties: ['Deep Tissue Massage', 'Hot Stone Therapy', 'Sports Recovery'],
    image: '/images/new/staff/staff8.webp',
    instagram: '@michaelchang'
  },
  {
    id: 9,
    name: 'Emily',
    role: 'Stylist',
    bio: 'Emily brings a wealth of international experience to our team, having trained in Paris, New York, and London. His innovative approach to hair styling and dedication to understanding each client\'s unique needs has made him a favorite among our regulars.',
    specialties: ['Modern Cuts', 'Blow Dry Styling', 'Natural Highlights'],
    image: '/images/new/staff/staff9.webp',
    instagram: '@isabellamoore'
  }
];

// Team values data
const teamValues: TeamValue[] = [
  {
    title: "Continuous Education",
    description: "Our team regularly attends workshops, training sessions, and industry events to stay at the forefront of the latest techniques and trends.",
    icon: "fas fa-graduation-cap"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and often collaborate on client services to ensure the best possible results for every individual.",
    icon: "fas fa-handshake"
  },
  {
    title: "Passion for Service",
    description: "Our team members are selected not just for their technical skills, but for their genuine passion for making clients feel beautiful and confident.",
    icon: "fas fa-heart"
  }
];

// Get the selected team member object
const selectedTeamMemberData = computed<ExtendedTeamMember | null>(() => {
  if (!selectedTeamMember.value) return null;
  return teamMembers.find(m => m.id === selectedTeamMember.value) || null;
});

onMounted((): void => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="team-page">
    <!-- Page Header -->
    <PageHeader
      title="Meet Our Team"
      description="The heart and soul of The Leading Edge – our talented professionals dedicated to your beauty journey"
    />

    <!-- Team Grid -->
    <TeamGrid
      :teamMembers="teamMembers"
      @select-member="showTeamMemberDetails"
    />

    <!-- Team Member Modal -->
    <teleport to="#modal-portal">
      <TeamMemberModal
        :member="selectedTeamMemberData"
        @close="closeTeamMemberDetails"
        v-if="selectedTeamMember"
      />
    </teleport>

    <!-- Team Values Section -->
    <TeamValuesSection
      title="Our Team Values"
      :values="teamValues"
    />

    <!-- Join Our Team CTA -->
    <CallToAction
      title="Interested in Joining Our Team?"
      text="We're always looking for talented and passionate professionals to join The Leading Edge family. If you're dedicated to excellence and love what you do, we'd love to hear from you."
      buttonText="View Careers"
      buttonLink="/careers"
      backgroundColor="#486581"
    />
  </div>
</template>

<style lang="scss" scoped>
.team-page {
  // Styles specific to the team page wrapper
  // Most styles are now in the individual components
}
</style>
