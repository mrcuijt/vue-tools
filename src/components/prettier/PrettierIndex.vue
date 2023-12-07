<template>
  <div id="app">
    <pre>{{ data }}</pre>
  </div>
</template >

<script>
import prettier from 'prettier/standalone'
import parserBabel from 'prettier/plugins/babel'
import parserEstree from 'prettier/plugins/estree'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      msg: 'MainIndex',
      data: ''
    }
  },
  computed: {
    prettier () {
      return prettier
    }
  },
  mounted () {
    const _this = this
    console.log(this.prettier)
    this.prettier.format('var a = "hello world"; console.info(a);', { semi: false, parser: 'babel', 
    //this.prettier.format('foo ( );', { semi: false, parser: "babel", 
      plugins: [parserBabel, parserEstree] }).then(function (data) {
      _this.data = data
    })
  }
}
</script>

<style>
</style>