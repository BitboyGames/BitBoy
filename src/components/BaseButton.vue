<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    class="cursor-pointer text-[#f8f8f8] border border-[#686868] rounded-[6px] transition-all text-[14px] px-[14px] py-[11px] flex items-center justify-center"
  >
    <ordz-icon v-if="icon" :icon="icon" :class="[{ 'mr-[5px]': !!text }, iconClass]" />
    <template v-if="text">{{ text }}</template>
    <slot v-else />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: String,
    icon: String,
    iconClass: String
  }
}
</script>
