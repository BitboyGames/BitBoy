// @ts-nocheck
import VuexPersistence from 'store-persistence'
import UseDynamicMount from 'use-dynamic-mount'
import storage from 'good-storage'
import axios from 'axios'
import { mapGetters } from 'vuex'
import store from '@/store'
import config from '@/config'
import { isDev } from '@/utils'
import get from 'lodash.get'
import CodeEditor from 'simple-code-editor'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { Icon } from '@iconify/vue2'

import filters from '@/assets/js/filter'
export default {
  install(Vue: any) {
    Vue.mixin({ computed: mapGetters(Object.keys(store.getters)) })
    Vue.prototype.$get = get
    Vue.prototype.$store = store
    Vue.prototype.$coin = config.coin
    Vue.prototype.$player = config.player
    Vue.prototype.$background = config.background
    Vue.prototype.$brick = config.brick
    Vue.prototype.$log = console.info
    Vue.prototype.$isDev = isDev
    Vue.component('code-editor', CodeEditor)
    Vue.component('vue-cropper', Cropper)
    Vue.component('ordz-icon', Icon)

    Vue.config.productionTip = false
    Vue.prototype.$axios = axios
    Vue.prototype.$EventBus = new Vue()

    Vue.prototype.$showMessage = (type = 'success', text = 'success') => {
      if (store.state.messageOptions.visible) return
      let option = {
        visible: true,
        type,
        text
      }
      store.commit('updateMessageOptionsMutation', option)
      let msgTimer = setTimeout(() => {
        clearTimeout(msgTimer)
        store.commit('updateMessageOptionsMutation', { visible: false })
      }, 3 * 1000)
    }

    Object.keys(filters).forEach(i => {
      Vue.filter(i, filters[i])
    })

    Vue.config.ignoredElements = ['model-viewer']

    Vue.use(VuexPersistence, {
      update: (name: string, value: any) => store.commit('update', { name, value, cache: false }),
      removeItem: (name: string) => storage.remove(name),
      getItem: (name: string) => storage.get(name),
      setItem: (name: string, value: any) => storage.set(name, value)
    })

    Vue.use(UseDynamicMount(), {
      name: '$createDialog',
      extend: require('@/components/BaseDialog.vue').default,
      nextTick() {}
    })

    Vue.use(UseDynamicMount(), {
      name: '$message',
      extend: require('@/components/BaseMessage.vue').default,
      nextTick() {
        this.visible = true
      }
    })

    Vue.use(UseDynamicMount(), {
      name: '$loading',
      extend: require('@/components/BaseLoading.vue').default,
      nextTick() {
        this.visible = true
      }
    })
    Vue.use(UseDynamicMount(), {
      name: '$popper',
      extend: require('@/components/BasePopper.vue').default,
      nextTick() {
        this.visible = true
      }
    })

    Vue.use(UseDynamicMount(), {
      name: '$confirm',
      extend: require('@/components/BaseConfirm.vue').default,
      nextTick() {}
    })

    Vue.use(UseDynamicMount(), {
      name: '$preview',
      extend: require('@/components/PreviewGame.vue').default
    })

    const requireComponent = require.context('@/components', true, /\.vue$/)
    requireComponent.keys().forEach(filename => {
      const it = requireComponent(filename)
      Vue.component(it.default.name, it.default || it)
    })
  }
}
