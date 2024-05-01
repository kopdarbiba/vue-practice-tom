<script setup>
import { useApiBaseUrlConstructor } from '../../composables/useApiBaseUrlConstructor'
import { useFetch } from './../../composables/fetch'

const { apiBaseUrl } = useApiBaseUrlConstructor()
const { fetchedData, error } = useFetch(apiBaseUrl)

</script>

<template>

  <p style="color: chartreuse;">Constructed Base URL: {{ apiBaseUrl }}</p><br>

  <div>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>

    <div v-else-if="fetchedData">
      Data loaded:
      <pre>{{ fetchedData.results }}</pre>
    </div>
    <div v-else>Loading...</div>
  </div>

</template>