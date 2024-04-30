<script setup>
import { useApiBaseUrlConstructor } from '../../composables/useApiBaseUrlConstructor'

const { apiBaseUrl } = useApiBaseUrlConstructor()

</script>

<template>
    <p>Constructed Base URL: {{ apiBaseUrl }}</p>
</template>
