document.getElementById("search-btn").addEventListener("click", () => {
  const searchFood = document.getElementById("search-food");
  const searchFoodText = searchFood.value;

  //   clear the input field:
  searchFood.value = "";
  displaySearchFood(searchFoodText);
});

async function displaySearchFood(searchFoodText) {
  if (searchFoodText == "") {
    alert("Enter any kind of juice or vodka!");
  } else {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchFoodText}`;

    const res = await fetch(apiUrl);
    const data = await res.json();
    displayFoodInWindow(data.drinks);
  }
}

const displayFoodInWindow = (drinks) => {
  const displayFoodWindow = document.getElementById("display-window");

  //   when i input new juice name then the previous juice were remove in my html page:
  displayFoodWindow.textContent = "";

  drinks.forEach((drink) => {
    console.log(drink);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card">
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${drink.strDrink}</h5>
      <p class="card-text">
        This is a longer card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div>
  </div>
    `;

    displayFoodWindow.appendChild(div);
  });
};
