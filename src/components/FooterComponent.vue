<template>
    <footer class="fixed-bottom">
      <div class="row">
        <div class="col-6 bg-info text-white text-left">
          <p>Comparte la música</p>
        </div>
        <div class="col-6 bg-info text-white text-right">
          <p class="text-right">© Derechos reservados</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  }
  </script>

  <style scoped>
  footer {
    background-color: #f8f9fa;
    border-top: 1px solid #dee2e6;
    align-items: center;    
  }

  .text-left{
    text-align: left;
  }
  .text-right{
    text-align: right;
  }
</style>
  