<template>
  <div class="h-[36px] w-[130px] bg-[#0E0E0E] rounded-[6px] p-[4px] flex items-center justify-between">
    <div
      class="h-[28px] w-[28px] rounded-[4px] bg-[#1f1f1f] text-[#F9F9F9] font-bold text-[14px] flex items-center justify-center"
    >
      {{ placeholder }}
    </div>
    <base-input
      class="w-[80px] !h-[28px] rounded-[4px] bg-transparent"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseSizeInput',
  props: { value: [String, Number], placeholder: String }
}
</script>
