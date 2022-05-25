<template>
    <div class="bg-[#FFC727] h-[40rem] flex flex-col items-center py-10">

        <h1 class="text-3xl font-bold text-gray-700">Projetos</h1>
        
        <div class="mt-10 grid items-center
        md:grid-cols-2 md:gap-10">

            <button class="w-[22rem] h-28 p-3 flex flex-row bg-white rounded-2xl shadow-lg">               
               <div class="w-[20rem] text-left space-y-2">
                    <h3 class="font-bold text-[#3F3F46] flex flex-row space-x-2 "><span>LoopStudios</span>  <img src="@/assets/icon/link.svg" alt="link" class="w-4"> </h3>
                    <p class="text-[#3F3F46]">Aplicação desenvolvida como desafio criado pelo site Frontend Mentor</p>
                </div>               
            </button>
            
            <button class="w-[22rem] h-28 p-3 flex flex-row bg-white rounded-2xl shadow-lg">               
               <div class="w-[20rem] text-left space-y-2">
                    <h3 class="font-bold text-[#3F3F46] flex flex-row space-x-2 "><span>GeekVest</span>  <img src="@/assets/icon/link.svg" alt="link" class="w-4"> </h3>
                    <p class="text-[#3F3F46]">Aplicação desenvolvida como estudo do fremework Vue ( não finalizado )</p>
                </div>               
            </button>
            
            <button class="w-[22rem] h-28 p-3 flex flex-row bg-white rounded-2xl shadow-lg">               
               <div class="w-[20rem] text-left space-y-2">
                    <h3 class="font-bold text-[#3F3F46] flex flex-row space-x-2 "><span>Lista telefônica</span>  <img src="@/assets/icon/link.svg" alt="link" class="w-4"> </h3>
                    <p class="text-[#3F3F46]">Aplicação desenvolvida como estudo do fremework Vue</p>
                </div>               
            </button>

        </div>

    </div>
</template>
<script>
export default {
    
}
</script>