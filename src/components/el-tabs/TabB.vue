<template>
  <div>
    <div class="hello">{{ msg }}</div>
    <TipAlert></TipAlert>
  </div>
</template>

<script>

import TipAlert from '@/components/alert/TipAlert.vue'
export default {
  name: 'TabB',
  components: {
    TipAlert
  },
  data () {
    return {
      msg: 'Component B'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
