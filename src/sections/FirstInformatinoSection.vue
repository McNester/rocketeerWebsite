<template >
    <div className='flex flex-col sm:flex-row justify-center items-center w-screen h-screen bg-first-information-background-phone bg-cover bg-center sm:bg-first-information-background sm:bg-right-top  md:bg-cover relative'>
        <img src='/imgSrc/astroLeft.png' className=' bottom-1/4 mb-20 scale-[0.35] absolute sm:static sm:origin-left sm:bottom-0 sm:ml-10 sm:mr-auto sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.8] rounded-[1.6rem] shadow-2xl'>
        
        <div className='flex flex-col mt-56 w-3/4  h-[25%] justify-center items-start  sm:mr-5 sm:w-2/4 sm:mt-0 sm:absolute sm:right-0 gap-5 sm:gap-10'>
            <h1 className=' text-[#F2F2F2] mt-auto text-[0.9rem] mr-auto sm:text-4xl md:text-5xl lg:text-6xl'>
                Advanced communications system
            </h1>

            <h2 className=' text-[#F2F2F2] my-auto text-[0.7rem] font-thin sm:text-xl lg:text-2xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis eu non diam phasellus. 
            </h2>

            <MyButton>By now →</MyButton>
        </div>

    </div>
</template>

<script>
import MyButton from '../components/UI/MyButton.vue';

export default {
    components: { MyButton }
}
</script>

<style>
*{
    font-family: 'Raleway', sans-serif;
}
</style>