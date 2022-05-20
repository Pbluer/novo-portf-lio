<template>
    <div class="bg-[#FFC727] p-4 rounded-xl shadow" :title="descricao">  
        <img :src="getICon(icon)" alt="HTML" class="w-[4rem] h-[5rem]
        md:w-[4.5rem]
        lg:w-[5rem]" :alt="descricao">
    </div>
</template>

<script>

export default {
    name: "CardBase",
    props: ['icon','descricao'],
    methods:{
        getICon: imagem => new URL(`../assets/icon/${imagem}`,import.meta.url).href ,
    }
}
</script>
