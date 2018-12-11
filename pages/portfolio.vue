<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">Portfolio</h1>
      <p>
        Images and background info about some of my projects.
      </p>
    </div>
        <div class="snapshot-container-2 has-text-centered">
            <div>
                <h1 class="title-2">Pizza Online-concept</h1>
                <h2 class="subtitle-2">School project</h2>
                    <div class="container is-hidden-desktop">
                        <img src="~/static/pizzaonline/frontpage.png" alt="pizzaonline-frontpage" class="mobile-preview-img">
                    </div>
                <a href="/pizzaonline" class="button btn subtitle-2">Read more</a>
            </div>
        <img src="~/static/pizzaonline/frontpage.png" alt="pizzaonline-frontpage" class="snapshot-img is-hidden-touch" id="image1">
        </div>


        <div class="snapshot-container-2 has-text-centered">
            <div>
                <h1 class="title-2">Student Union ROTKO website</h1>
                <h2 class="subtitle-2">Work project</h2>
                    <div class="container is-hidden-desktop">
                        <img src="~/static/rotko/rotko-frontpage-1200.png" alt="rotko-frontpage" class="mobile-preview-img">
                    </div>
                <a href="/rotko" class="button btn subtitle-2">Read more</a>
            </div>

        <img src="~/static/rotko/rotko-frontpage-1200.png" alt="rotko-frontpage" class="snapshot-img is-hidden-touch" id="image1">
        </div>

                <div class="snapshot-container-2 last-snapshot-container has-text-centered">
            <div>
                <h1 class="title-2">Goldsmiths' portfolio website</h1>
                <h2 class="subtitle-2">Personal project (work in progress)</h2>
                    <div class="container is-hidden-desktop">
                        <img src="~/static/mm/mm-frontpage.png" alt="mm-frontpage" class="mobile-preview-img">
                    </div>
                <a href="/mattimarin" class="button btn subtitle-2">Read more</a>
            </div>
                <img src="~/static/mm/mm-frontpage.png" alt="mm-frontpage" class="snapshot-img is-hidden-touch" id="image1">
                </div>
  </section>
</template>

<style scoped>

.snapshot-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    margin: auto;
}

.snapshot-3 {
    width: 40%;
    height: 60%;
    margin: 20px 20px 20px 10px;
    border: 3px solid #000;
}

/* .snapshot-img {
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
}


.snapshot-img:hover {
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.snapshot-img:focus {
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
} */

.snapshot-container-2 {
    display: flex;
    min-height: 70vh;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin: 200px 0px 200px 0px;
}

.snapshot-container-2 a {
    margin: 1em 0em 1em 0em;
}

.snapshot-container-2 img {
    
    width: 40%;
    height: 60%;
    margin: 30px 10px 30px 10px;
}

.last-snapshot-container {
    margin: 200px 0px 0px 0px;
}

.title-1 {
    font-family: "Work Sans";
    font-size: 1.5em;
    font-weight: 600;
    margin: 70vh 0px 0px 0px;
    text-align: center;
}

.title-2 {
    font-family: "Work Sans";
    font-size: 1.5em;
    font-weight: 600;
    margin: auto;
    text-align: center;
}

.subtitle-2 {
    font-family: "Work Sans";
    font-size: 1.2em;
    font-weight: 300;
    margin: 10px 0px 0px 0px;
    text-align: center;
}

.add-margin-bottom {
    margin-bottom: 1em;
}

.btn {
    background-color: none;
    border: 1px solid #000;
    color: #000;
    text-align: center;
    margin: 1em;
}

.mobile-preview-img {
    min-width: 300px;
    min-width: 300px;
    /* transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease; */
}

/* .mobile-preview-img:focus {
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    -webkit-transform: scale(3);
    transform: scale(3);
} */


</style>
