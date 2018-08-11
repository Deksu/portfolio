<template>
    <section class="section is-medium">
        <div class="container has-text-centered">
            <h1 class="title">Student Union ROTKO website</h1>
            <h2 class="subtitle">Work project</h2>
        </div>

        <div class="snapshot-container">
            <img src="~/static/rotko/rotko-frontpage-1200.png" alt="rotko-frontpage" class="snapshot-img preview-img">
        </div>

  

        <div class="container text-container has-text-left padded-container">
            <p>Me and my colleague at the time were tasked on creating a new website for our employer, student union ROTKO. The goal was to create a modern looking website that could be easily updated via the CMS. We chose WordPress as the CMS for its wide usage, huge plugin selection and that it is easy(-ish!) to learn how to use.</p>
            
            <p>The service is based on the wonderful Finnish service called <a href="https://pilvia.com/" target="_blank">Pilvia</a>, they take care of the hosting and basically act as the "foundation".
             My main task throughout this whole project was to be the main developer and designer. I designed the interface and did a lot of the needed custom CSS and JavaScript coding.
              The site is based on the X Pro theme builder, so while we didn't need to program the whole layout from the scratch, we did build it without a ready template using the tools provided within the theme.</p>

            <p>With these tools and the help from my colleague Jussi, we managed to create a modern, fresh looking website with lots of expansion possibilites with the use of WordPress as the core of the site.</p>
            
            <p>You can view the soon-to-launch website by clicking the button below.</p>
        </div>
        <div class="container has-text-centered added-padding-bottom">
            <a target="_blank" href="https://lapinrotko.demo.site/" class="button is-link is-medium subtitle-2">View the page</a>
        </div>
    

        <!-- <div class="snapshot-container">
            <img src="~/static/pizzaonline/frontpage.png" alt="pizzaonline-frontpage" class="snapshot-3 snapshot-img" id="image1">

            <img src="~/static/pizzaonline/signup.png" alt="pizzaonline-signup" class="snapshot-3 snapshot-img" id="image2">

            <img src="~/static/pizzaonline/shopping-cart.png" alt="pizzaonline-shoppingcart" class="snapshot-3 snapshot-img" id="image3">
        </div> -->
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

.preview-img-container {
    display: flex;
    align-content: center;
    justify-content: center;
    margin: auto;
}

.preview-img {
    padding: 2em 0em 2em 0em;
    width: 40%;
    height: 40%;
}

.preview-img-small {
    padding: 2em 0em 2em 0em;
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
