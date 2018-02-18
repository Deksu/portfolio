<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Portfolio</a>

            <!-- Using a <label /> here -->
    <label class="nav-toggle" for="nav-toggle-state">
    <span>test</span>
    <span></span>
    <span></span>
  </label>

  <!-- This checkbox is hidden -->
  <input type="checkbox" id="nav-toggle-state" />
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

<style scoped>

#nav-toggle-state {
  display: none;
}

#nav-toggle-state:checked ~ .nav-menu {
  display: block;
}

/* a.navbar-item:hover, a.navbar-item.is-active,
a.navbar-link:hover,
a.navbar-link.is-active {
  background-color: #8DBD97;
  color: #fff;
}
 */
 
</style>
