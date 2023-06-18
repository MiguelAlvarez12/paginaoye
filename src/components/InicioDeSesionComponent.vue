<template>
    <div class="inicio-sesion">
      <h2 class="titulo">Inicio de Sesión</h2>
  
      <form @submit="iniciarSesion">
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="text" id="email" v-model="correoElectronico" class="form-control">
          <span v-if="mostrarErrorCorreo" class="alerta">Correo electrónico inválido</span>
        </div>
  
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="contrasena" class="form-control">
          <span v-if="mostrarErrorContrasena" class="alerta">Contraseña inválida</span>
        </div>
  
        <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InicioSesion',
    data() {
      return {
        correoElectronico: '',
        contrasena: '',
        mostrarErrorCorreo: false,
        mostrarErrorContrasena: false,
      };
    },
    methods: {
      iniciarSesion(event) {
        event.preventDefault();
  
        // Validar los datos
        this.mostrarErrorCorreo = !this.validarCorreoElectronico(this.correoElectronico);
        this.mostrarErrorContrasena = !this.validarContrasena(this.contrasena);
  
        // Si los datos son válidos, se puede realizar el inicio de sesión
        if (!this.mostrarErrorCorreo && !this.mostrarErrorContrasena) {
          // Lógica para iniciar sesión
          console.log('Inicio de sesión exitoso');
        }
      },
      validarCorreoElectronico(correo) {
        // Expresión regular para validar el formato de correo electrónico
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
      },
      validarContrasena(contrasena) {
        // Validar que la contraseña tenga al menos 8 caracteres
        return contrasena.length >= 8;
      },
    },
  };
  </script>
  <style scoped>
  .inicio-sesion {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
  }
  
  .titulo {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  .error-msg {
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }
  
  .btn {
    display: block;
    width: 100%;
  }

  .alerta{
    color: red;
  }
</style>
  