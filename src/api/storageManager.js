import { useSessionStorage } from '@vueuse/core'
import { computed } from 'vue'

export function useSessionStorageManager(name) {
  const data = useSessionStorage(name, [])

  const isEmptyBool = computed(() => (data.value[0] ? false : true))

  return {
    data,
    isEmptyBool,
    add(fetchedPage) {
      data.value.push(fetchedPage)
    }
  }
}
