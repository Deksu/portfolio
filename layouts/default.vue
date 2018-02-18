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
    font-family: "Work Sans", Arial, sans-serif;
  }
  h1 {
    font-family: "Work Sans";
    font-weight: 600;
  }
  h2 {
    font-family: "Work Sans";
    font-weight: 300;
  }
  a {
    font-family: "Work Sans";
    font-weight: 300;
  }
</style>