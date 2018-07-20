<template>
	<div>
		Login
	</div>
</template>

<script>

import VueRouter from 'vue-router'

const router = new VueRouter()

export default {
	name: 'Messages',
	data () {
		return {
			loggedIn: false,
			user: null			
		}
	},
	methods: {
		check() {
	    if (localStorage.getItem('api_token') !== null) {
	    	// router.go('login')
	    } else {
	    	// router.go('index')
	    }
		}
	}
}

</script>