<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const isExpandedState = defineModel()

const buttonText = computed(() => (isExpandedState.value ? t('searchPage.checkBox.seeLess') : t('searchPage.checkBox.seeMore')))

function doToggle() {
    isExpandedState.value ? (isExpandedState.value = false) : (isExpandedState.value = true)
}

</script>

<template>
    <div>
        <span @click="doToggle" class="clickable">{{ buttonText }}</span>
    </div>
</template>



<style scoped>
.clickable {
    cursor: pointer;
    cursor: pointer;
    color: rgb(226, 190, 14);

    text-decoration: underline;
}

.clickable:hover {
    color: rgb(25, 0, 255);
}


.hidden-checkbox {
    display: none;
}
</style>
