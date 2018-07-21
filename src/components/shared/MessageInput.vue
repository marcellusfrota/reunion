<template>
	<input-text 
		@keydown.enter="loga"
		id="message" 
		placeholder="Digite sua mensagem..." />
</template>

<script>

import Vue from 'vue'
import Message from './Messages.vue'

export default {
  name: 'MessageInput',
  data () { return { } },
  created: function() { }
}

Vue.component('input-text', {
  props: ['id', 'placeholder'],
  template: '<b-form-input v-on:keypress.enter="" type="text" :placeholder="placeholder" :id="id"></b-form-input>',
  methods: { 
  	loga: function() {
  		console.log('Deu enter');
  	}
  }
})	

</script>