import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

export function useGetUrl(apiDataStorage) {
  const { locale } = useI18n()
  const route = useRoute()

  const url = ref()

  const length = computed(() => {
    return apiDataStorage.value[locale.value] ? apiDataStorage.value[locale.value].length : 0
  })

  const nextUrl = computed(() => {
    const data = apiDataStorage.value[locale.value]
    return data && data.length > 0 ? data[length.value - 1].next : null
  })

  const newUrlCallback = () => {
    nextUrl.value ? (url.value = nextUrl.value) : console.log('No next url')
  }

  watch(
    locale,
    () => {
      length.value === 0 ? (url.value = route.meta.baseUrls[locale.value]) : null
    },
    { immediate: true }
  )

  return { url, newUrlCallback }
}
