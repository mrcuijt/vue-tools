<template>
  <div>
    {{ detail }} 
    <table
      border=""
      style="word-wrap: break-word;"
    >
      <tr>
        <th>ID</th>
        <td>{{ detail.id }}</td>
      </tr>
      <tr>
        <th>房间号</th>
        <td>{{ detail.roomId }}</td>
      </tr>
      <tr>
        <th>弹幕</th>
        <td>{{ detail.danmuk }}</td>
      </tr>
      <tr>
        <th>弹幕消息</th>
        <td>{{ detail.danmukMsg }}</td>
      </tr>
      <tr>
        <th>弹幕类型</th>
        <td>{{ detail.danmukType }}</td>
      </tr>
      <tr>
        <th>用户Id</th>
        <td>{{ detail.danmukUserId }}</td>
      </tr>
      <tr>
        <th>用户名</th>
        <td>{{ detail.danmukUserName }}</td>
      </tr>
      <tr>
        <th>发送时间</th>
        <td>{{ detail.danmukTime }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getContent } from '@/components/danmuk/api.js'
export default {
  name: 'DanmukDetail',
  // props: ['inputVal'],
  components: {
  },
  data () {
    return {
      inputVal: 'input val',
      msg: 'Welcome to DataGridIndex2',
      detail: { 'a': 'b' },
      params: {
        id: '1625757482905276417'
      }
    }
  },
  created () {
    let promise = getContent('http://localhost:8600/approve/danmuk', this.params)
    let $this = this
    promise.then(function (resp) {
      if (resp.data.code === 200) {
        $this.detail = resp.data.data
      }
    })
    console.info('This' + this.detail)
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
