<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()

const order = ref('')
const searchQueryString = ref('')
const min = ref('')
const max = ref('')

const submitOrdering = () => {
    const newQuery = { ...route.query };
    newQuery.order = order.value,
        router.push({
            name: route.name,
            params: { lang: route.params.lang },
            query: newQuery
        })
}

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
    <div class="order-recipes">

        <select @change="submitOrdering" v-model="order">
            <option disabled value="">Select ordering</option>
            <option value="total_price">Price: Low to high</option>
            <option value="-total_price">Price: High to low</option>
            <option value="cooking_time">Cooking Time: Short to long</option>
            <option value="-cooking_time">Cooking Time: Long to short</option>
            <option value="servings">Servings: Low to high</option>
            <option value="-servings">Servings: High to low</option>
        </select>

    </div>
    <hr>
    <div class="search-recipes">
        <input @keyup.enter="submitSearch" v-model="searchQueryString" placeholder="Search recipe">
        <button @click="submitSearch">Search</button>

    </div>
    <hr>
    <div class="filter-recipes-by-price">
        <input @keyup.enter="submitPriceRange" type="number" v-model="min" placeholder="Min Price" />
        <input @keyup.enter="submitPriceRange" type="number" v-model="max" placeholder="Max Price" />
        <button @click="submitPriceRange">Go</button>
        Price range: {{ $route.query.minPrice || 0 }} to {{ $route.query.maxPrice ? $route.query.maxPrice : '&infin;' }}
    </div>
</template>
