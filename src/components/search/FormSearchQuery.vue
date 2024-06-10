<script setup>
const model = defineModel()
defineProps({
    translatedSearchBox: {
        type: String,
        required: true
    }
});

</script>

<template>
    <input v-model="model" :placeholder="translatedSearchBox" id="search-input" />
</template>

<style scoped>
input {
    width: 100px;
}
</style>