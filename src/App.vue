<script setup>
import { ref } from 'vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

const transitionName = ref('fade');
</script>

<template>
  <div class="app-wrapper">
    <Header />
    
    <main>
      <router-view v-slot="{ Component }">
        <transition
          :name="transitionName"
          mode="out-in"
          @before-enter="$motion.transitions.beforeEnter"
          @enter="$motion.transitions.enter"
          @leave="$motion.transitions.leave"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <Footer />
  </div>
  
  <!-- Portal target for modals -->
  <div id="modal-portal"></div>
</template>

<style lang="scss">


.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-top: 80px; // Space for fixed header
}

// Page Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
