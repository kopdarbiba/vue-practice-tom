<script setup>
import FormCheckBox from '@/components/search/FormCheckBoxItem.vue'

const model = defineModel({ default: [] })

defineProps({
    sectionData: {
        type: Array,
        required: true
    },
    sectionName: {
        type: String,
        required: true
    },
    translatedSectionTitle: {
        type: String,
        required: true
    },
    locale: {
        type: String,
        required: true
    }
});

</script>

<template>

    <h3>{{ translatedSectionTitle }}</h3>
    <FormCheckBox v-for="itemFromData in sectionData" v-model="model" :itemFromData="itemFromData.slug"
        :key="itemFromData.slug" :translatedLabel="itemFromData[locale]" v-bind="$attrs" />
    <br>

</template>
