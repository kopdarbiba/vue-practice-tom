<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import FormCheckBox from '@/components/search/FormCheckBoxItem.vue'


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
    },
    dataFromStorage: {
        type: Object,
        required: true
    }
});


const selectedSectionValues = ref(props.dataFromStorage[props.sectionName] ? props.dataFromStorage[props.sectionName] : [])


const emit = defineEmits(['collectSectionData'])
const collectSectionData = () => {
    emit('collectSectionData', props.sectionName, selectedSectionValues.value)

}

</script>

<template>
    <h2>{{ translatedSectionTitle }}</h2>
    <FormCheckBox v-for="itemFromData in sectionData" v-model="selectedSectionValues" :itemFromData="itemFromData.slug"
        :key="itemFromData.slug" :translatedLabel="itemFromData[locale]" @change="collectSectionData" />
    <br>

</template>
