<template>
    <section class="section is-medium">
        <div class="container has-text-centered">
            <h1 class="title">Goldsmiths' portfolio website</h1>
            <h2 class="subtitle">Personal project</h2>
        </div>

        <div class="snapshot-container">
            <img src="~/static/mm/mm-frontpage.png" alt="mm-frontpage" class="snapshot-img preview-img">
        </div>


        <div class="container text-container has-text-left padded-container">
            <p>This is a portfolio website designed for my dad, Matti Marin, who is a goldsmith working at Taigakoru. My dad wanted a personal website to showcase his jewelry designs and contain some information about himself as well.</p>
            
            <p>The basic design idea was to create a single page website with three main parts: The landing/hero section with a large image to attract the attention, gallery section to showcase the designs and a biography section to tell me about the goldsmith himself.</p>

            <p>Between these sections, the transition is smooth while scrolling, showing one section at a time. To showcase this function, I added an animated icon to the main landing page to inform the user about this functionality.</p>
            
            <p>The site will be based on Vue and Nuxt, hosted on Netlify. It is not published yet but I will be updating this page with a link once its up and running!</p>
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
    padding: 5em 0em 2em 0em;
}

.snapshot-3 {
    width: 40%;
    height: 60%;
    margin: 20px 20px 20px 10px;
    border: 3px solid #000;
}

.snapshot-img {
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
}

.snapshot-img:hover {
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}

.snapshot-img:focus {
    transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    -webkit-transform: scale(2);
    transform: scale(2);
}

.text-container p {
    margin-bottom: 1em;
    line-height: 180%;
}

.padded-container {
    padding: 4em 0em 2em 0em;
}

.added-padding-bottom {
    padding-bottom: 4em;
}

.subtitle-2 {
    font-family: "Work Sans";
    font-size: 1.2em;
    font-weight: 300;
    margin: 10px 0px 0px 0px;
    text-align: center;
}

</style>
