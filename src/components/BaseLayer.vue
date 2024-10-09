<template>
  <div v-on="$listeners" class="h-[44px] flex items-center cursor-pointer">
    <div
      class="flex-grow flex justify-between items-center h-full rounded-[6px] transition-all"
      :class="{ 'bg-[#303030]': active }"
    >
      <div class="h-[44px] w-[44px] flex items-center justify-center">
        <div class="h-[16px] w-[16px] flex items-center justify-center" :style="{ background: fill }">
          <ordz-icon v-if="icon" :icon="icon" class="text-[12px] text-white" />
        </div>
      </div>
      <div class="flex items-center">
        <span class="text-[12px] text-white">{{ name }}</span>
        <div
          class="group w-[22px] mr-[10px] ml-[6px] h-full flex items-center justify-center"
          @mouseleave="() => element && element.destroy()"
          @mouseenter="
            e => {
              element = $popper({
                left: e.clientX + 15 + 'px',
                top: e.clientY + 'px',
                component: 'base-direction',
                className: [
                  'fixed left-full top-1/2 translate-y-[-50%]',
                  index === 2 || index === 3 ? 'flex-col' : ''
                ].join(' '),
                props: {
                  loop: index === 1 || index === 2,
                  colors: [
                    ['#EB5455'],
                    ['#EB545520', '#EB545540', '#EB545570', '#EB545590', '#EB545570', '#EB545540', '#EB545520'],
                    ['#EB545520', '#EB545540', '#EB545570', '#EB545590', '#EB545570', '#EB545540', '#EB545520'],
                    ['#EB545590', '#EB545580', '#EB545560', '#EB545540', '#EB545520', '#EB545510']
                  ][index]
                }
              })
            }
          "
        >
          <ordz-icon icon="material-symbols:help" class="opacity-20 group-hover:opacity-100 transition-all" />
        </div>
      </div>
    </div>
    <div class="h-[44px] w-[44px] group flex items-center justify-center">
      <ordz-icon
        icon="material-symbols:check-circle-rounded"
        :class="{ 'opacity-20': !active }"
        class="transition-all group-hover:opacity-100"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayer',
  data: () => ({ element: null }),
  props: {
    index: Number,
    active: Boolean,
    fill: String,
    icon: String,
    name: String
  }
}
</script>
