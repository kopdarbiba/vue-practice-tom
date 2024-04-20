<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'


const router = useRouter()
const route = useRoute()

const order = ref('')

const submitOrdering = () => {
    const newQuery = { ...route.query };
    newQuery.order = order.value,
        router.push({
            name: route.name,
            params: { lang: route.params.lang },
            query: newQuery
        })
}
</script>

<template>
    <div class="order-recipes">
        <select @change="submitOrdering" v-model="order">
            <option disabled value="">Select ordering</option>
            <option value="total_price">Price: Low to high</option>
            <option value="-total_price">Price: High to low</option>
            <option value="cooking_time">Cooking Time: Short to long</option>
            <option value="-cooking_time">Cooking Time: Long to short</option>
            <option value="servings">Servings: Low to high</option>
            <option value="-servings">Servings: High to low</option>
        </select>
    </div>

</template>