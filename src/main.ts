// @ts-nocheck
import Vue from 'vue'
import pts from '@/utils/pts'
import App from '@/App.vue'
import router from '@/router'
import '@/app.scss'

Vue.use(pts)
new Vue({
  router,
  render: h => h(App),
  created() {
    this.$restore()
  }
}).$mount('#app')
