<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Home</a>

        <div id="burger" class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarID" class="navbar-menu" @click="toggleNav()" :class="{ 'is-active': showNav }">
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
      }
    },
    methods: {
      // Toggles navigation divs visibility on mobile. Different kind of a toggle needed in Nuxt. Added delay to "smooth" it out a bit.
      toggleNav() {
        setTimeout(() => this.showNav = false, 100);
      }
    }
  }
</script>


<style scoped>

</style>
