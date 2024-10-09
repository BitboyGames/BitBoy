<template>
  <div class="flex gap-[9px] bg-[#303030] p-[16px] rounded-md shadow-md border border-[#5E5E5E30]">
    <span
      v-for="(c, i) in colors"
      :key="i"
      :style="{ background: index === i ? '#EB5455' : c }"
      class="w-[16px] h-[16px] transition-all"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'BaseDirection',
  props: { colors: Array, loop: Boolean },
  data: () => ({ index: 0 }),
  mounted() {
    if (!this.colors.length) return
    this.index = this.loop ? Math.floor(this.colors.length / 2) : 0
    let step = 1
    const timer = setInterval(() => {
      if (this.loop) {
        if (this.index >= this.colors.length - 1) step = -1
        if (this.index <= 0) step = 1
        this.index += step
      } else {
        this.index++
        if (this.index >= this.colors.length) this.index = 0
      }
    }, 300)

    this.$once('hook:beforeDestroy', () => clearInterval(timer))
  }
}
</script>
