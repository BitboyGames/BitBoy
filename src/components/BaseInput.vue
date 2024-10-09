<template>
  <div
    class="bg-[#141414] min-h-[20px] transition-all text-sm font-normal rounded-md overflow-hidden flex items-center"
  >
    <div class="h-full px-[15px] flex items-center justify-center" v-if="prefix">
      {{ prefix }}
    </div>
    <input
      v-on="$listeners"
      v-bind="$attrs"
      class="w-full h-full font-silks bg-transparent text-[12px] px-2 outline-none placeholder:text-[#757575] text-[#ffffff]"
    />
    <div class="h-full px-[15px] flex items-center justify-center" v-if="suffix">{{ prefix }}</div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    prefix: String,
    suffix: String
  }
}
</script>
