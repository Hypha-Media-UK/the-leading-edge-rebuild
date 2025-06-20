<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Summer Hair Trends 2025",
    date: "June 15, 2025",
    image: "/images/downloaded/APR-2021-01.jpg",
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
    `
  },
  {
    id: 2,
    title: "New Organic Skincare Line Now Available",
    date: "June 5, 2025",
    image: "/images/downloaded/APR-2021-22.jpg",
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
    `
  },
  {
    id: 3,
    title: "Meet Our New Senior Stylist, Alex",
    date: "May 20, 2025",
    image: "/images/downloaded/BarrieAitken.jpg",
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
    `
  },
  {
    id: 4,
    title: "Bridal Package Special Offer",
    date: "May 10, 2025",
    image: "/images/downloaded/CH1_9468.jpg",
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
    `
  },
  {
    id: 5,
    title: "Salon Renovation Complete",
    date: "April 25, 2025",
    image: "/images/downloaded/APR-2021-14.jpg",
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
    `
  }
];

// Featured news is the most recent one
const featuredNews = newsItems[0];

// Selected news item for detailed view
const selectedNews = ref(null);
const showDetailView = ref(false);

// Function to view a news item in detail
const viewNewsDetail = (newsItem) => {
  selectedNews.value = newsItem;
  showDetailView.value = true;
  window.scrollTo(0, 0);
};

// Function to go back to the news list
const backToNewsList = () => {
  showDetailView.value = false;
  selectedNews.value = null;
};

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
  <div class="news-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          Latest News
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
          Stay updated with the latest happenings at The Leading Edge
        </p>
      </div>
    </section>

    <section class="news-content">
      <div class="container">
        <!-- News Detail View -->
        <div v-if="showDetailView" class="news-detail">
          <div class="back-button">
            <button @click="backToNewsList" class="btn secondary">
              <i class="fas fa-arrow-left"></i> Back to News
            </button>
          </div>
          
          <div class="news-detail-content">
            <h2>{{ selectedNews.title }}</h2>
            <div class="news-meta">
              <span class="date"><i class="far fa-calendar-alt"></i> {{ selectedNews.date }}</span>
            </div>
            
            <div class="news-image">
              <img :src="selectedNews.image" :alt="selectedNews.title">
            </div>
            
            <div class="news-text" v-html="selectedNews.content"></div>
            
            <div class="share-links">
              <p>Share this article:</p>
              <div class="social-share">
                <a href="#" aria-label="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Share on Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="Share on Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="Share via Email"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- News List View -->
        <div v-else class="news-list-view">
          <!-- Featured News -->
          <div 
            class="featured-news"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            @click="viewNewsDetail(featuredNews)"
          >
            <div class="featured-image">
              <img :src="featuredNews.image" :alt="featuredNews.title">
              <div class="featured-overlay">
                <span class="featured-tag">Featured</span>
              </div>
            </div>
            <div class="featured-content">
              <div class="news-meta">
                <span class="date"><i class="far fa-calendar-alt"></i> {{ featuredNews.date }}</span>
              </div>
              <h2>{{ featuredNews.title }}</h2>
              <p>{{ featuredNews.excerpt }}</p>
              <button class="btn-text">Read More <i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
          
          <!-- News Grid -->
          <div class="news-grid">
            <div 
              v-for="(item, index) in newsItems.slice(1)" 
              :key="item.id"
              class="news-card"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 600 } }"
              @click="viewNewsDetail(item)"
            >
              <div class="news-card-image">
                <img :src="item.image" :alt="item.title">
              </div>
              <div class="news-card-content">
                <div class="news-meta">
                  <span class="date"><i class="far fa-calendar-alt"></i> {{ item.date }}</span>
                </div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.excerpt }}</p>
                <button class="btn-text">Read More <i class="fas fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
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

// News Content
.news-content {
  padding: 5rem 0;
  background-color: $light-color;
}

// News List View
.news-list-view {
  .featured-news {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba($primary-color, 0.08);
    margin-bottom: 3rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba($primary-color, 0.12);
    }
    
    .featured-image {
      position: relative;
      height: 100%;
      min-height: 350px;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .featured-overlay {
        position: absolute;
        top: 20px;
        left: 20px;
        
        .featured-tag {
          display: inline-block;
          background-color: $accent-color;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.9rem;
        }
      }
    }
    
    .featured-content {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      .news-meta {
        margin-bottom: 1rem;
        
        .date {
          color: lighten($primary-color, 30%);
          font-size: 0.9rem;
          
          i {
            margin-right: 5px;
            color: $accent-color;
          }
        }
      }
      
      h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: $primary-color;
        line-height: 1.3;
      }
      
      p {
        color: lighten($primary-color, 20%);
        margin-bottom: 1.5rem;
        line-height: 1.6;
      }
    }
    
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      
      .featured-image {
        min-height: 250px;
      }
    }
  }
  
  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    
    .news-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba($primary-color, 0.05);
      transition: all 0.3s ease;
      cursor: pointer;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba($primary-color, 0.1);
        
        .news-card-image img {
          transform: scale(1.05);
        }
      }
      
      .news-card-image {
        height: 200px;
        overflow: hidden;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
      }
      
      .news-card-content {
        padding: 1.5rem;
        
        .news-meta {
          margin-bottom: 0.8rem;
          
          .date {
            color: lighten($primary-color, 30%);
            font-size: 0.85rem;
            
            i {
              margin-right: 5px;
              color: $accent-color;
            }
          }
        }
        
        h3 {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          color: $primary-color;
          line-height: 1.3;
        }
        
        p {
          color: lighten($primary-color, 20%);
          margin-bottom: 1rem;
          line-height: 1.6;
          font-size: 0.95rem;
        }
      }
    }
  }
}

// News Detail View
.news-detail {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba($primary-color, 0.08);
  
  .back-button {
    margin-bottom: 2rem;
    
    .btn {
      display: inline-flex;
      align-items: center;
      
      i {
        margin-right: 0.5rem;
      }
    }
  }
  
  .news-detail-content {
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
      color: $primary-color;
      line-height: 1.3;
    }
    
    .news-meta {
      margin-bottom: 1.5rem;
      
      .date {
        color: lighten($primary-color, 30%);
        font-size: 0.95rem;
        
        i {
          margin-right: 5px;
          color: $accent-color;
        }
      }
    }
    
    .news-image {
      margin-bottom: 2rem;
      border-radius: 8px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    
    .news-text {
      color: lighten($primary-color, 20%);
      line-height: 1.8;
      
      p {
        margin-bottom: 1.5rem;
      }
      
      h4 {
        font-size: 1.4rem;
        color: $primary-color;
        margin: 2rem 0 1rem;
      }
      
      ul {
        padding-left: 1.5rem;
        margin-bottom: 1.5rem;
        
        li {
          margin-bottom: 0.5rem;
        }
      }
    }
    
    .share-links {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid $light-color;
      
      p {
        font-weight: 600;
        color: $primary-color;
        margin-bottom: 1rem;
      }
      
      .social-share {
        display: flex;
        gap: 1rem;
        
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: $light-color;
          color: $primary-color;
          transition: all 0.3s ease;
          
          &:hover {
            background-color: $accent-color;
            color: white;
            transform: translateY(-3px);
          }
        }
      }
    }
  }
}

// Buttons
.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.secondary {
    background-color: transparent;
    color: $primary-color;
    border-color: $primary-color;
    
    &:hover {
      background-color: $primary-color;
      color: white;
    }
  }
}

.btn-text {
  color: $accent-color;
  font-weight: 600;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  
  i {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: darken($accent-color, 10%);
    
    i {
      transform: translateX(3px);
    }
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .page-header {
    h1 {
      font-size: 2.5rem;
    }
  }
  
  .news-detail .news-detail-content h2 {
    font-size: 1.8rem;
  }
  
  .news-content {
    padding: 3rem 0;
  }
}
</style>
