<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const route = useRoute()
const { t } = useI18n()
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
        <input @keyup.enter="submitSearch" v-model="searchBoxInput"
            :placeholder="t('searchPage.searchQuery.search_box')">
        <button @click="submitSearch">{{ t('searchPage.searchQuery.button') }}</button>
    </div>
</template>
