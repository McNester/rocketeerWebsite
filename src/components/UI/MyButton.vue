<template >
   <button @click="this.$emit('submit')" class="submitBtn">
        <slot></slot>
   </button>
</template>
<script>

export default {
   
    
}
</script>

<style >
.submitBtn{
    font-family: 'Raleway', sans-serif;
    background-color: #032F3B;
    @apply rounded-[0.6rem] p-1 text-[#F2F2F2] pr-7 pl-7 text-sm sm:h-9 sm:pr-9 sm:pl-9 md:pr-12 md:pl-12 hover:bg-cyan-900 active:bg-[#032F3B] shadow-2xl md:text-xl md:h-12 transition-all ease-in-out
}
</style>