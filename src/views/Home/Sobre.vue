<template>
  <div class="w-full h-[60rem] bg-[#FFC727] flex flex-col py-10 justify-center items-center
  md:flex-row md:h-[25rem] md:px-10  
  lg:h-[45rem]
  ">

  <img src="@/assets/sobre.svg" class="mb-[10rem] w-[20rem]
    md:hidden
    lg:w-[25rem] lg:mb-0 lg:mx-[6rem]
    lg:block
  ">

  <div class="text-center">
    <h1 class="text-3xl font-bold text-[#455A64]
      md:text-4xl md:mb-4
      ">Ramon Vasconcelos</h1>
    
    <h3 class="font-bold text-white mx-10 md:mx-0 ">
      Estou cursando o último semestre da faculdade de tecnologia em Análise e Desenvolvimento de Sistema pela faculdade Unopar e
      atualmente trabalho como programador Fullstrack PHP em uma empresa com sede no Rio de Janeiro. &nbsp;Estudo desenvolvimento Frontend de forma auto-didata desde o meu primeiro "Hello World".</h3>
  </div> 

  </div>
</template>

<script>
export default {
  name: "Sobre",
}
</script>