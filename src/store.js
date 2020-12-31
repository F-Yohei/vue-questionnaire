import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state() {
        return {
            count: 1
        }
    },
    plugins: [createPersistedState()],
});


export default store;