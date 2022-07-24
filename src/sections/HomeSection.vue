<template>
    <div class="main" className="flex justify-start items-start w-screen h-screen bg-home-background-phone bg-cover bg-center sm:bg-home-background sm:bg-right-top  md:bg-cover">
        <div id="content">
            <h1 className='text-6xl md:text-8xl lg:text-9xl font-thin'>
                The future <br> 
                is <span className=' font-semibold'>now</span> 
            </h1>

            <h1 className='mt-6 text-left w-5/6 md:w-3/6 font-thin md:text-xl mb-16'>
                Rocketeer helmets is a visionary enterprise that is trying to improve your health by building modern and comfortable helmets for you.
            </h1>

            <h1 className='text-xs font-thin md:text-xl mt-auto'>
                Enter your email to get the latest news
            </h1>
            <form className='flex mt-4'  
            @submit.prevent >
                <input class='emailInput' v-model="email" placeholder="Enter your email here ">
                <MyButton @submit="clearInput">Submit</MyButton>
            </form>

        </div>
    </div>

</template>

<script>
import MyButton from '../components/UI/MyButton.vue'
export default{
    data() {
        return {
            email: ""
        };
    },
    methods: {
        clearInput() {
            this.email = "";
        }
    },
    components: { MyButton }
}

</script>

<style>
#content{
    font-family: 'Raleway', sans-serif;
    @apply flex justify-start h-3/5 sm:h-2/4 items-start m-10 mt-20 sm:m-20 sm:mt-52 lg:mt-40 text-white flex-col
}

form{
    font-family: 'Raleway', sans-serif;
}
h1{
    font-family: 'Raleway', sans-serif;
}

.emailInput{

    @apply p-2 sm:pr-6 rounded-lg text-sm font-thin mr-10 outline-none placeholder-gray-200 placeholder-opacity-50 bg-[#590209] bg-opacity-50 shadow-xl md:text-xl md:pr-40
}

</style>