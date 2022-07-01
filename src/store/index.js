import { createStore } from 'vuex'

export default createStore({
  state: {
    active: true
  },
  getters: {
  },
  mutations: {
    on (state) {
      state.active = true
    },
    off (state) {
      state.active = false
    }
  },
  actions: {
    on (context) {
      context.commit('on')
    }
  },
  modules: {
  }
})
