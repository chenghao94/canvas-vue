<template>
    <div ref="canvas" :style="{width: `${width}px`,height: `${height}px`}"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'index',
  components: {},
  data () {
    return {
      scene: {},
      camera: {},
      renderer: {},
      width: 800,
      height: 600
    }
  },
  computed: {},
  watch: {},
  methods: {
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 1, 10000)
      this.camera.position.x = 0
      this.camera.position.y = 1000
      this.camera.position.z = 0
      this.camera.up.x = 0
      this.camera.up.y = 0
      this.camera.up.z = 1
      this.camera.lookAt({
        x: 0,
        y: 0,
        z: 0
      })
    },
    initRenderer () {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      })
      this.renderer.setSize(this.width, this.height)
      this.$refs.canvas.appendChild(this.renderer.domElement)
      this.renderer.setClearColor(0xFFFFFF, 1.0)
    }
  },
  mounted () {
    this.scene = new THREE.Scene()
    this.initCamera()
    this.initRenderer()
  },
  props: {}
}
</script>

<style lang="less" scoped>

</style>
