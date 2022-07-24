<template>

    <div id="main" className="flex sm:justify-end justify-center items-center bg-nav-background absolute sm:right-0 w-screen sm:top-0 sm:fixed sm:z-10">
        
        <h1 class="title" className=' hidden sm:block font-medium mr-auto p-2 cursor-default  text-xs md:text-2xl'>Rocketeer</h1>
        <h1 @click="this.$emit('scrollTo',this.homeSectionRef)" class="navLink">Home</h1>
        <h1 @click="this.$emit('scrollTo',this.aboutSectionRef)" class="navLink">About us</h1>
        <h1 @click="this.$emit('scrollTo',this.viewProductSectionRef)" class="navLink">View Product</h1>
        <h1 @click="this.$emit('scrollTo',this.pricingSectionRef)" class="navLink">Pricing</h1>
    </div>

</template>

<script>
export default {
    data() {
        return {
            homeSectionRef: 'home',
            aboutSectionRef: 'about',
            viewProductSectionRef: 'viewProduct',
            pricingSectionRef: 'prices'
        }
    },
    
}
</script>

<style>

.navLink{
    font-family: 'Raleway', sans-serif;
    @apply text-white mx-5 cursor-pointer hover:text-gray-200 text-sm sm:text-[1rem] lg:text-xl font-light
    
}
.title{
    font-family: 'Vollkorn', serif;
    color: #F2F2F2;
    
}
</style>