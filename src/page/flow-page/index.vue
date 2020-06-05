<template>
  <div style="height: 100%;background-color: white">
    <svg id="flow-page" :width="graph.svgWidth" :height="graph.svgHeight"></svg>
  </div>
</template>

<script>
import fakeData from './data'
import * as d3 from 'd3'
import Graph from './Graph'
export default {
  name: 'flow-page',
  components: {},
  props: {},
  data () {
    return {
      graph: {}
    }
  },
  computed: {},
  watch: {},
  methods: {},
  mounted () {
    let svg = d3.select('#flow-page')
    this.graph = new Graph(svg, fakeData)
  }
}
</script>

<style scoped lang="less">
  #flow-page {
    background-color: white;
  }
</style>
