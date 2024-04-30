import { watch, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

export function useApiBaseUrlConstructor() {
  const { locale } = useI18n()
  const route = useRoute()

  const baseUrls = ref({
    home: 'http://localhost:8000/api/recipes/',
    search: 'http://localhost:8000/api/recipes/search/',
    about: 'http://localhost:8000/api/recipes/about/'
  })

  const apiBaseUrl = computed(() => {
    const currentBaseUrl = baseUrls.value[route.name]
    if (locale.value === 'en' || locale.value === 'ru') {
      return `${currentBaseUrl}?lang=${locale.value}`
    } else {
      return currentBaseUrl
    }
  })

  // Optional
  watch(apiBaseUrl, (newApiBaseUrl) => {
    console.log('__newApiBaseUrl__:', newApiBaseUrl)
  })

  return { apiBaseUrl }
}
