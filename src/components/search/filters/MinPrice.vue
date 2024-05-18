<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useSubmitForm } from '@/composables/submitForm'

const { t } = useI18n()

const formValues = ref()
const { submitFilter } = useSubmitForm('minPrice', formValues)

</script>


<template>
    <div class="min-price">

        <input @keyup.enter="submitFilter" type="number" v-model="formValues"
            :placeholder="t('searchPage.priceFilter.minField')" id="min-price-input">

    </div>

</template>


<style scoped>
input {
    width: 50px;
}
</style>