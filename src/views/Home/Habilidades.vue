<template>
  <div class="w-full h-[60rem] bg-white flex flex-col py-10 items-center
  md:h-[45rem]
  ">

    <h1 class="text-3xl font-bold text-gray-700 ">Habilidades</h1>

    <div class="grid grid-cols-2 gap-10 mt-10
    md:grid-cols-4 md:gap-14
    lg:gap-20
    ">
      <CardBase :icon="'html.svg'" :descricao="'HTML 5'"/>
      <CardBase :icon="'css.svg'" :descricao="'CSS'"/>
      <CardBase :icon="'javascript.svg'" :descricao="'JavaScript'"/>
      <CardBase :icon="'git.svg'" :descricao="'GIT'"/>
      <CardBase :icon="'php.svg'" :descricao="'PHP'"/>
      <CardBase :icon="'jquery.svg'" :descricao="'JQUERY'"/>
      <CardBase :icon="'vue.svg'" :descricao="'Vue'"/>
      <CardBase :icon="'tailwind.svg'" :descricao="'Tailwind'"/>
    </div>

  </div>

  <div>

  </div>
  
</template>

<script>
import CardBase from "@/components/CardBase.vue"
export default {
    name: "Habilidades",
    components:{
      CardBase
   } 
}
</script>