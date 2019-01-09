<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
console.log('script start')
setTimeout(function () {
  console.log('setTimeout')
}, 0)
new Promise(resolve => {
  console.log('Promise')
  setTimeout(function () {
    console.log('setTimeout Promise')
  }, 0)
  resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })
console.log('script end')
</script>
