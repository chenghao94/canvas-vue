<template>
    <div>
      <canvas ref="canvas" :width="width" :height="height"></canvas>
    </div>
</template>

<script>
export default {
  name: 'draw-line',
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
    drawLine () {
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.ctx.lineWidth = 3
      this.ctx.lineCap = 'round'
      this.ctx.beginPath()
      this.ctx.moveTo(0, 0)
      this.ctx.bezierCurveTo(150, 200, 350, 300, 600, 300)
      // 创建线性渐变
      let gradient = this.ctx.createLinearGradient(0, 0, 250, 250)
      gradient.addColorStop(0.2, 'blue')
      gradient.addColorStop(0.8, 'red')
      this.ctx.strokeStyle = gradient
      this.ctx.stroke()
    }
  },
  mounted () {
    this.width = this.$refs.canvas.parentNode.getBoundingClientRect().width
    this.height = this.$refs.canvas.parentNode.getBoundingClientRect().height
    this.ctx = this.$refs.canvas.getContext('2d')
    this.$nextTick(() => {
      this.drawLine()
    })
  },
  props: {}
}
</script>

<style lang="less" scoped>
</style>
