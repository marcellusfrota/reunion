<script>

import VueRouter from 'vue-router'

const router = new VueRouter()

export default {
	name: 'Logout',
  data() {
    return {
    	message: 'Logoff...'
    }
  },
  created: function() {
  	this.logout();
  },
  methods: {
  	logout() {
  		localStorage.clear()
  		router.go('login')
  	}
  }
}

</script>