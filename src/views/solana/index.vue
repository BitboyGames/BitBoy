<template>
  <div class="preorder-wrapper common-scrollbar-hidden">

    <div class="content">

      <div class="bitboy-preview mobile">
          <img v-if="!showIfame" class="loading-bg" src="../../assets/img/solana/solana.gif" alt="">
          <iframe ref="myIframe" @load="onIframeLoad" title="html-content" sandbox="allow-scripts" draggable="false" scrolling="no" width="100%" height="100%" frameborder="0" class="tw-w-full tw-h-full tw-object-contain tw-rounded-xl" :src="`https://glb-view.netlify.app/solboy-x`" style="background-color: transparent;"></iframe>
      </div>

      <div class="content-left">
        <img class="title" src="../../assets/img/solana/title.png" alt="">
        <p>BitBoySE is a special edition of BitBoy, powered by Solana, blending retro gaming with blockchain technology. Play games, earn tokens, and mine variety of crypto assets - all in one device.</p>
        <div class="input-box">
          <input v-model="text" type="text" placeholder="Enter your email address" />
          <button @click="submit">Join</button>
        </div>
      </div>

      <div class="bitboy-preview pc">
        <img v-if="!showIfame" class="loading-bg" src="../../assets/img/solana/solana.gif" alt="">
        <iframe ref="myIframe" @load="onIframeLoad" title="html-content" sandbox="allow-scripts" draggable="false" scrolling="no" width="100%" height="100%" frameborder="0" class="tw-w-full tw-h-full tw-object-contain tw-rounded-xl" :src="`https://glb-view.netlify.app/solboy-x`" style="background-color: transparent;"></iframe>
      </div>
      
    </div>

  </div>
</template>

<script>
// Vuex
import { mapState } from 'vuex'
// Mixins
import mixinFilters from '@/mixins/filters'
import mixinMethods from '@/mixins/methods'


export default {
  components: {
  },
  mixins: [ mixinFilters, mixinMethods ],
  data () {
    return {
      collectionName: 'ordz-bitboy',
      text: '',
      bindList: [],
      showIfame: false
    }
  },
  methods: {

    onIframeLoad () {
      setTimeout(() => {
        this.showIfame = true
      }, 5 * 1000)
    },

    async submit () {
      try {
        if (!this.text) return
        if (!/\S+@\S+\.\S+/.test(this.text)) {
          this.$showMessage('error', 'Invalid email address');
          return;
        }
        let res = await this.$axios.post(`/btc_nft/v1/cv_accounts/${this.collectionName}/collect_email`, {
          email: this.text
        })

        if (res.data.code === 1000) {
          const { add_flag } = res.data.data
          if (add_flag) {
            this.$showMessage('success', 'Welcome to the revolution with BitBoySE!')
            this.text = ''
          } else {
            this.$showMessage('success', 'Welcome to the revolution with BitBoySE!')
          }
        } else {
          this.$showMessage('error', res.data.message)
        }
      } catch (error) {
        console.log('submit error:', error)
      }
    }

  }
}
</script>

<style lang="scss">
  @import "./index.scss";
</style>
