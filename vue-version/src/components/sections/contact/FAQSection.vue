<template>
  <section class="faq-section">
    <div class="container">
      <SectionHeader
        :title="title"
        :description="description"
      />
      
      <div class="faq-grid">
        <FAQItem
          v-for="(faq, index) in faqs"
          :key="index"
          :question="faq.question"
          :answer="faq.answer"
          :delay="200 + (index * 100)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';
import FAQItem from '@/components/ui/FAQItem.vue';

defineProps({
  title: {
    type: String,
    default: 'Frequently Asked Questions'
  },
  description: {
    type: String,
    default: ''
  },
  faqs: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.faq-section {
  background-color: $light-color;
  padding: 5rem 0;
  
  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 2rem;
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
