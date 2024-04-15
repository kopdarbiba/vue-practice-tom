import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
  const storedLanguage = ref('lv')

  return { storedLanguage: storedLanguage }
})
