<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import translate from './translate.json'

const router = useRouter()
const route = useRoute()

const searchQuery = ref({ q: route.query.q })

const submitSearch = () => {
    const query = searchQuery.value.q.trim()
    if (query) {
        router.push({
            name: route.name,
            params: { lang: route.params.lang },
            query: { ...route.query, q: query }
        })
    } else {
        const newQuery = { ...route.query }
        delete newQuery.q
        router.push({
            name: route.name,
            params: { lang: route.params.lang },
            query: newQuery
        })
    }
}
</script>

<template>
    <div class="search-recipes">
        <input @keyup.enter="submitSearch" v-model="searchQuery.q"
            :placeholder="translate.searchQuery.search_box[route.params.lang]">
        <button @click="submitSearch">{{ translate.searchQuery.button[route.params.lang] }}</button>
    </div>
</template>
