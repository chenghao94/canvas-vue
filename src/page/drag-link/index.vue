<template>
  <div class="drag-panel" @mouseup="endLink">
    <drag-component
      v-for="com in componentList"
      :key="com.id"
      :id="com.id"
      :background="com.background"
      :locate="com.locate"
      :input-points="com.inputPoints"
      :out-points="com.outPoints"
      @beginLink="beginLink"
      @changePosition="changePosition"
    ></drag-component>
    <svg width="100%" height="100%">
      <defs>
        <marker
          id="arrow"
          markerWidth="20"
          markerHeight="20"
          refX="20"
          refY="10"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path
            d="M10,5 L20,10 L10,15"
            fill="none"
            stroke="#000000"
            stroke-width="2"
          />
        </marker>
      </defs>
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import UUID from 'node-uuid'
import DragComponent from './drag-component'
import ComponentList from './components'

export default {
  name: 'index',
  components: { DragComponent },
  data () {
    return {
      componentList: ComponentList,
      drawFlag: false,
      startPoint: {}, // 临时变量，存储开始点
      svg: {}, // d3的svg对象
      pathId: '',
      pathList: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    beginLink (point) {
      this.startPoint = point
      this.drawFlag = true
      this.pathId = 'path' + UUID.v1()
      console.log('开始移动', this.startPoint)
      document.onmousemove = e => {
        if (this.drawFlag) {
          this.drawLink(
            this.startPoint.x,
            this.startPoint.y,
            e.pageX,
            e.pageY,
            this.pathId
          )
        }
      }
    },
    drawLink (x1, y1, x2, y2, pathId) {
      let [dx, dy] = [x2 - x1, Math.abs(y2 - y1)]
      const dz = (dx + dy) / 10
      this.svg.selectAll('#' + pathId).remove()
      let path = d3.path()
      path.moveTo(x1, y1)
      const [ox, oy] = [(x1 + x2) / 2, (y1 + y2) / 2]
      // 计算控制点位置
      let [cpx1, cpy1] = [(x1 + ox) / 2, (y1 + oy) / 2 + dz]
      let [cpx2, cpy2] = [(ox + x2) / 2, (oy + y2) / 2 - dz]
      if (y2 - y1 >= 0) {
        // 调整cpy
        cpy1 = (y1 + oy) / 2 - dz
        cpy2 = (oy + y2) / 2 + dz
      }
      path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2)
      // 开始画箭头
      this.svg
        .append('path')
        .attr('id', pathId)
        .attr('d', path)
        .attr('stroke', '#000000')
        .attr('stroke-with', '3')
        .attr('fill', 'none')
        .attr('marker-end', 'url(#arrow)')
    },
    endLink (e) {
      // 如果落在了目标点上
      if (e.target.classList.contains('input-point')) {
        // 判断是否有重复连线
        let exist = this.pathList.find(
          path =>
            path.from === this.startPoint.pointId && path.to === e.target.id
        )
        this.svg.selectAll('#' + this.pathId).remove()
        if (!exist) {
          // 重新画一条标准的线
          this.pathList.push({
            from: this.startPoint.pointId,
            to: e.target.id,
            id: this.pathId
          })
          this.drawLink(
            this.startPoint.x,
            this.startPoint.y,
            +e.target.getAttribute('x'),
            +e.target.getAttribute('y'),
            this.pathId
          )
        }
      } else {
        this.pathId && this.svg.selectAll('#' + this.pathId).remove()
      }
      this.drawFlag = false
      this.pathId = ''
      document.onmousemove = null
    },
    // 组件改变位置
    changePosition (id) {
      let component = this.componentList.find(com => com.id === id)
      this.pathList.forEach(path => {
        component.inputPoints.forEach(point => {
          if (point.id === path.to) {
            this.svg.selectAll('#' + path.id).remove()
            let start = document.getElementById(path.from)
            let end = document.getElementById(path.to)
            this.drawLink(
              +start.getAttribute('x'),
              +start.getAttribute('y'),
              +end.getAttribute('x'),
              +end.getAttribute('y'),
              path.id
            )
          }
        })
        component.outPoints.forEach(point => {
          if (point.id === path.from) {
            this.svg.selectAll('#' + path.id).remove()
            let start = document.getElementById(path.from)
            let end = document.getElementById(path.to)
            this.drawLink(
              +start.getAttribute('x'),
              +start.getAttribute('y'),
              +end.getAttribute('x'),
              +end.getAttribute('y'),
              path.id
            )
          }
        })
      })
    }
  },
  mounted () {
    this.svg = d3.select('svg')
  },
  props: {}
}
</script>

<style lang="less" scoped>
.drag-panel {
  position: relative;
  height: 100%;
}
</style>
