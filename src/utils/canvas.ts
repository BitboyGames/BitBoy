export default class Canvas {
  width: number
  height: number
  strokeStyle: string
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  constructor(props: any) {
    this.canvas = props.canvas
    this.canvas.width = props.canvas.clientWidth
    this.canvas.height = props.canvas.clientHeight
    this.strokeStyle = props.strokeStyle || '#1E1E1E'
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.context = props.canvas.getContext('2d', { willReadFrequently: true })!
  }

  clean(x = 0, y = 0, width = this.width, height = this.height) {
    this.context.clearRect(x, y, width, height)
  }

  drawImage(props: any) {
    const { x, y, width, height, src, useRealImage } = props
    const img = new Image()
    img.src = src
    img.onload = () => {
      this.context.drawImage(img, x, y, useRealImage ? img.width : width, useRealImage ? img.height : height)
    }
  }

  drawRect(props: any) {
    const { x, y, width, height, stroke, border = 1, fill, text } = props
    this.context.strokeStyle = stroke
    this.context.lineWidth = border

    fill && (this.context.fillStyle = fill)

    const hb = border / 2
    const startX = x + hb
    const startY = y + hb
    const adjw = width - border
    const adjh = height - border

    this.context.beginPath()
    this.context.moveTo(startX, startY)
    this.context.lineTo(startX + adjw, startY)
    this.context.lineTo(startX + adjw, startY + adjh)
    this.context.lineTo(startX, startY + adjh)
    this.context.closePath()

    fill && this.context.fill()

    if (text) {
      this.context.fillStyle = '#fff'
      this.context.fillText(text, x + 1, y + adjw / 1.2)
    }
    this.context.stroke()
  }
}
