export default {
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