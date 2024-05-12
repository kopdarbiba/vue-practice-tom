<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'


const { messages, locale } = useI18n()
const router = useRouter()
const route = useRoute()
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

</script>

<template>

    <div class="order-recipes">
        <select @change="submitOrdering" v-model="selectedOrder" id="order-select">
            <option v-for="(option, key) in messages[locale].searchPage.orderSelector.options" :key="option.id"
                :value="key">
                {{ option }}
            </option>
        </select>
    </div>

</template>
