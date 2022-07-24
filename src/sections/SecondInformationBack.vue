<template>
    <div className='flex flex-col sm:flex-row justify-center items-center w-screen h-screen bg-second-information-background-phone bg-cover bg-center sm:bg-second-information-background sm:bg-right-top  md:bg-cover relative'>
        <img src='/imgSrc/astroRight.png' className=' bottom-1/4 mb-20 scale-[0.35] absolute sm:static sm:origin-right sm:bottom-0 sm:mr-10 sm:ml-auto sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.8] rounded-[1.6rem] shadow-2xl'>

        <div className='flex flex-col mt-56 w-3/4  h-[25%] justify-center items-end sm:ml-5 sm:w-2/4 sm:mt-0 sm:absolute sm:left-0 gap-5 sm:gap-10'>
            <h1 className=' text-[#F2F2F2] mt-auto text-[0.9rem] text-right sm:text-4xl md:text-5xl lg:text-6xl'>
                Improved ventilation system
            </h1>

            <h2 className=' text-[#F2F2F2] text-right my-auto text-[0.7rem] font-thin sm:text-xl lg:text-2xl'>
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
    
</style>