<template>
  <div class="home">
    <ul class="nav-ul">
      <li v-for="item in menu"
        :key="item.name"
        @click="curComponent=item"
        :class="{'active':item.name===curComponent.name}">
        <span>{{item.name}}</span>
      </li>
    </ul>
    <div class="view" :is="curComponent.is"></div>
  </div>
</template>

<script>
import menuJson from './menu'
import BatchComponents from '@/base'

export default {
  name: 'home',
  data () {
    return {
      menu: [],
      curComponent: {}
    }
  },
  components: { ...BatchComponents },
  mounted () {
    this.menu = menuJson
    this.curComponent = this.menu[0]
  }
}
</script>
<style lang="less" scoped>
.home {
  display: flex;
  padding-top: 50px;

  .nav-ul {
    flex: 0 0 300px;
  }

  .view {
    flex: 1;
  }
}

.nav-ul {
  width: 200px;
  margin-left: 50px;
  span{
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;
  }
  .active {
    color: #2d8cf0;
  }
}
</style>
