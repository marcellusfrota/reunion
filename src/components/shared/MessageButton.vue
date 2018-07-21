<template>
	<button-send />
</template>

<script>

import Vue from 'vue'
import Message from './Messages.vue'

export default {
  name: 'MessageButton',
  data () { return { } },
  created: function() {

  }
}

Vue.component('button-send', {
  data () { 
    return {
      isButtonDisabled: false,
      error: []
    } 
  },
  template: '<b-button v-bind:disabled="isButtonDisabled" variant="primary" class="w-100" v-on:click="sendMessage">Enviar</b-button>',
  methods: {
    sendMessage: function(m) {
      let message = document.getElementById('message');
      Message.methods.addMessage({id: 2, text: message.value });
      // if (message != null) {
      //   this.error.push('Não foi possivel pegar o elemento input.');
      // } else {
      //   if (message.value !== undefined) {
      //     Message.methods.addMessage({id: 2, text: message.value });
      //     document.getElementById('message').value = '';
      //     document.getElementById('message').focus();
      //   } else {
      //     this.error.push('Mensagem em branco.');
      //     if (this.error.lenght > 0) {
      //       for (let x; x < this.error.lenght; x++) {
      //         console.error('[Reunion]: '.this.error[x]);
      //       }
      //     }
      //   }
      // }
    }
  }
})	

</script>