<script setup>
const minPrice = defineModel('minPrice')
const maxPrice = defineModel('maxPrice')

const props = defineProps({
    translatedMinPrice: {
        type: String,
        required: true
    },

    translatedMaxPrice: {
        type: String,
        required: true
    }
});

</script>

<template>
    <input type="number" v-model="minPrice" :placeholder="props.translatedMinPrice" v-bind="$attrs" />
    <input type="number" v-model="maxPrice" :placeholder="props.translatedMaxPrice" v-bind="$attrs" />
</template>

<style scoped>
input {
    width: 50px;
}
</style>