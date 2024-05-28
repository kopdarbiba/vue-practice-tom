<script setup>

import sourceData from '@/data'
import SetOrder from '@/components/search/FormSetOrder.vue'
import FormSearchQuery from '@/components/search/FormSearchQuery.vue'
import FormPriceRange from '@/components/search/FormPriceRange.vue'
import FormCheckBoxSection from '@/components/search/FormCheckBoxSection.vue'
import { useQueryStringBuilder } from '@/composables/queryStringBuilder'

import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { messages, locale } = useI18n()

import { useSessionStorage } from '@vueuse/core'
const formValuesStorage = useSessionStorage('form-data-values', {})


const tempCollectedData = ref({})
const submitForm = () => {
    for (const k in tempCollectedData.value) {
        const v = tempCollectedData.value[k]
        if (v != '') {
            formValuesStorage.value[k] = v
        } else {
            delete formValuesStorage.value[k]
        }
    }
    tempCollectedData.value = {}
    updateQueryString(formValuesStorage.value)

}

const queryStringStorage = useSessionStorage('query-string', [])
function updateQueryString(params) {
    queryStringStorage.value = useQueryStringBuilder(params)
}

function checkboxDataManager(k, v) {
    tempCollectedData.value[k] = v
    submitForm()
}
function priceRangeManager(k, v) {
    tempCollectedData.value[k] = v
}
function searchFieldManager(k, v) {
    tempCollectedData.value[k] = v
}
function orderSelectorManager(k, v) {
    tempCollectedData.value[k] = v
    submitForm()
}

</script>

<template>
    <ul @keyup.enter="submitForm()">
        <li>
            <FormSearchQuery :formValuesStorage="formValuesStorage" @collectSearchQuery="searchFieldManager"
                :translatedSearchBox="messages[locale].searchPage.searchQuery.search_box" />
        </li>
        <li>
            <SetOrder :formValuesStorage="formValuesStorage" @collectOrderingData="orderSelectorManager"
                :translatedOptions="messages[locale].searchPage.orderSelector.options" />
        </li>
        <li>
            <FormPriceRange :formValuesStorage="formValuesStorage" @collectPriceRange="priceRangeManager"
                :translatedMinPrice="messages[locale].searchPage.priceFilter.minField"
                :translatedMaxPrice="messages[locale].searchPage.priceFilter.maxField" />
        </li>
        <li>
            <FormCheckBoxSection v-for="(section, key) in sourceData" :key="key" :sectionData="section.data"
                :sectionName="key" :translatedSectionTitle="section.title[locale]" :locale="locale"
                :dataFromStorage="formValuesStorage" @collectSectionData="checkboxDataManager" />
        </li>

    </ul>

</template>
