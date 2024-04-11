import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBackendDataStore = defineStore('BackendData', () => {
  const loading = ref(true)
  const apiRecipesData = ref([])
  const errorRaised = ref(null)

  const baseUrls = ref({
    AWS: 'http://13.49.33.156/api/recipes/search/',
    LOCAL: 'http://localhost:8000/api/recipes/search/?lang=en'
  })

  async function fetchRecipes() {
    try {
      loading.value = true
      const response = await fetch(baseUrls.value.LOCAL)
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
  }

  return {
    loading,
    apiRecipesData,
    error: errorRaised, // Exposed as 'error'
    fetchRecipes
  }
})
