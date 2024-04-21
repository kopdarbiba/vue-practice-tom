<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import sourceData from '../../../data.json';
import LanguageManager from './LanguageManager.vue'

const router = useRouter()
const route = useRoute()

const checkedMeals = ref()
if (!route.query.meal) {
    checkedMeals.value = { "meal": [] }
} else {
    checkedMeals.value = { "meal": route.query.meal }
}

const submitMealSelector = () => {
    router.push({
        name: route.name,
        params: { lang: route.params.lang },
        query: {
            ...route.query,
            ...checkedMeals.value
        },
    });
}

</script>

<template>
    <div class="meal-selector">
        <li v-for="(value, key) in sourceData.meal" :key="key">
            <input @change="submitMealSelector" type="checkbox" :value="key" v-model="checkedMeals.meal">
            <LanguageManager :lv="value.lv" :ru="value.ru" :en="value.en" />
        </li>
    </div>
</template>


<style local>
li {
    list-style-type: none;
}
</style>
