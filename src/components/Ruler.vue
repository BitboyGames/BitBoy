<template>
  <div class="ruler">
    <span
      v-for="(_, it) in count"
      :key="it"
      :class="{ 'text-[#DCDCAA]': active === it, 'scale-[0.9]': it > 99 }"
      class="text-[12px] text-[#5B5B5B] flex items-center justify-center hover:text-[#DCDCAA] cursor-pointer"
      :style="{ width: size + 'px', height: size + 'px' }"
      @click="$emit('click', it)"
    >
      {{ it }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Ruler',
  props: {
    size: Number,
    count: Number,
    active: Number
  }
}
</script>
