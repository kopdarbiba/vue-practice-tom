<script setup>

defineProps({
    translatedMinPrice: {
        type: String,
        required: true
    },
    translatedMaxPrice: {
        type: String,
        required: true
    },
    formValuesStorage: {
        type: Object,
        required: true
    }
});
const emit = defineEmits(['collectPriceRange'])

</script>

<template>

    <input type="number" :value="formValuesStorage.minPrice"
        @change="emit('collectPriceRange', 'minPrice', $event.target.value)" :placeholder="translatedMinPrice"
        v-bind="$attrs" />
    <input type="number" :value="formValuesStorage.maxPrice"
        @change="emit('collectPriceRange', 'maxPrice', $event.target.value)" :placeholder="translatedMaxPrice"
        v-bind="$attrs" />

</template>

<style scoped>
input {
    width: 50px;
}
</style>