<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">My Projects</h1>
      <p>
        Scroll down to see a few snapshots of my work.
      </p>
    </div>
            <h1 class="title-1">Pizza Online-concept</h1>
            <h2 class="subtitle-2">School project</h2>
    <div class="snapshot-container">
        <img src="~/static/pizzaonline/frontpage.png" alt="pizzaonline-frontpage" class="snapshot-3 snapshot-img" id="image1">

        <img src="~/static/pizzaonline/signup.png" alt="pizzaonline-signup" class="snapshot-3 snapshot-img" id="image2">

        <img src="~/static/pizzaonline/shopping-cart.png" alt="pizzaonline-shoppingcart" class="snapshot-3 snapshot-img" id="image3">
    </div>


        <div class="snapshot-container-2">
            <div>
            <h1 class="title-2">F Sharp vinyl store concept</h1>
            <h2 class="subtitle-2">Personal project</h2>
            </div>
        <img src="~/static/fsharp/f-sharp-frontpage.png" alt="fsharp-frontpage" class="snapshot-img" id="image1">
        </div>

                <div class="snapshot-container-2 last-snapshot-container">
            <div>
            <h1 class="title-2">Goldsmiths' portfolio website</h1>
            <h2 class="subtitle-2">Personal project (work in progress)</h2>
            </div>
        <img src="~/static/mm/mm-frontpage.png" alt="mm-frontpage" class="snapshot-img" id="image1">

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

.snapshot-container-2 {
    display: flex;
    min-height: 70vh;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    margin: 200px 0px 200px 0px;
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
</style>
