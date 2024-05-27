import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export function useSubmitForm(formValues) {
  const router = useRouter()
  const route = useRoute()
  // Update route query with new values
  const computedNewQuery = computed(() => {
    const newQuery = { ...route.query }
    if (formValues.value && (formValues.value.length > 0 || typeof formValues.value === 'number')) {
      newQuery[sectionKey] = formValues.value
    } else {
      delete newQuery[sectionKey]
    }
    return newQuery
  })

  // execute route.push with new query
  const submitForm = (n) => {
    console.log('###############', n)
    // console.log('submitForm!!!!!!!!!!!!!!!!!!!!!!!!!', computedNewQuery.value)
    console.log('WWWWWWWWWw', formValues.value)
    router.push({
      name: route.name,
      params: { lang: route.params.lang },
      query: computedNewQuery.value
    })
  }

  // updateFormValuesFromRoute(route, sectionKey, formValues)

  return { submitForm }
}

// Populate formValues with values from route on page refresh
function updateFormValuesFromRoute(route, sectionKey, formValues) {
  if (
    route.query[sectionKey] &&
    typeof route.query[sectionKey] === 'string' &&
    !Array.isArray(formValues.value)
  ) {
    formValues.value = route.query[sectionKey]
  }
  // Manage checkbox fields
  else if (
    typeof formValues === 'object' &&
    Array.isArray(formValues.value) &&
    route.query[sectionKey]
  ) {
    // If only one value, convert to array
    if (typeof route.query[sectionKey] === 'string') {
      formValues.value = [route.query[sectionKey]]
    }
    // If array, keep it
    else {
      formValues.value = route.query[sectionKey]
    }
  }
}
