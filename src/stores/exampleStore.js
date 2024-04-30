import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useLanguageStore } from './language'

export const useBackendDataStore = defineStore('BackendData', () => {
  const languageStore = useLanguageStore()
  const newLangValue = computed(() => languageStore.selectedLang)

  const apiRecipesData = ref([])
  const loading = ref(true)
  const errorRaised = ref(null)
  const baseUrls = ref('http://localhost:8000/api/recipes/search/')

  const urlKwargs = ref({
    lang: newLangValue,
    q: null,
    ingredients: 'chicken',
    ordering: null,
    minPrice: null,
    maxPrice: null,
    cuisines: null,
    meals: null,
    occasions: null
  })

  const kwargsString = computed(() => {
    let kwargsString = ''
    for (const [key, value] of Object.entries(urlKwargs.value)) {
      if (value !== null) {
        kwargsString += `${key}=${value}&`
      }
    }
    kwargsString = kwargsString.slice(0, -1)
    return kwargsString
  })

  watch(
    kwargsString,
    async () => {
      let constructedUrl = `${baseUrls.value}?${kwargsString.value}`
      try {
        loading.value = true
        const response = await fetch(constructedUrl)
        if (!response.ok) {
          throw new Error('Failed to fetch recipes')
        }
        const data = await response.json()
        apiRecipesData.value = data.results
      } catch (error) {
        console.error('Error fetching data:', error)
        errorRaised.value = true
      } finally {
        loading.value = false
      }
    },
    { immediate: true }
  )

  return {
    loading,
    apiRecipesData,
    error: errorRaised // Exposed as 'error'
  }
})
