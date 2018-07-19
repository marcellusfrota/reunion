<template>
  <main>

  </main>
</template>

<script>

import Template from '../components/templates/Default.vue'

import Messages from '../components/shared/Messages.vue'
import UsersList from '../components/shared/UsersList.vue'

export default {
  name: 'app',
  data () {
    return {
      welcome: 'Bem vindo ao Reunion'
    }
  },
  components: {
    Template,
    Messages,
    UsersList
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/base.scss'
</style>
