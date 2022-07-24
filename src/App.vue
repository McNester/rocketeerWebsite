<template>

<div id="app">

  <MyNavbar @scrollTo="goToSection" ></MyNavbar>

  <div ref="home">
  <HomeSection></HomeSection>
  </div>
  <div ref="about">
  <AboutSection ></AboutSection>
  </div>
  <div ref="viewProduct">
  <FirstInformatinoSection></FirstInformatinoSection>
  </div>
  <SecondInformationBack></SecondInformationBack>
  <div ref="prices">
  <PricesSection></PricesSection>
  </div>
</div>

</template>


<script>
import smoothscroll from 'smoothscroll-polyfill';

import HomeSection from "./sections/HomeSection.vue";
import AboutSection from "./sections/AboutSection.vue";
import MyNavbar from "./components/UI/MyNavbar.vue";
import FirstInformatinoSection from "./sections/FirstInformatinoSection.vue";
import SecondInformationBack from './sections/SecondInformationBack.vue';
import PricesSection from './sections/PricesSection.vue';


export default{
    components: { HomeSection, AboutSection, MyNavbar, FirstInformatinoSection, SecondInformationBack, PricesSection },

    methods:{
      goToSection(sectionRef){
        var element = this.$refs[sectionRef]
        var elTop = element.offsetTop

        smoothscroll.polyfill();
        window.scrollTo({top:elTop,behavior: 'smooth'})

        
    }
}
}



</script>



<style>
#navBar{
  position: fixed;
  top: 0;

}
*{
  color: #F2F2F2;
}
</style>
