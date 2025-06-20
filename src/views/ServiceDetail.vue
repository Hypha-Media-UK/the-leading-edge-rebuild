<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);
const activeTab = ref('allHair');
const activeSubTab = ref('cuttingStyling');

const setActiveTab = (tab) => {
  activeTab.value = tab;
  // Reset sub-tab when changing main tab
  if (tab === 'allHair') activeSubTab.value = 'cuttingStyling';
  else if (tab === 'beautyNails') activeSubTab.value = 'bodyWaxing';
  else if (tab === 'massageAesthetics') activeSubTab.value = 'bodyMassage';
};

const setActiveSubTab = (subTab) => {
  activeSubTab.value = subTab;
};

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="services-detail-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Salon Services
        </h1>
        <div 
          class="separator"
          v-motion
          :initial="{ opacity: 0, scale: 0 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 600 } }"
        ></div>
        <p
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 500, duration: 800 } }"
        >
          Our award-winning salon is operated by a dynamic, creative and professional team all head hunted for their skills and knowledge
        </p>
      </div>
    </section>

    <!-- Services Intro -->
    <section class="services-intro">
      <div class="container">
        <div 
          class="intro-content"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        >
          <p>All our stylists are supported with training through the "Wella Academy" where they learn new skills and techniques to keep up to date with all the latest colours and trends. Rest assured our team will give you valuable tips and advice on how to keep your style and hair in tip top condition.</p>
          <p>We continually score 4.91 out of 5 in over 1800 independent reviews carried out by visitors to our salon.</p>
        </div>
      </div>
    </section>

    <!-- Services Tabs -->
    <section class="services-tabs">
      <div class="container">
        <div 
          class="tabs-container"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        >
          <div 
            class="tab" 
            :class="{ 'active': activeTab === 'allHair' }"
            @click="setActiveTab('allHair')"
          >
            <i class="fas fa-cut"></i>
            <span>All Hair</span>
          </div>
          <div 
            class="tab" 
            :class="{ 'active': activeTab === 'beautyNails' }"
            @click="setActiveTab('beautyNails')"
          >
            <i class="fas fa-spa"></i>
            <span>Beauty & Nails</span>
          </div>
          <div 
            class="tab" 
            :class="{ 'active': activeTab === 'massageAesthetics' }"
            @click="setActiveTab('massageAesthetics')"
          >
            <i class="fas fa-hand-sparkles"></i>
            <span>Massage & Aesthetics</span>
          </div>
        </div>
        
        <!-- Sub Tabs - All Hair -->
        <div class="sub-tabs-container" v-if="activeTab === 'allHair'">
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'cuttingStyling' }"
            @click="setActiveSubTab('cuttingStyling')"
          >
            <span>Cutting & Styling</span>
          </div>
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'treatments' }"
            @click="setActiveSubTab('treatments')"
          >
            <span>Treatments</span>
          </div>
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'highlights' }"
            @click="setActiveSubTab('highlights')"
          >
            <span>Highlights</span>
          </div>
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'tints' }"
            @click="setActiveSubTab('tints')"
          >
            <span>Tints</span>
          </div>
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'occasions' }"
            @click="setActiveSubTab('occasions')"
          >
            <span>Occasions</span>
          </div>
        </div>
        
        <!-- Sub Tabs - Beauty & Nails -->
        <div class="sub-tabs-container" v-if="activeTab === 'beautyNails'">
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'bodyWaxing' }"
            @click="setActiveSubTab('bodyWaxing')"
          >
            <span>Body Waxing</span>
          </div>
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'facialWaxThreading' }"
            @click="setActiveSubTab('facialWaxThreading')"
          >
            <span>Facial Wax & Threading</span>
          </div>
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'eyesNails' }"
            @click="setActiveSubTab('eyesNails')"
          >
            <span>Eyes & Nails</span>
          </div>
        </div>
        
        <!-- Sub Tabs - Massage & Aesthetics -->
        <div class="sub-tabs-container" v-if="activeTab === 'massageAesthetics'">
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'bodyMassage' }"
            @click="setActiveSubTab('bodyMassage')"
          >
            <span>Body Massage</span>
          </div>
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'facialMassage' }"
            @click="setActiveSubTab('facialMassage')"
          >
            <span>Facial Massage</span>
          </div>
          <div
            class="sub-tab"
            :class="{ 'active': activeSubTab === 'aestheticTreatments' }"
            @click="setActiveSubTab('aestheticTreatments')"
          >
            <span>Treatments</span>
          </div>
        </div>
        
        <!-- Hair Services - Cutting & Styling -->
        <div class="services-content" v-if="activeTab === 'allHair' && activeSubTab === 'cuttingStyling'">
          <div class="services-intro">
            <h2>Hair Styling & Haircare for Women</h2>
            <p>We currently have a team of 8 fully qualified hairdressers who are all highly experienced and are available to cater for all your needs including colouring, cutting and perms. Supported by the Wella educational team they are well trained and fully up to date with all the latest cuts, colours and trends.</p>
            <p>The Wella name is synonymous with innovative hair care and they are consistently the first to market with new technologies developed to meet the ever-changing needs of the consumer. The Wella brand is one of the most recognisable in the industry and is a guarantee of performance and quality all in keeping with our brand and ethos. We also have an extensive range of styling and haircare products for sale from Wella, Mood, Nioxin, and American Crew.</p>
          </div>
          
          <div class="services-gallery">
            <div class="gallery-item">
              <img src="/images/downloaded/leadingedge0148.jpg" alt="Hair Styling Example 1">
            </div>
            <div class="gallery-item">
              <img src="/images/downloaded/leadingedge0147.jpg" alt="Hair Styling Example 2">
            </div>
            <div class="gallery-item">
              <img src="/images/downloaded/leadingedge0111.jpg" alt="Hair Styling Example 3">
            </div>
            <div class="gallery-item">
              <img src="/images/downloaded/leadingedge0112.jpg" alt="Hair Styling Example 4">
            </div>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>SHAMPOO CUT & BLOW DRY</h3>
              </div>
              <div class="service-price">£30.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>RE-STYLE CUT & FINISH</h3>
              </div>
              <div class="service-price">£36.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>LONG HAIR CUT & BLOW DRY</h3>
              </div>
              <div class="service-price">£36.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
            >
              <div class="service-info">
                <h3>SHAMPOO & BLOW DRY</h3>
              </div>
              <div class="service-price">£20.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
            >
              <div class="service-info">
                <h3>LONG HAIR BLOW DRY</h3>
              </div>
              <div class="service-price">£24.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 700, duration: 600 } }"
            >
              <div class="service-info">
                <h3>FRINGE TRIM</h3>
              </div>
              <div class="service-price">£4.00</div>
            </div>
          </div>
        </div>
        
        <!-- Hair Services - Treatments -->
        <div class="services-content" v-if="activeTab === 'allHair' && activeSubTab === 'treatments'">
          <div class="services-intro">
            <h2>Hair Treatments</h2>
            <p>We provide both Kerastraight and Olaplex treatments as well as a full range of quality products to enhance and maintain the natural beauty of your hair from Wella and Mood.</p>
          </div>
          
          <div class="treatment-section">
            <h3>Kerastraight</h3>
            <p>Today there is a real demand for shiny, healthy and easy to manage hair. This gave the inspiration behind Fabriq's award-winning range of treatments all available in our salon. As well as leaving the hair feeling healthy, straighter, stronger and possessing a maximum enhanced shine Fabriq will also repair and strengthen the hair simultaneously. We use an advanced range of Protein treatments.</p>
          </div>
          
          <div class="treatment-section">
            <h3>Olaplex</h3>
            <p>Olaplex is known as "The One Ingredient Changes Everything". It was designed by scientists in Materials and Chemistry who both came from the world of cosmetics and science. Olaplex has a single active ingredient which is designed to reconnect the disulphide bonds broken by the process of permanent hair colouring and lightening.</p>
            <p>Here at The Leading Edge we can say hand on heart that once you have tried the Olaplex treatment you will wonder why you have been without it before.</p>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>MILK_SHAKE INTEGRITY</h3>
              </div>
              <div class="service-price">£15.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>MILK_SHAKE PAPAYA</h3>
              </div>
              <div class="service-price">£9.50</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>MILK_SHAKE COCOA</h3>
              </div>
              <div class="service-price">£9.50</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
            >
              <div class="service-info">
                <h3>WELLA INVIGO MASK</h3>
              </div>
              <div class="service-price">£10.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
            >
              <div class="service-info">
                <h3>OLAPLEX FROM</h3>
              </div>
              <div class="service-price">£12.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 700, duration: 600 } }"
            >
              <div class="service-info">
                <h3>FABRIQ INC SHAMP / COND</h3>
              </div>
              <div class="service-price">£169.00</div>
            </div>
          </div>
        </div>
        
        <!-- Hair Services - Highlights -->
        <div class="services-content" v-if="activeTab === 'allHair' && activeSubTab === 'highlights'">
          <div class="services-intro">
            <h2>Highlights</h2>
            <p>We provide an extensive range of colouring techniques, to bring you the latest looks and the fashion styles you see in magazines and in the media. All our qualified stylists are trained in the latest techniques and stay at the forefront of hair fashion.</p>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>FULL HEAD HIGHLIGHTS</h3>
              </div>
              <div class="service-price">from £65.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>HALF HEAD HIGHLIGHTS</h3>
              </div>
              <div class="service-price">from £55.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>T-SECTION HIGHLIGHTS</h3>
              </div>
              <div class="service-price">from £45.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
            >
              <div class="service-info">
                <h3>FULL HEAD TINT</h3>
              </div>
              <div class="service-price">from £50.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
            >
              <div class="service-info">
                <h3>BALAYAGE</h3>
              </div>
              <div class="service-price">from £70.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 700, duration: 600 } }"
            >
              <div class="service-info">
                <h3>COLOUR CORRECTION</h3>
              </div>
              <div class="service-price">Price on consultation</div>
            </div>
          </div>
        </div>
        
        <!-- Hair Services - Tints -->
        <div class="services-content" v-if="activeTab === 'allHair' && activeSubTab === 'tints'">
          <div class="services-intro">
            <h2>Tints</h2>
            <p>Our expert colorists provide full and partial tinting services using the highest quality products to ensure vibrant, long-lasting color.</p>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>FULL HEAD TINT</h3>
              </div>
              <div class="service-price">from £50.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>ROOT TINT</h3>
              </div>
              <div class="service-price">from £40.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>TINT & HIGHLIGHTS</h3>
              </div>
              <div class="service-price">from £75.00</div>
            </div>
          </div>
        </div>

        <!-- Hair Services - Occasions -->
        <div class="services-content" v-if="activeTab === 'allHair' && activeSubTab === 'occasions'">
          <div class="services-intro">
            <h2>Special Occasions</h2>
            <p>Make your special day unforgettable with our professional styling services for weddings, proms, and other important events.</p>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>BRIDAL HAIR</h3>
                <p>Complete bridal styling including consultation and trial.</p>
              </div>
              <div class="service-price">from £90.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>SPECIAL OCCASION STYLING</h3>
                <p>Styling for proms, parties, and special events.</p>
              </div>
              <div class="service-price">from £50.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>BRIDAL PARTY PACKAGE</h3>
                <p>Styling for bride and bridesmaids (price per person).</p>
              </div>
              <div class="service-price">from £45.00</div>
            </div>
          </div>
        </div>
        
        <!-- Beauty & Nails - Body Waxing -->
        <div class="services-content" v-if="activeTab === 'beautyNails' && activeSubTab === 'bodyWaxing'">
          <div class="services-intro">
            <h2>Body Waxing</h2>
            <p>Our professional waxing services provide smooth, long-lasting results with minimal discomfort. We use premium quality wax suitable for all skin types.</p>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>HALF LEG WAX</h3>
              </div>
              <div class="service-price">£22.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>FULL LEG WAX</h3>
              </div>
              <div class="service-price">£30.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>BIKINI WAX</h3>
              </div>
              <div class="service-price">£15.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
            >
              <div class="service-info">
                <h3>UNDERARM WAX</h3>
              </div>
              <div class="service-price">£12.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
            >
              <div class="service-info">
                <h3>FULL ARM WAX</h3>
              </div>
              <div class="service-price">£25.00</div>
            </div>
          </div>
        </div>
        
        <!-- Beauty & Nails - Facial Wax & Threading -->
        <div class="services-content" v-if="activeTab === 'beautyNails' && activeSubTab === 'facialWaxThreading'">
          <div class="services-intro">
            <h2>Facial Wax & Threading</h2>
            <p>Our precision facial hair removal services using both waxing and threading techniques for flawless results.</p>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>EYEBROW WAX</h3>
              </div>
              <div class="service-price">£10.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>EYEBROW THREADING</h3>
              </div>
              <div class="service-price">£12.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>LIP WAX</h3>
              </div>
              <div class="service-price">£8.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
            >
              <div class="service-info">
                <h3>CHIN WAX</h3>
              </div>
              <div class="service-price">£8.00</div>
            </div>
          </div>
        </div>
        
        <!-- Beauty & Nails - Eyes & Nails -->
        <div class="services-content" v-if="activeTab === 'beautyNails' && activeSubTab === 'eyesNails'">
          <div class="services-intro">
            <h2>Eyes & Nails</h2>
            <p>Complete eye enhancement services and professional nail treatments for beautiful, healthy nails.</p>
          </div>
          
          <div class="services-list">
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
            >
              <div class="service-info">
                <h3>EYELASH TINT</h3>
              </div>
              <div class="service-price">£15.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 600 } }"
            >
              <div class="service-info">
                <h3>EYEBROW TINT</h3>
              </div>
              <div class="service-price">£10.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 600 } }"
            >
              <div class="service-info">
                <h3>MANICURE</h3>
              </div>
              <div class="service-price">£25.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 600 } }"
            >
              <div class="service-info">
                <h3>PEDICURE</h3>
              </div>
              <div class="service-price">£30.00</div>
            </div>
            
            <div 
              class="service-item"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 600 } }"
            >
              <div class="service-info">
                <h3>GEL MANICURE</h3>
              </div>
              <div class="service-price">£35.00</div>
            </div>
          </div>
        </div>
        
        <!-- Massage & Aesthetics Sections (Placeholders) -->
        <div class="services-content" v-if="activeTab === 'massageAesthetics'">
          <div class="services-intro">
            <h2>Coming Soon</h2>
            <p>We're currently updating our detailed service information for this section. Please check back soon for complete details!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="booking-cta">
      <div class="container">
        <div 
          class="cta-content"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        >
          <h2>Ready to book your appointment?</h2>
          <p>Our team of expert stylists and beauty professionals are ready to help you look and feel your best.</p>
          <router-link to="/contact" class="btn primary">Book Appointment</router-link>
        </div>
      </div>
    </section>
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

// Services Intro
.services-intro {
  padding: 3rem 0;
  background-color: white;
  
  .intro-content {
    max-width: 900px;
    margin: 0 auto;
    
    p {
      line-height: 1.8;
      color: lighten($primary-color, 20%);
      margin-bottom: 1.5rem;
    }
  }
}

// Services Tabs
.services-tabs {
  padding: 2rem 0 5rem;
  background-color: white;
  
  .tabs-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba($primary-color, 0.1);
    
    .tab {
      flex: 1;
      min-width: 120px;
      padding: 1.5rem 1rem;
      text-align: center;
      background-color: $light-color;
      color: $primary-color;
      cursor: pointer;
      transition: all 0.3s ease;
      border-right: 1px solid rgba($primary-color, 0.1);
      
      &:last-child {
        border-right: none;
      }
      
      i {
        display: block;
        font-size: 1.8rem;
        margin-bottom: 0.8rem;
      }
      
      span {
        font-weight: 600;
        font-size: 1rem;
      }
      
      &:hover {
        background-color: darken($light-color, 5%);
      }
      
      &.active {
        background-color: $accent-color;
        color: white;
      }
      
      @media (max-width: 768px) {
        min-width: 120px;
        padding: 1.2rem 0.8rem;
        
        i {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        span {
          font-size: 0.9rem;
        }
      }
      
      @media (max-width: 576px) {
        flex: 1 0 50%;
        border-bottom: 1px solid rgba($primary-color, 0.1);
        
        &:nth-child(even) {
          border-right: none;
        }
        
        &:nth-child(3), &:nth-child(4) {
          border-bottom: none;
        }
      }
    }
  }
  
  .sub-tabs-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    gap: 0.8rem;
    
    .sub-tab {
      padding: 0.8rem 1.2rem;
      background-color: white;
      border: 1px solid $light-color;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      
      span {
        font-weight: 500;
        font-size: 0.95rem;
        color: $primary-color;
      }
      
      &:hover {
        border-color: $accent-color;
        transform: translateY(-2px);
      }
      
      &.active {
        background-color: $accent-color;
        border-color: $accent-color;
        
        span {
          color: white;
        }
      }
      
      @media (max-width: 576px) {
        width: 100%;
        text-align: center;
        border-radius: 4px;
      }
    }
  }
}

// Services Content
.services-content {
  .services-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    padding: 0;
    
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
      color: $primary-color;
    }
    
    p {
      color: lighten($primary-color, 20%);
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  }
  
  .services-gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 3rem;
    
    .gallery-item {
      flex: 0 0 calc(25% - 1.5rem);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba($primary-color, 0.1);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba($primary-color, 0.15);
      }
      
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        display: block;
      }
      
      @media (max-width: 991px) {
        flex: 0 0 calc(50% - 1.5rem);
      }
      
      @media (max-width: 576px) {
        flex: 0 0 100%;
      }
    }
  }
  
  .treatment-section {
    max-width: 900px;
    margin: 0 auto 2rem;
    
    h3 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    p {
      color: lighten($primary-color, 20%);
      line-height: 1.8;
      margin-bottom: 1rem;
    }
  }
  
  .services-list {
    max-width: 900px;
    margin: 0 auto;
    
    .service-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      background-color: $light-color;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba($primary-color, 0.05);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba($primary-color, 0.1);
      }
      
      .service-info {
        flex: 1;
        
        h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: $primary-color;
        }
        
        p {
          color: lighten($primary-color, 20%);
          margin: 0;
        }
      }
      
      .service-price {
        font-size: 1.2rem;
        font-weight: 700;
        color: $accent-color;
        margin-left: 1.5rem;
        white-space: nowrap;
      }
      
      @media (max-width: 576px) {
        flex-direction: column;
        text-align: center;
        
        .service-info {
          margin-bottom: 1rem;
        }
        
        .service-price {
          margin-left: 0;
        }
      }
    }
  }
}

// Booking CTA
.booking-cta {
  background-image: linear-gradient(to right, rgba($primary-color, 0.9), rgba($accent-color, 0.9)), url('/images/downloaded/wedding-bliss.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 5rem 0;
  
  .cta-content {
    max-width: 700px;
    margin: 0 auto;
    
    h2 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    p {
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }
  }
  
  .btn.primary {
    background-color: white;
    color: $primary-color;
    border-color: white;
    
    &:hover {
      background-color: transparent;
      color: white;
      border-color: white;
    }
  }
}

// Button Styles
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &.primary {
    background-color: $accent-color;
    color: white;
    border: 2px solid $accent-color;
    
    &:hover {
      background-color: darken($accent-color, 10%);
      border-color: darken($accent-color, 10%);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
