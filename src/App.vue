<template>
  <main>
    <div class="wrap">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-9 col-sm-9">
            <h1 class="welcome">{{ welcome }}</h1>
            <Messages/>
          </div>
          <div class="col-xs-3 col-sm-3">
            Lista de usuários
          </div>
        </div>
        <div class="push">
          
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-8 col-sm-9">
            <input type="text" id="message-box" class="form-control input-lg" placeholder="Escreva sua mensagem aqui..." rows="3">
          </div>
          <div class="col-xs-4 col-sm-3">
            <button id="send-message-btn" class="btn btn-primary btn-block">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import Messages from './components/Messages.vue'

export default {
  name: 'app',
  data () {
    return {
      welcome: 'Bem vindo ao Reunion'
    }
  },
  components: {
    Messages,
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/base.scss'
</style>
