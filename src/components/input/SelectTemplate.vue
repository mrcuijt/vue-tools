<template>
  <select
    v-bind:value="value"
    v-on:change="$emit('input', $event.target.value)"
  >
    <option></option>
    <option
      v-for='(item) in types'
      :key='item'
      :value="item"
    >{{ item }}</option>
  </select>
</template>

<script>
export default {
  name: 'SelectTemplate',
  props: ['value', 'types'],
  data () {
    return {
      msg: 'Welcome to SearchButton'
    }
  }
}
</script>
