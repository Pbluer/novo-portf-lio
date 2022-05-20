<template>
  <div>
    <Inicio />
    <Sobre />  
    <Habilidades />  
  </div>

</template>

<script>
import Inicio from "./Inicio.vue"
import Sobre from "./Sobre.vue"
import Habilidades from "./Habilidades.vue"
export default {
  name: 'Home',
  components:{
    Inicio,
    Sobre,
    Habilidades,
  }
}
</script>
