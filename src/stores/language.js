import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
  const selectedLang = ref('Defoult language ...')

  return { selectedLang }
})
