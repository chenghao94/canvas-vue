<template>
    <div>
      <canvas ref="canvas" width="800" height="600"></canvas>
    </div>
</template>

<script>
export default {
  name: 'draw-circle',
  components: {},
  data () {
    return {
      ctx: {},
      radius: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
    drawCircle () {
      this.ctx.clearRect(0, 0, 800, 600)
      this.ctx.beginPath()
      this.ctx.arc(150, 100, this.radius, 0, Math.PI * 2)
      this.ctx.closePath()
      this.ctx.fillStyle = 'rgba(250,250,50,1)'
      this.ctx.fill()
      this.radius += 0.5 // 每一帧半径增加0.5
      // 半径radius大于30时，重置为0
      if (this.radius > 60) {
        this.radius = 0
      }
      window.requestAnimationFrame(this.drawCircle)
    }
  },
  mounted () {
    this.ctx = this.$refs.canvas.getContext('2d')
    this.drawCircle()
  },
  props: {}
}
</script>

<style lang="less" scoped>

</style>
