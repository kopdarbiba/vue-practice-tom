<script setup>

defineProps({
    translatedSearchBox: {
        type: String,
        required: true
    },
    formValuesStorage: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['collectSearchQuery'])

</script>


<template>
    <input :value="formValuesStorage.q" @change="emit('collectSearchQuery', 'q', $event.target.value)"
        :placeholder="translatedSearchBox" id="search-input">
</template>


<style scoped>
input {
    width: 100px;
}
</style>