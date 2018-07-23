<template>
  <div class="top">
    <b-row class="h-100">
      <b-col md="8">
        <b-tabs class="mt-2 h-100">
          <b-tab title="Sala 1" active>
            <!-- <b-nav-form class="mt-2">
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Pesquisar assunto..."/>
              <b-button size="sm" class="my-2 my-sm-0" type="button">Procurar</b-button>
            </b-nav-form> -->
            <ul class="messages-list" id="messages-list">
              <message-item
                v-for="message in messages"
                v-bind:message="message.text"
                v-bind:key="message.id">
              </message-item>
            </ul>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col md="4" class="users-list">
        <UsersList />
      </b-col>
    </b-row>
    <b-row align-v="end" class="footer">
      <b-col md="9">
        <form v-on:submit.prevent="">
          <input-text 
            v-on:keyup.native.enter="addMessage"
            v-on:keydown.native="stopVoiceTimer"
            v-on:doSendMessage="addMessage" 
            v-on:doVoice="addVoiceMessage($event, voiceMessage)" />
        </form>
      </b-col>
      <b-col md="3">
        <button-send v-on:doSendMessage="addMessage" />
      </b-col>
    </b-row>
  </div>
</template>

<script>

import Vue from 'vue'
import UsersList from './UsersList.vue'

export default {
  name: 'Messages',
  data () {
  	return {
	    welcome: '',
	    messages: [],
      voiceSupport: false,
      voiceMessage: '',
      voiceMessageTimer: false,
	    error: [],
      isShowing: true
	  }
  },
  components: {
    UsersList
  },
  watch: {
    welcome: function() {
      console.info('[Reunion] ' + this.welcome);
    },
    messages: function() {
      this.scrollToBottom()
    },
    voiceSupport: function() {
      this.$children[2].voiceSupport = this.voiceSupport
    }
  },
  mounted: function() { 
    this.scrollToBottom()
  },
  created: function() { 
    this.welcome = 'Seja bem vindo ao Reunion';
    this.messages.push({id: 1, text: this.welcome});
  },
  methods: {
    addMessage() {
      let msg = document.getElementById('message');
      this.messages.push({text: msg.value });
      document.getElementById('message').value = '';
      document.getElementById('message').focus();
    },
    addVoiceMessage(voiceMessage) {
      let _this = this
      document.getElementById('message').value += voiceMessage.lastSentence
      this.voiceMessageTimer = true
      setTimeout(function() {
        if (_this.voiceMessageTimer)
          _this.addMessage()
      }, 4000)
      // console.log(event, voiceMessage)
    },
    stopVoiceTimer() {
      this.voiceMessageTimer = false
    },
    scrollToBottom() {
      let messages = document.getElementById('messages-list')
      messages.scrollTo({top: messages.scrollHeight, behavior: 'smooth'})
    }
  }
}

// Message Item

var MessageItem = Vue.extend({
  props: {
    message: {
      type: String,
      required: true
    }
  },
  template: '<transition name="fade"><li>{{ message }}</li></transition>',
})

Vue.component('message-item', MessageItem);

// Message Buttom

var MessageButton = Vue.extend({
  data () { 
    return {
      isButtonDisabled: false
    } 
  },  
  methods: {
    sendMessage: function() {
      this.$emit('doSendMessage')
    }
  },
  template: '<b-button v-on:click="sendMessage" v-bind:disabled="isButtonDisabled" variant="primary" class="w-100" id="btn-send">Enviar</b-button>',
});

Vue.component('button-send', MessageButton);

// Message MessageInput

var InputText = Vue.extend({
  data () { 
    return {
      runtimeTranscription: '',
      transcription: [],
      voiceSupport: false,
      recognition: false
    } 
  },
  props: {
    lang: {
      type: String,
      default: 'pt-BR'
    },
    id: {
      type: String,
      default: 'message'
    },
    placeholder: {
      type: String,
      default: 'Digite sua mensagem...'
    }
  },
  mounted: function() {
    document.getElementById('message').focus()
    this.checkApi()
  },
  watch: {
    voiceSupport: function() {
      if (this.recognition) {
        this.recognition.abort()
        this.recognition.stop()
        console.log('[Reunion] Voz desabilitada')
      } else {
        this.checkApi()
        console.log('[Reunion] Voz habilitada')
      }
    }
  },
  methods: {
    sendMessage() {
      this.$emit('doSendMessage')
    },
    checkApi () {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (!SpeechRecognition && process.env.NODE_ENV !== 'production') {
        // throw new Error('Speech Recognition does not exist on this browser. Use Chrome or Firefox')
      }
      if (!SpeechRecognition) {
        console.error('[Reunion] Seu navegador não tem suporte para voz.')
        return
      }
      if (!SpeechRecognition) {
        return
      }
      if (!this.voiceSupport) {
        return
      }
      this.recognition = new SpeechRecognition()
      this.recognition.lang = this.lang
      this.recognition.interimResults = true
      this.recognition.addEventListener('result', event => {
        const text = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
        this.runtimeTranscription = text
      })
      // When capture all words
      this.recognition.addEventListener('end', () => {
        if (this.runtimeTranscription !== '') {
          this.transcription.push(this.runtimeTranscription)
          // this.$emit('doVoice', this.runtimeTranscription)
          this.$emit('doVoice', {
            transcription: this.transcription,
            lastSentence: this.runtimeTranscription
          })
        }
        this.runtimeTranscription = ''
        this.recognition.start()
      })
      this.recognition.start()
    }
  },  
  template: '<b-form-input autocomplete="off" type="text" :placeholder="placeholder" :id="id"></b-form-input>',
});

Vue.component('input-text', InputText);

</script>

<style scoped>
  .messages-list {
    padding: 10px;
    list-style: none;
    margin: 0;
    height: 100%;
  }
  .messages-list li {
    margin: 0 0 5px 0;
  }
</style>