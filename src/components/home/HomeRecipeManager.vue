<script setup>
import { useApiBaseUrlConstructor } from '../../composables/useApiBaseUrlConstructor'
// import { useFetch } from './../../composables/fetch'

const { apiBaseUrl } = useApiBaseUrlConstructor()

</script>

<template>
  <div>
    <p>Constructed Base URL: {{ apiBaseUrl }}</p>
  </div>
</template>