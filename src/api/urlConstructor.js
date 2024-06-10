import { computed, ref, watch } from 'vue'

export function useNewUrlConstructor(route) {
  const newUrl = computed(() => constructNewUrl(route))

  function constructNewUrl(route) {
    const baseUrl = getBaseUrl(route.name)
    const queryString = getQueryString(route.query)
    const language = addLanguage(route.params.lang)
    if (queryString || language) {
      if (queryString && language) {
        return baseUrl + '?' + queryString + '&' + language
      } else if (queryString) {
        return baseUrl + '?' + queryString
      } else {
        return baseUrl + '?' + language
      }
    } else {
      return baseUrl
    }
  }

  function getBaseUrl(name) {
    const base = 'http://localhost:8000/api/recipes/'
    return name === 'home' ? base : `${base}${name}/`
  }

  function getQueryString(query) {
    const queryParts = []
    for (const key in query) {
      if (Array.isArray(query[key])) {
        query[key].forEach((value) => {
          queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        })
      } else {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
      }
    }
    return queryParts.join('&')
  }

  function addLanguage(lang) {
    return lang ? `lang=${lang}` : ''
  }

  return { newUrl }
}

export function useNextUrlConstructor(storage) {
  const nextUrl = ref()

  const updateNextUrl = () => {
    nextUrl.value = storage.data.value[storage.data.value.length - 1].next
  }

  return { nextUrl, updateNextUrl }
}

export function useUrlWatch(newUrl, nextUrl, storage) {
  // when language or filter query is changed
  watch(
    () => newUrl.value,
    () => {
      nextUrl.value = undefined
      storage.data.value = []
    }
  )
}
