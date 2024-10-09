<template>
  <div v-bind="$attrs" class="pb-[6px] flex flex-col px-[12px]">
    <div class="h-[30px] text-[14px] font-bold text-[#fff] leading-[30px]">{{ header }}</div>
    <div :class="containerClass">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseItemContainer',
  props: { header: String, containerClass: String }
}
</script>
