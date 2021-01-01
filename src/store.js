import { createStore } from 'vuex';

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
    getters: {
        gender: state => state.gender,
        year: state => state.year,
        month: state => state.month,
        day: state => state.day,
        question1: state => state.question1,
        question2: state => state.question2,
        question3: state => state.question3,
        consultationContent: state => state.consultationContent
    },
    mutations: {
        updateGender(state, newGender) {
            state.gender = newGender;
        },
        updateYear(state, newYear) {
            state.year = newYear;
        },
        updateMonth(state, newMonth) {
            state.month = newMonth;
        },
        updateDay(state, newDay) {
            state.day = newDay;
        },
        updateQuestion1(state, newQuestion1) {
            state.question1 = newQuestion1;
        },
        updateQuestion2(state, newQuestion2) {
            state.question2 = newQuestion2;
        },
        updateQuestion3(state, newQuestion3) {
            state.question3 = newQuestion3;
        },
        updateConsultationContent(state, newConsultationContent) {
            state.consultationContent = newConsultationContent;
        }
    },
    actions: {
        updateGender({ commit }, newGender) {
            commit('updateGender', newGender);
        },
        updateYear({ commit }, newYear) {
            commit('updateYear', newYear);
        },
        updateMonth({ commit }, newMonth) {
            commit('updateMonth', newMonth);
        },
        updateDay({ commit }, newDay) {
            commit('updateDay', newDay);
        },
        updateQuestion1({ commit }, newQuestion1) {
            commit('updateQuestion1', newQuestion1);
        },
        updateQuestion2({ commit }, newQuestion2) {
            commit('updateQuestion2', newQuestion2);
        },
        updateQuestion3({ commit }, newQuestion3) {
            commit('updateQuestion3', newQuestion3);
        },
        updateConsultationContent({ commit }, newConsultationContent) {
            commit('updateConsultationContent', newConsultationContent);
        }
    }
});


export default store;