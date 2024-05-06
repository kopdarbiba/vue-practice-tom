import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

export function useApiUrlConstuctor() {
  const { locale } = useI18n()
  const route = useRoute()

  const computedUrl = computed(() => {
    return route.meta.baseUrls[locale.value]
  })

  return { computedUrl }
}
