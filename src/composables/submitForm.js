import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export function useSubmitForm(sectionKey, formValues) {
  const router = useRouter()
  const route = useRoute()
  // Compute filter form values to be sent to route
  const computedNewQuery = computed(() => {
    const newQuery = { ...route.query }
    if (formValues.value && (formValues.value.length > 0 || typeof formValues.value === 'number')) {
      newQuery[sectionKey] = formValues.value
    } else {
      delete newQuery[sectionKey]
    }
    return newQuery
  })

  // Submit computed filter form values to route
  const submitFilter = () => {
    router.push({
      name: route.name,
      params: { lang: route.params.lang },
      query: computedNewQuery.value
    })
  }

  updateFormValuesFromRoute(route, sectionKey, formValues)

  return { submitFilter }
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
