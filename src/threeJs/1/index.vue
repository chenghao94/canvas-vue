<template>
    <div ref="div"></div>
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
      cube: {}
    }
  },
  computed: {},
  watch: {},
  methods: {
    init () {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth - 10, window.innerHeight - 10)
      this.$refs.div.appendChild(this.renderer.domElement)
      let geometry = new THREE.CubeGeometry(1, 1, 1)
      let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      this.cube = new THREE.Mesh(geometry, material)
      this.scene.add(this.cube)
      this.camera.position.z = 5
    },
    render () {
      requestAnimationFrame(this.render)
      this.cube.rotation.x += 0.1
      this.cube.rotation.y += 0.1
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    this.init()
    this.render()
  },
  props: {}
}
</script>

<style lang="less" scoped>

</style>
