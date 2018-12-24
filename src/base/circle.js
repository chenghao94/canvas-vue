/**
 * @desc
 * @author chenghao
 * @date 2018/12/24 15:05
 */
export default class Circle {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.radius = 0 // 最大半径
    this.r = 0 // 扩散半径
    this.color = `rgba(${Math.round(255 * Math.random())},${Math.round(255 * Math.random())},${Math.round(255 * Math.random())},${(Math.random())})`
  }
  
  setRadius (width, height) {
    this.radius = Math.min(this.x, this.y, width - this.x, height - this.y) * (0.6 * Math.random() + 0.2)
  }
  
  clearCircle (ctx) {
    ctx.clearRect(this.x - this.radius, this.y - this.radius, this.radius, this.radius)
  }
  
  draw (ctx) {
    console.log('ctx', ctx)
    console.log('this', this)
    this.clearCircle(ctx)
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fillStyle = this.color
    ctx.fill()
    this.r += 0.5
    // 半径radius大于30时，重置为0
    if (this.r > this.radius) {
      this.r = 0
    }
  }
}
