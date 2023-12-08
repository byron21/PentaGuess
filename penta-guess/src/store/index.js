import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedNumbers: [],
    userIn: false,
    userEmail: "",
    drawFinish: false,
  },
  getters: {
    getSelectedNumbers(state) {
      return state.selectedNumbers;
    },
    getUserEmail(state) {
      return state.userEmail;
    }
  },
  mutations: {
    addSelectedNumber(state, number) {
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
    saveUserEmail(state, email) {
      state.userEmail = email;
    },
    clearSelectedNumbers(state) {
      state.selectedNumbers = [];
    },
    logoutUser(state) {
      state.userIn = false;
      state.userEmail ="";
      state.selectedNumbers =[];
      state.drawFinish = false;
    },
    loginUser(state) {
      state.userIn = true;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
