<template>
  <section class="culture-section">
    <div class="container">
      <div class="culture-content">
        <div class="culture-text">
          <h2>{{ title }}</h2>
          <p v-for="(paragraph, index) in paragraphs" :key="index" 
            :class="{ 'last-child': index === paragraphs.length - 1 }">
            {{ paragraph }}
          </p>
        </div>
        
        <div class="culture-image"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Our Workplace Culture'
  },
  paragraphs: {
    type: Array,
    default: () => [
      'At The Leading Edge, we foster a culture of creativity, respect, and continuous growth. We believe that happy team members provide the best service to our clients, which is why we prioritize creating a positive and supportive work environment.',
      'We celebrate diversity and believe that each team member brings unique perspectives and talents that contribute to our collective success. Our collaborative approach encourages sharing ideas and learning from one another.',
      "If you're passionate about beauty, dedicated to excellence, and love making people feel their best, we'd love to hear from you!"
    ]
  },
  imagePath: {
    type: String,
    default: '/images/downloaded/staff/LeadingEdge_300317-028-Copy.jpg'
  }
});
</script>

<style lang="scss" scoped>
.culture-section {
  background-color: $light-color;
  padding: 5rem 0;
  
  .culture-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    
    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
    
    .culture-text {
      h2 {
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
        color: $primary-color;
      }
      
      p {
        margin-bottom: 1.5rem;
        line-height: 1.8;
        color: lighten($primary-color, 20%);
        
        &.last-child {
          margin-bottom: 0;
        }
      }
    }
    
    .culture-image {
      height: 400px;
      background-image: url('/images/downloaded/staff/LeadingEdge_300317-028-Copy.jpg');
      background-size: cover;
      background-position: center;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba($primary-color, 0.1);
      object-fit: cover;
      
      @media (max-width: 991px) {
        height: 300px;
        margin-top: 2rem;
      }
    }
  }
}
</style>
