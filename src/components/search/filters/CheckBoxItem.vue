<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useSubmitForm } from '@/composables/submitForm'

const { t, locale } = useI18n()

const { section, sectionKey } = defineProps(['section', 'sectionKey'])
const formValues = ref([])
const { submitFilter } = useSubmitForm(sectionKey, formValues)

const showLess = ref(true)
const doToggle = () => {
    showLess.value = !showLess.value
}

const filteredSection = computed(() => {
    return showLess.value
        ? section.data.filter((t) => t.favorite)
        : section.data
})

const buttonText = computed(() => showLess.value ? t('searchPage.checkBox.seeMore') : t('searchPage.checkBox.seeLess'))

</script>


<template>

    <h1>{{ section.title[locale] }}</h1>
    <li v-for="(value, key) in filteredSection" :key="key">
        <input @change="submitFilter" type="checkbox" :value=value.slug v-model="formValues" :id=value.slug>
        {{ value[locale] }}
    </li>
    <span @click="doToggle" class="clickable">{{ buttonText }}</span>

</template>


<style scoped>
.clickable {
    cursor: pointer;
}

.clickable:hover {
    color: blue;
}
</style>