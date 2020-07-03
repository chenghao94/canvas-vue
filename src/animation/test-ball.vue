<template>
  <div>
    <el-button size="small" type="primary" @click="changeMotion(1)">平滑运动</el-button>
    <el-button size="small" type="primary" @click="changeMotion(2)">正弦运动</el-button>
    <canvas class="canvas" ref="canvas" width="1000" height="500"></canvas>
  </div>
</template>

<script>
import Ball from './Ball'
export default {
  name: 'test-ball',
  components: {},
  props: {},
  data () {
    return {
      ball: {},
      context: {},
      angle: 0,
      timeout: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
    init () {
      this.ball = new Ball()
      this.ball.x = 100
      this.context = this.$refs.canvas.getContext('2d')
    },
    draw1 () {
      this.context.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      this.ball.y = 200 + Math.sin(this.angle) * 100
      this.ball.draw(this.context)
      this.angle += 0.05
      this.timeout = window.requestAnimationFrame(this.draw1)
    },
    draw2 () {
      this.context.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      this.ball.x += 5
      this.ball.y = 200 + Math.sin(this.angle) * 100
      this.ball.draw(this.context)
      this.angle += 0.05
      if(this.ball.x > this.$refs.canvas.width) {
        this.ball.x = 100
      }
      this.timeout = window.requestAnimationFrame(this.draw2)
    },
    changeMotion (type) {
      window.cancelAnimationFrame(this.timeout)
      this.ball.x = 100
      if (type === 1) {
        this.draw1()
      }
      if (type === 2) {
        this.draw2()
      }
    }
  },
  mounted () {
    this.init()
    this.draw1()
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.timeout)
  }
}
</script>

<style scoped lang="less">
  .canvas {
    margin-left: 200px;
    margin-top: 100px;
    background-color: #5281dd;
  }
</style>
