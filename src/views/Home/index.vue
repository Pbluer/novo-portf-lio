<template>
  <div>
    <Inicio />
    <Sobre />  
    <Habilidades />  
    <Footer />  
  </div>

</template>

<script>
import Inicio from "./Inicio.vue"
import Sobre from "./Sobre.vue"
import Habilidades from "./Habilidades.vue"
import Footer from "./Footer.vue"

export default {
  name: 'Home',
  components:{
    Inicio,
    Sobre,
    Habilidades,
    Footer
  }
}
</script>
