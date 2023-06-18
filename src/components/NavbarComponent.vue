<template>
    <div class="navbar">
      <div class="navbar-left">
        <span class="Logo cursor-pointer" @click="redirectToHome">
            <img src="../assets/logo.png"  alt="Logo" class="logo">
        </span>
        <h1 class="title">
            <router-link to="/" class="title">OYE</router-link>
        </h1>
      </div>
      <div class="navbar-center">
       <router-link to="/" class="linker">Inicio</router-link>
       <router-link to="/PaginaCanciones" class="linker linker-spaced" >Canciones</router-link>
        <!-- <PaginaCanciones/> -->
      </div>
       <div class="navbar-right">

        <div class="contacto">
      <span>
        <button class="button btn btn-primary" @click="mostrarModalContacto">Contacto</button>
        <CardContacto v-if="mostrarModal" @cerrarModal="mostrarModal = false" :estilos="modalEstilos"/>
      </span>

    </div>
        <!-- <button type="button" class="nav-btn btn btn-primary">Inicio de Sesión</button> -->
        <router-link to="/InicioSesion" class="nav-btn btn btn-primary">Inicio de Sesión</router-link>
        <!-- <button type="button" class="nav-btn btn btn-primary">Registro</button> -->
        <router-link to="/Registro" class="nav-btn btn btn-primary">Registro</router-link>

      </div>
      
    </div>
</template>

<script>
import '../styles/navbarstyles.css'
import CardContacto from './CardContacto.vue'

export default{
    name:'NavbarComponent',
    components:{
        CardContacto,
    },
    data(){
        return {
            mostrarModal: false,
            modalEstilos: {
                display: 'none',
            },
        }
    },
    methods: {
        ocultarModal(){
            this.mostrarModal = false;
            this.modalEstilos = {
                display: 'none',
            }
        },
        mostrarModalContacto(){
            this.mostrarModal = true;
            this.modalEstilos = {
                display: 'block',
            }
        },
        redirectToHome(){
            this.$router.push({ path: '/'})
        },
    },
    mounted(){
        this.ocultarModal();
    },

}

</script>