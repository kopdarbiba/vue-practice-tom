<script setup>
import { ref, defineProps, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import MoreLessToggler from './MoreLessToggler.vue'
const { block, itemKey } = defineProps(['block', 'itemKey'])
const router = useRouter()
const route = useRoute()

const showLess = ref(true)
const itemArray = ref([])

if (route.query[itemKey]) {
    itemArray.value = !Array.isArray(route.query[itemKey]) ? [route.query[itemKey]] : route.query[itemKey]
}

const newQuery = computed(() => {
    return { [itemKey]: itemArray.value }
}
)

const filteredMeals = computed(() => {
    return showLess.value
        ? block.data.filter((t) => t.favorite)
        : block.data
})

const doToggle = () => {
    showLess.value = !showLess.value
}

const submitSelected = () => {
    router.push({
        name: route.name,
        params: { lang: route.params.lang },
        query: {
            ...route.query,
            ...newQuery.value
        },
    });
}

const selectedLang = computed(() => {
    return route.params.lang ? route.params.lang : 'lv'
})

</script>


<template>
    <h1>{{ block.title[selectedLang] }}</h1>
    <li v-for="(value, key) in filteredMeals" :key="key" :value="value">
        <input @change="submitSelected" type="checkbox" :value=value.slug v-model="itemArray">
        <label>{{ value[selectedLang] }}</label>
    </li>
    <MoreLessToggler @doToggle="doToggle" />

</template>