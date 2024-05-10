import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

export function useFetchedDataManager(fetchedData, storage) {
  const { locale } = useI18n()
  watch(fetchedData, (newPage) => {
    if (newPage) {
      createsEmptyObjArray()
      storage.value[locale.value].push(newPage)
    }
  })

  function createsEmptyObjArray() {
    if (!storage.value[locale.value]) {
      storage.value[locale.value] = []
    }
  }
}
