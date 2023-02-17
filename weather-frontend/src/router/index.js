import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../components/HomePage.vue";
import WeatherPage from "../components/WeatherPage.vue";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import NotFoundPage from "../components/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/weather',
            name: 'WeatherPage',
            component: WeatherPage
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage
        }
    ]
})

export default router