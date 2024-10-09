<template>
  <div class="p-[30px]">
    <div class="h-[45px] bg-[#0E0E0E] border border-[#686868] rounded-[6px] p-[4px] flex items-center justify-between">
      <div
        class="h-[35px] w-[150px] px-[10px] rounded-[4px] bg-[#1f1f1f] text-[#F9F9F9] font-bold text-[14px] flex items-center justify-center"
      >
        UPPER TEXT
      </div>
      <base-input
        class="w-[80px] flex-1 !h-[35px] rounded-[4px] bg-transparent"
        placeholder="UPPER TEXT"
        maxlength="10"
        :value="title"
        @input="title = $event.target.value"
      />
    </div>

    <div
      class="h-[45px] mt-[20px] bg-[#0E0E0E] border border-[#686868] rounded-[6px] p-[4px] flex items-center justify-between"
    >
      <div
        class="h-[35px] w-[150px] px-[10px] rounded-[4px] bg-[#1f1f1f] text-[#F9F9F9] font-bold text-[14px] flex items-center justify-center"
      >
        LOWER TEXT
      </div>
      <base-input
        class="w-[80px] flex-1 !h-[35px] rounded-[4px] bg-transparent"
        placeholder="LOWER TEXT"
        maxlength="10"
        :value="sub_title"
        @input="sub_title = $event.target.value"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePreviewForm',
  data: () => ({ title: '', sub_title: '' }),
  created() {
    if (this.$isDev) {
      this.title = 'UPPER TEXT'
      this.sub_title = 'LOWER TEXT'
    }
  },
  methods: {
    onSubmit() {
      if (!this.title) {
        this.$message({ message: 'Please enter title', type: 'error' })
        return
      }
      if (!this.sub_title) {
        this.$message({ message: 'Please enter sub title', type: 'error' })
        return
      }
      this.$emit('submit', { title: this.title, sub_title: this.sub_title })
      this.$emit('close')
    }
  }
}
</script>
