<template>
  <section class="gift-voucher-section">
    <div class="container">
      <div 
        class="gift-voucher-content"
        
        
        
      >
        <h2 v-if="title">{{ title }}</h2>
        <p v-if="description">{{ description }}</p>
        
        <a 
          :href="link" 
          :target="external ? '_blank' : '_self'" 
          class="btn gift-voucher-btn"
        >
          <i :class="icon"></i> {{ buttonText }}
        </a>
        
        <p class="voucher-subtext" v-if="subtext">{{ subtext }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: 'Purchase Gift Vouchers'
  },
  icon: {
    type: String,
    default: 'fas fa-gift'
  },
  link: {
    type: String,
    default: '#'
  },
  external: {
    type: Boolean,
    default: true
  },
  subtext: {
    type: String,
    default: 'The perfect gift for any occasion'
  },
  delay: {
    type: Number,
    default: 800
  }
});
</script>

<style lang="scss" scoped>
.gift-voucher-section {
  padding: 3rem 0 5rem;
  background-color: $light-color;
  
  .gift-voucher-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    p {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    
    .gift-voucher-btn {
      background-color: $highlight-color;
      color: $primary-color;
      border: 2px solid $highlight-color;
      padding: 1.2rem 3rem;
      font-size: 1.3rem;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      transform-origin: center;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      text-decoration: none;
      
      i {
        font-size: 1.5rem;
      }
      
      &:hover {
        background-color: white;
        color: $primary-color;
        border-color: $primary-color;
        transform: translateY(-7px) scale(1.05);
      }
    }
    
    .voucher-subtext {
      margin-top: 1rem;
      color: custom-lighten($primary-color, 20%);
      font-style: italic;
      font-size: 0.95rem;
    }
  }
}

@media (max-width: 768px) {
  .gift-voucher-section {
    padding: 2rem 0 4rem;
    
    .gift-voucher-content {
      h2 {
        font-size: 1.8rem;
      }
      
      .gift-voucher-btn {
        padding: 1rem 2rem;
        font-size: 1.1rem;
      }
    }
  }
}
</style>
