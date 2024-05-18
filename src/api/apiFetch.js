import { ref, watchEffect, toValue } from 'vue'

export function useApiFetch(newUrl, nextUrl, storage) {
  const fetchedPage = ref(null)
  const error = ref(null)

  const fetchData = (url) => {
    console.log('FETCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!: ', url)
    fetchedPage.value = null
    error.value = null

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (fetchedPage.value = json))
      .catch((err) => (error.value = err))
      .finally(() => {
        storage.add(fetchedPage.value)
      })
  }

  watchEffect(() => {
    if (storage.isEmptyBool.value) {
      fetchData(newUrl.value)
    }
    if (nextUrl.value != undefined) {
      fetchData(nextUrl.value)
    }
  })

  return { error }
}
