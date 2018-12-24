<template>
    <div>
      <canvas ref="canvas" width="400" height="300"></canvas>
    </div>
</template>

<script>
export default {
  name: 'draw-area',
  components: {},
  data () {
    return {
      ctx: {},
      step: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
    drawRect () {
      this.step++
      this.ctx.clearRect(0, 0, 400, 300)
      this.ctx.fillStyle = 'rgba(0,222,255,0.2)'
      this.ctx.beginPath()
      // 每次绘图高度的变化量
      let leftDh = Math.sin(this.step * Math.PI / 180) * 30
      let rightDh = Math.cos(this.step * Math.PI / 180) * 30
      this.ctx.moveTo(0, 80 + leftDh)
      this.ctx.bezierCurveTo(150, 50 + leftDh, 250, 50 + rightDh, 400, 80 + rightDh)
      // this.ctx.lineTo(400, 80 + rightDh)
      this.ctx.lineTo(400, 300)
      this.ctx.lineTo(0, 300)
      this.ctx.closePath()
      this.ctx.fill()
      window.requestAnimationFrame(() => {
        this.drawRect()
      })
    }
  },
  mounted () {
    this.ctx = this.$refs.canvas.getContext('2d')
    this.drawRect() // 绘制一个矩形
  },
  props: {}
}
</script>

<style lang="less" scoped>

</style>
