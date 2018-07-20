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

	      <b-nav-form>
	        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Pesquisar assunto..."/>
	        <b-button size="sm" class="my-2 my-sm-0" type="button">Procurar</b-button>
	      </b-nav-form>

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