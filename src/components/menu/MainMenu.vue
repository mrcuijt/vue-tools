<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <div class="menu-container">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
    >
      <el-menu-item @click="handleisCollapse">
        <i class="el-icon-setting"></i>
        <span slot="title"></span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="danmuk">弹幕</el-menu-item>
          <el-menu-item index="code">code</el-menu-item>
          <el-menu-item index="codeformat">codeformat</el-menu-item>
          <el-menu-item index="danmuk-index">danmuk-index</el-menu-item>
          <el-menu-item index="danmuk-edit">danmuk-edit</el-menu-item>
          <el-menu-item index="danmuk-data-grid">danmuk-data-grid</el-menu-item>
          <el-menu-item index="tabA">选项1</el-menu-item>
          <el-menu-item index="tabB">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item
        index="3"
        disabled
      >
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  components: {
  },
  data () {
    return {
      isCollapse: false,
      msg: 'MainMenu',
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleisCollapse () {
      this.isCollapse = !this.isCollapse
    },
  },
  mounted () {
  },
  unmounted () {
  },
}
</script>

<style scoped>
.menu-container {
  height: 100%;
  overflow: hidden;
}
.el-menu {
  border-right: 0px;
  overflow: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
