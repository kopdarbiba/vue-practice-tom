<script setup>

const selectedCheckBoxes = defineModel('selectedCheckBoxes', { default: [] })
const props = defineProps({
    sectionData: {
        type: Array,
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
})

</script>


<template>
    <h2>{{ props.translatedSectionTitle }}</h2>
    <li v-for="(checkboxData, key) in props.sectionData" :key="key">
        <input type="checkbox" v-model="selectedCheckBoxes" :value=checkboxData.slug :id=checkboxData.slug
            v-bind="$attrs">
        {{ checkboxData[props.locale] }}
    </li>
    <br>
</template>
