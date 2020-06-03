<template>
  <div class="model-page-view">
    <div class="left-panel">
      <el-tabs type="card">
        <el-tab-pane label="数据">
          <div class="data-list">
            <div v-for="item of dataList" class="data-item" :key="item.id" draggable>
              <i class="el-icon-tickets" style="font-size: 18px"></i>
              <div>{{item.name}}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="组件">
          <div class="data-list">
            <div v-for="item of componentList" class="data-item" :key="item.id" draggable>
              <i class="el-icon-tickets" style="font-size: 18px"></i>
              <div>{{item.name}}</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="canvas-panel">
      <canvas-panel v-if="sdk.inited" :sdk="sdk"></canvas-panel>
    </div>
  </div>
</template>

<script>
import Data from './json/data'
import Components from './json/components'
import Flow from './json/flow'
import SDK from './SDK'
import CanvasPanel from '../canvas-panel'
export default {
  name: 'model-page',
  components: { CanvasPanel },
  props: {},
  data () {
    return {
      dataList: Data,
      componentList: Components,
      Flow,
      sdk: {}
    }
  },
  computed: {},
  watch: {},
  methods: {
    init () {
      this.sdk = new SDK(Flow)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped lang="less">
.model-page-view {
  height: 100%;
  display: flex;
  background-color: #ffffff;
  .left-panel {
    flex: 0 0 300px;
    .data-list {
      display: flex;
      flex-wrap: wrap;
      .data-item {
        text-align: center;
        width: 75px;
        height: 60px;
        font-size: 16px;
        cursor: pointer;
        border: solid 1px #5281dd;
        padding: 5px;
        margin-bottom: 8px;
        margin-left: 8px;
        border-radius: 10px;
      }
      .data-item:hover {
        background-color: #d9e9fa;
      }
    }
  }
  .canvas-panel {
    background-color: #eef2f9;
    flex: 1;
  }
}
</style>
