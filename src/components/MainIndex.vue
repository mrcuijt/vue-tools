<template>
  <el-container ref="mainDiv">
    <el-header>标题</el-header>
    <el-container>
      <el-aside
        ref="mainMenu"
        width="200px"
      >
        <MainMenu></MainMenu>
      </el-aside>
      <el-main>
        Main
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import MainMenu from './menu/MainMenu.vue'
export default {
  name: 'MainIndex',
  components: {
    MainMenu,
  },
  data () {
    return {
      msg: 'MainIndex',
    }
  },
  methods: {
    autoHeight () {
      const screenheight = window.innerHeight
      this.$refs.mainDiv.$el.style.height = screenheight + 'px'
      console.log(screenheight, this.$refs.mainDiv.$el.style.height)
    },
    autoMenuWidth () {
      this.$refs.mainMenu.$el.style.width = 'auto' 
    }
  },
  mounted () {
    this.autoHeight()
    this.autoMenuWidth()
    window.addEventListener('resize', this.autoHeight)
  },
  unmounted () {
    window.removeEventListener('resize', this.autoHeight, false)
  },
}
</script>

<style>
.el-header {
  color: #333;
  text-align: left;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}

.el-aside {
  color: #333;
  text-align: left;
  overflow: hidden;
  border-right: 1px solid #ccc;
}

.clearfix {
  height: 1px;
  clear: both;
}

.el-main {
  color: #333;
  text-align: left;
}

.el-container {
  height: 0;
  min-height: 370px;
}
</style>
