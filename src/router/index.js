import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import PersonalAbout from '../views/PersonalAbout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: PersonalAbout },
    // { path: '/about', component: AboutView }
  ]
});

export default router;
