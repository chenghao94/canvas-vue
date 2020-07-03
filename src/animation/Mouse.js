export default class Mouse {
  constructor (ele) {
    this.x = 0
    this.y = 0
    this.ele = ele
    this.bindEvents()
  }
  bindEvents () {
    this.ele.addEventListener('mousemove', (e) => {
      this.x = e.pageX - this.ele.offsetLeft
      this.y = e.pageY - this.ele.offsetTop
    })
  }
}
