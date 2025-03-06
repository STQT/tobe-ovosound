import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/index.css'
import App from './App.vue'
import router from './router'
import api from './plugins/axios'
import i18n from './i18n'

const pinia = createPinia()

const app = createApp(App)
app.config.globalProperties.$axios = api
app.use(pinia)
app.use(i18n)
app.use(router)
app.mount('#app')
