<template>
  <main-layout>
    <b-container fluid class="h-100">
      <Navbar v-on:voiceSupport="toggleVoiceSupport"/>
      <Messages />
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
import Messages from '../components/Messages.vue'
import UsersList from '../components/UsersList.vue'
import Navbar from '../components/Navbar.vue'

/**
 * Base assets
 */
import '../assets/scss/base.scss';
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
    toggleVoiceSupport() {
      this.$children[0].$children[1].voiceSupport = !this.$children[0].$children[1].voiceSupport
    }
  },
  mounted: function() { 
    
  },
  components: {
    MainLayout, // First component
    Navbar,
    Messages,
    UsersList
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/base.scss'
</style>
