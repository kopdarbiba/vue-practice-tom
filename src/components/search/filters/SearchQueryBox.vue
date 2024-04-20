<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'


const router = useRouter()
const route = useRoute()

const searchQueryString = ref(route.query.q)

const submitSearch = () => {
    const newQuery = { ...route.query };
    if (searchQueryString.value !== '') {
        newQuery.q = searchQueryString.value;
    } else {
        delete newQuery.q
    }
    router.push({
        name: route.name,
        params: { lang: route.params.lang },
        query: newQuery,
    });
}

</script>

<template>
    <div class="search-recipes">
        <input @keyup.enter="submitSearch" v-model="searchQueryString" placeholder="Search recipe">
        <button @click="submitSearch">Search</button>

    </div>
</template>