<script setup>
import OrderSelector from '@/components/search/filters/OrderSelector.vue'
import SearchQueryBox from '@/components/search/filters/SearchQueryBox.vue'
import MinPrice from '@/components/search/filters/MinPrice.vue'
import MaxPrice from '@/components/search/filters/MaxPrice.vue'
import CheckBoxeCore from '@/components/search/CheckBoxeCore.vue'
import RecipeManager from '@/components/search/RecipeManager.vue'
</script>


<template>
    <div id="search-page">

        <div>
            <br>
            <OrderSelector />
            <br>
            <SearchQueryBox />
            <br>
            <MinPrice />
            <MaxPrice />
            <br>
            <CheckBoxeCore />
        </div>
        <div>
            <RecipeManager />
        </div>
    </div>
</template>


<style scoped>
#search-page {
    display: grid;
    grid-template-columns: 1fr 3fr;

}
</style>
