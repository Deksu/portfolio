<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item hide-on-mobile" href="/">Portfolio</a>

          <div class="content">
            <div class="navbar-brand">
            <a class ="navbar-item" href="/">Home</a>
            <a class ="navbar-item" href="/about">About</a>
            <a class ="navbar-item" href="/projects">Projects</a>
            <a class ="navbar-item" href="/contact">Contact</a>
            </div>
          </div>
      </div>



      <div class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
          <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>

</script>


<style scoped>


.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-shrink: 1;
  width: 100%;
  margin-left: 10px;
  height: 20px;
}

@media screen and (min-width: 1024px) {
  .content {
    display: none;
  }
}

@media screen and (max-width: 1023px) {
  .hide-on-mobile {
    display: none;
  }
}

/* a.navbar-item:hover, a.navbar-item.is-active,
a.navbar-link:hover,
a.navbar-link.is-active {
  background-color: #8DBD97;
  color: #fff;
}
 */
 
</style>
