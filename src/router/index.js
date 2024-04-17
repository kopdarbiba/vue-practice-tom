import { createWebHistory, createRouter } from 'vue-router'

const HomeView = () => import(/* webpackChunkName: 'home'*/ '../views/HomeView.vue')
const SearchView = () => import(/* webpackChunkName: 'search'*/ '../views/SearchView.vue')
const AboutView = () => import(/* webpackChunkName: 'about'*/ '../views/AboutView.vue')

const routes = [
  {
    path: '/:lang?',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/:lang?/search',
    component: SearchView,
    name: 'search'
  },
  { path: '/:lang?/about', name: 'about', component: AboutView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
