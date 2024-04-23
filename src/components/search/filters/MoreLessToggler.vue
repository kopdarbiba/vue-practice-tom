<script setup>
import { ref, computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['doToggle'])
const store = useLanguageStore()
const { lessTogglerTranslated, moreTogglerTranslated } = storeToRefs(store)


const isVisible = ref(true);
const buttonText = computed(() => isVisible.value ? moreTogglerTranslated : lessTogglerTranslated);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
    emit('doToggle');
};

</script>

<template>
    <span @click="toggleVisibility" class="clickable">{{ buttonText }}</span>
</template>

<style scoped>
.clickable {
    cursor: pointer;
}

.clickable:hover {
    color: blue;
}
</style>
