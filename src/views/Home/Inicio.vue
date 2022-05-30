<template>
  <div class="w-full h-[50rem] bg-white dark:bg-gray-700 flex flex-col space-y-10 justify-center items-center
  md:h-[40rem]
  md:flex-row
  lg:space-x-[7rem]
  ">

  <img v-motion :initial="{
    opacity:0,
    y: 10,
    x:100,
    scale:1
  }"
    :enter="{
      opacity:1,
      y:0,
      x:0,
    }"    
    :delay="400"
   src="@/assets/imagemUm.svg" class="
   w-72
  md:w-96
  lg:block
  ">
    
  <div class="text-center">
    <h1 class="text-3xl font-bold text-[#FFC727]
    md:text-4xl
    ">Ramon Vasconcelos</h1>
    <h3 class="text-2xl font-bold dark:text-white text-gray-700">Desenvolvedor Fullstack</h3>
  </div>

  </div>
</template>

<script>
export default {    
  name: "Inicio",
}
</script>

<style>
    
</style>