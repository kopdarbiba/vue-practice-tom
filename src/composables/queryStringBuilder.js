export function useQueryStringBuilder(params) {
  const queryString = Object.keys(params)
    .map((key) => {
      const value = params[key]
      if (Array.isArray(value)) {
        return value
          .map((item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
          .join('&')
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    })
    .join('&')

  return { queryString }
}
