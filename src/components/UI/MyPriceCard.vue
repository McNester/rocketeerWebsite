<template>
    <div className='flex flex-col justify-around items-center h-[10.5rem] w-[42%] m-3 
                  bg-[#04080D] bg-opacity-40 rounded-xl sm:rounded-3xl
                    shadow-[rgba(242,58,41,0.25)] shadow-[-4px_4px_10px_0px] 
                    hover:scale-105 active:scale-100 gap-1 mt-3
                    transition delay-50 duration-300 ease-in-out cursor-pointer font-medium
                    hover:shadow-[0px_6px_10px_0px] hover:shadow-[rgba(242,58,41,0.25)] 
                    active:shadow-[rgba(242,58,41,0.25)] active:shadow-[-4px_4px_10px_0px]
                    sm:h-[35%] sm:justify-center sm:w-[29%]
                    md:h-[48%] md:w-[30%] md:mx-5
                    md:shadow-[rgba(242,58,41,0.25)] md:shadow-[-10px_10px_20px_0px]
                    md:hover:shadow-[rgba(242,58,41,0.25)]
                    md:active:shadow-[rgba(242,58,41,0.25)]
                    md:active:md:shadow-[-10px_10px_20px_0px]
                    md:hover:shadow-[0px_15px_20px_0px]

                    lg:h-[50%] lg:w-[19%] lg:mx-16
                    '>
        <slot ></slot>
    </div>
</template>
<script>

export default {
    
}
</script>

<style scoped>
*{
    font-family: 'Vollkorn', serif;
    color: #F2F2F2;
}
</style>