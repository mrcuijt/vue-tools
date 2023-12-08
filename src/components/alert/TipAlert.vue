<template>
  <div
    class="content"
    ref="content"
  >
    <div class="hello">{{ msg }}</div>
    <ButtonTemplate
      :name="'点击'"
      :type="'button'"
      @btn-click="btnClick"
    ></ButtonTemplate>
    <div
      class="tip"
      ref="tip"
      v-if="visible"
    >
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
import ButtonTemplate from '@/components/button/ButtonTemplate.vue'
export default {
  name: 'TipAlert',
  components: {
    ButtonTemplate
  },
  data () {
    return {
      msg: 'TipAlert',
      visible: false,
      top: 0,
      left: 0,
    }
  },
  watch: {
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    btnClick: function ($events) {
      this.visible = true
      this.hidden = 'visible'
      this.$nextTick(() => {
        this.top = document.body.clientHeight - this.$refs.tip.offsetHeight + 'px'
        this.left = document.body.clientWidth - this.$refs.tip.offsetWidth + 'px'
      })
    },
  },
  created () {
  },
  mounted () {
  },
  unmounted () { },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  /* position: relative; */
}
.tip {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  position: absolute;
  top: v-bind(top);
  left: v-bind(left);
  z-index: 2;
  animation-name: a1;
  animation-duration: 0.7s;
}

@keyframes a1 {
  from {
    top: 1800px;
  }
  to {
    height: v-bind(top);
  }
}
</style>
