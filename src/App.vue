<template>
  <div id="app">
    <svg width="0" height="0">
      <defs>
        <filter id="glow-effect" color-interpolation-filters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur4" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="19" result="blur19" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur9" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30" />

          <feColorMatrix
            in="blur4"
            result="color-0-blur"
            type="matrix"
            values="1 0 0 0 0 0 0.9803921568627451 0 0 0 0 0 0.9647058823529412 0 0 0 0 0 0.8 0"
          />
          <feOffset in="color-0-blur" result="layer-0-offsetted" dx="0" dy="0" />

          <feColorMatrix
            in="blur19"
            result="color-1-blur"
            type="matrix"
            values="0.8156862745098039 0 0 0 0 0 0.49411764705882355 0 0 0 0 0 0.2627450980392157 0 0 0 0 0 1 0"
          />
          <feOffset in="color-1-blur" result="layer-1-offsetted" dx="0" dy="2" />

          <feColorMatrix
            in="blur9"
            result="color-2-blur"
            type="matrix"
            values="1 0 0 0 0 0 0.6666666666666666 0 0 0 0 0 0.36470588235294116 0 0 0 0 0 0.65 0"
          />
          <feOffset in="color-2-blur" result="layer-2-offsetted" dx="0" dy="2" />

          <feColorMatrix
            in="blur30"
            result="color-3-blur"
            type="matrix"
            values="1 0 0 0 0 0 0.611764705882353 0 0 0 0 0 0.39215686274509803 0 0 0 0 0 1 0"
          />
          <feOffset in="color-3-blur" result="layer-3-offsetted" dx="0" dy="2" />

          <feColorMatrix
            in="blur30"
            result="color-4-blur"
            type="matrix"
            values="0.4549019607843137 0 0 0 0 0 0.16470588235294117 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feOffset in="color-4-blur" result="layer-4-offsetted" dx="0" dy="16" />

          <feColorMatrix
            in="blur30"
            result="color-5-blur"
            type="matrix"
            values="0.4235294117647059 0 0 0 0 0 0.19607843137254902 0 0 0 0 0 0.11372549019607843 0 0 0 0 0 1 0"
          />
          <feOffset in="color-5-blur" result="layer-5-offsetted" dx="0" dy="64" />

          <feColorMatrix
            in="blur30"
            result="color-6-blur"
            type="matrix"
            values="0.21176470588235294 0 0 0 0 0 0.10980392156862745 0 0 0 0 0 0.07450980392156863 0 0 0 0 0 1 0"
          />
          <feOffset in="color-6-blur" result="layer-6-offsetted" dx="0" dy="64" />

          <feColorMatrix
            in="blur30"
            result="color-7-blur"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.68 0"
          />
          <feOffset in="color-7-blur" result="layer-7-offsetted" dx="0" dy="64" />

          <feMerge>
            <feMergeNode in="layer-0-offsetted" />
            <feMergeNode in="layer-1-offsetted" />
            <feMergeNode in="layer-2-offsetted" />
            <feMergeNode in="layer-3-offsetted" />
            <feMergeNode in="layer-4-offsetted" />
            <feMergeNode in="layer-5-offsetted" />
            <feMergeNode in="layer-6-offsetted" />
            <feMergeNode in="layer-7-offsetted" />
            <feMergeNode in="layer-0-offsetted" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>

    <!-- Preview -->
    <router-view></router-view>

    <!-- Footer -->
    <!-- <p style="textAlign: center;margin: 60px auto 40px;">@2023 Ordz Games</p> -->

    <!-- Message -->
    <div class="common-component-msg-box">
      <div
        class="common-component-msg-box-content"
        :class="{ show: messageOptions.visible, error: messageOptions.type === 'error' }"
      >
        <span>{{ messageOptions.type === 'error' ? '✖' : '✓' }}</span> {{ messageOptions.text }}
      </div>
    </div>
  </div>
</template>

<script>
// Vuex
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['messageOptions'])
  },
  watch: {
    $route(to, from) {
      if (to.name === 'Solana') {
        let favicon = document.querySelector('link[rel="icon"]')
        favicon.href = '/solana.ico'
      }
    }
  },
  async created() {
    let env = process.env.VUE_APP_EVN === 'development' ? 'meta' : 'prod'
    this.updateCurrentEnvMutation(env)
  },
  mounted() {},
  methods: {
    ...mapMutations(['updateCurrentEnvMutation'])
  }
}
</script>
