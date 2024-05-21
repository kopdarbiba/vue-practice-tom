<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useSubmitForm } from '@/composables/submitForm'


const { t } = useI18n()
const formValues = ref()
const { submitFilter } = useSubmitForm('q', formValues)

</script>


<template>

    <div class="search-recipes">
        <input @keyup.enter="submitFilter" v-model="formValues" :placeholder="t('searchPage.searchQuery.search_box')"
            id="search-input">
        <!-- <button @click="submitFilter">{{ t('searchPage.searchQuery.button') }}</button> -->
    </div>

</template>


<style scoped>
input {
    width: 100px;
}
</style>