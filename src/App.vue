<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

import Home from './page/Home.vue';
</script>

<template>
  <main>
    <Nav/>
    <Home/>

    <Footer/>
  </main>
</template>

<style lang="scss" scoped>
h1{
  color: rebeccapurple;
}
</style>
