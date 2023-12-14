import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
AOS.init();
import 'aos/dist/aos.css';
import 'animate.css';
// fontawesome import
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
