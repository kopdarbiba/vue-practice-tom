<script setup>
const model = defineModel()

defineProps({
    translatedOptions: {
        type: Object,
        required: true
    }
})

</script>


<template>

    <select v-model="model">
        <option v-for="(option, key) in translatedOptions" :key="option.id" :value="key">
            {{ option }}
        </option>
    </select>

</template>
