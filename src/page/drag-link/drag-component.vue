<template>
    <div class="drag-component" :style="componentStyle" @mousedown="beginMove" @dragstart="dragstart">
       <div v-for="(point,index) in outPoints"
	       :id="point.id"
	       :key="point.id"
	       class="out-point"
	       :style="{top:`${20+30*index}px`}"
	       :x="`${100+locate.x+6}`"
	       :y="`${20+30*index+6+locate.y}`"
	       @mousedown="mousedown(point,index,$event)"
	       @dragstart="dragstart"></div>
       <div v-for="(point,index) in inputPoints"
	       :id="point.id"
	       :key="point.id"
	       class="input-point"
	       :x="`${locate.x-6}`"
	       :y="`${20+30*index+6+locate.y}`"
	       :style="{top:`${20+30*index}px`}"
	       @dragstart="dragstart"></div>
    </div>
</template>

<script>
export default {
  name: 'drag-component',
  components: {},
  data () {
    return {
      moving: false
    }
  },
  computed: {
    componentStyle () {
      return `background:${this.background};transform:translate(${this.locate.x}px,${this.locate.y}px)`
    }
  },
  watch: {},
  methods: {
    beginMove (em) {
      this.moving = true
      let [currentX, currentY] = [em.clientX, em.clientY]
      let [x, y] = [this.locate.x, this.locate.y]
      document.onmousemove = (e) => {
        if (this.moving) {
          this.locate.x = x + e.clientX - currentX
          this.locate.y = y + e.clientY - currentY
          this.$emit('changePosition', this.id)
        }
      }
      document.onmouseup = () => {
        this.moving = false
        document.onmousemove = null
      }
    },
    mousedown (point, index, e) {
      console.log(e)
      e.stopPropagation()
      let x = this.locate.x + 100 + 6
      let y = this.locate.y + 20 + 30 * index + 6
      this.$emit('beginLink', {
        pointId: point.id, x, y
      })
    },
    dragstart (e) {
      e.preventDefault()
    }
  },
  mounted () {
  },
  props: {
    id: {
      type: String,
      default: '123'
    },
    background: {
      type: String,
      default: 'none'
    },
    // 位置参数
    locate: {
      type: Object,
      default () {
        return {
          x: 0,
          y: 0
        }
      }
    },
    // 输出点
    outPoints: {
      type: Array,
      default () {
        return []
      }
    },
    // 输入点
    inputPoints: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.drag-component {
	position: absolute;
	width: 100px;
	height: 100px;
	cursor: pointer;
	
	.out-point {
		position: absolute;
		width: 10px;
		height: 10px;
		background: red;
		right: -10px;
		border: 2px solid transparent;
		border-radius: 50%;
		
		&:hover {
			border: 2px solid yellow;
		}
	}
	
	.input-point {
		position: absolute;
		width: 10px;
		height: 10px;
		background: rgba(243, 149, 181, 0.66);
		left: -10px;
		border: 2px solid transparent;
		border-radius: 50%;
		
		&:hover {
			border: 2px solid yellow;
		}
	}
}
</style>
