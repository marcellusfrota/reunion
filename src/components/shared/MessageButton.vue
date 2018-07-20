<template>
	<button-send />
</template>

<script>

import Vue from 'vue'
import Message from './Messages.vue'

export default {
  name: 'MessageInput',
  data () { return { } },
  created: function() {

  }
}

Vue.component('button-send', {
  data: function () { return { } },
  template: '<b-button variant="primary" class="w-100" v-on:click="sendMessage">Enviar</b-button>',
  methods: {
    sendMessage: function(m) {
      let message = document.getElementById('message');
      Message.methods.addMessage({id: 2, text: message.value });
      document.getElementById('message').value = '';
      document.getElementById('message').focus();
    }
  }
})	

</script>