import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

export default createStore({
    state: {
        isLoggedIn: false
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post(`${baseUrl}/api/login`, {
                    email: credentials.email,
                    password: credentials.password
                })

                if (response.status === 200) {
                    commit('login')
                } else {
                    throw new Error('Invalid email or password')
                }
            } catch (error) {
                throw new Error('Failed to login. Please try again later.')
            }
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                // perform any necessary cleanup here
                commit('logout')
                resolve()
            })
        }
    }
})