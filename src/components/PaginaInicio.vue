<template>
  <div>
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-md-6">
          <h1 class="title2">Canciones gratis para la comunidad!</h1>
          <p class="text1">Con este sitio podrás escuchar audios de manera libre...</p>
          <a class="a1 btn btn-primary" href="/#/PaginaCanciones" role="button">Ver Canciones</a>
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

    <div class="container3">
      <hr class="line">
      <h2 class="title3">Top 3</h2>
      <div class="row">
        <div class="col-md-12" v-for="song in topSongs" :key="song.nombre">
          <div class="row">
            <div class="col-md-6">
              <h3 class="subtitulo">{{ song.nombre }}</h3>
            </div>
            <div class="col-md-6">
              <audio class="audio" controls>
                <source :src="getAudioSrc(song.ruta)" type="audio/mpeg">
                Tu navegador no admite el elemento de audio.
              </audio>
            </div>
          </div>
          <hr class="line">
        </div>
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
      topSongs: [],
    };
  },
  mounted() {
    this.getTopSongs();
  },
  methods: {
    getTopSongs() {
      if (datos && Array.isArray(datos.canciones)) {
        // Ordenar las canciones por reproducciones (reproducciones)
        const sortedSongs = datos.canciones.sort((a, b) => b.reproducciones - a.reproducciones);
        // Obtener el top 3 de canciones
        this.topSongs = sortedSongs.slice(0, 3);
      }
    },
    getAudioSrc(ruta) {
      return require(`@/canciones/${ruta}`);
    }
  },
};
</script>