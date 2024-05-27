<script setup>

defineProps({
    translatedOptions: {
        type: Object,
        required: true
    },
    formValuesStorage: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['collectOrderingData'])


</script>


<template>

    <select :value="formValuesStorage.order" @change="emit('collectOrderingData', 'order', $event.target.value)"
        id="order-select">
        <option v-for="(option, key) in translatedOptions" :key="option.id" :value="key">
            {{ option }}
        </option>
    </select>

</template>
