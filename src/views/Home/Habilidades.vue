<template>
  <div class="w-full h-[46rem] bg-white dark:bg-gray-700 flex flex-col pt-10 items-center
  md:h-[30rem]
  ">

    <h1 class="text-3xl font-bold text-gray-700 dark:text-white ">Habilidades</h1>

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

  <div class="w-full h-[45rem] dark:bg-gray-700 bg-white flex flex-col pt-10 justify-center 
  md:h-[30rem] md:flex-row md:space-x-20 
  ">

    <div class="flex flex-col items-center">

      <h1 class="text-[1.2rem] text-gray-700 dark:text-white font-bold my-5 text-center">Experiência profissional</h1>

      <div class="flex flex-col bg-[#FFC727] w-[15rem] rounded-lg p-3 shadow">
        <ul>
          <li class="font-bold text-white dark:text-gray-700" >Inbrands S.A.</li>
          <li class="text-white dark:text-gray-700" >Cargo: Jovem aprendiz</li>
          <li class="text-white dark:text-gray-700" >Ano: 2019 - 2020</li>
        </ul>
        <ul>
          <li class="font-bold text-white dark:text-gray-700" >NTL Nova Tecnologia LTDA</li>
          <li class="text-white dark:text-gray-700" >Cargo: Jovem aprendiz</li>
          <li class="text-white dark:text-gray-700" >Ano: 2020 - 2021</li>
        </ul>
        <ul>
          <li class="font-bold text-white dark:text-gray-700" >NTL Nova Tecnologia LTDA</li>
          <li class="text-white dark:text-gray-700" >Cargo: Programador PHP Jr</li>
          <li class="text-white dark:text-gray-700" >Emprego atual</li>
        </ul>
      </div>

        <a href="curriculo.pdf" download="curriculo-ramon-vasconcelos"
       class="bg-[#FFC727] h-[2rem] flex justify-center items-center rounded-lg shadow hover:bg-yellow-500 text-center font-bold  text-white mt-5 w-40  space-x-4"> 
       <p class="dark:text-gray-700">
         Download CV
       </p>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 animate-bounce dark:fill-gray-700">
         <path  d="M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"/></svg>
       </a>
    </div>

     <div class="flex flex-col  items-center">

      <h1 class="text-[1.2rem] text-gray-700 dark:text-white font-bold my-5 text-center">Experiência acadêmica</h1>

      <div class="flex flex-col bg-[#FFC727] w-[16rem] rounded-lg p-3 shadow">    
        <ul>
          <li class="font-bold text-white dark:text-gray-700" >Analista de Sistema - Unopar</li>
          <li class="text-white dark:text-gray-700" >Ano: 2019 - 2022</li>
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