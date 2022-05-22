<template>
  <div class="w-full h-[46rem] bg-white flex flex-col py-10 items-center
  md:h-[30rem]
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

  <div class="w-full h-[45rem] bg-white flex flex-col py-10 justify-center 
  md:h-[30rem] md:flex-row md:space-x-20 
  ">

    <div class="flex flex-col items-center">

      <h1 class="text-[1.2rem] text-gray-700 font-bold my-5 text-center">Experiência profissional</h1>

      <div class="flex flex-col bg-[#FFC727] w-[15rem] rounded-lg p-3 shadow">
        <ul>
          <li class="font-bold text-white" >Inbrands S.A.</li>
          <li class="text-white" >Cargo: Jovem aprendiz</li>
          <li class="text-white" >Ano: 2019 - 2020</li>
        </ul>
        <ul>
          <li class="font-bold text-white" >NTL Nova Tecnologia LTDA</li>
          <li class="text-white" >Cargo: Jovem aprendiz</li>
          <li class="text-white" >Ano: 2020 - 2021</li>
        </ul>
        <ul>
          <li class="font-bold text-white" >NTL Nova Tecnologia LTDA</li>
          <li class="text-white" >Cargo: Programador PHP Jr</li>
          <li class="text-white" >Emprego atual</li>
        </ul>
      </div>

      <a href="curriculo.pdf" download="curriculo-ramon-vasconcelos"
       class="bg-[#FFC727] rounded-lg shadow hover:bg-yellow-500 text-center font-bold text-white mt-5 w-40"> Download CV </a>
    </div>

     <div class="flex flex-col  items-center">

      <h1 class="text-[1.2rem] text-gray-700 font-bold my-5 text-center">Experiência acadêmica</h1>

      <div class="flex flex-col bg-[#FFC727] w-[16rem] rounded-lg p-3 shadow">    
        <ul>
          <li class="font-bold text-white" >Analista de Sistema - Unopar</li>
          <li class="text-white" >Ano: 2019 - 2022</li>
        </ul>
      </div>
    </div>

  </div>
  
</template>

<script>
import CardBase from "@/components/CardBase.vue"
export default {
    name: "Habilidades",
    components:{
        CardBase
    },
    methods:{
    downloadCv(){
        console.log( new URL(`../assets/curriculo.pdf`,import.meta.url).href  )
        return new URL(`../assets/curriculo.pdf`,import.meta.url).href 
    }
   }
}
</script>