import Vue from 'vue'
import Vuex from 'vuex'
import config from '@/config'
import { RootState } from '@/utils/types'
Vue.use(Vuex)

const defaultState: RootState = {
  gap: 18,
  currentEnvState: '',
  messageOptions: { visible: false, type: null, text: '' },
  background: config.background,
  player: { name: 'Player', data: '@', img: config.player },
  activeLayer: { name: '', data: '', img: '' },
  coin: { name: 'Coin', data: 'o', img: config.coin },
  brick: { name: 'Brick', data: 'x', img: config.brick },
  eraser: { name: 'Eraser', data: ' ', fill: '#000000' },
  layers: [
    { name: 'Lava', data: '!', img: '', fill: '#ED5455' },
    { name: 'Horizontal Moving Lava', data: '=', fill: '#ED5455', icon: 'mdi:arrow-left-right' },
    { name: 'Vertical Moving Lava', data: '|', fill: '#ED5455', icon: 'lucide:chevrons-up-down' },
    { name: 'Dripping Lava', data: 'v', fill: '#ED5455', icon: 'ic:baseline-arrow-downward' }
  ]
}

const store = new Vuex.Store({
  state: defaultState,
  getters: Object.keys(defaultState).reduce((o, key) => ({ ...o, [key]: (state: any) => state[key] }), {}),
  mutations: {
    update(state: any, payload: { name: string; value: any }) {
      state[payload.name] = payload.value
    },
    reset(state) {
      state = defaultState
    },
    updateCurrentEnvMutation(state, env) {
      state.currentEnvState = env
    },
    updateMessageOptionsMutation(state, option) {
      state.messageOptions = {
        ...state.messageOptions,
        ...option
      }
    }
  }
})

export default store
