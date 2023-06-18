<template>
  <!-- Título y búsqueda -->
  <div class="pagina-canciones">
    <h2 class="titulo">Canciones</h2>
    <input type="text" class="input" placeholder="Buscar canciones" v-model="filtro" />

    <!-- Listado de canciones -->
    <div class="card-group">
      <div v-for="cancion in cancionesFiltradas" :key="cancion.nombre" class="card">
        <div class="card-body">
          <h5 class="card-title">{{ cancion.nombre }}</h5>
          <img :src="getImageSrc(cancion.icono)" :alt="cancion.nombre">
          <p class="card-text">Reproducciones: {{ cancion.reproducciones }}</p>
          <audio controls class="audio">
            <source :src="getAudioSrc(cancion.ruta)" type="audio/mp3">
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../styles/PaginaCancionesStyles.css';
import cancionesData from '../data/datos.json';

export default {
  name: 'PaginaCanciones',
  data() {
    return {
      filtro: '',
      canciones: [],
    };
  },
  computed: {
    cancionesFiltradas() {
      if (this.filtro === '') {
        return this.canciones;
      } else {
        const filtroLower = this.filtro.toLowerCase();
        return this.canciones.filter((cancion) =>
          cancion.nombre.toLowerCase().includes(filtroLower)
        );
      }
    },
  },
  mounted() {
    this.canciones = cancionesData.canciones;
  },
  methods: {
    getImageSrc(icono) {
      return require(`@/assets/icon_${icono}.svg`);
    },
    getAudioSrc(ruta) {
      return require(`@/canciones/${ruta}`);
    },
  },
};
</script>