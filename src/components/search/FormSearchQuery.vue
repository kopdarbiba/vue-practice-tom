<script setup>
const searchQuery = defineModel('searchQuery')

defineProps({
    translatedSearchBox: {
        type: String,
        required: true
    }
})

</script>


<template>
    <input v-model="searchQuery" :placeholder="translatedSearchBox" id="search-input">
</template>


<style scoped>
input {
    width: 100px;
}
</style>