<template>
  <div>
    <div class="btn-list">
      <el-button size="small" type="primary" @click="changeMotion('draw1')">平滑运动</el-button>
      <el-button size="small" type="primary" @click="changeMotion('draw2')">正弦运动</el-button>
      <el-button size="small" type="primary" @click="changeMotion('draw3')">脉冲运动</el-button>
      <el-button size="small" type="primary" @click="changeMotion('draw4')">圆周运动</el-button>
      <el-button size="small" type="primary" @click="changeMotion('draw5')">椭圆运动</el-button>
    </div>
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
    draw3 () {
      this.context.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      let scale = 1 + Math.sin(this.angle) * 0.5
      this.ball.scaleX = scale
      this.ball.scaleY = scale
      this.ball.draw(this.context)
      this.angle += 0.05
      this.timeout = window.requestAnimationFrame(this.draw3)
    },
    draw4 () {
      this.context.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      this.ball.radius = 30
      this.ball.x = 300 + Math.cos(this.angle) * 100
      this.ball.y = 250 + Math.sin(this.angle) * 100
      this.ball.draw(this.context)
      this.angle += 0.05
      this.timeout = window.requestAnimationFrame(this.draw4)
    },
    draw5 () {
      this.context.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      this.ball.radius = 30
      this.ball.x = 300 + Math.cos(this.angle) * 160
      this.ball.y = 250 + Math.sin(this.angle) * 100
      this.ball.draw(this.context)
      this.angle += 0.05
      this.timeout = window.requestAnimationFrame(this.draw5)
    },
    changeMotion (fnName) {
      window.cancelAnimationFrame(this.timeout)
      this.ball.x = 100
      this[fnName]()
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
