<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()
const text = ref('')

const submitSearch = () => {
    router.push({ name: route.name, params: { lang: route.params.lang }, query: { q: text.value } })
}
</script>

<template>
    <div class="search">
        <input @keyup.enter="submitSearch" v-model="text" placeholder="Search recipe">

    </div>
</template>

<style>
@media (min-width: 1024px) {
    .search {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
