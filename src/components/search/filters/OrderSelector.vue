<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLanguageStore } from '@/stores/language'
import translate from './translate.json'


const router = useRouter()
const route = useRoute()
const store = useLanguageStore()
const { orderSelectorTipTranslated } = storeToRefs(store)
const selectedOrder = ref(route.query.order || '')

const computedQuery = computed(() => {
    const rQ = { ...route.query }
    if (selectedOrder.value) {
        rQ.order = selectedOrder.value
    } else {
        delete rQ.order
    }
    return rQ
})

const submitOrdering = () => {
    router.push({
        name: route.name,
        params: { lang: route.params.lang },
        query: computedQuery.value
    });
};

const getOptionsTranslation = (key) => {
    return translate.orderSelector.options[key][route.params.lang]
}

</script>

<template>
    <div class="order-recipes">
        <select @change="submitOrdering" v-model="selectedOrder">
            <option v-for="(option, key) in translate.orderSelector.options" :key="option.id" :value="key">
                {{ orderSelectorTipTranslated }}: {{ getOptionsTranslation(key) }}
            </option>
        </select>
    </div>
</template>
