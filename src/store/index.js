import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentEnvState: '',
    messageOptions: { 
      visible: false,
      type: null, 
      text: ''
    }
  },
  mutations: {
    updateCurrentEnvMutation (state, env) {
      state.currentEnvState = env
    },
    updateMessageOptionsMutation (state, option) {
      state.messageOptions = {
        ...state.messageOptions,
        ...option
      }
    }
  }
})
