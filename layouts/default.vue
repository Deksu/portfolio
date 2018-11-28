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
    },
      // $route() {
      //   const CheckNavClass = document.getElementById('navbarID');

      //   const CheckBurger = document.getElementById('burger')

      //   function changeActiveState() {  
      //     // Changing the state of navbar and burger. Fixes mobile view issues with the navbar menu
      //     // TODO: FIX BUG when running function, all works but the next click on the hamburger is not registered.
      //     // Issue with @click functionality? Maybe showNav needs to be a global mixin?

      //     if (CheckNavClass.classList.contains('is-active') == true ) {
      //       const ClassToggle = CheckNavClass.classList.toggle('is-active')
      //       const ClassToggleBurger = CheckBurger.classList.toggle('is-active')
      //       console.log('toggling is-active class', ClassToggle)
      //     }

      //   }
      //   return changeActiveState();
      // }
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