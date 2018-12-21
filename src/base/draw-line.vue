<template>
    <div>
      <canvas ref="canvas" width="800" height="600"></canvas>
    </div>
</template>

<script>
export default {
  name: 'draw-line',
  components: {},
  data () {
    return {
      ctx: {}
    }
  },
  computed: {},
  watch: {},
  methods: {},
  mounted () {
    this.ctx = this.$refs.canvas.getContext('2d')
  },
  props: {}
}
</script>

<style lang="less" scoped>
</style>
