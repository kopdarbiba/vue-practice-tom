import { ref, watchEffect, toValue } from 'vue'

export function useApiFetch(url) {
  const fetchedPage = ref(null)
  const error = ref(null)

  const fetchData = () => {
    fetchedPage.value = null
    error.value = null

    fetch(toValue(url.value))
      .then((res) => res.json())
      .then((json) => (fetchedPage.value = json))
      .catch((err) => (error.value = err))
  }

  // Watch for changes in url and re-fetch data
  watchEffect(() => {
    fetchData()
    // console.log(`__url.value__<1>: ${url.value}`)
  })

  return { fetchedPage, error }
}
