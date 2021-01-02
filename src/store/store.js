import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
    state() {
        return {
            gender: '',
            year: '',
            month: '',
            day: '',
            question1: '',
            question2: '',
            question3: '',
            consultationContent: ''
        }
    },
    getters,
    mutations,
    actions
});


export default store;