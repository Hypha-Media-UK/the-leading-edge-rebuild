<script setup lang="ts">
import { ref } from 'vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

// Define transition name
const transitionName = ref<string>('fade');

// Transition handlers
const beforeEnter = (el: Element): void => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.opacity = '0';
  htmlEl.style.transform = 'translateY(20px)';
};

const enter = (el: Element, done: () => void): void => {
  const htmlEl = el as HTMLElement;
  setTimeout(() => {
    htmlEl.style.transition = 'all 0.6s ease';
    htmlEl.style.opacity = '1';
    htmlEl.style.transform = 'translateY(0)';
    setTimeout(done, 600);
  }, 100);
};

const leave = (el: Element, done: () => void): void => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.transition = 'all 0.3s ease';
  htmlEl.style.opacity = '0';
  htmlEl.style.transform = 'translateY(-20px)';
  setTimeout(done, 300);
};
</script>

<template>
  <div class="app-wrapper">
    <Header />
    
    <main>
      <router-view v-slot="{ Component }">
        <transition
          :name="transitionName"
          mode="out-in"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
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
