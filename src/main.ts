import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import App from './App.vue'

// Define routes with lazy loading
const routes: RouteRecordRaw[] = [
  { 
    path: '/', 
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
  },
  { 
    path: '/our-salon', 
    component: () => import(/* webpackChunkName: "our-salon" */ './views/OurSalon.vue')
  },
  { 
    path: '/services', 
    component: () => import(/* webpackChunkName: "service-detail" */ './views/ServiceDetail.vue')
  },
  { 
    path: '/meet-the-team', 
    component: () => import(/* webpackChunkName: "meet-team" */ './views/MeetTheTeam.vue')
  },
  { 
    path: '/contact', 
    component: () => import(/* webpackChunkName: "contact" */ './views/ContactUs.vue')
  },
  { 
    path: '/careers', 
    component: () => import(/* webpackChunkName: "careers" */ './views/Careers.vue')
  },
  { 
    path: '/news', 
    component: () => import(/* webpackChunkName: "news" */ './views/News.vue')
  },
  { 
    path: '/offers', 
    component: () => import(/* webpackChunkName: "offers" */ './views/OffersGiftVouchers.vue')
  }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    // Scroll to top on route change
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Create Vue app
const app = createApp(App)

// Use plugins
app.use(router)

// Mount app
app.mount('#app')
