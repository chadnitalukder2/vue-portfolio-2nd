<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

import Home from './page/Home.vue';
import Skills from './page/Skills.vue';
</script>

<template>
  <main>
    <Nav/>
    <Home/>
    <Skills/>
    <Footer/>
  </main>
</template>

<style lang="scss" scoped>
h1{
  color: rebeccapurple;
}
</style>
