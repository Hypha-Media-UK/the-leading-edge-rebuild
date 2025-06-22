<script setup>
import { ref, computed, onMounted } from 'vue';
import PageHeader from '@/components/ui/PageHeader.vue';
import NewsGrid from '@/components/sections/news/NewsGrid.vue';
import FeaturedNewsItem from '@/components/sections/news/FeaturedNewsItem.vue';
import NewsDetailView from '@/components/sections/news/NewsDetailView.vue';
import NewsletterSignup from '@/components/sections/news/NewsletterSignup.vue';

const isLoaded = ref(false);

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Summer Hair Trends 2025",
    date: "June 15, 2025",
    image: "/images/new/news/news1.webp",
    excerpt: "Discover the hottest hair trends for Summer 2025. From beachy waves to bold colors, our stylists share their expert predictions.",
    content: `
      <p>As the summer season approaches, it's time to refresh your look with the latest hair trends that are making waves in the beauty industry. Our expert stylists at The Leading Edge have compiled their top predictions for the hottest styles of Summer 2025.</p>
      
      <h4>Textured Bob Cuts</h4>
      <p>The classic bob is getting a modern update with lots of texture and movement. This versatile cut works well for all hair types and can be styled in multiple ways for different occasions.</p>
      
      <h4>Natural Curls and Waves</h4>
      <p>Embracing your natural texture is bigger than ever. We're seeing a move away from the perfectly styled look towards more relaxed, natural curls and waves that celebrate your hair's unique characteristics.</p>
      
      <h4>Bold Color Statements</h4>
      <p>Vibrant colors are making a comeback this season. Think pastel pinks, electric blues, and even multi-colored highlights that add dimension and personality to your style.</p>
      
      <p>Book your consultation today to find the perfect summer look that suits your style and personality!</p>
    `,
    category: 'Hair',
    author: 'Emma Thompson'
  },
  {
    id: 2,
    title: "New Organic Skincare Line Now Available",
    date: "June 5, 2025",
    image: "/images/new/news/news2.webp",
    excerpt: "We're excited to announce our new range of organic, cruelty-free skincare products, now available at The Leading Edge.",
    content: `
      <p>The Leading Edge is proud to introduce our new exclusive line of organic skincare products. Crafted with natural ingredients and formulated without harsh chemicals, these products are designed to nourish and rejuvenate your skin.</p>
      
      <h4>Sustainable and Ethical</h4>
      <p>Our new skincare line is not only effective but also environmentally conscious. All products are:</p>
      <ul>
        <li>100% organic certified ingredients</li>
        <li>Cruelty-free and vegan</li>
        <li>Packaged in recyclable and biodegradable materials</li>
        <li>Manufactured using sustainable practices</li>
      </ul>
      
      <h4>Complete Range for All Skin Types</h4>
      <p>The collection includes cleansers, toners, moisturizers, serums, and masks suitable for all skin types. Whether you have dry, oily, combination, or sensitive skin, we have products specifically formulated to address your needs.</p>
      
      <p>Visit our salon to receive a complimentary skincare consultation with one of our beauty specialists who can recommend the perfect products for your unique skin type and concerns.</p>
    `,
    category: 'Beauty',
    author: 'Sophia Chen'
  },
  {
    id: 3,
    title: "Meet Our New Senior Stylist, Alex",
    date: "May 20, 2025",
    image: "/images/new/news/news3.webp",
    excerpt: "We're delighted to welcome Alex Roberts to our team of talented professionals at The Leading Edge.",
    content: `
      <p>The Leading Edge family is growing! We're thrilled to introduce our newest senior stylist, Alex Roberts, who brings over 12 years of industry experience to our salon.</p>
      
      <h4>Expert in Color and Texture</h4>
      <p>Alex specializes in creative color techniques and texture management, with particular expertise in balayage, vivid colors, and curly hair styling. Their work has been featured in several fashion magazines and they have styled hair for multiple runway shows.</p>
      
      <h4>Training and Certification</h4>
      <p>With training from top academies in London and New York, Alex holds advanced certifications in color correction, extension application, and cutting-edge styling techniques. They regularly attend international hair shows to stay at the forefront of emerging trends.</p>
      
      <h4>Book with Alex</h4>
      <p>Alex is now accepting new clients and is excited to help you achieve your hair goals. For the month of June, enjoy a 15% discount on your first appointment with Alex when you mention this news article.</p>
      
      <p>Contact us today to schedule your consultation!</p>
    `,
    category: 'Team',
    author: 'James Wilson'
  },
  {
    id: 4,
    title: "Bridal Package Special Offer",
    date: "May 10, 2025",
    image: "/images/new/news/news4.webp",
    excerpt: "Planning your wedding? Take advantage of our special bridal package that covers all your beauty needs for the big day.",
    content: `
      <p>Your wedding day is one of the most important days of your life, and looking your absolute best is essential. The Leading Edge is offering a comprehensive bridal beauty package to ensure you feel confident and radiant on your special day.</p>
      
      <h4>Complete Bridal Package Includes:</h4>
      <ul>
        <li>Pre-wedding consultation to plan your perfect look</li>
        <li>Trial hair styling and makeup application</li>
        <li>Wedding day hair styling</li>
        <li>Professional makeup application using premium products</li>
        <li>Manicure and pedicure with long-lasting gel polish</li>
        <li>Relaxing facial treatment one week before the wedding</li>
        <li>Complimentary glass of champagne on the wedding day</li>
      </ul>
      
      <h4>For the Wedding Party</h4>
      <p>We also offer packages for bridesmaids, mother of the bride/groom, and other members of the wedding party. Book services for 4 or more people and receive a 10% discount on the total.</p>
      
      <p>Limited availability for Summer 2025 weddings - contact us today to secure your date!</p>
    `,
    category: 'Special Offers',
    author: 'Emily Parker'
  },
  {
    id: 5,
    title: "Salon Renovation Complete",
    date: "April 25, 2025",
    image: "/images/new/news/news5.webp",
    excerpt: "We've upgraded our salon space to enhance your experience. Come visit us to enjoy our new facilities and relaxation areas.",
    content: `
      <p>After months of planning and several weeks of renovation, we're excited to announce that our salon makeover is finally complete! We've transformed our space to create an even more luxurious and comfortable environment for our valued clients.</p>
      
      <h4>New Features Include:</h4>
      <ul>
        <li>Expanded treatment rooms for enhanced privacy during services</li>
        <li>State-of-the-art styling stations with ergonomic chairs</li>
        <li>Dedicated relaxation area with complimentary refreshments</li>
        <li>Improved lighting for more accurate color services</li>
        <li>Enhanced sound system with calming ambient music</li>
        <li>Updated retail area showcasing our premium product ranges</li>
      </ul>
      
      <h4>Sustainability Improvements</h4>
      <p>Our renovation also focused on making our salon more environmentally friendly. We've installed energy-efficient lighting, water-saving faucets, and chosen eco-friendly materials throughout the space.</p>
      
      <p>We'd like to thank our loyal clients for their patience during the renovation process. We invite you to visit and experience our beautiful new salon environment!</p>
    `,
    category: 'Salon',
    author: 'Abigail Johnson'
  }
];

// News categories
const categories = [
  { slug: 'hair', name: 'Hair' },
  { slug: 'beauty', name: 'Beauty' },
  { slug: 'team', name: 'Team' },
  { slug: 'special-offers', name: 'Special Offers' },
  { slug: 'salon', name: 'Salon' }
];

// State variables
const activeCategory = ref('all');
const selectedArticle = ref(null);
const showDetailView = ref(false);

// Featured news is the most recent one
const featuredNews = newsItems[0];

// Filtered news items (excluding the featured one)
const filteredNewsItems = computed(() => {
  const nonFeaturedItems = newsItems.filter(item => item.id !== featuredNews.id);
  
  if (activeCategory.value === 'all') {
    return nonFeaturedItems;
  }
  
  return nonFeaturedItems.filter(item => {
    return item.category && item.category.toLowerCase() === activeCategory.value.replace('-', ' ');
  });
});

// Related articles for the detail view
const relatedArticles = computed(() => {
  if (!selectedArticle.value) return [];
  
  // Get articles from the same category or a few random ones
  return newsItems
    .filter(item => item.id !== selectedArticle.value.id)
    .filter(item => {
      if (selectedArticle.value.category) {
        return item.category === selectedArticle.value.category;
      }
      return true;
    })
    .slice(0, 3); // Limit to 3 related articles
});

// Handler functions
const handleCategoryChange = (category) => {
  activeCategory.value = category;
};

const viewArticleDetail = (article) => {
  selectedArticle.value = article;
  showDetailView.value = true;
  window.scrollTo(0, 0);
};

const backToNewsList = () => {
  showDetailView.value = false;
  selectedArticle.value = null;
};

const handleNewsletterSignup = (email) => {
  console.log('Newsletter signup:', email);
  // In a real application, you would send this to your backend
};

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="news-page">
    <!-- Page Header -->
    <PageHeader
      title="Latest News"
      description="Stay updated with the latest happenings at The Leading Edge"
    />

    <section class="news-content">
      <div class="container">
        <!-- News Detail View -->
        <NewsDetailView
          v-if="showDetailView && selectedArticle"
          :article="selectedArticle"
          :relatedArticles="relatedArticles"
          @back="backToNewsList"
          @view-article="viewArticleDetail"
        />
        
        <!-- News List View -->
        <div v-else class="news-list-view">
          <!-- Featured News -->
          <FeaturedNewsItem
            :article="featuredNews"
            @click="viewArticleDetail"
          />
          
          <!-- News Grid with filters -->
          <NewsGrid
            :articles="filteredNewsItems"
            :categories="categories"
            :activeCategory="activeCategory"
            @filter-change="handleCategoryChange"
            @view-article="viewArticleDetail"
            :pagination="false"
          />
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <NewsletterSignup
      title="Subscribe to Our Newsletter"
      description="Stay updated with the latest news, beauty tips, and exclusive offers straight to your inbox."
      :darkMode="true"
      @subscribe="handleNewsletterSignup"
    />
  </div>
</template>

<style lang="scss" scoped>
.news-page {
  // Styles specific to the news page wrapper
  // Most styles are now in the individual components
  
  .news-content {
    padding: 5rem 0;
    background-color: $light-color;
  }
}
</style>
