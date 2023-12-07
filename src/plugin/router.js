import Vue from 'vue'
import Router from 'vue-router'
import TabA from '@/components/el-tabs/TabA'
import TabB from '@/components/el-tabs/TabB'
import BilibiliDanmuk from '@/components/el-tabs/bilibili/BilibiliDanmuk'
import PrettierIndex from '@/components/prettier/PrettierIndex'
import PrettierCode from '@/components/prettier/PrettierCode'
import DanmukIndex from '@/components/danmuk/Index'
import EditTemplate from '@/components/danmuk/edit/EditTemplate'
import DanmukDataGrid from '@/components/danmuk/datagrid/DanmukDataGrid'
import ViewDanmukDetail from '@/components/danmuk/detail/ViewDanmukDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tabA',
      name: 'TabA',
      component: TabA
    },
    {
      path: '/tabB',
      name: 'TabB',
      component: TabB
    },
    {
      path: '/danmuk',
      name: 'BilibiliDanmuk',
      component: BilibiliDanmuk
    },
    {
      path: '/danmuk-index',
      name: 'DanmukIndex',
      component: DanmukIndex
    },  
    {
      path: '/danmuk-data-grid',
      name: 'DanmukDataGrid',
      component: DanmukDataGrid
    },
    {
      path: '/danmuk-edit',
      name: 'EditTemplate',
      component: EditTemplate
    },
    {
      path: '/view-danmuk-detail',
      name: 'ViewDanmukDetail',
      component: ViewDanmukDetail
    },
    {
      path: '/code',
      name: 'PrettierIndex',
      component: PrettierIndex
    },
    {
      path: '/codeformat',
      name: 'PrettierCode',
      component: PrettierCode
    }
  ]
})
