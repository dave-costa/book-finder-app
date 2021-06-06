import { createApp } from 'vue'
import App from './app/App.vue'
import store from './app/app-state'
import router from './app/app-routes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import dotenv from 'dotenv'
dotenv.config()

AOS.init()

createApp(App).use(router).use(store).mount('#app')
