import './style.css';
// import './assets/variables.css';
import router from './router';
import { createApp } from 'vue';
import App from './App.vue';

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faHandSpock, faPenRuler, faHeadphones, faTree, faBookOpen, faMountain } from '@fortawesome/free-solid-svg-icons';
// library.add(faHandSpock, faPenRuler, faHeadphones, faTree, faBookOpen, faMountain);

const vueApp = createApp(App);

// vueApp.component('font-awesome-icon', FontAwesomeIcon);

vueApp.use(router);
vueApp.mount('#app');
