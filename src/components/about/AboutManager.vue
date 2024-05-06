<script setup>
import { useApiUrlConstuctor } from '../../composables/apiUrlConstructor'

const { computedUrl } = useApiUrlConstuctor()

</script>

<template>
    <p>Constructed Base URL: {{ computedUrl }}</p>
</template>
