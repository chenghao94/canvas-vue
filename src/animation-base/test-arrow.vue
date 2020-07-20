<template>
  <div>
    <canvas class="canvas" ref="canvas" width="1000" height="500">
    </canvas>
  </div>
</template>

<script>
import Mouse from './Mouse'
import Arrow from './Arrow'
export default {
  name: 'test1',
  components: {},
  props: {},
  data () {
    return {
      mouse: {},
      arrow: {},
      context: {},
      timeout: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
    init () {
      this.mouse = new Mouse(this.$refs.canvas)
      this.arrow = new Arrow(100, 100)
      this.context = this.$refs.canvas.getContext('2d')
    },
    draw () {
      this.context.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      let [dx, dy] = [this.mouse.x - this.arrow.x, this.mouse.y - this.arrow.y]
      this.arrow.rotation = Math.atan2(dy, dx)
      this.arrow.draw(this.context)
      this.timeout = window.requestAnimationFrame(this.draw)
    }
  },
  mounted () {
    this.init()
    this.draw()
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.timeout)
  }
}
</script>

<style scoped lang="less">
.canvas {
  margin-left: 400px;
  margin-top: 100px;
  background-color: #5281dd;
}
</style>
