<template>
  <div>
    <navbar></navbar>
    <nuxt/>
  </div>
</template>


<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  html {
    font-family: "Muli", Arial, sans-serif;
    font-weight: 300;
  }
  h1 {
    font-family: "Work Sans";
    font-weight: 600;
  }
  h2 {
    font-family: "Muli";
    font-weight: 300;
  }
  a {
    font-family: "Muli";
    font-weight: 300;
  }
  body {
    font-family: "Muli";
    font-weight: 300;
    font-size: 1.1em;
  }
</style>