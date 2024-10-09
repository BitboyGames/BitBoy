<template>
  <div
    class="transition-all flex items-center text-base text-center font-micro rounded shadow-[0 4px 12px rgba(0, 0, 0, 0.15)] py-[10px] px-[16px] top-[-60px] fixed left-[50%] translate-x-[-50%] opacity-0 z-[999999999999]"
    :class="[visible ? 'top-[24px] opacity-100' : '', type === 'error' ? 'bg-[#ff4445]' : 'bg-[#7cae4d]']"
  >
    <ordz-icon
      @click.native="destroy"
      :icon="icon || type === 'error' ? 'ic:baseline-close' : 'ooui:success'"
      class="text-white"
    />
    <span class="ml-2 text-white">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseMessage',
  data() {
    return {
      icon: '',
      duration: 2000,
      visible: false,
      type: 'info',
      message: ''
    }
  },
  mounted() {
    this.duration && setTimeout(() => this.destroy(), this.duration)
  }
}
</script>
