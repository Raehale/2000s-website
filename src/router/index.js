import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue';
import PersonalAbout from '../views/PersonalAbout.vue';
import ProfessionalAbout from '../views/ProfessionalAbout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/personal-about', component: PersonalAbout },
  { path: '/professional-about', component: ProfessionalAbout }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
