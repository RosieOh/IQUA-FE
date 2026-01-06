import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router)

app.mount('#app')

// Initialize AOS after mount
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
  delay: 0
})

