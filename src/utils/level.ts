import Canvas from '@/utils/canvas'
export default class Level extends Canvas {
  gap: number
  columns: number
  rows: number
  data: string[] = []
  player: Record<string, any> = {}
  layers: Record<string, any> = {}
  updateData: (d: any) => void
  constructor(props: any) {
    super(props)
    this.columns = props.columns
    this.rows = props.rows
    this.gap = props.gap
    this.data = props.data
    this.layers = props.layers
    this.player = props.player
    this.updateData = props.updateData
    this.drawGrid()
  }

  drawGrid() {
    for (let row = 0; row < this.rows; row++) {
      const rd = this.data[row] || ''
      for (let col = 0; col < this.columns; col++) {
        const cd = rd[col] || ''
        this.drawCell({
          x: col * this.gap,
          y: row * this.gap,
          useRealImage: this.layers[cd]?.data === this.player.data,
          image: this.layers[cd]?.img,
          fill: this.layers[cd]?.fill,
          stroke: this.strokeStyle
        })
      }
    }
  }

  drawCell(props: any) {
    const { gap } = this
    const { image, fill, stroke, x, y, border = 1, text, useRealImage } = props
    const sgap = border * 2

    if (image) {
      this.drawImage({
        x: x + border,
        y: y + border,
        useRealImage,
        width: gap - sgap,
        height: gap - sgap,
        src: image
      })
    }

    this.drawRect({
      x: x + border,
      y: y + border,
      width: gap - sgap,
      height: gap - sgap,
      fill: image ? false : fill,
      text,
      stroke
    })
  }
}
