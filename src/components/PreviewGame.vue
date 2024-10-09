<template>
  <div
    style="background-color: rgba(0, 0, 0, 0.5)"
    class="flex items-center justify-center fixed left-0 top-0 w-screen h-screen"
  >
    <div :class="full ? 'w-[90%]' : 'w-[600px]'" class="pb-[30px] bg-[#1F1F1F] rounded-md shadow-md transition-all">
      <div class="relative h-[80px] leading-[80px] text-center">
        <span class="uppercase font-silks text-2xl text-white">Preview</span>
        <span
          class="absolute right-0 top-0 cursor-pointer group h-[80px] w-[80px] flex items-center justify-center"
          @click="() => destroy()"
        >
          <img src="/images/close-white.svg" class="w-[30px] h-[30px] transition-all group-hover:rotate-[-45deg]" />
        </span>
      </div>
      <div
        :class="full ? 'w-[90%]' : 'w-[540px]'"
        class="shadow-md bg-[#000] h-[520px] overflow-hidden mx-auto flex flex-col items-center justify-center transition-all"
      >
        <iframe v-show="!loading" ref="preview" class="w-full h-full" frameborder="0"></iframe>
        <span class="font-silks text-xl text-white" v-show="loading">Loading...</span>
      </div>

      <div
        v-if="!loading"
        :class="full ? 'w-[90%]' : 'w-[540px]'"
        class="flex justify-end mx-auto mt-[20px] transition-all"
      >
        <base-button class="uppercase mr-3" @click="toggle">WHOLE MAP</base-button>
        <base-button class="uppercase" @click="download">DOWNLOAD</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import {
  uuid,
  createGameIframeScale,
  generatePlayerStyle,
  generateCoinStyle,
  generateGameVariable,
  createToogleGameJs,
  createOssInstance
} from '@/utils'
export default {
  name: 'PreviewGame',
  data: () => ({
    full: false,
    loading: true,
    level: '',
    title: 'ordz game',
    subTitle: '',
    avatar: '',
    gcoin: '',
    gbackground: ''
  }),
  created() {
    this.preview()
  },
  methods: {
    toggle() {
      this.full = !this.full
      this.$refs.preview.contentWindow.postMessage(this.full, '*')
    },
    async preview() {
      try {
        const [before, after] = await Promise.all([api.preview_before(), api.preview_after()])
        const fileData = await this.aggregated({ before: before.data, after: after.data })
        this.$refs.preview.src = `data:text/html;charset=utf-8,${encodeURIComponent(fileData)}`
        this.$refs.preview.onload = () => (this.loading = false)
      } catch (error) {
        console.log('error:', error)
      }
    },
    async download() {
      try {
        this.d = this.$loading({ text: 'Downloading' })
        const f_id = uuid()
        const f_name = `${this.title}_${this.subTitle}`
        const [before, after] = await Promise.all([api.before(), api.after()])
        const fileData = await this.aggregated({ before: before.data, after: after.data, scale: true })
        const result = await api.oss_info()
        if (result.data.code !== 1000) return
        const oss = createOssInstance(result.data.data)
        await oss.put(`/ordz-pfp-rush/${f_id}.html`, new Blob([fileData], { type: 'text/html' }))
        window.open(`https://www.ordz.games/ordz-rush?f_id=${f_id}&f_name=${f_name}`)
      } catch (error) {
        console.log('error:', error)
      } finally {
        this.d.destroy()
      }
    },
    aggregated({ before, after, scale }) {
      return new Promise(resolve => {
        resolve(
          [
            before,
            createToogleGameJs(),
            scale ? createGameIframeScale() : '',
            generateGameVariable({
              title: this.title,
              subTitle: this.subTitle,
              background: this.gbackground,
              level: this.level.reduce(
                (a, i) => `${a}
        "${i}",`,
                ''
              )
            }),
            this.avatar ? generatePlayerStyle(this.avatar) : '',
            this.gcoin ? generateCoinStyle(this.gcoin) : '',
            after
          ].join('\n')
        )
      })
    }
  }
}
</script>
