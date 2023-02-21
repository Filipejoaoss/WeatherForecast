import { createStore } from 'vuex'

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
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                // perform any necessary cleanup here
                commit('logout')
                resolve()
            })
        }
    }
})