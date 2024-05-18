import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useNewUrlConstructor() {
  const route = useRoute()
  const newUrl = computed(() => newUrlConstructor(route))

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

  function newUrlConstructor(route) {
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
  return { newUrl }
}
