import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
  const en = ref('en')
  const lv = ref('lv')
  const ru = ref('ru')

  return { en, lv, ru }
})
