<template>
  <div>
    <div class="h-[50px] flex justify-between items-center">
      <div
        @click="$emit('click')"
        class="flex-1 min-w-[48px] h-[36px] flex items-center rounded-[6px] transition-all"
        :class="{ 'bg-[#303030]': active }"
      >
        <slot name="left" :type="type" v-if="$scopedSlots.left" />
        <span class="ml-[14px]" v-else>
          <template v-if="icon">
            <template v-if="icon.length === 2">{{ icon }}</template>
            <img v-else :src="icon" class="w-[15px] h-[15px] object-contain" />
          </template>
        </span>
      </div>
      <div class="flex items-center">
        <base-button
          v-for="(b, i) in buttons"
          @click="onButtonClicked(b, i)"
          :key="i"
          :class="[type === i ? 'border-white' : '']"
          class="h-[36px] w-[36px] ml-[6px] hover:border-white"
          icon-class="scale-[2.5]"
          v-bind="b"
        />
      </div>
      <div
        v-if="$scopedSlots.right"
        @click="$emit('click')"
        class="w-[48px] flex items-center justify-center cursor-pointer group"
      >
        <slot name="right" />
      </div>
    </div>
    <base-image-input
      class="border-b border-[#FFFFFF10] mb-[4px]"
      v-if="type === 1 || type === 2"
      :tips="tips"
      :max-length="maxLength"
      :value="value"
      :placeholder="placeholder || ['', 'Emoji Only', 'Inscription ID'][type]"
      @input="v => (value = v)"
      @save="() => value && $emit('save', value)"
    >
      <template #tips-extra>
        <slot name="tips-extra" />
      </template>
    </base-image-input>
  </div>
</template>

<script>
export default {
  name: 'BaseLayerUpdate',
  data() {
    return { type: this.default, value: '', maxLength: null }
  },
  props: {
    default: { type: Number },
    placeholder: String,
    active: Boolean,
    icon: String,
    tips: String,
    buttons: { type: Array, default: () => [] }
  },
  methods: {
    onButtonClicked(b, i) {
      if (b.maxLength) {
        this.maxLength = b.maxLength
      }
      if (b.emit) {
        this.type = null
        this.$emit(b.emit)
      } else {
        this.value = ''
        this.type = this.type === i ? null : i
      }
    }
  }
}
</script>
