<template>
  <div class="h-[400px] flex items-center justify-center">
    <vue-cropper
      ref="icon"
      class="border border-dashed border-[#fafafa]"
      :src="src"
      :default-size="defaultSize"
      :stencil-props="{
        handlers: {},
        movable: true,
        resizable: true,
        aspectRatio: 1,
        previewClass: 'border border-[1px] border-[#686868]'
      }"
      transitions
    />
  </div>
</template>

<script>
export default {
  name: 'BaseCropper',
  props: { src: String },
  data: () => ({ defaultSize: { width: 200, height: 200 } }),
  created() {
    const image = new Image()
    image.src = this.src
    image.onload = () => {
      const { width, height } = image
      this.defaultSize = { width, height }
    }
  },
  methods: {
    onConfirm() {
      const { canvas } = this.$refs.icon.getResult()
      this.$emit('confirm', canvas.toDataURL())
      this.$emit('close')
    }
  }
}
</script>
