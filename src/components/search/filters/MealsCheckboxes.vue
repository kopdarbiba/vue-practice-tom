<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import sourceData from '../../../data.json';
import CheckBoxItem from './CheckBoxItem.vue'
import MoreLessToggler from './MoreLessToggler.vue'


const router = useRouter()
const route = useRoute()

const dataArray = sourceData.meal
const showLess = ref(true)
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

const filteredMeals = computed(() => {
    return showLess.value
        ? dataArray.filter((t) => t.trending)
        : dataArray
})

const doToggle = () => {
    showLess.value = !showLess.value
}
</script>

<template>
    <div class="meal-selector">
        <CheckBoxItem v-for="(value, key) in filteredMeals" :key="key" :value="value" v-model="checkedMeals.meal"
            @submitMealSelector="submitMealSelector" />
        <MoreLessToggler @doToggle="doToggle" />
    </div>
</template>
