<template>
  <div
    class="fixed w-screen h-screen left-0 top-0 flex justify-center items-center"
    style="background: rgba(91, 91, 91, 0.7)"
  >
    <div
      :style="{ width }"
      :class="[customClass]"
      class="overflow-hidden rounded-md shadow-md relative animate-fib bg-[#000000]"
    >
      <div class="flex items-center text-[#fff]">
        <div class="flex-grow pl-4 text-center text-[20px] font-silks">{{ title }}</div>
        <div
          @click="
            () => {
              onClose && onClose()
              destroy()
            }
          "
          class="flex items-center text-[20px] justify-center h-[60px] w-[60px] transition-all cursor-pointer hover:rotate-[-45deg]"
        >
          <img src="/images/close-white.svg" class="w-[20px] h-[20px] transition-all group-hover:rotate-[-45deg]" />
        </div>
      </div>
      <component v-if="component" ref="component" :is="component" @close="destroy" v-bind="props" v-on="on" />
      <div
        class="flex items-center justify-center h-[80px] min-h-[80px] px-2"
        v-if="buttons.length"
        :class="footerClass"
      >
        <base-button
          v-for="button in buttons"
          :key="button.text"
          :text="button.text"
          :class="button.class"
          @click="() => onButtonClick(button)"
          class="ml-2 py-2 !px-10 rounded-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDialog',
  data: () => ({
    title: 'Title',
    on: {},
    props: {},
    onClose: () => {},
    component: null,
    buttons: [],
    customClass: '',
    footerClass: '',
    width: '1000px',
    height: '800px'
  }),
  methods: {
    async onButtonClick(button) {
      const { confirm, callback } = button

      if (confirm) {
        await new Promise((re, rj) => {
          this.$confirm({
            title: 'Tip',
            message: confirm,
            onOk: () => re(true),
            onCancel: () => rj(false)
          })
        })
      }

      if (this.$refs.component[callback]) {
        this.$refs.component[callback]()
        return
      }

      callback && callback({ component: this.$refs.component, destroy: this.destroy, dialog: this })
    }
  },
  created() {
    const onKeydown = e => e.key === 'Escape' && this.destroy()
    window.addEventListener('keydown', onKeydown)
    this.$once('hook:beforeDestroy', () => window.removeEventListener('keydown', onKeydown))
  }
}
</script>
