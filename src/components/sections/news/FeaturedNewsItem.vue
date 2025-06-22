<template>
  <div 
    class="featured-news"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    @click="$emit('click', article)"
  >
    <div class="featured-image">
      <img :src="article.image" :alt="article.title">
      <div class="featured-overlay">
        <span class="featured-tag">Featured</span>
      </div>
    </div>
    <div class="featured-content">
      <div class="news-meta">
        <span class="date"><i class="far fa-calendar-alt"></i> {{ article.date }}</span>
        <span class="author" v-if="article.author"><i class="far fa-user"></i> {{ article.author }}</span>
      </div>
      <h2>{{ article.title }}</h2>
      <p>{{ article.excerpt }}</p>
      <Button 
        variant="text" 
        iconRight="fas fa-arrow-right"
      >
        Read More
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue';

defineProps({
  article: {
    type: Object,
    required: true
  }
});

defineEmits(['click']);
</script>

<style lang="scss" scoped>
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
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      
      .date, .author {
        color: custom-lighten($primary-color, 30%);
        font-size: 0.9rem;
        display: inline-flex;
        align-items: center;
        
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
      color: custom-lighten($primary-color, 20%);
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
</style>
