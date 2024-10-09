<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="w-[300px] min-w-[300px] h-full border-r border-[#040404] flex flex-col">
      <div class="h-[80px] leading-[80px] px-[15px] border-b border-[#040404] font-bold text-[18px] bg-[#303030]">
        Rush
      </div>
      <div class="flex-grow overflow-y-auto bg-[#1F1F1F]">
        <slot name="layers" />
      </div>
    </div>
    <div class="h-full flex flex-col" style="width: calc(100% - 300px)">
      <div class="flex justify-between h-[80px] bg-[#303030] leading-[80px] px-[24px] border-b-[1px] border-[#040404]">
        <slot name="header" />
      </div>
      <div class="w-full overflow-hidden relative" style="height: calc(100% - 80px)">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseContainer'
}
</script>
