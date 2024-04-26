import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import translate from './translate.json'

export const useLanguageStore = defineStore('language', () => {
  const route = useRoute()

  const lessTogglerTranslated = computed(() => translate.checkBox.seeLess[route.params.lang])
  const moreTogglerTranslated = computed(() => translate.checkBox.seeMore[route.params.lang])
  const searchBoxTranslated = computed(() => translate.searchQuery.search_box[route.params.lang])
  const searchButtonTranslated = computed(() => translate.searchQuery.button[route.params.lang])
  return {
    lessTogglerTranslated,
    moreTogglerTranslated,
    searchBoxTranslated,
    searchButtonTranslated
  }
})
