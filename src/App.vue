<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>


<script>
import FooterComp from './components/FooterComp.vue'
import NavbarComp from './components/NavbarComp.vue'

export default {
  components: {
  NavbarComp,
  FooterComp
  }
}
</script>




<style>
@import url('https://fonts.googleapis.com/css2?family=Vast+Shadow&display=swap');

#app {
  font-family: "Vast Shadow", serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
}
</style>
