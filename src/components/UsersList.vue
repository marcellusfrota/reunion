<template>
	<b-card class="users-list mt-3" no-body header="<b>Participantes</b>">
		<b-list-group>
			<b-list-group-item 
				v-for="user in users" 
				v-bind:key="user.id">
				{{ user.name }}
			</b-list-group-item>
		</b-list-group>
	</b-card>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'UsersList',
  data () {
  	return {
	    users: [
	    	{ id: 1, name: 'Pedro Silva' },
	    	{ id: 2, name: 'Italo Russan' },
	    	{ id: 3, name: 'José Hudson' },
	    	{ id: 4, name: 'Marcellus Frota' },
	    ],
	    error: null
  	}
  }
}

Vue.component('users-list', {
	props: ['u'],
  template: '<b-list-group-item>{{ u.name }}</b-list-group-item>'
})

</script>

<style>

.users-list .list-group {
	overflow: auto;
  max-height: 196px;
}
.users-list {
	background: #efefef;
}
</style>