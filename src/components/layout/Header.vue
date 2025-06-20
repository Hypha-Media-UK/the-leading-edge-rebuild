<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50;
  });
});
</script>

<template>
  <header :class="{ 'scrolled': isScrolled }">
    <div class="container header-container">
      <div class="logo">
        <router-link to="/" @click="closeMenu">
          <h1>The Leading Edge</h1>
        </router-link>
      </div>

      <div class="menu-toggle" @click="toggleMenu">
        <div :class="['hamburger', { 'active': isMenuOpen }]">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav :class="{ 'active': isMenuOpen }">
        <ul>
          <li>
            <router-link to="/" @click="closeMenu">Home</router-link>
          </li>
          <li>
            <router-link to="/our-salon" @click="closeMenu">Our Salon</router-link>
          </li>
          <li>
            <router-link to="/services" @click="closeMenu">Services</router-link>
          </li>
          <li>
            <router-link to="/meet-the-team" @click="closeMenu">Meet the Team</router-link>
          </li>
          <li>
            <router-link to="/contact" @click="closeMenu">Contact Us</router-link>
          </li>
          <li>
            <router-link to="/careers" @click="closeMenu">Careers</router-link>
          </li>
          <li>
            <router-link to="/contact" @click="closeMenu" class="btn-book-now">Book Now</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../styles/main.scss';

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  
  &.scrolled {
    padding: 0.8rem 0;
    box-shadow: 0 2px 10px rgba($primary-color, 0.1);
  }
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  z-index: 101;
  
  h1 {
    font-size: 1.8rem;
    margin: 0;
    color: $primary-color;
    font-weight: 700;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
}

nav {
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
      margin-left: 2rem;
      
      a {
        color: $primary-color;
        text-decoration: none;
        font-weight: 500;
        position: relative;
        padding-bottom: 5px;
        
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: $accent-color;
          transition: width 0.3s ease;
        }
        
        &:hover::after,
        &.router-link-active::after {
          width: 100%;
        }
      }
      
      .btn-book-now {
        background-color: $accent-color;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        
        &::after {
          display: none;
        }
        
        &:hover {
          background-color: darken($accent-color, 10%);
        }
      }
    }
  }
}

.menu-toggle {
  display: none;
  cursor: pointer;
  z-index: 101;
}

.hamburger {
  width: 30px;
  height: 22px;
  position: relative;
  
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: $primary-color;
    border-radius: 3px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    
    &:nth-child(1) {
      top: 0px;
    }
    
    &:nth-child(2) {
      top: 9px;
    }
    
    &:nth-child(3) {
      top: 18px;
    }
  }
  
  &.active {
    span {
      &:nth-child(1) {
        top: 9px;
        transform: rotate(135deg);
      }
      
      &:nth-child(2) {
        opacity: 0;
        left: -60px;
      }
      
      &:nth-child(3) {
        top: 9px;
        transform: rotate(-135deg);
      }
    }
  }
}

@media (max-width: 991px) {
  .menu-toggle {
    display: block;
  }
  
  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100vh;
    background-color: white;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
    z-index: 100;
    
    &.active {
      right: 0;
    }
    
    ul {
      flex-direction: column;
      padding: 100px 2rem 2rem;
      
      li {
        margin: 0 0 1.5rem 0;
        
        a {
          display: block;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
