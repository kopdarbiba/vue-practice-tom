<script setup>
import sourceData from '@/data'
import FormSearchQuery from '@/components/search/FormSearchQuery.vue'
import FormSetOrder from '@/components/search/FormSetOrder.vue'
import FormPriceRange from '@/components/search/FormPriceRange.vue'
import FormCheckBoxSection from '@/components/search/FormCheckBoxSection.vue'

import { useI18n } from 'vue-i18n'
const { messages, locale } = useI18n()

import { ref, watch } from 'vue'
import { useStorage } from '@vueuse/core'
const storedQueryParams = useStorage('query-params', {}, sessionStorage)

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const _queryParams = ref({ ...storedQueryParams.value })

watch(storedQueryParams, (newValue) => {
    _queryParams.value = { ...newValue }
})

const submit = () => {
    removeParamsWithNoValue()
    router.push({
        name: route.name,
        params: { lang: route.params.lang },
        query: _queryParams.value
    })
}

function removeParamsWithNoValue() {
    for (const k in _queryParams.value) {
        const v = _queryParams.value[k]
        if (v == '') {
            delete _queryParams.value[k]
        }
    }
}
</script>

<template>
    <ul @keyup.enter="submit">
        <li>
            <FormSearchQuery v-model="_queryParams.q"
                :translatedSearchBox="messages[locale].searchPage.searchQuery.search_box" />
        </li>

        <li>
            <FormPriceRange v-model:min-price="_queryParams.minPrice" v-model:max-price="_queryParams.maxPrice"
                :translatedMinPrice="messages[locale].searchPage.priceFilter.minField"
                :translatedMaxPrice="messages[locale].searchPage.priceFilter.maxField" />
        </li>
        <li>
            <FormSetOrder v-model="_queryParams.order" @change="submit"
                :translatedOptions="messages[locale].searchPage.orderSelector.options" />
        </li>
        <li>
            <FormCheckBoxSection v-for="(section, key) in sourceData" :key="key" v-model="_queryParams[key]"
                @change="submit" :sectionName="key" :sectionData="section.data"
                :translatedSectionTitle="section.title[locale]" :locale="locale" />
        </li>
    </ul>

</template>
