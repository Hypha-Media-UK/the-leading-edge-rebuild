<template>
  <div 
    class="team-member"
    @click="$emit('click', member.id)"
  >
    <div class="member-image">
      <img :src="member.image" :alt="`${member.name} - ${member.role}`">
      <div class="member-overlay">
        <span>View Profile</span>
      </div>
    </div>
    <div class="member-info">
      <h3>{{ member.name }}</h3>
      <p class="member-role">{{ member.role }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  member: {
    type: Object,
    required: true
  },
});

defineEmits(['click']);
</script>

<style lang="scss" scoped>
.team-member {
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    
    .member-overlay {
      opacity: 1;
    }
  }
  
  .member-image {
    height: 350px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 5px 15px rgba($primary-color, 0.1);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }
    
    &:hover img {
      transform: scale(1.05);
    }
    
    .member-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($accent-color, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      
      span {
        color: white;
        font-weight: 600;
        font-size: 1.2rem;
        padding: 0.8rem 1.5rem;
        border: 2px solid white;
        border-radius: 4px;
      }
    }
  }
  
  .member-info {
    padding: 1.5rem 0;
    text-align: center;
    
    h3 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: $primary-color;
    }
    
    .member-role {
      color: $accent-color;
      font-weight: 500;
    }
  }
}
</style>
