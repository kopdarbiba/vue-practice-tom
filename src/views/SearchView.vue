<script setup>
import OrderSelector from '@/components/search/filters/OrderSelector.vue'
import SearchQueryBox from '@/components/search/filters/SearchQueryBox.vue'
import MinPrice from '@/components/search/filters/MinPrice.vue'
import MaxPrice from '@/components/search/filters/MaxPrice.vue'
import CheckBoxeFieldLooper from '@/components/search/CheckBoxeFieldLooper.vue'
import SearchRecipeManager from '@/components/search/SearchRecipeManager.vue'
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
      <CheckBoxeFieldLooper />
    </div>
    <div>
      <SearchRecipeManager />
    </div>
  </div>
</template>


<style scoped>
#search-page {
  display: grid;
  grid-template-columns: 1fr 3fr;

}
</style>
