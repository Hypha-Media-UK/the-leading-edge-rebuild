import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Import all views
import Home from './views/Home.vue'
import OurSalon from './views/OurSalon.vue'
import ServiceDetail from './views/ServiceDetail.vue'
import MeetTheTeam from './views/MeetTheTeam.vue'
import ContactUs from './views/ContactUs.vue'
import Careers from './views/Careers.vue'
import News from './views/News.vue'
import OffersGiftVouchers from './views/OffersGiftVouchers.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/our-salon', component: OurSalon },
  { path: '/services', component: ServiceDetail },
  { path: '/meet-the-team', component: MeetTheTeam },
  { path: '/contact', component: ContactUs },
  { path: '/careers', component: Careers },
  { path: '/news', component: News },
  { path: '/offers', component: OffersGiftVouchers },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
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
