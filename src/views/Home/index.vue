<template>
  <div class="">
    <Inicio />
    <Sobre />
  </div>

</template>

<script>
import Inicio from "./Inicio.vue"
import Sobre from "./Sobre.vue"

export default {
  name: 'Home',
  components:{
    Inicio,
    Sobre,
  }
}
</script>
