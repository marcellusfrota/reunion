<template>
  <b-list-group>
	  <b-list-group-item href="#">Pedro Silva</b-list-group-item>
	  <b-list-group-item href="#" active>Italo Russan</b-list-group-item>
	  <b-list-group-item href="#">José Hudson</b-list-group-item>
	  <b-list-group-item href="#" disabled>Marcellus Frota</b-list-group-item>
	</b-list-group>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'UsersList',
  data () {
  	return {
	    users: [],
	    error: null
  	}
  }
}

Vue.component('users-list', {
  template: '<li class="user"></li>'
})

</script>

<style scoped>

</style>