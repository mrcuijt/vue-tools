<template>
  <div>
    <DanmukDetail v-on:click="updateVal"></DanmukDetail>
    {{ inputVal }}
  </div>
</template>

<script>
import DanmukDetail from '@/components/danmuk/DanmukDetail.vue'
export default {
  name: 'DanmukIndex',
  // props: ['inputVal'],
  components: {
    DanmukDetail
  },
  data () {
    return {
      inputVal: 'input val',
      msg: 'Welcome to DanmukIndex'
    }
  },
  created () {
    // this.inputVal = 'input val'
    // console.info('This' + this.inputVal)
  },
  methods: {
    update: function (val) {
      this.inputVal = val
    },
    updateVal: function () {
      this.inputVal = new Date()
    }
  }
}
</script>
