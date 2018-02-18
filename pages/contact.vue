<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">Contact Me</h1>
      <p>
        The easiest way to contact me is via my email: <span id="email-info">miikka.marin(at)gmail.com</span></p>
        <br>

        <p>You can also find me on social media</p>

        <div class="icons">
        <a href="http://www.instagram.com/minxzu/" id="insta-icon" target="_blank"><img src="~/static/insta-icon.svg" alt="instagram-icon"></a>
        <a href="http://www.facebook.com/miikka.marin/" id="facebook-icon" target="_blank"><img src="~/static/facebook-icon.svg" alt="facebook-icon"></a>
        <a href="http://www.twitter.com/minxzu/" id="twitter-icon" target="_blank"><img src="~/static/twitter-icon.svg" alt="twitter-icon"></a>
        </div>
    </div>
  </section>
</template>


<style scoped>

#email-info {
  text-decoration: none;
  color: #3273dc;
}

.icons {
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
}

#insta-icon, #facebook-icon, #twitter-icon {
  margin: 0px 30px 0px 30px;
}

</style>

