import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue';
import PersonalAbout from '../views/PersonalAbout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/personal-about', component: PersonalAbout }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
