<template>
  <div 
    class="news-detail"
    v-motion
    :initial="{ opacity: 0, scale: 0.95 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
  >
    <div 
      class="back-button"
      v-motion
      :initial="{ opacity: 0, x: -20 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
    >
      <Button @click="$emit('back')" variant="secondary" iconLeft="fas fa-arrow-left">
        Back to News
      </Button>
    </div>
    
    <div class="news-detail-content">
      <h2>{{ article.title }}</h2>
      <div class="news-meta">
        <span class="date"><i class="far fa-calendar-alt"></i> {{ article.date }}</span>
        <span class="author" v-if="article.author"><i class="far fa-user"></i> {{ article.author }}</span>
        <span class="category" v-if="article.category"><i class="far fa-folder"></i> {{ article.category }}</span>
      </div>
      
      <div 
        class="news-image"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
      >
        <img :src="article.image" :alt="article.title">
      </div>
      
      <div 
        class="news-text"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 600, duration: 600 } }"
        v-html="article.content"
      ></div>
      
      <div 
        class="share-links"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 800, duration: 600 } }"
      >
        <p>Share this article:</p>
        <div class="social-share">
          <a href="#" aria-label="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Share on Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Share on Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Share via Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
      
      <div 
        class="related-news"
        v-if="relatedArticles && relatedArticles.length"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }"
      >
        <h3>You might also like</h3>
        <div class="related-grid">
          <div 
            v-for="(item, index) in relatedArticles" 
            :key="item.id"
            class="related-item"
            @click="$emit('view-article', item)"
          >
            <div class="related-image">
              <img :src="item.image" :alt="item.title">
            </div>
            <h4>{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue';

defineProps({
  article: {
    type: Object,
    required: true
  },
  relatedArticles: {
    type: Array,
    default: () => []
  }
});

defineEmits(['back', 'view-article']);
</script>

<style lang="scss" scoped>
.news-detail {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba($primary-color, 0.08);
  
  .back-button {
    margin-bottom: 2rem;
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
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      
      .date, .author, .category {
        color: custom-lighten($primary-color, 30%);
        font-size: 0.95rem;
        display: inline-flex;
        align-items: center;
        
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
        display: block;
      }
    }
    
    .news-text {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.8;
      
      :deep(p) {
        margin-bottom: 1.5rem;
      }
      
      :deep(h4) {
        font-size: 1.4rem;
        color: $primary-color;
        margin: 2rem 0 1rem;
      }
      
      :deep(ul) {
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
    
    .related-news {
      margin-top: 4rem;
      
      h3 {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
        color: $primary-color;
      }
      
      .related-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
        
        .related-item {
          cursor: pointer;
          transition: all 0.3s ease;
          
          &:hover {
            transform: translateY(-5px);
            
            h4 {
              color: $accent-color;
            }
          }
          
          .related-image {
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 0.8rem;
            
            img {
              width: 100%;
              height: 120px;
              object-fit: cover;
              display: block;
            }
          }
          
          h4 {
            font-size: 1rem;
            line-height: 1.4;
            color: $primary-color;
            transition: color 0.3s ease;
          }
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    
    .news-detail-content {
      h2 {
        font-size: 1.8rem;
      }
      
      .related-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
    }
  }
}
</style>
