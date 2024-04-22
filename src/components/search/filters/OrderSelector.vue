<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import translate from './translate.json'

const router = useRouter()
const route = useRoute()

const selectedOrder = ref(route.query.order || '')

const orderOptions = ref([
    { value: '', text: 'favorite' },
    { value: 'total_price', text: 'price_ascend' },
    { value: '-total_price', text: 'price_desc' },
    { value: 'cooking_time', text: 'cooking_time_ascend' },
    { value: '-cooking_time', text: 'cooking_time_desc' },
    { value: 'servings', text: 'servings_ascend' },
    { value: '-servings', text: 'servings_desc' }
])

const submitOrdering = () => {
    if (selectedOrder.value) {
        router.push({
            name: route.name,
            params: { lang: route.params.lang },
            query: {
                ...route.query,
                order: selectedOrder.value
            }
        });
    } else {
        let newQuery = { ...route.query }
        delete newQuery.order
        router.push({
            name: route.name,
            params: { lang: route.params.lang },
            query: newQuery
        });
    }
}

const getOptionsTranslation = (key) => {
    return translate.orderSelector.options[key][route.params.lang]
}

const getPlaceholderTranslation = () => {
    return translate.orderSelector.placeholder[route.params.lang]
}
</script>

<template>
    <div class="order-recipes">
        <select @change="submitOrdering" v-model="selectedOrder">
            <option v-for="option in orderOptions" :key="option.id" :value="option.value">
                {{ getPlaceholderTranslation() }}: {{ getOptionsTranslation(option.text) }}
            </option>
        </select>
    </div>
</template>
