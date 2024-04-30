<script setup>
import OrderSelector from './filters/OrderSelector.vue'
import SearchQueryBox from './filters/SearchQueryBox.vue'
import MinMaxPrice from './filters/MinMaxPrice.vue'
import checkBoxeManager from './checkBoxeManager.vue'

import { useApiBaseUrlConstructor } from '../../composables/useApiBaseUrlConstructor'
// import { useFetch } from './../../composables/fetch'

const { apiBaseUrl } = useApiBaseUrlConstructor()

</script>

<template>
    <p>Constructed Base URL: {{ apiBaseUrl }}</p>
    <br>
    <OrderSelector />
    <br>
    <SearchQueryBox />
    <br>
    <MinMaxPrice />
    <br>
    <checkBoxeManager />
</template>
