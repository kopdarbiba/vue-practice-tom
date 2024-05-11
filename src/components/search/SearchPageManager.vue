<script setup>
import OrderSelector from './filters/OrderSelector.vue'
import SearchQueryBox from './filters/SearchQueryBox.vue'
import MinMaxPrice from './filters/MinMaxPrice.vue'
import checkBoxeManager from './checkBoxeManager.vue'
import apiDataManager from '@/components/search/apiDataManager.vue'



</script>

<template>
    <div id="search-page">

        <div>
            <br>
            <OrderSelector />
            <br>
            <SearchQueryBox />
            <br>
            <MinMaxPrice />
            <br>
            <checkBoxeManager />
        </div>
        <div>
            <apiDataManager />
        </div>
    </div>
</template>

<style scoped>
#search-page {
    display: grid;
    grid-template-columns: 1fr 3fr;

}
</style>
