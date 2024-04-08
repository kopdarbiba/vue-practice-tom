<template>
  <p v-if="loading">
    <LoadingIndicator />
  </p>
  <div v-else>
    <HomeRecipeItem v-for="recipe in apiRecipesData" :key="recipe.id" :recipe="recipe" :isMockedData="isMockedData" />
  </div>
</template>


<script>
import LoadingIndicator from '../helpers/LoadingIndicator.vue'
import HomeRecipeItem from './HomeRecipeItem.vue'


export default {
  components: {
    LoadingIndicator,
    HomeRecipeItem,
  },
  data() {
    return {
      loading: true,
      isMockedData: false,
      mockRecipesData: [
        {
          "url": "http://localhost:8000/api/recipes/3/?lang=lv",
          "id": 3,
          "title": "cūkgaļas kotletes",
          "images": [
            {
              "generate_presigned_url_for_thumbnail": "https://bildes-receptem.s3.amazonaws.com/recipe_images/thumbnails/thumb_recipe_image_8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATZWEGO4GE6AA2V5C%2F20240408%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240408T041534Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e87345e67ba3ebe25e5ea85d5a4b02b3b78f4212ebafadcdd0fdfa7daaa75649",
              "generate_presigned_url_for_image": "https://bildes-receptem.s3.amazonaws.com/recipe_images/originals/recipe_image_8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATZWEGO4GE6AA2V5C%2F20240408%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240408T041534Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ecd2c1223694c44b4ec7f1d69dd145761a58cd1ae13b20f68da29fa851fb04b1"
            }
          ]
        },
        {
          "url": "http://localhost:8000/api/recipes/4/?lang=lv",
          "id": 4,
          "title": "Cūkgaļas kotletes dārzeņu mērcē",
          "images": []
        },
        {
          "url": "http://localhost:8000/api/recipes/5/?lang=lv",
          "id": 5,
          "title": "Sautēti kabači",
          "images": []
        },
      ],
      apiRecipesData: []
    }
  },
  methods: {
    async fetchRecipes() {
      try {
        this.loading = true
        const response = await fetch('http://localhost:8000/api/recipes/?lang=lv');
        // const response = await fetch('http://13.49.33.156/api/recipes/search/?lang=lv&ordering=total_price');
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        this.apiRecipesData = data.results;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchRecipes()
  },
}
</script>
