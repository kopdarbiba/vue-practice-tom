<script setup>
import LanguageManager from './LanguageManager.vue'
defineProps(['value'])
defineEmits(['submitMealSelector'])
const checkedMeals = defineModel()

</script>


<template>
    <li>
        <input @change="$emit('submitMealSelector')" type="checkbox" :value="value.slug" v-model="checkedMeals">
        <LanguageManager :lv="value.lv" :ru="value.ru" :en="value.en" />
    </li>

</template>

<style local>
li {
    list-style-type: none;
}
</style>