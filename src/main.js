import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from '@/assets/js/filter'
import axios from './config/axios'



Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$EventBus = new Vue()

Vue.prototype.$showMessage = (type='success', text='success') => {
  if (store.state.messageOptions.visible) return
  let option = {
    visible: true,
    type,
    text
  }
  store.commit('updateMessageOptionsMutation', option)
  let msgTimer = setTimeout(() => {
    clearTimeout(msgTimer)
    store.commit('updateMessageOptionsMutation', {visible: false})
  }, 3 * 1000)
}


Object.keys(filters).forEach(i => {
  Vue.filter(i, filters[i])
})

Vue.config.ignoredElements = ['model-viewer']

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
