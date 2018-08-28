import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        city: localStorage.city || "上海"
    },
    mutations: {
        changeCity(state, payload) {
            localStorage.city = payload;
            state.city = payload;
        }
    }
});