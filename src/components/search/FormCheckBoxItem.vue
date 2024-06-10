<script setup>
const model = defineModel()

defineProps({
    itemFromData: {
        type: String,
        required: true
    },
    translatedLabel: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div>
        <input type="checkbox" :id="itemFromData" :value="itemFromData" v-model="model" />
        <label :for="itemFromData">{{ translatedLabel }}</label>
    </div>
</template>
