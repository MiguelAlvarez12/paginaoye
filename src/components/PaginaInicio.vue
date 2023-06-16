<template>
  <div>
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-md-6">
          <h1 class="title2">Lorem ipsum dolor!</h1>
          <p class="text1">lorem</p>
          <a class="a1 btn btn-primary" href="" role="button">Ver Canciones</a>
        </div>
        <div class="col-md-6">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/portada.jpeg" class="paso1 d-block img-fluid" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/portada.jpeg" class="paso2 d-block img-fluid" alt="...">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container3 m-5">
      <div class="line"></div>
      <h1 class="title3">lorem</h1>
      <div class="line"></div>
      <div class="row">
        <div class="col-5">
          <p class="text">lorem</p>
        </div>
        <div class="col-7">
          <p class="text">lorem</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="row">
        <div class="col-5">
          <h3 class="subtitulo">lorem</h3>
        </div>
      </div>
    </div>

    <div>
      <div v-for="cancion in cancionesOrdenadas" :key="cancion.nombre">
        <div class="row">
          <div class="col-5">
            <h3 class="subtitulo">{{ cancion.nombre }}</h3>
          </div>
          <div class="col-7">
            <audio controls class="audio">
              <source :src="'../canciones/' + cancion.ruta" type="audio/mp3">
            </audio>
          </div>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>


<script>
import '../styles/PaginaInicioStyles.css';
import datos from '../data/datos.json';

export default {
  name: 'PaginaInicio',
  data() {
    return {
      canciones: null, // Inicializar canciones como null
      cancionesOrdenadas: [],
    };
  },
  mounted() {
    this.cargarCanciones();
  },
  methods: {
    cargarCanciones() {
      if (datos && datos.length > 0 && datos[0].canciones) {
        this.canciones = datos[0].canciones;
        this.ordenarCanciones();
      }
    },
    ordenarCanciones() {
      if (this.canciones) {
        this.cancionesOrdenadas = this.canciones
          .slice()
          .sort((a, b) => b.reproducciones - a.reproducciones)
          .slice(0, 3);
      }
    },
  },
};
</script>