<template>
    <section class="section is-medium">
        <div class="container has-text-centered">
            <h1 class="title">Pizza Online</h1>
            <h2 class="subtitle">School project</h2>

        </div>

        <div class="container text-container has-text-left padded-container">
            <p>The goal of this project was to create a functional website for a hypothetical pizza place. Scope of the project was not to create a 100 &percnt; realistic service with every functionality working, the focus was in creating the main functionalities of such a service.</p> 
           
            <p> The most vital parts are working, such as:</p>

                <li>Sign up &amp; login </li>
                <li>Listing menu items</li>
                <li>A working shopping cart &amp; ordering system</li>
                <li>Admin section with functionality to add and edit menu items etc.</li>

            <br>
            
            <p>The site is based on HTML, CSS, JavaScript and PHP. The database is a simple MySQL database containing data like user info, employee info, order info and info about the menu items.
                 Please note that on the demo, some of the food items are just dummy data and can't be added to the cart. You also need to be signed in to enter the final order (use dummy data while signing up if you want to try this functionality out!).</p>

            <p>Check the live demo page which is connected to the MySQL database.</p>
        </div>
        <div class="container has-text-centered added-padding-bottom">

            <a target="_blank" href="http://pizzaonline.epizy.com/pizzaonline-php" class="button is-link is-medium subtitle-2">View demo</a>

            <!-- HIDDEN GITHUB PAGE LINK <a target="_blank" href="https://deksu.github.io/pizzaonline" class="button is-link is-medium subtitle-2">View live demo</a> -->
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
