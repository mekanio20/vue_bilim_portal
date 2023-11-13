import { createStore } from 'vuex'
export default createStore({
    state: {
        user: '',
        token: '',
        authStatus: false,
    },
    getters: {
        _isAuthenticated: state => state.user != null,
        _getCurrentUser(state) {
            const user = state.user
            delete user?.password
            return user
        }
    },
    mutations: {
        setUser(state, user) { state.user = user },
        setToken(state, token) { state.token = token },
        setAuth(state, auth) { state.authStatus = auth },
        //
        logoutUser(state) { state.user = null }
    }
})