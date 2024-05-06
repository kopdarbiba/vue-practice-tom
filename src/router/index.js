import { createWebHistory, createRouter } from 'vue-router'

const HomeView = () => import(/* webpackChunkName: 'home'*/ '../views/HomeView.vue')
const SearchView = () => import(/* webpackChunkName: 'search'*/ '../views/SearchView.vue')
const AboutView = () => import(/* webpackChunkName: 'about'*/ '../views/AboutView.vue')

const routes = [
  {
    path: '/:lang?',
    component: HomeView,
    name: 'home',
    meta: {
      baseUrls: {
        lv: 'http://localhost:8000/api/recipes/',
        en: 'http://localhost:8000/api/recipes/?lang=en',
        ru: 'http://localhost:8000/api/recipes/?lang=ru'
      }
    }
  },
  {
    path: '/:lang?/search',
    component: SearchView,
    name: 'search',
    meta: {
      baseUrls: {
        lv: 'http://localhost:8000/api/recipes/search/',
        en: 'http://localhost:8000/api/recipes/search/?lang=en',
        ru: 'http://localhost:8000/api/recipes/search/?lang=ru'
      }
    }
  },
  {
    path: '/:lang?/about',
    name: 'about',
    component: AboutView,
    meta: {
      baseUrls: {
        lv: 'http://localhost:8000/api/recipes/about/',
        en: 'http://localhost:8000/api/recipes/about/?lang=en',
        ru: 'http://localhost:8000/api/recipes/about/?lang=ru'
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
