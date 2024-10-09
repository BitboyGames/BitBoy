<template>
  <div
    class="fixed w-screen h-screen z-[10000] left-0 top-0 bg-[#000] text-[#fafafa] font-micro opacity-70 flex items-center justify-center text-2xl"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'BaseLoading',
  data() {
    return {
      duration: 0,
      visible: false,
      text: 'Loading...'
    }
  },
  mounted() {
    this.duration && setTimeout(() => this.destroy(), this.duration)
  }
}
</script>
