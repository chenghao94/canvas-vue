<template>
    <div>
      <svg width="800" height="500">
        <path id="path1" fill="transparent"
          stroke="#000000"
          stroke-linecap="round"
          stroke-width="5"
          d="M10 80 Q 77.5 10, 145 80 T 280 80"
          class="path"></path>
      </svg>
    </div>
</template>

<script>
export default {
  name: 'path1',
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  mounted () {
    let path = document.getElementById('path1')
    console.log(path.getTotalLength())
  },
  props: {}
}
</script>

<style lang="less" scoped>
.path {
  stroke-dasharray: 312;
  stroke-dashoffset: 0;
  animation: dash 2s linear infinite;
}

@keyframes dash {
  from {
    stroke-dashoffset: 312;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
