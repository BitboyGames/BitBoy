<template>
  <base-container id="app" class="w-screen text-[#fff] h-screen flex bg-[#292929]">
    <template #layers>
      <div class="h-[100px] flex items-center justify-between px-[12px]">
        <base-size-input :value="x" placeholder="W" @input="x = $event" @keydown.native.enter="onSizeChange" />
        <base-size-input :value="y" placeholder="H" @input="y = $event" @keydown.native.enter="onSizeChange" />
      </div>
      <base-item-container header="Player">
        <base-layer-update
          @click="$updateStore({ name: 'activeLayer', value: player })"
          @save="v => updateFromInscription({ value: v, name: 'player' })"
          @reset="$updateStore({ name: 'player', value: { ...player, img: $player } })"
          @upload="upadteFromLocal({ name: 'player' })"
          tips="Customize Avatar - Optional"
          :icon="player.img"
          :active="activeLayer.name === player.name"
          :buttons="[
            { icon: 'fluent:arrow-reset-20-filled', emit: 'reset' },
            { text: '😊', maxLength: 2 },
            { icon: 'ph:link-simple-duotone', maxLength: 66 },
            { icon: 'zondicons:cloud-upload', emit: 'upload' }
          ]"
        >
          <template #tips-extra>
            <div
              class="ml-[4px] relative group"
              @mouseleave="() => element && element.destroy()"
              @mouseenter="
                e => {
                  element = $popper({
                    left: e.clientX + 30 + 'px',
                    top: e.clientY + 'px',
                    component: 'img',
                    className: 'fixed left-[110%] top-1/2 translate-y-[-50%] h-[400px] w-[220px] min-w-[220px] z-[100]',
                    attrs: { src: 'https://assets.ordz.games/play-ordz-games/unisat-tips2.png' }
                  })
                }
              "
            >
              <ordz-icon icon="material-symbols:help" class="cursor-pointer" />
            </div>
          </template>
          <template #right>
            <ordz-icon
              icon="material-symbols:check-circle-rounded"
              class="transition-all group-hover:opacity-100"
              :class="{ 'opacity-20': activeLayer.name !== player.name }"
            />
          </template>
        </base-layer-update>
      </base-item-container>
      <base-item-container :header="coin.name">
        <base-layer-update
          @save="v => updateFromInscription({ value: v, name: 'coin' })"
          @click="$updateStore({ name: 'activeLayer', value: coin })"
          @reset="$updateStore({ name: 'coin', value: { ...coin, img: $coin } })"
          @upload="upadteFromLocal({ name: 'coin' })"
          tips="Customize Coin - Optional"
          :icon="coin.img"
          :active="activeLayer.name === coin.name"
          :buttons="[
            { icon: 'fluent:arrow-reset-20-filled', emit: 'reset' },
            { text: '😊', maxLength: 2 },
            { icon: 'ph:link-simple-duotone', maxLength: 66 },
            { icon: 'zondicons:cloud-upload', emit: 'upload' }
          ]"
        >
          <template #right>
            <ordz-icon
              icon="material-symbols:check-circle-rounded"
              class="transition-all group-hover:opacity-100"
              :class="{ 'opacity-20': activeLayer.name !== coin.name }"
            />
          </template>
        </base-layer-update>
      </base-item-container>
      <base-item-container :header="brick.name">
        <base-layer-update
          @save="v => updateFromInscription({ value: v, name: 'brick' })"
          @click="$updateStore({ name: 'activeLayer', value: brick })"
          @reset="$updateStore({ name: 'brick', value: { ...brick, img: $brick } })"
          @upload="upadteFromLocal({ name: 'brick' })"
          tips="Customize Brick - Optional"
          :icon="brick.img"
          :active="activeLayer.name === brick.name"
          :buttons="[
            { icon: 'fluent:arrow-reset-20-filled', emit: 'reset' },
            { text: '😊', maxLength: 2 },
            { icon: 'ph:link-simple-duotone', maxLength: 66 },
            { icon: 'zondicons:cloud-upload', emit: 'upload' }
          ]"
        >
          <template #right>
            <ordz-icon
              icon="material-symbols:check-circle-rounded"
              class="transition-all group-hover:opacity-100"
              :class="{ 'opacity-20': activeLayer.name !== brick.name }"
            />
          </template>
        </base-layer-update>
      </base-item-container>
      <base-item-container header="Lava">
        <base-layer
          v-for="(it, i) in layers"
          :key="it.name"
          :name="it.name"
          :fill="it.fill"
          :icon="it.icon"
          :index="i"
          :active="it.name === activeLayer.name"
          @click="$updateStore({ name: 'activeLayer', value: it })"
        />
      </base-item-container>
      <base-item-container header="Background">
        <base-layer-update
          @save="v => updateFromInscription({ value: v, name: 'background', cropper: false })"
          @reset="$updateStore({ name: 'background', value: $background })"
          @upload="upadteFromLocal({ cropper: false, name: 'background' })"
          tips="Customize Background - Optional"
          placeholder="Inscription ID"
          :icon="background"
          :buttons="[
            { icon: 'fluent:arrow-reset-20-filled', emit: 'reset' },
            { icon: 'ph:link-simple-duotone', maxLength: 66 },
            { icon: 'zondicons:cloud-upload', emit: 'upload' }
          ]"
        >
          <template #left>
            <div :style="{ background: bg }" class="flex-1 h-[36px] rounded-md mr-[8px] bg-contain"></div>
          </template>
        </base-layer-update>
      </base-item-container>
    </template>

    <template #header>
      <div class="flex h-full items-center gap-x-[8px]">
        <base-button class="h-[36px]" text="Eraser" @click="$updateStore({ name: 'activeLayer', value: eraser })" />
        <base-button class="h-[36px] min-w-[90px]" text="Clear All" @click="cleanBoard" />
        <base-button class="h-[36px]" icon-class="!text-[18px]" icon="ci:arrow-undo-up-left" @click="undo" />
        <base-button class="h-[36px]" icon-class="!text-[18px]" icon="ci:arrow-undo-up-right" @click="redo" />
        <base-button class="h-[36px]" icon="carbon:debug" v-if="$isDev" @click="$log(board.data)" />
      </div>
      <div class="flex h-full items-center gap-x-[8px]">
        <base-button class="h-[36px] bg-[#494949]" text="Import" @click="afterImport" />
        <base-button class="h-[36px] bg-[#494949]" text="Preview" @click="onPreviewGameForm" />
        <base-button
          class="h-[36px] bg-[#FF6300] !border-[#FF6300]"
          text="Export"
          icon="ph:upload-simple"
          @click="exportData(JSON.stringify(board.data, '', 1))"
        />
      </div>
    </template>

    <div class="w-full h-full overflow-auto scroll-smooth !bg-cover" :style="{ background: bg }">
      <canvas ref="board" class="w-full h-full cursor-pointer" />
    </div>
  </base-container>
</template>

<script>
import config from '@/config'
import Level from '@/utils/level'
import { complementArray, urlToBase64, isEmoji, isBase64Image } from '@/utils'
import DataMixin from '@/mixins/data'
import PlayerMixin from '@/mixins/player'
import CropperMixin from '@/mixins/cropper'
export default {
  name: 'EditorPage',
  mixins: [DataMixin, PlayerMixin, CropperMixin],
  data: () => ({ board: null, x: 0, y: 0, element: null }),
  computed: {
    bg: vm => (vm.background.startsWith('data') ? `url(${vm.background}) no-repeat` : vm.background),
    al: vm => {
      const { name } = vm.activeLayer
      if (name === vm.coin.name) return vm.coin
      if (name === vm.brick.name) return vm.brick
      if (name === vm.eraser.name) return vm.eraser
      if (name === vm.player.name) return vm.player
      return vm.layers.find(it => it.name === name)
    }
  },
  methods: {
    async upadteFromLocal({ name, cropper = true }) {
      const d = await this.uploadImage({ cropper })

      this.$updateStore({ name, value: typeof this[name] === 'string' ? d : { ...this[name], img: d } })
      if (name === this.activeLayer.name) {
        this.$updateStore({ name: 'activeLayer', value: { ...this.activeLayer, img: d } })
      }
    },
    async updateFromInscription({ value, name, cropper = true }) {
      if (isEmoji(value)) {
        this.$updateStore({ name, value: typeof this[name] === 'string' ? value : { ...this[name], img: value } })
        return
      }
      try {
        this.d = this.$loading({ text: 'processing' })
        let rsp = await urlToBase64(`https://ordinals.com/content/${value}`)
        this.d.destroy()

        if (!isBase64Image(rsp)) {
          this.$message({ message: 'Invalid Image', icon: 'material-symbols-light:person-cancel' })
          throw 'Invalid Image'
        }
        this.d.destroy()
        if (cropper) {
          rsp = await this.cropper({ src: rsp })
        }

        this.$updateStore({ name, value: typeof this[name] === 'string' ? rsp : { ...this[name], img: rsp } })
        if (name === this.activeLayer.name) {
          this.$updateStore({ name: 'activeLayer', value: { ...this.activeLayer, img: rsp } })
        }
      } catch (error) {
        this.$message({ duration: 0, message: error, icon: 'material-symbols-light:person-cancel' })
      }
    },
    afterImport() {
      this.importData().then(data => {
        this.y = data.length > this.y ? data.length : this.y
        this.x = data[0].length > this.x ? data[0].length : this.x
        this.onSizeChange()
        this.board.data = data
        this.board.clean()
        this.board.drawGrid()
      })
    },
    onPreviewGameForm() {
      if (!this.board.data.find(it => it.trim())) {
        this.$message({ message: 'Please draw something', type: 'error' })
        return
      }

      if (!this.board.data.find(it => it.includes(this.player.data))) {
        this.$message({ message: 'Missing player data', type: 'error' })
        return
      }

      this.$createDialog({
        title: 'CUSTOMIZE',
        component: 'base-preview-form',
        width: '500px',
        buttons: [{ text: 'Confirm', callback: 'onSubmit' }],
        on: { submit: d => this.onPreviewGame(d) }
      })
    },
    async onPreviewGame({ title, sub_title }) {
      const coinImage = isEmoji(this.coin.img) ? this.coin.img : await urlToBase64(this.coin.img)
      const playerImage = isEmoji(this.player.img) ? this.player.img : await urlToBase64(this.player.img)
      this.$preview({
        level: this.board.data,
        title,
        subTitle: sub_title,
        gcoin: coinImage,
        gbackground: this.background,
        avatar: playerImage
      })
    },
    onGridClicked(e) {
      if (!this.al?.data) return
      const { gap, strokeStyle, rows, columns } = this.board
      const { img, fill, data, name } = this.al
      const rect = e.target.getBoundingClientRect()
      // real position
      const rx = e.clientX - rect.left
      const ry = e.clientY - rect.top

      // data position
      const ri = Math.floor(ry / gap)
      const ci = Math.floor(rx / gap)

      // same position, no need to update
      if (this.ri === ri && this.ci === ci) return

      this.ri = ri
      this.ci = ci

      // grid position
      const gx = this.ci * gap
      const gy = this.ri * gap

      // out of canvas range, no processing
      if (this.ci >= columns || this.ri >= rows) return

      // if the image is an emoji, first clear the current grid

      const imgIsEmoji = isEmoji(img)

      img && this.board.clean(gx, gy, gap, gap)

      // explanation english
      // Fill and draw the cell on the drawing board according to the current layer

      this.board.drawCell({
        x: gx,
        y: gy,
        useRealImage: data === this.player.data,
        text: imgIsEmoji ? img : '',
        image: imgIsEmoji ? '' : img,
        fill: name === 'Eraser' ? '#000000' : fill,
        stroke: imgIsEmoji ? '#686868' : strokeStyle
      })

      // explanation english
      // Update the data on the drawing board according to the current layer
      this.board.updateData({ x: this.ci, y: this.ri, value: data })
    },
    cleanBoard() {
      this.undo_stack = []
      this.redo_stack = []
      this.board.data = Array(this.y).fill(Array(this.x).fill(' ').join(''))
      this.board.clean()
      this.board.drawGrid()
    },
    undo() {
      if (this.undo_stack.length > 0) {
        this.redo_stack.push(this.board.data)
        this.board.data = this.undo_stack.pop()
        this.board.clean()
        this.board.drawGrid()
      } else {
        this.$message({ message: 'No more undo', type: 'error' })
      }
    },
    redo() {
      if (this.redo_stack.length > 0) {
        this.undo_stack.push(this.board.data)
        this.board.data = this.redo_stack.pop()
        this.board.clean()
        this.board.drawGrid()
      } else {
        this.$message({ message: 'No more redo', type: 'error' })
      }
    },
    onRenderBoradInit() {
      const board = this.$refs.board
      const brect = board.getBoundingClientRect()
      this.x = Math.ceil(brect.width / this.gap)
      this.y = Math.ceil(brect.height / this.gap)
      this.undo_stack = []
      this.redo_stack = []
      this.tail = []
      this.board = new Level({
        data: this.$isDev ? config.level : Array(this.y).fill(Array(this.x).fill(' ').join('')),
        canvas: board,
        gap: this.gap,
        player: this.player,
        rows: this.y,
        columns: this.x,
        layers: Object.assign(
          this.layers.reduce((a, c) => {
            c.data.trim() && (a[c.data] = c)
            return a
          }, {}),
          { o: this.coin, x: this.brick, '@': this.player }
        ),
        updateData: ({ x, y, value }) => {
          this.undo_stack.push([...this.board.data])
          this.redo_stack = []
          if (!this.board.data[y]) this.board.data[y] = Array(this.x).fill(' ').join('')
          this.board.data[y] = this.board.data[y]?.substring(0, x) + value + this.board.data[y].substring(x + 1)
        }
      })

      board.addEventListener('click', this.onGridClicked)
      board.addEventListener('mouseup', e => (this.mousedowned = false))
      board.addEventListener('mousedown', e => (this.mousedowned = e.button === 0))
      board.addEventListener('mousemove', e => {
        // If the mouse is pressed, fill and draw the cell on the drawing board according to the current layer
        if (this.mousedowned) {
          this.onGridClicked(e)
          return
        }
        const rect = this.$refs.board.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const gap = this.board.gap
        if (this.tail.length > 0) {
          const d = this.tail.shift()
          // Grid coordinates
          const xx = Math.floor(d.x / gap) * gap
          const yy = Math.floor(d.y / gap) * gap
          // Data coordinates
          const dx = Math.floor(xx / gap)
          const dy = Math.floor(yy / gap)

          // explanation english
          // When the mouse moves away, the previous grid needs to be restored to the default if there is no data
          if (!this.board.data[dy]?.[dx]?.trim()) {
            this.board.drawCell({
              x: xx,
              y: yy,
              fill: '#000000',
              stroke: this.board.strokeStyle
            })
          }
        }
        this.tail.push({ x, y })

        // The grid that the mouse is moving needs to be highlighted
        const ddx = Math.floor(x / gap)
        const ddy = Math.floor(y / gap)
        if (!this.board.data[ddy]?.[ddx]?.trim()) {
          this.board.drawCell({
            x: ddx * gap,
            y: ddy * gap,
            stroke: '#ffffff60',
            fill: '#ffffff60'
          })
        }
      })
    },
    onSizeChange() {
      this.y = Number(this.y)
      this.x = Number(this.x)
      if (typeof this.x !== 'number' || typeof this.y !== 'number') return
      if (this.x < 0 || this.y < 0) return
      // if (this.x > 900) this.x = 900
      // if (this.y > 900) this.y = 900

      this.board.rows = this.y
      this.board.columns = this.x
      const width = this.x * this.gap
      const height = this.y * this.gap
      this.board.canvas.style.height = height + 'px'
      this.board.canvas.style.width = width + 'px'
      this.board.canvas.width = width
      this.board.canvas.height = height
      this.board.data = complementArray({ data: this.board.data, x: this.x, y: this.y, content: ' ' })
      this.board.drawGrid()
    }
  },
  mounted() {
    this.onRenderBoradInit()

    if (!this.$isDev) {
      window.onbeforeunload = function (e) {
        var dialogText = 'You Want To Leave?'
        e.returnValue = dialogText
        return dialogText
      }
    }
  }
}
</script>
