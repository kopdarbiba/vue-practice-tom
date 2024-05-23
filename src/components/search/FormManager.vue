<script setup>
// import { useSubmitForm } from '@/composables/submitForm'
// const { submitFilter } = useSubmitForm('minPrice', formValues)
import sourceData from '@/data';
import SetOrder from '@/components/search/FormSetOrder.vue';
import FormSearchQuery from '@/components/search/FormSearchQuery.vue';
import FormPriceRange from '@/components/search/FormPriceRange.vue';
import FormCheckBoxSection from '@/components/search/FormCheckBoxSection.vue';
import { useI18n } from 'vue-i18n'
const { messages, locale } = useI18n()



import { ref } from 'vue'
const formValues = ref({})
const submitForm = () => console.log("FORM SUBMITED!", formValues.value)
</script>

<template>
    <div id="search-page-filters">
        <ul>
            <li>
                <FormSearchQuery @keyup.enter="submitForm" v-model="formValues.q"
                    :translatedSearchBox="messages[locale].searchPage.searchQuery.search_box" />
            </li>
            <li>
                <SetOrder @change="submitForm" v-model="formValues.order"
                    :translatedOptions="messages[locale].searchPage.orderSelector.options" />

            </li>
            <li>
                <FormPriceRange @keyup.enter="submitForm" v-model:min-price="formValues.minPrice"
                    v-model:max-price="formValues.maxPrice"
                    :translatedMinPrice="messages[locale].searchPage.priceFilter.minField"
                    :translatedMaxPrice="messages[locale].searchPage.priceFilter.maxField" />
            </li>
            <li>
                <FormCheckBoxSection v-for="(section, key) in sourceData" @change="submitForm" :key="key"
                    :sectionData="section.data" :translatedSectionTitle="section.title[locale]" :locale="locale"
                    v-model="formValues[key]" />
            </li>
        </ul>
    </div>
</template>
