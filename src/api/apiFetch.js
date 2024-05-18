import { ref, watchEffect, toValue, computed } from 'vue'

export function useApiFetch(urls, storage) {
  const fetchedPage = ref(null)
  const error = ref(null)

  const storageIsEmpty = computed(() => (storage.value[0] ? false : true))

  const fetchData = (url) => {
    console.log('FETCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!: ', url)
    fetchedPage.value = null
    error.value = null

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (fetchedPage.value = json))
      .catch((err) => (error.value = err))
      .finally(() => {
        storage.value.push(fetchedPage.value)
      })
  }

  watchEffect(() => {
    if (storageIsEmpty.value) {
      fetchData(urls.value.new)
    }
    if (urls.value.next != undefined) {
      fetchData(urls.value.next)
    }
  })

  return { error }
}
