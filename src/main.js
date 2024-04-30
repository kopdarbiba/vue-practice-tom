import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import en from './locales/en.json'
import lv from './locales/lv.json'
import ru from './locales/ru.json'
const fallbackLocale = 'lv'

const i18n = createI18n({
  legacy: false,
  fallbackLocale: fallbackLocale,
  locale: fallbackLocale,
  messages: {
    en,
    lv,
    ru
  }
})
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(pinia)
app.mount('#app')
