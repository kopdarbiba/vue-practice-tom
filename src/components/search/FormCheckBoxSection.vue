<script setup>
import FormCheckBox from '@/components/search/FormCheckBoxItem.vue'
import SectionToggler from '@/components/search/FormCheckBoxToggler.vue'
import { ref, computed } from 'vue'

const model = defineModel({ default: [] })
const props = defineProps({
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

const isExpandedState = ref(false)
const filteredData = computed(() => {
    return isExpandedState.value ? props.sectionData : props.sectionData.filter((t) => t.favorite)
})

</script>

<template>
    <h3>{{ translatedSectionTitle }}</h3>
    <FormCheckBox v-for="itemFromData in filteredData" v-model="model" :itemFromData="itemFromData.slug"
        :key="itemFromData.slug" :translatedLabel="itemFromData[locale]" v-bind="$attrs" />
    <SectionToggler v-model="isExpandedState" />
    <br>

</template>
