import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@popperjs/core";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/scss/bootstrap.scss";

createApp(App).use(router).mount('#app')
