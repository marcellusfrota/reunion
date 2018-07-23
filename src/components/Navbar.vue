<template>
	<b-navbar toggleable="md" type="dark" variant="primary" fixed="top">
	  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
	  <b-navbar-brand href="#">Reunion v.0.1.1</b-navbar-brand>
	  <b-collapse is-nav id="nav_collapse">
	    <b-navbar-nav>
	      <b-nav-item href="#">Convidar participante</b-nav-item>
	      
	    </b-navbar-nav>
	    <!-- Right aligned nav items -->
	    <b-navbar-nav class="ml-auto">
	    	<b-button 
	      	:pressed.sync="VoiceToggle" 
	      	size="sm" 
	      	v-if="VoiceCheck"
	      	class="btn-chat"
	      	type="button">Voz {{ VoiceToggle ? 'habilitada' : 'desabilitada' }}</b-button>
	      <b-nav-item-dropdown right>
	        <!-- Using button-content slot -->
	        <template slot="button-content">
	          <em>Usuário</em>
	        </template>
	        <b-dropdown-item href="#">Perfil</b-dropdown-item>
	        <b-dropdown-item href="#">Configurações</b-dropdown-item>
	        <b-dropdown-item href="#">Sair</b-dropdown-item>
	      </b-nav-item-dropdown>
	    </b-navbar-nav>
	  </b-collapse>
	</b-navbar>
</template>

<script>
export default {
  data () {
    return {
      VoiceToggle: false,
      VoiceCheck: false
    }
  },
  watch: {
  	VoiceToggle: function() {
  		// this.$emit('voiceSupport');
  		this.toggleVoice()
  	}
  },
  mounted: function() {
  	window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  	this.VoiceCheck = window.SpeechRecognition
  },
  methods: {
  	toggleVoice() {
  		this.$emit('voiceSupport');
  	}
  }
}
</script>