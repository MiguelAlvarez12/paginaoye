<template>
    <div class="registro">
      <h2 class="titulo">Registro</h2>
  
      <form @submit="registrar">
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="text" id="email" v-model="correoElectronico" class="form-control">
          <span v-if="mostrarErrorCorreo" class="alerta">Correo electrónico inválido</span>
        </div>
  
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="contrasena" class="form-control">
          <span v-if="mostrarErrorContrasena" class="alerta">Contraseña inválida (mínimo 8 caracteres)</span>
        </div>
  
        <div class="form-group">
          <label for="confirm-password">Confirmar Contraseña:</label>
          <input type="password" id="confirm-password" v-model="confirmacionContrasena" class="form-control">
          <span v-if="mostrarErrorConfirmacion" class="alerta">Las contraseñas no coinciden</span>
        </div>
  
        <div class="form-group">
          <label for="genero">Género Musical Favorito:</label>
          <select id="genero" v-model="generoMusical" class="form-control">
            <option value="">Seleccionar</option>
            <option value="Rock">Rock</option>
            <option value="Balada">Balada</option>
            <option value="Salsa">Salsa</option>
            <option value="Otro">Otro</option>
          </select>
          <span v-if="mostrarErrorGenero" class="alerta">Debe especificar un género musical favorito</span>
        </div>
  
        <div class="form-group">
          <label>Rango de Edad:</label>
          <div class="checkbox-group">
            <label>
              <input type="radio" v-model="rangoEdad" value="Menor a 20" class="circular-checkbox"> Menor a 20
            </label>
          </div>
          <div class="checkbox-group">
            <label>
              <input type="radio" v-model="rangoEdad" value="20 a 40" class="circular-checkbox"> 20 a 40
            </label>
          </div>
          <div class="checkbox-group">
            <label>
              <input type="radio" v-model="rangoEdad" value="Mayor a 50" class="circular-checkbox"> Mayor a 50
            </label>
          </div>
          <span v-if="mostrarErrorEdad" class="alerta">Debe especificar un rango de edad</span>
        </div>
  
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="aceptaTerminos"> Acepto los Términos de Uso
          </label>
          <span v-if="mostrarErrorTerminos" class="alerta">Debe aceptar los Términos de Uso</span>
        </div>
  
        <button type="submit" class="btn btn-primary">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        correoElectronico: '',
        contrasena: '',
        confirmacionContrasena: '',
        generoMusical: '',
        rangoEdad: [],
        aceptaTerminos: false,
        mostrarErrorCorreo: false,
        mostrarErrorContrasena: false,
        mostrarErrorConfirmacion: false,
        mostrarErrorGenero: false,
        mostrarErrorEdad: false,
        mostrarErrorTerminos: false,
      };
    },
    methods: {
      registrar(event) {
        event.preventDefault();
        
        this.mostrarErrorCorreo = !this.validarCorreo(this.correoElectronico);
        this.mostrarErrorContrasena = !this.validarContrasena(this.contrasena);
        this.mostrarErrorConfirmacion = !this.validarConfirmacionContrasena(this.contrasena, this.confirmacionContrasena);
        this.mostrarErrorGenero = !this.validarGenero(this.generoMusical);
        this.mostrarErrorEdad = !this.validarEdad(this.rangoEdad);
        this.mostrarErrorTerminos = !this.aceptaTerminos;
  
        if (!this.mostrarErrorCorreo && !this.mostrarErrorContrasena && !this.mostrarErrorConfirmacion &&
            !this.mostrarErrorGenero && !this.mostrarErrorEdad && !this.mostrarErrorTerminos) {
          // Realizar el registro de usuario
          // Aquí puedes agregar tu lógica para enviar los datos al servidor o almacenarlos en algún lugar
          // después de pasar todas las validaciones.
          console.log('Registro exitoso!');
        }
      },
      validarCorreo(correo) {
        const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegular.test(correo);
      },
      validarContrasena(contrasena) {
        return contrasena.length > 8;
      },
      validarConfirmacionContrasena(contrasena, confirmacion) {
        return contrasena === confirmacion;
      },
      validarGenero(genero) {
        return genero !== '';
      },
      validarEdad(edad) {
        return edad.length > 0;
      },
    },
  };
  </script>

<style scoped>
.registro {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .titulo {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .alerta {
    color: red;
  }
  
  .checkbox-group {
    margin-top: 5px;
  }
  
  .circular-checkbox {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    vertical-align: middle;
  }
  
  .btn {
    margin-top: 10px;
  }
</style>