<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <main>
    <Nav/>
    <RouterView/>
   
    
    <Footer/>
   
  </main>
</template>

<style lang="scss" scoped>
h1{
  color: rebeccapurple;
}
</style>
