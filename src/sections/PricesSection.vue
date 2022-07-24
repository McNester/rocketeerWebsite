<template>
    <div    className='flex flex-col sm:flex-row justify-center items-center w-screen h-screen relative
            bg-prices-background-phone bg-cover bg-center sm:bg-prices-background sm:bg-right-top  md:bg-cover'>

        
           <MyPriceCard>
                <h1 class="planTitle"
                >Basic</h1>
                <h2 class="features"
                 v-for="feature in planFeatures" :key="feature.id">
                    {{feature.content}}
                </h2>
                <h1 class='price'>230$</h1>
           </MyPriceCard>

           <MyPriceCard>
                <h1 class="planTitle">Premium</h1>
                <h2 class="features"
                 v-for="feature in planFeatures" :key="feature.id">
                    {{feature.content}}
                </h2>
                <h1 class='price'>500$</h1>
           </MyPriceCard>
           <MyPriceCard>
                <h1 class="planTitle">Pro</h1>
                <h2 class="features"
                 v-for="feature in planFeatures" :key="feature.id">
                    {{feature.content}}
                </h2>
                <h1 class='price'>860$</h1>
           </MyPriceCard>

        <footer>
            <div className="flex bottom-0 justify-end items-center bg-nav-background absolute right-0 w-screen gap-10 p-2">
        
                <h1 class="title">© 2022 Rocketeer</h1>
                <a target="_blank" href="https://twitter.com">
                    <img src="/imgSrc/twitter.svg">
                </a>

                <a target="_blank" href="https://facebook.com">
                    <img src="/imgSrc/facebook.svg">
                </a>

                <a target="_blank" href="https://instagram.com" className='mr-4'>
                    <img src="/imgSrc/instagram.svg">
                </a>

            </div>
        </footer>
    </div>
</template>

<script>
import MyPriceCard from '../components/UI/MyPriceCard.vue';
export default {
    components: { MyPriceCard },
    data() {
        return {
            planFeatures:[
                {id:0,content:'diam maecenas ultricies mi'},
                {id:1,content:'semper risus in hendrerit'},
                {id:2,content:'ultricies integer quis'},
                {id:3,content:'vitae auctor eu augue'},
                {id:4,content:'faucibus interdum posuere lorem'},
            ]
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn&display=swap');
.navLink{
    @apply text-white mx-5 cursor-pointer hover:text-gray-200 font-bold text-[0.70rem] sm:text-xs md:text-sm lg:text-lg 
    
}
.title{
    font-family: 'Vollkorn', serif;
    color: #F2F2F2;
    @apply font-medium text-[0.6rem] mr-auto p-2 cursor-default sm:text-xs md:text-sm lg:text-lg
}
img{
    @apply scale-75 sm:scale-[0.80] md:scale-90 lg:scale-100
}

.planTitle{
    font-family: 'Vollkorn', serif;
    @apply text-[0.91rem] p-1 sm:mb-auto sm:my-28 sm:text-3xl md:my-[1rem]
}
.features{
    font-family: 'Vollkorn', serif;
    @apply text-[0.6rem] sm:text-xs md:text-sm
    
}
.price{
    font-family: 'Vollkorn';
    @apply text-[1.7rem] p-1 sm:mt-auto sm:my-28 sm:text-4xl md:my-[1rem]
}



</style>