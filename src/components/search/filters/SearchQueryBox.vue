<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'

const store = useLanguageStore()
const { searchBoxTranslated, searchButtonTranslated } = storeToRefs(store)

const router = useRouter()
const route = useRoute()

const searchBoxInput = ref()

const computeNewQuery = computed(() => {
    if (searchBoxInput.value) {
        return { ...route.query, "q": searchBoxInput.value }
    } else {
        const routeQuery = { ...route.query }
        delete routeQuery.q
        return routeQuery
    }
})

const submitSearch = () => {
    router.push({
        name: route.name,
        params: { lang: route.params.lang },
        query: computeNewQuery.value
    })
}
</script>

<template>
    <div class="search-recipes">
        <input @keyup.enter="submitSearch" v-model="searchBoxInput" :placeholder="searchBoxTranslated">
        <button @click="submitSearch">{{ searchButtonTranslated }}</button>
    </div>
</template>
