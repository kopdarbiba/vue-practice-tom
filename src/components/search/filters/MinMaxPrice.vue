<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import translate from './translate.json';

const router = useRouter()
const route = useRoute()

const priceMin = ref(route.query.minPrice || '')
const priceMax = ref(route.query.maxPrice || '')

const submitPriceRange = () => {
    const newQuery = { ...route.query };

    if (!isNaN(priceMin.value) && priceMin.value !== '') {
        newQuery.minPrice = priceMin.value;
    } else {
        delete newQuery.minPrice;
    }

    if (!isNaN(priceMax.value) && priceMax.value !== '') {
        newQuery.maxPrice = priceMax.value;
    } else {
        delete newQuery.maxPrice;
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
        <input @keyup.enter="submitPriceRange" type="number" v-model="priceMin"
            :placeholder="translate.priceFilter.minField[route.params.lang]" />
        <input @keyup.enter="submitPriceRange" type="number" v-model="priceMax"
            :placeholder="translate.priceFilter.maxField[route.params.lang]" />
        <button @click="submitPriceRange">{{ translate.priceFilter.button[route.params.lang] }}</button>
    </div>
</template>
