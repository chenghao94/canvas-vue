<template>
  <div style="padding: 30px">
    <el-button type="primary" @click="saveText">保存文本</el-button>
    <el-button type="primary" @click="saveJson">保存json</el-button>
    <el-button type="primary" @click="saveCanvas">保存画布</el-button>
    <el-button type="primary" @click="saveImg">保存图片</el-button>
    <div>
      <TestArrow ref="canvas"></TestArrow>
    </div>
  </div>
</template>

<script>
import { saveAs } from 'file-saver'
import TestArrow from '../../animation-base/test-arrow'
export default {
  name: 'file-saver',
  components: { TestArrow },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    // 保存文本
    saveText () {
      let blob = new Blob(['大家好，我是阿宝哥!'], { type: 'text/plain;charset=utf-8' })
      saveAs(blob, 'hello.txt')
    },
    saveJson () {
      const obj = { name: '张三', sex: 12 }
      let blob = new Blob([JSON.stringify(obj)], { type: 'text/plain;charset=utf-8' })
      saveAs(blob, 'hello.json')
    },
    // 保存图片
    saveImg () {
      // const url = 'http://119.3.37.131/upload/back/images/20201214/1338291545080799233.jpg'
      const url = 'http://119.3.37.131/upload/back/images/20201125/1331526232288993281.jpg'
      saveAs(url, 'aaa.jpg')
    },
    // 保存画布
    saveCanvas () {
      let canvas = this.$refs.canvas.$el
      canvas.toBlob((blob) => {
        saveAs(blob, 'abao.png')
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">

</style>
