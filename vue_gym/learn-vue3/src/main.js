import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
// AppCard.vue 전역등록 -> 전역은 어디에서든지 사용할 수 있음 !!
// import AppCard from './components/AppCard.vue';

const app = createApp(App);

// app.component('AppCard', AppCard);

app.provide('app-message', 'app message입니다');

// 라이브러리 provide 하기
app.config.globalProperties.msg = 'hello';
app.provide('msg', 'hello msg');
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
