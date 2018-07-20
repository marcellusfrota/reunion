<template>
	<ul class="messages-list">
		<message-item
      v-for="message in messages"
      v-bind:message="message"
      v-bind:key="message.id">
    </message-item>
	</ul>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'Messages',
  data () {
  	return {
	    welcome: 'Seja bem vindo ao Reunion',
	    messages: [
	    	{ id: 1, text: 'Teste de mensagem' }
	    ],
	    error: null
	  }
  },
  watch: {
    messages() {
      console.log('Chegou mensagem!')
    }
  },
  created: function() { 
    this.messages.push({id: 2, text: 'Deu certo'});
  },
  computed: { },
  methods: {
    addMessage(m) {
      // this.messages.push({id: 2, text: m});
      console.log(this.welcome)
    }
  }
}

Vue.component('message-item', {
  props: ['message'],
  template: '<li>{{ message.text }}</li>'
})

</script>

<style scoped>
  .messages-list {
    padding: 10px;
    list-style: none;
    margin: 0;
    height: 100%;
  }
  .messages-list li {
    margin: 0 0 5px 0;
  }
</style>