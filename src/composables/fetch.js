import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
  const fetchedData = ref(null)
  const error = ref(null)

  const fetchData = () => {
    // Reset state before fetching
    fetchedData.value = null
    error.value = null
    console.log('fetchData triggered!!!!')

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (fetchedData.value = json))
      .catch((err) => (error.value = err))
  }

  // Watch for changes in apiBaseUrl and re-fetch data
  watchEffect(() => {
    fetchData()
  })
  return { fetchedData, error }
}
