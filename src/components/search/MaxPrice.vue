<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useSubmitForm } from '@/composables/submitForm'

const { t } = useI18n()

const formValues = ref()
const { submitFilter } = useSubmitForm('maxPrice', formValues)

</script>


<template>

    <input @keyup.enter="submitFilter" type="number" v-model="formValues"
        :placeholder="t('searchPage.priceFilter.maxField')" id="max-price-input" />

    <button @click="submitFilter">{{ t('searchPage.priceFilter.button') }}</button>

</template>


<style scoped>
input {
    width: 50px;
}
</style>