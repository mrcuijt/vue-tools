<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <WinTabAlert></WinTabAlert>
  </div>
</template>

<script>

import WinTabAlert from '@/components/alert/WinTabAlert2.vue'
export default {
  name: 'TabA',
  components: {
    WinTabAlert
  },
  data () {
    return {
      msg: 'Component A'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
