<template>
  <div 
    class="news-card"
    
    
    
  >
    <div class="news-image">
      <img :src="article.image" :alt="article.title">
      <div class="news-date">
        <span class="day">{{ formatDay(article.date) }}</span>
        <span class="month">{{ formatMonth(article.date) }}</span>
      </div>
    </div>
    <div class="news-content">
      <h3>{{ article.title }}</h3>
      <p class="news-excerpt">{{ article.excerpt }}</p>
      
      <div class="news-meta">
        <span class="news-author" v-if="article.author">
          <i class="far fa-user"></i> {{ article.author }}
        </span>
        <span class="news-category" v-if="article.category">
          <i class="far fa-folder"></i> {{ article.category }}
        </span>
      </div>
      
      <div class="news-actions">
        <Button 
          :to="article.link || '/news/' + article.id" 
          variant="secondary"
          size="small"
        >
          Read More
        </Button>
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
  delay: {
    type: Number,
    default: 200
  }
});

const formatDay = (dateString) => {
  const date = new Date(dateString);
  return date.getDate();
};

const formatMonth = (dateString) => {
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
};
</script>

<style lang="scss" scoped>
.news-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba($primary-color, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba($primary-color, 0.15);
    
    .news-image img {
      transform: scale(1.05);
    }
  }
  
  .news-image {
    height: 220px;
    position: relative;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }
    
    .news-date {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: $accent-color;
      color: white;
      text-align: center;
      padding: 8px 15px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      
      .day {
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 2px;
      }
      
      .month {
        font-size: 0.9rem;
        text-transform: uppercase;
        font-weight: 500;
      }
    }
  }
  
  .news-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: $primary-color;
      transition: color 0.3s ease;
      
      &:hover {
        color: $accent-color;
      }
    }
    
    .news-excerpt {
      margin-bottom: 1.5rem;
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
      flex: 1;
    }
    
    .news-meta {
      font-size: 0.9rem;
      color: custom-lighten($primary-color, 30%);
      margin-bottom: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      
      .news-author, .news-category {
        display: inline-flex;
        align-items: center;
        
        i {
          margin-right: 5px;
        }
      }
    }
    
    .news-actions {
      margin-top: auto;
    }
  }
}
</style>
