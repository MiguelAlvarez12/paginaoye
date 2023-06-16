<template>
    <div class="navbar">
      <div class="navbar-left">
        <span class="Logo cursor-pointer">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
      </span>
        <h1 class="title">OYE</h1>
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
        <button type="button" class="nav-btn btn btn-primary">Inicio de Sesión</button>
        <button type="button" class="nav-btn btn btn-primary">Registro</button>
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
    },
    mounted(){
        this.ocultarModal();
    },

}

</script>