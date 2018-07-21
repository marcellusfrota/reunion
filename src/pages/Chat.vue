<template>
  <main-layout>
    <b-container fluid class="h-100">
      <Navbar />
      <b-row class="top">
        <b-col md="8">
          <b-tabs class="mt-2">
            <b-tab title="Sala 1" active>
              <Messages />
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
            <MessageInput />            
          </form>
        </b-col>
        <b-col md="3">
          <MessageButton />
        </b-col>
      </b-row>
    </b-container>
  </main-layout>
</template>

<script>

import MainLayout from '../layouts/Main.vue'

import Messages from '../components/shared/Messages.vue'
import MessageInput from '../components/shared/MessageInput.vue'
import MessageButton from '../components/shared/MessageButton.vue'
import UsersList from '../components/shared/UsersList.vue'
import Navbar from '../components/shared/Navbar.vue'

/**
 * Base assets
 */
import '../assets/scss/base.scss';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Chat',
  data () {
    return {
      welcome: 'Bem vindo ao Reunion'
    }
  },
  created: function () {
    
  },
  methods: {

  },
  components: {
    MainLayout, // First component
    Navbar,
    Messages,
    MessageInput,
    MessageButton,
    UsersList
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/base.scss'
</style>
