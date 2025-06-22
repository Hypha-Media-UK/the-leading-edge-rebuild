<template>
  <section class="news-section">
    <div class="container">
      <SectionHeader 
        :title="title" 
        :description="description"
      />
      
      <div class="news-filters" v-if="showFilters && categories.length > 0">
        <div 
          class="category-filter"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 600 } }"
        >
          <span 
            :class="['filter-item', { 'active': activeCategory === 'all' }]"
            @click="$emit('filter-change', 'all')"
          >
            All
          </span>
          <span 
            v-for="(category, index) in categories"
            :key="index"
            :class="['filter-item', { 'active': activeCategory === category.slug }]"
            @click="$emit('filter-change', category.slug)"
          >
            {{ category.name }}
          </span>
        </div>
      </div>
      
      <div class="news-grid">
        <NewsArticleCard
          v-for="(article, index) in articles"
          :key="article.id"
          :article="article"
          :delay="200 + (index * 150)"
        />
      </div>
      
      <div 
        class="news-pagination"
        v-if="pagination && totalPages > 1"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 800, duration: 600 } }"
      >
        <button 
          class="pagination-btn prev"
          :disabled="currentPage === 1"
          @click="$emit('page-change', currentPage - 1)"
        >
          <i class="fas fa-chevron-left"></i> Previous
        </button>
        
        <div class="pagination-numbers">
          <button 
            v-for="page in totalPages"
            :key="page"
            :class="['page-number', { 'active': currentPage === page }]"
            @click="$emit('page-change', page)"
          >
            {{ page }}
          </button>
        </div>
        
        <button 
          class="pagination-btn next"
          :disabled="currentPage === totalPages"
          @click="$emit('page-change', currentPage + 1)"
        >
          Next <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';
import NewsArticleCard from '@/components/ui/NewsArticleCard.vue';

defineProps({
  title: {
    type: String,
    default: 'Latest News'
  },
  description: {
    type: String,
    default: 'Stay updated with our latest articles, salon news, and beauty trends'
  },
  articles: {
    type: Array,
    required: true
  },
  categories: {
    type: Array,
    default: () => []
  },
  activeCategory: {
    type: String,
    default: 'all'
  },
  showFilters: {
    type: Boolean,
    default: true
  },
  pagination: {
    type: Boolean,
    default: true
  },
  currentPage: {
    type: Number,
    default: 1
  },
  totalPages: {
    type: Number,
    default: 1
  }
});

defineEmits(['filter-change', 'page-change']);
</script>

<style lang="scss" scoped>
.news-section {
  padding: 5rem 0;
  background-color: $light-color;
  
  .news-filters {
    margin-bottom: 2rem;
    
    .category-filter {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      
      .filter-item {
        padding: 0.5rem 1.5rem;
        background-color: white;
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
        color: $primary-color;
        font-weight: 500;
        
        &:hover {
          background-color: custom-lighten($accent-color, 35%);
          transform: translateY(-2px);
        }
        
        &.active {
          background-color: $accent-color;
          color: white;
        }
      }
    }
  }
  
  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
  
  .news-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    .pagination-btn {
      background: white;
      border: 1px solid rgba($primary-color, 0.2);
      padding: 0.6rem 1.2rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      color: $primary-color;
      
      &:hover:not(:disabled) {
        background-color: $accent-color;
        color: white;
        border-color: $accent-color;
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      &.prev i {
        margin-right: 0.5rem;
      }
      
      &.next i {
        margin-left: 0.5rem;
      }
    }
    
    .pagination-numbers {
      display: flex;
      gap: 0.5rem;
      
      .page-number {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border: 1px solid rgba($primary-color, 0.2);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover:not(.active) {
          background-color: custom-lighten($accent-color, 35%);
        }
        
        &.active {
          background-color: $accent-color;
          color: white;
          border-color: $accent-color;
        }
      }
    }
  }
}
</style>
