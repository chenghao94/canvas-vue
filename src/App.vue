<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import routes from './router'
export default {
  name: 'app',
  data () {
    return {
      routes: routes.options.routes.filter(item => item.path !== '/'),
      value: '/file-save'
    }
  },
  methods: {
    changeRadio (path) {
      this.$router.push(path)
      console.log(123)
    }
  }
}
</script>
