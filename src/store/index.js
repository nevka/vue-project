import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        changeCounter (state, payload) {
            state.counter += payload
        }
    },
    actions: { // здесь вся основная логика (ДБ и т.д.)
        asyncChangeCounter({commit}, payload) { // context, payload
            setTimeout(() => {
                //context.commit('changeCounter', payload.counterValue);
                commit('changeCounter', payload.counterValue);
            }, payload.timeoutDelay);
        }
    },
    getters: {
        computedCounter(state) {
            return state.counter * 25;
        }
    }
});
