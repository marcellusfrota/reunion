<template>
	<input-text 
    id="message" 
    placeholder="Digite sua mensagem..." 
    v-on:keyup.native.enter="sendMessage" />
</template>

<script>

import Vue from 'vue';

export default {
  data () { return { } },
  mounted: function() {
    document.getElementById('message').focus();
  },
  methods: {
    sendMessage() {
      this.$emit('doSendMessage')
    }    
  }
}

var InputText = Vue.extend({
  props: ['id', 'placeholder'],
  template: '<b-form-input autocomplete="off" type="text" :placeholder="placeholder" :id="id"></b-form-input>',
});

Vue.component('input-text', InputText);

</script>