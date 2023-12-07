<template>
  <div class="content">
    <div class="body">
      {{ danmuk }}
      <div>
        <label>ID:</label>
        <InputTemplate v-model="danmuk.id"></InputTemplate>
      </div>
      <div>
        <label>房间号:</label>
        <InputTemplate v-model="danmuk.roomId"></InputTemplate>
      </div>
      <div>
        <label>弹幕:</label>
        <InputTemplate v-model="danmuk.danmuk"></InputTemplate>
      </div>
      <div>
        <label>弹幕消息:</label>
        <InputTemplate v-model="danmuk.danmukMsg"></InputTemplate>
      </div>
      <div>
        <label>弹幕类型:</label>
        <InputTemplate v-model="danmuk.danmukType"></InputTemplate>
      </div>
      <div>
        <label>用户Id:</label>
        <InputTemplate v-model="danmuk.danmukUserId"></InputTemplate>
      </div>
      <div>
        <label>用户名:</label>
        <InputTemplate v-model="danmuk.danmukUserName"></InputTemplate>
      </div>
      <div>
        <label>发送时间:</label>
        <InputTemplate v-model="danmuk.danmukTime"></InputTemplate>
      </div>
      <div>
        <ButtonTemplate
          :type="type"
          :name="name"
          v-on:btn-click="btnClick"
        ></ButtonTemplate>
        <ButtonTemplate
          :type="type"
          :name="'关闭'"
          v-on:btn-click="closeBtnClick"
        ></ButtonTemplate>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { getContent } from '@/components/danmuk/api.js'
import ButtonTemplate from '@/components/button/ButtonTemplate.vue'
import InputTemplate from '@/components/input/InputTemplate.vue'
export default {
  name: 'EditTemplate',
  props: ['value', 'width', 'height'],
  components: {
    ButtonTemplate, InputTemplate
  },
  data () {
    return {
      name: '按钮',
      type: 'button',
      id: '',
      danmuk: {
        id: '',
        roomId: '',
        danmuk: '',
        danmukMsg: '',
        danmukType: '',
        danmukUserId: '',
        danmukUserName: '',
        danmukTime: ''
      },
      msg: 'Welcome to Edit'
    }
  },
  created () {
    this.dataLoad()
  },
  methods: {
    dataLoad: function () {
      this.id = this.value
      let url = 'http://localhost:8600/approve/danmuk'
      let promise = getContent(url, { id: this.id })
      let $this = this
      promise.then(function (resp) {
        if (resp.data.code === 200) {
          $this.danmuk = resp.data.data
        }
      })
    },
    btnClick: function () {
      // console.info(this.danmuk)
      let url = 'http://localhost:8600/approve/danmuk/add'
      getContent(url, { danmuk: this.danmuk })
    },
    closeBtnClick: function () {
      this.$emit('close-click', false)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #cccccc42;
  overflow: hidden;
}

.body {
  width: v-bind(width);
  height: v-bind(height);
  margin: 0 auto;
  background-color: #fff;
  overflow: auto;
}

div > label {
  width: 100px;
  display: inline-block;
  text-align: left;
}
</style>
