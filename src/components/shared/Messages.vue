<template>

</template>

<script>

import Vue from 'vue'

export default {
  name: 'Messages',
  data: {
    welcome: 'Seja bem vindo ao Reunion',
    messages: [],
    error: null
  }
}

Vue.component('messages', {
  template: '<li class="message"></li>'
})

</script>

<style scoped>

</style>