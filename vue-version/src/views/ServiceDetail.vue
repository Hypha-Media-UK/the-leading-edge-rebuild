<script setup lang="ts">
import { ref, computed } from 'vue';
import PageHeader from '@/components/ui/PageHeader.vue';
import ServiceTabs from '@/components/sections/services/ServiceTabs.vue';
import SubTabsRow from '@/components/sections/services/SubTabsRow.vue';
import ServiceContentSection from '@/components/sections/services/ServiceContentSection.vue';
import CallToAction from '@/components/sections/common/CallToAction.vue';
import type { ServiceItem } from '@/types/services';
import { 
  mainServiceTabs, 
  hairSubTabs,
  getSubTabsByMainTab, 
  getServicesByTab,
  hairstylingGalleryImages,
  cuttingStylingServices,
  treatmentsServices,
  highlightsServices,
  tintsServices,
  occasionsServices,
  bodyWaxingServices,
  facialWaxThreadingServices,
  eyesNailsServices
} from '@/data/services';

const activeTab = ref<string>('allHair');
const activeSubTab = ref<string>('cuttingStyling');

// Get active sub-tabs based on current main tab
const activeSubTabs = computed(() => getSubTabsByMainTab(activeTab.value));

// Function to change main tab
const setActiveTab = (tab: string): void => {
  activeTab.value = tab;
  // Reset sub-tab when changing main tab
  if (tab === 'allHair') activeSubTab.value = 'cuttingStyling';
  else if (tab === 'beautyNails') activeSubTab.value = 'bodyWaxing';
  else if (tab === 'massageAesthetics') activeSubTab.value = 'bodyMassage';
};

// Function to change sub-tab
const setActiveSubTab = (subTab: string): void => {
  activeSubTab.value = subTab;
};

</script>

<template>
  <div class="services-detail-page">
    <!-- Page Header -->
    <PageHeader
      title="Salon Services"
      description="Our award-winning salon is operated by a dynamic, creative and professional team all head hunted for their skills and knowledge"
    />

    <!-- Services Intro -->
    <section class="services-intro">
      <div class="container">
        <div class="intro-content">
          <p>All our stylists are supported with training through the "Wella Academy" where they learn new skills and techniques to keep up to date with all the latest colours and trends. Rest assured our team will give you valuable tips and advice on how to keep your style and hair in tip top condition.</p>
          <p>We continually score 4.91 out of 5 in over 1800 independent reviews carried out by visitors to our salon.</p>
        </div>
      </div>
    </section>

    <!-- Services Tabs -->
    <section class="services-tabs">
      <div class="container">
        <!-- Main Tabs -->
        <ServiceTabs
          :tabs="mainServiceTabs"
          :activeTab="activeTab"
          @tab-change="setActiveTab"
        />
        
        <!-- Sub Tabs -->
        <SubTabsRow
          v-if="activeSubTabs.length > 0"
          :tabs="activeSubTabs"
          :activeTab="activeSubTab"
          @tab-change="setActiveSubTab"
        />
        
        <!-- Hair Services - Cutting & Styling -->
        <ServiceContentSection
          v-if="activeTab === 'allHair' && activeSubTab === 'cuttingStyling'"
          title="Hair Styling & Haircare for Women"
          :services="cuttingStylingServices"
          :images="hairstylingGalleryImages"
        >
          <template #description>
            <p>We currently have a team of 8 fully qualified hairdressers who are all highly experienced and are available to cater for all your needs including colouring, cutting and perms. Supported by the Wella educational team they are well trained and fully up to date with all the latest cuts, colours and trends.</p>
            <p>The Wella name is synonymous with innovative hair care and they are consistently the first to market with new technologies developed to meet the ever-changing needs of the consumer. The Wella brand is one of the most recognisable in the industry and is a guarantee of performance and quality all in keeping with our brand and ethos. We also have an extensive range of styling and haircare products for sale from Wella, Mood, Nioxin, and American Crew.</p>
          </template>
        </ServiceContentSection>
        
        <!-- Hair Services - Treatments -->
        <ServiceContentSection
          v-if="activeTab === 'allHair' && activeSubTab === 'treatments'"
          title="Hair Treatments"
          :services="treatmentsServices"
          description="We provide both Kerastraight and Olaplex treatments as well as a full range of quality products to enhance and maintain the natural beauty of your hair from Wella and Mood."
        >
          <template #additionalContent>
            <div class="treatment-section">
              <h3>Kerastraight</h3>
              <p>Today there is a real demand for shiny, healthy and easy to manage hair. This gave the inspiration behind Fabriq's award-winning range of treatments all available in our salon. As well as leaving the hair feeling healthy, straighter, stronger and possessing a maximum enhanced shine Fabriq will also repair and strengthen the hair simultaneously. We use an advanced range of Protein treatments.</p>
            </div>
            
            <div class="treatment-section">
              <h3>Olaplex</h3>
              <p>Olaplex is known as "The One Ingredient Changes Everything". It was designed by scientists in Materials and Chemistry who both came from the world of cosmetics and science. Olaplex has a single active ingredient which is designed to reconnect the disulphide bonds broken by the process of permanent hair colouring and lightening.</p>
              <p>Here at The Leading Edge we can say hand on heart that once you have tried the Olaplex treatment you will wonder why you have been without it before.</p>
            </div>
          </template>
        </ServiceContentSection>
        
        <!-- Hair Services - Highlights -->
        <ServiceContentSection
          v-if="activeTab === 'allHair' && activeSubTab === 'highlights'"
          title="Highlights"
          description="We provide an extensive range of colouring techniques, to bring you the latest looks and the fashion styles you see in magazines and in the media. All our qualified stylists are trained in the latest techniques and stay at the forefront of hair fashion."
          :services="highlightsServices"
        />
        
        <!-- Hair Services - Tints -->
        <ServiceContentSection
          v-if="activeTab === 'allHair' && activeSubTab === 'tints'"
          title="Tints"
          description="Our expert colorists provide full and partial tinting services using the highest quality products to ensure vibrant, long-lasting color."
          :services="tintsServices"
        />
        
        <!-- Hair Services - Occasions -->
        <ServiceContentSection
          v-if="activeTab === 'allHair' && activeSubTab === 'occasions'"
          title="Special Occasions"
          description="Make your special day unforgettable with our professional styling services for weddings, proms, and other important events."
          :services="occasionsServices"
        />
        
        <!-- Beauty & Nails - Body Waxing -->
        <ServiceContentSection
          v-if="activeTab === 'beautyNails' && activeSubTab === 'bodyWaxing'"
          title="Body Waxing"
          description="Our professional waxing services provide smooth, long-lasting results with minimal discomfort. We use premium quality wax suitable for all skin types."
          :services="bodyWaxingServices"
        />
        
        <!-- Beauty & Nails - Facial Wax & Threading -->
        <ServiceContentSection
          v-if="activeTab === 'beautyNails' && activeSubTab === 'facialWaxThreading'"
          title="Facial Wax & Threading"
          description="Our precision facial hair removal services using both waxing and threading techniques for flawless results."
          :services="facialWaxThreadingServices"
        />
        
        <!-- Beauty & Nails - Eyes & Nails -->
        <ServiceContentSection
          v-if="activeTab === 'beautyNails' && activeSubTab === 'eyesNails'"
          title="Eyes & Nails"
          description="Complete eye enhancement services and professional nail treatments for beautiful, healthy nails."
          :services="eyesNailsServices"
        />
        
        <!-- Massage & Aesthetics Sections (Placeholders) -->
        <ServiceContentSection
          v-if="activeTab === 'massageAesthetics'"
          title="Coming Soon"
          description="We're currently updating our detailed service information for this section. Please check back soon for complete details!"
          :services="[]"
        />
      </div>
    </section>

    <!-- Booking CTA -->
    <CallToAction
      title="Ready to book your appointment?"
      text="Our team of expert stylists and beauty professionals are ready to help you look and feel your best."
      buttonText="Book Appointment"
      buttonLink="/contact"
      backgroundColor="gradient"
    />
  </div>
</template>

<style lang="scss" scoped>
.services-detail-page {
  // Most styles are now in the individual components
  
  .services-intro {
    padding: 3rem 0;
    background-color: white;
    
    .intro-content {
      max-width: 900px;
      margin: 0 auto;
      
      p {
        line-height: 1.8;
        color: custom-lighten($primary-color, 20%);
        margin-bottom: 1.5rem;
      }
    }
  }
  
  .services-tabs {
    padding: 2rem 0 5rem;
    background-color: white;
  }
  
  .treatment-section {
    margin-bottom: 2rem;
    
    h3 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    p {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.8;
      margin-bottom: 1rem;
    }
  }
}
</style>
