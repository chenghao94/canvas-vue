<template>
    <div><svg width="300px" height="175px">
      <path fill="transparent"
        stroke="#000000"
        stroke-width="4"
        d="M10 80 Q 77.5 10, 145 80 T 280 80"
        class="path"></path>
      <path fill="transparent"
        stroke="#FF2851"
        stroke-width="4"
        d="M10 80 Q 77.5 10, 145 80 T 280 80"
        class="line2"></path>
      <path fill="transparent"
        stroke="#000000"
        stroke-width="4"
        d="M10 80 Q 77.5 10, 145 80 T 280 80"
        class="line1"></path> </svg></div>
</template>

<script>
export default {
  name: 'path2',
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  mounted () {
  },
  props: {}
}
</script>

<style lang="less" scoped>
svg {
  width: 300px;
  display: block;
  position: absolute;
}

svg .line1 {
  stroke-dasharray: 340;
  stroke-dashoffset: 40;
  animation: dash 1.5s linear alternate infinite;
}

svg .line2 {
  stroke-dasharray: 320;
  stroke-dashoffset: 320;
  animation: dash2 1.5s linear alternate infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 360;
  }
  to {
    stroke-dashoffset: 40;
  }
}

@keyframes dash2 {
  from {
    stroke-dashoffset: 280;
  }
  to {
    stroke-dashoffset: -40;
  }
}
</style>
