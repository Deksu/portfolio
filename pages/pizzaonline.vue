<template>
    <section class="section is-medium">
        <div class="container has-text-centered">
            <h1 class="title">Pizza Online</h1>
            <h2 class="subtitle">School project</h2>

        </div>

        <div class="container text-container has-text-left padded-container">
            <p>The goal of this project was to create a functional website for a hypothetical pizza place. The site is in Finnish.</p>
            
            <p>It's based on HTML, CSS, JavaScript and PHP. The database is a simple MySQL database containing data like user info, employee info, order info and info about the menu items.</p>
            
            <p>The live demo is not connected to this database, it's purpose is to demo the service and the user interface.</p>
        </div>
        <div class="container has-text-centered added-padding-bottom">
            <a target="_blank" href="https://deksu.github.io/pizzaonline" class="button is-link is-medium subtitle-2">View live demo</a>
        </div>
    

        <div class="snapshot-container">
            <img src="~/static/pizzaonline/frontpage.png" alt="pizzaonline-frontpage" class="snapshot-3 snapshot-img" id="image1">

            <img src="~/static/pizzaonline/signup.png" alt="pizzaonline-signup" class="snapshot-3 snapshot-img" id="image2">

            <img src="~/static/pizzaonline/shopping-cart.png" alt="pizzaonline-shoppingcart" class="snapshot-3 snapshot-img" id="image3">
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
