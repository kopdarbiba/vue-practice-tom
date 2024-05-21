<script setup>
import sourceData from '@/data';
import OrderSelector from '@/components/search/OrderSelector.vue';
import SearchQueryBox from '@/components/search/SearchQueryBox.vue';
import MinPrice from '@/components/search/MinPrice.vue';
import MaxPrice from '@/components/search/MaxPrice.vue';
import CheckBoxItem from '@/components/search/CheckBoxItem.vue';
</script>

<template>
    <div id="search-page-filters">
        <OrderSelector />
        <SearchQueryBox />
        <MinPrice />
        <MaxPrice />
        <CheckBoxItem v-for="(section, key) in sourceData" :key="key" :section="section" :sectionKey="key" />
    </div>
</template>
