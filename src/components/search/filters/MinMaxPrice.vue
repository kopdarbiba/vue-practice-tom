<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { storeToRefs } from 'pinia'

const router = useRouter()
const route = useRoute()
const store = useLanguageStore()
const { priceMinTranslated, priceMaxTranslated, priceButtonTranslated } = storeToRefs(store)

const priceMin = ref(route.query.minPrice)
const priceMax = ref(route.query.maxPrice)

const computedQuery = computed(() => {
    const rQ = { ...route.query };

    if (!isNaN(priceMin.value) && priceMin.value) {
        rQ.minPrice = priceMin.value;
    } else {
        delete rQ.minPrice;
    }

    if (!isNaN(priceMax.value) && priceMax.value) {
        rQ.maxPrice = priceMax.value;
    } else {
        delete rQ.maxPrice;
    }
    return rQ
})

const submitPriceRange = () => {
    router.push({
        name: route.name,
        params: { lang: route.params.lang },
        query: computedQuery.value
    });
};
</script>

<template>
    <div class="filter-recipes-by-price">
        <input @keyup.enter="submitPriceRange" type="number" v-model="priceMin" :placeholder="priceMinTranslated" />

        <input @keyup.enter="submitPriceRange" type="number" v-model="priceMax" :placeholder="priceMaxTranslated" />

        <button @click="submitPriceRange">{{ priceButtonTranslated }}</button>
    </div>
</template>
