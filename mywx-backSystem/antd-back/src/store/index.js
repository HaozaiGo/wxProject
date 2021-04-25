// import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            userName: '',
            token:''
        }
    },
    mutations: {
        M_userName(state, newName) {
            state.userName = newName
        }
    },
    getters: {
        getUserName(state) {
            return state.userName
        }
    }
})
export default store;