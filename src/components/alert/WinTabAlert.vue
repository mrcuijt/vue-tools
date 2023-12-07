<template>
  <div>
    <div class="hello">{{ msg }}</div>
    <div
      class="position"
      ref="position"
    ></div>
    <div
      class="point"
      ref="point"
    ></div>
    <div>
      <div>鼠标信息: X:{{ x }} | Y:{{ y }} / beginX:{{ beginX }} | beginY:{{ beginY }} / endX:{{ endX }} | endY:{{ endY }}</div>
      <div>移动距离: MoveX:{{ moveX }} | MoveY:{{ moveY }}</div>
      <div>演算距离: uX1:{{ ux1 }} | uY1:{{ uy1 }}</div>
      <div>内容位置: X:{{ cx }} | Y:{{ cy }}</div>
    </div>
    <div
      class="content"
      draggable="true"
      v-on:dragstart="onDragStart"
      v-on:drag="drag"
      v-on:dragend="dragend"
      ref="content"
    >
      <div>标题</div>
      <div>内容</div>
      <div>结尾</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WinTabAlert',
  components: {

  },
  data () {
    return {
      msg: 'WinTabAlert',
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      beginX: 0,
      beginY: 0,
      endX: 0,
      endY: 0,
      moveX: 0,
      moveY: 0,
      ux1: 0,
      uy1: 0,
    }
  },
  watch: {
    endX () {
      this.calcXY('x')
    },
    endY () {
      this.calcXY('y')
    }
  },
  methods: {
    onDragStart: function ($events) {
      this.beginX = $events.clientX
      this.beginY = $events.clientY
    },
    drag: function ($events) {
      this.mouseStates(this, $events)
    },
    dragend: function ($events) {
      this.endX = $events.clientX
      this.endY = $events.clientY

      // var left = this.endX - this.beginX
      // var top = this.endY - this.beginY
      // var curLeft = this.$refs.content.offsetLeft
      // var curTop = this.$refs.content.offsetTop
      // this.$refs.content.style['margin-left'] = curLeft + left + 'px'
      // this.$refs.content.style['margin-top'] = curTop + top + 'px'
      console.info($events)

      // 标注鼠标结束位置
      this.$refs.position.style.left = this.endX + 'px'
      this.$refs.position.style.top = this.endY + 'px'
      this.$refs.point.style['left'] = this.endX + 'px'
      this.$refs.point.style['top'] = this.endY + 'px'
    },
    mouseStates: function (_this, $events) {
      _this.x = $events.clientX
      _this.y = $events.clientY
    },
    calcXY: function (zone) {
      if (zone === 'x') {
        this.moveX = this.endX - this.beginX
        this.ux1 += this.moveX
        this.$refs.content.style['margin-left'] = this.ux1 + 'px'
      }
      if (zone === 'y') {
        this.moveY = this.endY - this.beginY
        this.uy1 += this.moveY
        this.$refs.content.style['margin-top'] = this.uy1 + 'px'
      }
    }
  },
  mounted () {
    let _this = this
    this.cx = this.$refs.content.offsetLeft
    this.cy = this.$refs.content.offsetTop
    document.onmousemove = function (event) {
      _this.mouseStates(_this, event)
    }
    document.addEventListener('dragenter', (event) => {
      _this.mouseStates(_this, event)
    })
  },
  unmounted () { },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  border: 1px solid #ccc;
  cursor: pointer;
}
.position {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  position: absolute;
}
.point {
  width: 1px;
  height: 1px;
  background-color: #000;
  position: absolute;
}
</style>
