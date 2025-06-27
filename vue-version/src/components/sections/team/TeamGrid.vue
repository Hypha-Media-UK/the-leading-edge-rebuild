<template>
  <section class="team-section">
    <div class="container">
      <div class="team-intro">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      
      <div class="team-grid">
        <TeamMemberCard
          v-for="(member, index) in teamMembers"
          :key="member.id"
          :member="member"
          :delay="200 + (index * 100)"
          @click="$emit('select-member', member.id)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TeamMemberCard from '@/components/ui/TeamMemberCard.vue';

defineProps({
  title: {
    type: String,
    default: 'Our Talented Professionals'
  },
  description: {
    type: String,
    default: 'The Leading Edge team consists of passionate, highly-trained professionals who are dedicated to their craft. Each team member brings their unique expertise and creative vision to provide you with an exceptional salon experience.'
  },
  teamMembers: {
    type: Array,
    required: true
  }
});

defineEmits(['select-member']);
</script>

<style lang="scss" scoped>
.team-section {
  padding: 5rem 0;
  background-color: white;
  
  .team-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
    
    h2 {
      font-size: 2.2rem;
      margin-bottom: 1rem;
      color: $primary-color;
    }
    
    p {
      color: custom-lighten($primary-color, 20%);
      line-height: 1.6;
    }
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}
</style>
