<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Home</a>

        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>



      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
          <nuxt-link class="navbar-item" to="/portfolio">Portfolio</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
  export default {
    data()  {
      return {
        showNav: false
        // todo: Add a middleware function to execute shownav functionality on page change! Or use watch route method, see: https://cmty.app/nuxt/nuxt.js/issues/c2578#comment-5abbc4c986a34ad2198a6bca
        
      }
    }
  }
</script>


<style scoped>

</style>
