<template>
	<b-row class="justify-content-md-center h-100" align-v="center">
		<b-card title="Bem vindo ao Reunion"
	          img-src="https://picsum.photos/600/300/?image=25"
	          img-alt="Reunion"
	          img-top
	          tag="div"
	          style="max-width: 20rem;"
	          class="mb-2">

	    <p class="card-text">
	      <b-form-group id="fieldsetHorizontal"
                description="Digite seu nome de esuário ou e-mail"
                label=""
                label-for="login">
    			<b-form-input id="login"></b-form-input>
  			</b-form-group>

				<b-form-group id="fieldsetHorizontal"
                description="Digite sua senha"
                label=""
                label-for="pass">
    			<b-form-input id="pass" type="password"></b-form-input>
  			</b-form-group>  			
	    </p>

	    <b-button v-on:click="checkLogged" variant="primary">Login</b-button>
	    <!-- <b-button variant="danger">Entrar com Google+</b-button> -->
	    <a class="btn btn-block btn-social btn-twitter">
			  <span class="fa fa-twitter"></span>
			  Sign in with Twitter
			</a>

	  </b-card>
	</b-row>
</template>

<script>
	
export default {
  data () {
    return {
      
    }
  },
  created: function () {
    
  },
  methods: {
  	checkLogged: function() {
  		this.$emit('checkLogged');
  	}
  }
}

</script>