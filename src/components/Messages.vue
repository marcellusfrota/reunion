<template>
  <div class="top">
    <b-row class="h-100">
      <b-col md="8">
        <b-tabs class="mt-2">
          <b-tab title="Sala 1" active>
              <ul class="messages-list">
                <message-item
                  v-for="message in messages"
                  v-bind:message="message.text"
                  v-bind:key="message.id">
                </message-item>
              </ul>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col md="4" class="users-list">
        <UsersList />
      </b-col>
    </b-row>
    <b-row align-v="end" class="footer fixed-bottom">
      <b-col md="9">
        <form v-on:submit.prevent="">
          <MessageInput v-on:doSendMessage="addMessage" />
        </form>
      </b-col>
      <b-col md="3">
        <button-send v-on:doSendMessage="addMessage" />
      </b-col>
    </b-row>
  </div>
</template>

<script>

import Vue from 'vue'

import MessageInput from './_shared/MessageInput.vue'
import UsersList from './UsersList.vue'

export default {
  name: 'app',
  data () {
  	return {
	    welcome: '',
	    messages: [],
	    error: [],
      isShowing: true
	  }
  },
  components: {
    MessageInput,
    UsersList
  },
  watch: {
    welcome: function() {
      console.info('[Reunion]: Welcome foi alterado para: ' + this.welcome);
    },
    messages: function() {
      console.info('[Reunion]: Mensagem recebida.');
    }
  },
  mounted: function() { },
  created: function() { 
    this.welcome = 'Seja bem vindo ao Reunion';
    this.messages.push({id: 1, text: this.welcome});
  },
  methods: {
    addMessage() {
      let msg = document.getElementById('message');
      this.messages.push({text: msg.value });
      document.getElementById('message').value = '';
      document.getElementById('message').focus();
    },
  }
}

var MessageItem = Vue.extend({
  props: {
    message: {
      type: String,
      required: true
    }
  },
  template: '<li>{{ message }}</li>',
})

Vue.component('message-item', MessageItem);

var MessageButton = Vue.extend({
  data () { 
    return {
      isButtonDisabled: false
    } 
  },  
  methods: {
    sendMessage: function() {
      this.$emit('doSendMessage')
    }
  },
  template: '<b-button v-on:click="sendMessage" v-bind:disabled="isButtonDisabled" variant="primary" class="w-100" id="btn-send">Enviar</b-button>',
});

Vue.component('button-send', MessageButton);

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