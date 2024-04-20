<script setup>
import { useRoute } from 'vue-router'
defineProps(['lv', 'en', 'ru'])

const route = useRoute()
</script>

<template>
    <span v-if="route.params.lang === 'ru'"> {{ ru }} </span>
    <span v-else-if="route.params.lang === 'en'"> {{ en }} </span>
    <span v-else> {{ lv }} </span>
</template>