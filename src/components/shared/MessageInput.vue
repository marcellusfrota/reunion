<template>
	<input-text />
</template>

<script>

import Vue from 'vue'

export default {
  name: 'MessageInput',
  data () { return { } },
  created: function() {

  }
}

Vue.component('input-text', {
  data: function () { return { } },
  created: function() {
		// document.getElementById('message').addEventListener('keypress', function(e) {
		// 	if (e.keyCode == '13') {
		// 		console.log('Enviar mensagem');
		// 	}
		// });
  },
  template: '<b-form-input type="text" placeholder="Escreva sua mensagem..." id="message"></b-form-input>',
  methods: {

  }
})	

</script>