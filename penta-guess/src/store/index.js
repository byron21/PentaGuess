import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { 
    selectedNumbers: [],
    userIn : false,
  },
  getters: {
    getSelectedNumbers (state) {
      return state.selectedNumbers;
    }
  },
  mutations: {
    addSelectedNumber(state, number) {
      console.log('Adding number:', number);
      if (state.selectedNumbers.length < 5 && !state.selectedNumbers.includes(number)) {
        state.selectedNumbers.push(number);
      }
    },
    removeSelectedNumber(state, number) {
      const index = state.selectedNumbers.indexOf(number);
      if (index !== -1) {
        state.selectedNumbers.splice(index, 1);
      }
    },
    clearSelectedNumbers(state) {
      state.selectedNumbers = [];
    },
    logoutUser(state) {
      state.userIn = false;
    },
  },
  actions: {},
  modules: {},
});
