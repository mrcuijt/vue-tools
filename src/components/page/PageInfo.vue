<template>
  <div>
    <!-- v-if="pageNum == 1" -->
    <!-- {{ pageNum }} | {{ pages }} | {{ range }} -->
    <ButtonTemplate
      v-for="(item, index) in range"
      :key='index'
      v-bind:name="item"
      v-bind:type="button"
      v-on:btn-click="btnClick"
    ></ButtonTemplate>
  </div>
</template>

<script>
import ButtonTemplate from '@/components/button/ButtonTemplate.vue'
export default {
  name: 'PageInfo',
  props: ['pageNum', 'pages'],
  components: {
    ButtonTemplate
  },
  data () {
    return {
      first: false,
      range: [],
      button: 'button',
      msg: 'Welcome to PageInfo'
    }
  },
  created () {
    this.pageCount()
  },
  watch: {
    pageNum () {
      this.pageCount()
    },
    pages () {
      this.pageCount()
    }
  },
  methods: {
    pageCount: function () {
      let pageNum = 1
      let pages = 1
      let range = [1]
      if (this.pageNum && this.pages && this.pages > 1) {
        pageNum = this.pageNum
        pages = this.pages
        range.push(pageNum - 2)
        range.push(pageNum - 1)
        range.push(pageNum)
        range.push(pageNum + 1)
        range.push(pageNum + 2)
        range.push(pages - 2)
        range.push(pages - 1)
        range.push(pages)
        // 去重
        // 去除0和负数
        // 去除大于pages的数
        range = Array.from(new Set(range))
        for (let i = 0; i < range.length; i++) {
          if (range[i] <= 0) {
            range.splice(i, 1)
            i--
          }
          if (range[i] > pages) {
            range.splice(i, 1)
            i--
          }
          console.info(range)
        }
      } else {
        this.range = [1]
      }
      this.range = range
    },
    btnClick: function ($event) {
      this.$emit('page-change', $event.target.innerText)
    }
  }
}
</script>
