<template>
  <input
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'InputTemplate',
  props: ['value'],
  data () {
    return {
      msg: 'Welcome to SearchButton'
    }
  }
}
</script>
