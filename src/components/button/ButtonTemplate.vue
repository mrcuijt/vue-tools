<template>
  <button :type="type" v-on:click="$emit('btn-click', $event)">{{ name }}</button>
</template>

<script>
export default {
  name: 'ButtonTemplate',
  props: ['name', 'type'],
  data () {
    return {
      msg: 'Welcome to SearchButton'
    }
  }
}
</script>
