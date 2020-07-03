export default class Ball {
  constructor (color = 'aqua', radius = 40) {
    this.color = color
    this.radius = radius
    this.x = 0
    this.y = 0
    this.rotation = 0
    this.lineWidth = 1
  }
  draw (context) {
    context.save()
    context.translate(this.x, this.y)
    context.rotate(this.rotation)
    context.lineWidth = 2
    context.fillStyle = this.color
    context.beginPath()
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true)
    context.closePath()
    context.fill()
    if(this.lineWidth > 1) {
      context.stroke()
    }
    context.restore()
  }
}
