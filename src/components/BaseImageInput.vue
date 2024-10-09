<template>
  <div>
    <p class="flex items-center text-[#6D6D6D] mt-[6px]">
      <span class="text-[12px] font-bold">{{ tips }}</span>
      <slot name="tips-extra" />
    </p>
    <div class="h-[36px] my-[8px] flex items-center justify-between">
      <base-input
        :value="value"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
        class="h-full flex-1"
        :maxlength="maxLength"
      />
      <base-button
        @click="$emit('save')"
        :class="!value ? '!text-[#686868] cursor-not-allowed' : ''"
        text="save"
        class="h-full ml-[10px]"
      />
    </div>
  </div>
</template>

<script>
// ff027c69c9c496161502f246fdfabaf2e280c252c04dde40708fc62ea3b2fc78i0
export default {
  name: 'BaseImageInput',
  props: {
    placeholder: String,
    tips: String,
    value: String,
    maxLength: [Number, String]
  }
}
</script>
