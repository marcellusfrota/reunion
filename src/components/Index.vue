<template>
  <main>
    <b-container fluid class="h-100">
      <Navbar />
      <b-row class="top">
        <b-col md="8">
          <Messages />
        </b-col>
        <b-col md="4" class="users-list">
          <UsersList />
        </b-col>
      </b-row>
      <b-row align-v="end" class="footer fixed-bottom">
        <b-col md="8">
          <MessageInput />
        </b-col>
        <b-col md="4">
          <MessageButton />
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>

import Login from '../components/Login.vue'

import Messages from '../components/shared/Messages.vue'
import MessageInput from '../components/shared/MessageInput.vue'
import MessageButton from '../components/shared/MessageButton.vue'
import UsersList from '../components/shared/UsersList.vue'

import Navbar from '../components/shared/Navbar.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  data () {
    return {
      welcome: 'Bem vindo ao Reunion'
    }
  },
  created: function () {
    Login.methods.check()
  },
  methods: {

  },
  components: {
    Login,
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
