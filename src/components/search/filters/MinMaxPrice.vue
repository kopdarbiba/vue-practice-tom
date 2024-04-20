<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'


const router = useRouter()
const route = useRoute()

const min = ref(route.query.minPrice)
const max = ref(route.query.maxPrice)

const submitPriceRange = () => {
    const newQuery = { ...route.query };
    if (min.value !== '') {
        newQuery.minPrice = min.value;
    } else {
        delete newQuery.minPrice
    }

    if (max.value !== '') {
        newQuery.maxPrice = max.value;
    } else {
        delete newQuery.maxPrice
    }
    router.push({
        name: route.name,
        params: { lang: route.params.lang },
        query: newQuery,
    });
};

</script>

<template>
    <div class="filter-recipes-by-price">
        <input @keyup.enter="submitPriceRange" type="number" v-model="min" placeholder="Min Price" />
        <input @keyup.enter="submitPriceRange" type="number" v-model="max" placeholder="Max Price" />
        <button @click="submitPriceRange">Go</button>
    </div>

</template>