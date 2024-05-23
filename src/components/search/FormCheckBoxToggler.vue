<script setup>
const buttonText = computed(() => showLess.value ? t('searchPage.checkBox.seeMore') : t('searchPage.checkBox.seeLess'))
const doToggle = () => {
    showLess.value = !showLess.value
}

// const showLess = ref(true)

// const filteredSection = computed(() => {
//     return showLess.value
//         ? section.data.filter((t) => t.favorite)
//         : section.data
// })
</script>

<template>
    <span @click="doToggle" class="clickable">{{ buttonText }}</span>

</template>

<style scoped>
.clickable {
    cursor: pointer;
}

.clickable:hover {
    color: blue;
}
</style>