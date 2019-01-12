<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">About Me</h1>
      <p>
          My name is Miikka Marin. I originate from Lapland, Finland and I am currently studying at the Lapland University of Applied Sciences.</p>
          <p>I am currently living in Oulu and from here,</p>
        <div class="customcontainer">
            <p>I design. <br>
            I code. <br>
            I create.</p>
        </div>
         <div class="text-container">
            <p>I am currently working as a web developer at <a href="https://designinspis.fi" target="_blank">Design Inspis.</a></p>
                <br>
                <p>Last year I worked for Osuuspankki on their OP-mobile application as a UX Designer.</p>
                <br>
             <p>Outside of work, personal projects and other hobbies I am focusing on improving my JavaScript skills and diving deeper into the world of modern frameworks, mainly Vue.js at the moment.
                  This website you are on right now is based on <a href="https://vuejs.org" target="_blank">Vue.js</a> and <a href="https://bulma.io" target="_blank">Bulma</a>.</p>
         </div>
    </div>
  </section>
</template>


<style scoped>

.customcontainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 2em;
    line-height: 150%;
    text-align: justify;
    margin: 30px 0px 30px 0px;
    padding: 30px 0px 30px 0px;
}
.text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1em;
    text-align: center;
}

</style>
