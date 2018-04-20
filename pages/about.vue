<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">About Me</h1>
      <p>
          My name is Miikka Marin. I originate from Lapland, Finland and I am currently studying at the Lapland University of Applied Sciences.</p>
          <p>For the past 10 years or so I've called the city of Kemi my home and from here,</p>
        <div class="customcontainer">
            <p>I design. <br>
            I code. <br>
            I create.</p>
        </div>
         <div class="text-container">
             <p>I am fairly new at the world of web design but after studying multiple different programming languages, ways to develop and ways to work, I've found that I enjoy the creation of something new through front-end developing the most.</p>
                 <br>
                  <p>My largest project thus far has been developing a completely new website for the Lapland University of Applied Sciences student union ROTKO. Check their soon-to-launch new website
                   <a href="https://lapinrotko.demo.site" target="_blank">here!</a></p>
             <br>
             <p>Currently I'm focusing on improving my JavaScript skills and diving deeper into the world of modern frameworks, mainly Vue.js at the moment.
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
}
.text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1em;
    text-align: center;
}

</style>
