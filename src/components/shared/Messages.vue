<template>
	<ul class="messages-list">
		<message-item
      v-for="message in messages"
      v-bind:message="message.text"
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
	    welcome: '',
	    messages: [
        {text: 'wow'}
      ],
	    error: [],
      isShowing: true
	  }
  },
  watch: {
    welcome: function() {
      console.info('[Reunion]: Welcome foi alterado para: ' + this.welcome);
    },
    messages: function() {
      console.info('[Reunion]: Mensagem recebida.');
    }
  },
  created: function() { 
    this.welcome = 'Seja bem vindo ao Reunion';
    this.messages.push({id: 1, text: this.welcome});
  },
  computed: { },
  methods: {
    addMessage(m) {
      this.messages.push({text: m});
      // console.log(this);
      this.isShowing = !this.isShowing;
      this.welcome = 'aaa';
    }
  }
}

Vue.component('message-item', {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  template: '<li>{{ message }}</li>'
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