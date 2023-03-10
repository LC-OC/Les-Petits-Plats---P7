export function recipesFactory(data) {
  const {
    name,
    servings,
    ingredients,
    quantity,
    unit,
    time,
    description,
    appliance,
    ustensils,
  } = data;
  function getRecipeCardDOM() {
    // create DOM elements
    let cardsCols = document.createElement("div");
    let cardsRecipes = document.createElement("div");
    let imgCardsRecipes = document.createElement("div");
    let cardsRecipesBody = document.createElement("div");
    let cardsTimeTitle = document.createElement("div");
    let cardsRecipesTitle = document.createElement("h2");
    let cardsRecipesTime = document.createElement("p");
    let cardsIngredientsDescription = document.createElement("div");
    let cardsRecipesDescriptions = document.createElement("p");
    let appareilsPart = document.createElement("p");
    let ustensilsPart = document.createElement("p");
    let divIngredients = document.createElement("div");

    // add id and class
    cardsCols.classList.add("cards");
    cardsRecipes.classList.add("card");
    cardsRecipes.classList.add("border-0");
    imgCardsRecipes.classList.add("card-img-top");
    cardsRecipesBody.classList.add("card-body");
    cardsTimeTitle.classList.add("style_title_time");
    cardsRecipesTitle.setAttribute("id", "search_title");
    cardsRecipesTime.classList.add("card-text", "time_recipes");
    cardsIngredientsDescription.classList.add("style_description_ingredients");
    cardsRecipesDescriptions.classList.add("description_style");
    divIngredients.classList.add("div_ingredients_recipes");

    // add style
    cardsRecipes.style.cursor = "pointer";
    appareilsPart.style.display = "none";
    ustensilsPart.style.display = "none";

    // innerText/innerHTML
    cardsRecipesTitle.innerText = name;
    cardsRecipesTime.innerHTML =
      '<i class="far fa-clock"></i> ' + time + " min";
    cardsRecipesDescriptions.innerText = description;
    appareilsPart.innerHTML = appliance;
    ustensilsPart.innerHTML = ustensils;

    // display ingredients list

    ingredients.forEach((ingredient) => {
      let cardsRecipesIngredients = document.createElement("p");
      divIngredients.appendChild(cardsRecipesIngredients);
      cardsRecipesIngredients.classList.add("ingredients_recipes");
      let ingredientName = ingredient.ingredient;
      let ingredientQuantity = ingredient.quantity;
      let ingredientUnit = ingredient.unit;
      if (ingredientUnit == undefined) {
        cardsRecipesIngredients.innerHTML =
          "<span class='ingredient_bold'>" +
          ingredientName +
          "</span>" +
          ": " +
          ingredientQuantity;
      } else {
        cardsRecipesIngredients.innerHTML =
          "<span class='ingredient_bold'>" +
          ingredientName +
          "</span>" +
          ": " +
          ingredientQuantity +
          " " +
          ingredientUnit;
      }
      if (ingredientUnit == "grammes") {
        cardsRecipesIngredients.innerHTML =
          "<span class='ingredient_bold'>" +
          ingredientName +
          "</span>" +
          ": " +
          ingredientQuantity +
          "g";
      }
      if (
        ingredientUnit == "kg" ||
        ingredientUnit == "cl" ||
        ingredientUnit == "ml"
      ) {
        cardsRecipesIngredients.innerHTML =
          "<span class='ingredient_bold'>" +
          ingredientName +
          "</span>" +
          ": " +
          ingredientQuantity +
          ingredientUnit;
      }
      if (
        ingredientUnit == "cuill??res ?? soupe" ||
        ingredientUnit == "cuill??re ?? soupe"
      ) {
        cardsRecipesIngredients.innerHTML =
          "<span class='ingredient_bold'>" +
          ingredientName +
          "</span>" +
          ": " +
          ingredientQuantity +
          "c??s";
      }
      if (ingredientQuantity == undefined) {
        cardsRecipesIngredients.innerHTML =
          "<span class='ingredient_bold''>" + ingredientName + "</span>";
      }
    });

    // AppendChild
    cardsRecipesBody.appendChild(cardsTimeTitle);
    cardsTimeTitle.appendChild(cardsRecipesTitle);
    cardsTimeTitle.appendChild(cardsRecipesTime);
    cardsRecipesBody.appendChild(cardsIngredientsDescription);
    cardsCols.appendChild(cardsRecipes);
    cardsRecipes.appendChild(imgCardsRecipes);
    cardsRecipes.appendChild(cardsRecipesBody);
    cardsRecipes.appendChild(appareilsPart);
    cardsRecipes.appendChild(ustensilsPart);
    cardsIngredientsDescription.appendChild(divIngredients);
    cardsIngredientsDescription.appendChild(cardsRecipesDescriptions);

    return cardsCols;
  }

  return {
    name,
    servings,
    ingredients,
    quantity,
    unit,
    time,
    description,
    appliance,
    ustensils,
    getRecipeCardDOM,
  };
}
