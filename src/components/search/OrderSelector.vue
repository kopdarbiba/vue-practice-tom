<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useSubmitForm } from '@/composables/submitForm'

const { messages, locale } = useI18n()

const formValues = ref('')
const { submitFilter } = useSubmitForm('order', formValues)

</script>


<template>

    <div class="order-recipes">
        <select @change="submitFilter" v-model="formValues" id="order-select">
            <option v-for="(option, key) in messages[locale].searchPage.orderSelector.options" :key="option.id"
                :value="key">
                {{ option }}
            </option>
        </select>
    </div>

</template>
