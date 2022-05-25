<template>
  <div>
    <Inicio />
    <Sobre />  
    <Habilidades />  
    <Projetos />  
    <Footer />  
  </div>

</template>

<script>
import Inicio from "./Inicio.vue"
import Sobre from "./Sobre.vue"
import Habilidades from "./Habilidades.vue"
import Projetos from "./Projetos.vue"
import Footer from "./Footer.vue"

export default {
  name: 'Home',
  components:{
    Inicio,
    Sobre,
    Habilidades,
    Projetos,
    Footer
  }
}
</script>
