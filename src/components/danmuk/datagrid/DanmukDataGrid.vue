<template>
  <div>
    {{ searchBtn.name }} / {{ searchBtn.type }} / {{ id }}
    <br />
    <!-- {{ pageData }} -->
    <br />
    <!-- {{ list }} -->
    <!-- {{ searchParam }} -->
    <!-- {{ types }} -->
    <div class="search">
      <label>编号</label>
      <InputTemplate v-model="searchParam.id"></InputTemplate>
      <label>弹幕</label>
      <InputTemplate v-model="searchParam.danmuk"></InputTemplate>
      <label>弹幕类型</label>
      <SelectTemplate
        v-model="searchParam.danmukType"
        v-bind:types="types"
      ></SelectTemplate>
      <label>用户Id</label>
      <InputTemplate v-model="searchParam.danmukUserId"></InputTemplate>
      <label>用户名</label>
      <InputTemplate v-model="searchParam.danmukUserName"></InputTemplate>
      <label>时间开始</label>
      <InputTemplate v-model="searchParam.danmukTimeBegin"></InputTemplate>
      <label>时间结束</label>
      <InputTemplate v-model="searchParam.danmukTimeEnd"></InputTemplate>
      <ButtonTemplate
        v-bind:name="searchBtn.name"
        v-bind:type="searchBtn.type"
        v-on:btn-click="btnClick"
      ></ButtonTemplate>
    </div>
    <div class="data-grid">
      <table border="border">
        <tr>
          <th>ID</th>
          <th>房间号</th>
          <th style="width:200px">弹幕</th>
          <th>弹幕消息</th>
          <th>弹幕类型</th>
          <th>用户Id</th>
          <th>用户名</th>
          <th>发送时间</th>
          <th>操作</th>
        </tr>
        <tr
          v-for="item in list"
          :key="item.id"
          :item="item"
        >
          <td
            v-text="item.id"
            v-on:click="viewDetailClick"
          ></td>
          <td v-text="item.roomId"></td>
          <td
            v-text="item.danmuk"
            style="width:200px"
          ></td>
          <td
            class="text-overflow"
            v-text="item.danmukMsg"
          ></td>
          <td v-text="item.danmukType"></td>
          <td v-text="item.danmukUserId"></td>
          <td v-text="item.danmukUserName"></td>
          <td v-text="item.danmukTime"></td>
          <td>
            <ButtonTemplate
              v-bind:name="'编辑'"
              v-bind:type="'button'"
              v-on:btn-click="editClick"
            ></ButtonTemplate>
            <ButtonTemplate
              v-bind:name="'弹框'"
              v-bind:type="'button'"
              v-on:btn-click="alertEditClick"
            ></ButtonTemplate>
          </td>
        </tr>
      </table>
      <div>
        <PageInfo
          v-bind:pageNum="pageData.pageNum"
          v-bind:pages="pageData.pages"
          v-on:page-change="pageChange"
        ></PageInfo>
      </div>
    </div>
    <AlertEditTemplate
      v-if="vifAlertEdit"
      :value="id"
      :height="'100%'"
      :width="'300px'"
      v-on:close-click="alertCloseClick"
    ></AlertEditTemplate>
  </div>
</template>

<script>
import { getContent } from '@/components/danmuk/api.js'
import ButtonTemplate from '@/components/button/ButtonTemplate.vue'
import InputTemplate from '@/components/input/InputTemplate.vue'
import SelectTemplate from '@/components/input/SelectTemplate.vue'
import AlertEditTemplate from '@/components/danmuk/edit/AlertEditTemplate.vue'
import PageInfo from '@/components/page/PageInfo.vue'
export default {
  name: 'DanmukDataGrid',
  components: {
    ButtonTemplate, InputTemplate, SelectTemplate, PageInfo, AlertEditTemplate
  },
  data () {
    return {
      vifAlertEdit: false,
      searchBtn: {
        name: '查询',
        type: 'button'
      },
      searchParam: {
        pageNum: 1,
        pageSize: 10,
        id: '',
        danmuk: '',
        danmukType: '',
        danmukUserId: '',
        danmukUserName: '',
        danmukTimeBegin: '',
        danmukTimeEnd: ''
      },
      types: [],
      pageData: {
        pages: 0,
        pageNum: 1,
        pageSize: 10
      },
      list: [],
      msg: 'Welcome to DanmukDataGrid',
      id: ''
    }
  },
  created () {
    this.dataLoad()
    this.typesLoad()
    console.info('This' + this.list)
  },
  methods: {
    dataLoad: function () {
      let url = 'http://localhost:8600/approve/danmuk/search'
      let promise = getContent(url, { ...this.searchParam })
      let $this = this
      promise.then(function (resp) {
        if (resp.data.code === 200) {
          $this.pageData = resp.data.data
          $this.list = $this.pageData.list
        }
      })
    },
    typesLoad: function () {
      let url = 'http://localhost:8600/approve/danmuk/types'
      let promise = getContent(url, {})
      let $this = this
      promise.then(function (resp) {
        if (resp.data.code === 200) {
          $this.types = resp.data.data
        }
      })
    },
    btnClick: function () {
      this.dataLoad()
    },
    editClick: function ($event) {
      for (var i in $event.path) {
        if ($event.path[i].localName == 'tr') {
          var id = $event.path[i].firstElementChild.innerText
          this.$router.push({ name: 'EditTemplate', query: { id: id } })
          break
        }
      }
    },
    alertEditClick: function ($event) {
      for (var i in $event.path) {
        if ($event.path[i].localName == 'tr') {
          this.id = $event.path[i].firstElementChild.innerText
          this.vifAlertEdit = true
          break
        }
      }
    },
    alertCloseClick: function (flag) {
      this.vifAlertEdit = flag
    },
    viewDetailClick: function ($event) {
      console.info($event.target.innerText)
      this.$router.push({ name: 'ViewDanmukDetail', query: { id: $event.target.innerText } })
    },
    pageChange: function (val) {
      this.searchParam.pageNum = val
      console.info(val)
      this.dataLoad()
    }
  }
}
</script>
<style scoped>
table {
  border: border;
}
th,
td {
  width: 100px; /* (一定要加宽度）*/
  overflow: hidden; /*超出的文本隐藏 */
  text-overflow: ellipsis; /* 溢出用省略号 */
  white-space: nowrap; /* 溢出不换行 */
  -webkit-line-clamp: 1; /*控制显示的行数 */
  -webkit-box-orient: vertical; /* 从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式) */
  /*display: inline-block;*/ /* 将对象作为弹性伸缩盒子模型显示 */
}
</style>