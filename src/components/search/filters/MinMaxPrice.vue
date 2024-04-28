<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter()
const route = useRoute()

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
        <input @keyup.enter="submitPriceRange" type="number" v-model="priceMin"
            :placeholder="t('searchPage.priceFilter.minField')" />

        <input @keyup.enter="submitPriceRange" type="number" v-model="priceMax"
            :placeholder="t('searchPage.priceFilter.maxField')" />

        <button @click="submitPriceRange">{{ t('searchPage.priceFilter.button') }}</button>
    </div>
</template>
