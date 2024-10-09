<template>
  <div
    class="fixed left-0 top-0 z-[100000] !font-normal flex items-center justify-center w-screen h-screen"
    style="background: rgba(0, 0, 0, 0.7)"
  >
    <div
      class="relative transform overflow-hidden animate-fib rounded-lg bg-[#1F1F1F] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
    >
      <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 sm:ml-4 sm:mt-0 text-left">
            <h3 class="text-base font-semibold leading-6 text-white">{{ title }}</h3>
            <div class="mt-2">
              <p class="text-sm text-white">
                {{ message }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row px-4 py-3 sm:justify-end gap-[10px]">
        <base-button
          class="w-full sm:w-[100px] shadow-sm"
          text="Cancel"
          @click="
            () => {
              onCancel && onCancel()
              destroy()
            }
          "
        />

        <base-button
          text="Confirm"
          class="w-full sm:w-[100px] shadow-sm"
          @click="
            () => {
              onOk && onOk()
              destroy()
            }
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseConfirm',
  data: () => ({
    title: '',
    message: '',
    onOk: () => {},
    onCancel: () => {}
  })
}
</script>
