<template>
  <div id="app">
    <MainIndex />
  </div>
</template>

<script>
import MainIndex from './components/MainIndex.vue'

export default {
  name: 'App',
  components: {
    MainIndex
  }
}
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}

.clearfix {
  width: 1px;
  height: 1px;
  clear: both;
}
</style>
