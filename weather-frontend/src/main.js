import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/index.js";
import {Toaster} from "@meforma/vue-toaster";

import './style.css'


const app = createApp(App)

app.use(Toaster, {
    position: 'top',
    timeout: 2000,
    pauseOnHover: true
})

app.provide('toast', app.config.globalProperties.$toast);

app.use(router)
app.use(store)
app.mount('#app')