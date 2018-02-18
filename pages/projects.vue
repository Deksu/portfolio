<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">My Projects</h1>
      <p>
        Below you can find a few snapshots of my work.
      </p>
    </div>
            <h1 class="title-1">Pizza Online-concept (school project)</h1>
    <div class="snapshot-container">
        <img src="~/static/pizzaonline/frontpage.png" alt="pizzaonline-frontpage" class="snapshot-img" id="image1">

        <img src="~/static/pizzaonline/signup.png" alt="pizzaonline-signup" class="snapshot-img" id="image2">

        <img src="~/static/pizzaonline/shopping-cart.png" alt="pizzaonline-shoppingcart" class="snapshot-img" id="image3">
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
            <h1 class="title-2">Goldsmith's portfolio website</h1>
            <h2 class="subtitle-2">Personal project (unfinished)</h2>
            </div>
        <img src="~/static/mm/mm-frontpage.png" alt="mm-frontpage" class="snapshot-img" id="image1">

    </div>
  </section>
</template>

<style scoped>

.snapshot-container {
    display: flex;
    min-height: 100vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 0px 0px;
}
.snapshot-container img {
    width: 30%;
    height: 30%;
    margin-left: 10px;
    margin-right: 10px;
    border: 8px solid #000;
}
.snapshot-container-2 {
    display: flex;
    min-height: 70vh;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 200px 0px 200px 0px;
}

.snapshot-container-2 img {
    width: 40%;
    height: 40%;
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
    margin: 50px 0px 50px 0px;
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
