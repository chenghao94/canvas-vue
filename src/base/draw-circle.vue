<template>
    <div>
      <canvas ref="canvas" :width="width" :height="height"></canvas>
    </div>
</template>

<script>
import Circle from './circle'

export default {
  name: 'draw-circle',
  components: {},
  data () {
    return {
      width: 0,
      height: 0,
      ctx: {}
    }
  },
  computed: {},
  watch: {},
  methods: {
    drawCircle (circle) {
      this.ctx.clearRect(circle.x - circle.radius, circle.y - circle.radius, 2 * circle.radius, 2 * circle.radius)
      this.ctx.beginPath()
      this.ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
      this.ctx.closePath()
      this.ctx.fillStyle = circle.color
      this.ctx.fill()
      circle.r = circle.radius <= circle.r ? 0 : circle.r + 0.5
      window.requestAnimationFrame(() => {
        this.drawCircle(circle)
      })
    },
    getCircle () {
      let circle = new Circle(Math.round(this.width * Math.random()), Math.round(this.height * Math.random()))
      circle.setRadius(this.width, this.height)
      return circle
    }
  },
  mounted () {
    this.width = this.$refs.canvas.parentNode.getBoundingClientRect().width
    this.height = this.$refs.canvas.parentNode.getBoundingClientRect().height
    this.ctx = this.$refs.canvas.getContext('2d')
    this.$nextTick(() => {
      this.drawCircle(this.getCircle())
    })
  },
  props: {}
}
</script>

<style lang="less" scoped>

</style>
