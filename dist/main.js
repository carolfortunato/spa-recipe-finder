let match = [];
const mainSection = document.getElementById("main");

function error() {
  console.log("error")
}

function loadHome() {
  mainSection.innerHTML = ""
  mainSection.innerHTML = `
  <h3 class="title text-center">Every recipe you need in one place</h3>   
  <img class="home-image" src="dist/rachel-park-366508-unsplash-medium.jpg">`
}

function loadFavorites() {
  mainSection.innerHTML = ""
  mainSection.innerHTML = `
  <h3 class="title favorites text-center">There's no favorites yet.</h3>`
}

function loadSearch(){
  mainSection.innerHTML = ""
  getResult();
}

function getResult(){
  const getRecipe = new XMLHttpRequest();
  getRecipe.open("GET", `https://api.yummly.com/v1/api/recipes?_app_id=fbaffb76&_app_key=d7ba56de55cc896da471205a4d4250e3&requirePictures=true&maxResult=30`)
  getRecipe.onload = loadResults;
  getRecipe.onerror = error;
  getRecipe.send();
}

function loadResults() {
  match = JSON.parse(this.response)["matches"]
  console.log(match);
  printResults();
}

function printResults() {
  mainSection.innerHTML = `
  <div class="each-result"> ${match.map( item => `
    <div class="recipe-result text-center border-bottom">
      <h3>${item.recipeName}</h3>
      <p>${item.ingredients.join(", ")}</p>
    </div>`)
    .join("")}
  </div>`;
}