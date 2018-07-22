<template>
  <main-layout>
    <b-container fluid class="h-100">
      <LoginBox v-on:checkLogged="checkLogged" />
    </b-container>
  </main-layout>
</template>

<script>

/**
 * Load layout component
 */
import MainLayout from '../layouts/Main.vue'

/**
 * Load components
 */
import LoginBox from '../components/LoginBox.vue'

/**
 * Base assets
 */
import '../assets/scss/login.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  data () {
    return {
      welcome: 'Bem vindo ao Reunion',
      createdRoom: null,
      messages: [],
      users: []
    }
  },
  created: function () {
    
  },
  methods: {
  	checkLogged: function() {
  		console.log(this.$root.currentRoute)
  	}
  },
  components: {
    MainLayout, // First component
    LoginBox
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/base.scss'
</style>
