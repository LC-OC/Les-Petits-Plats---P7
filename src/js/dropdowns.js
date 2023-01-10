import { recipes } from "../data/recipes.js";

// DOM
let dropdownIngredients = document.querySelector(".ingredients-list");
let dropdownAppliances = document.querySelector(".appliances-list");
let dropdownUstensils = document.querySelector(".ustensils-list");
let searchBarIngredients = document.querySelector("#searchbar_ingredients");
let searchBarAppliances = document.querySelector("#searchbar_appliances");
let searchBarUstensils = document.querySelector("#searchbar_ustensils");

// array
let arrayIngredients = [];
let arrayAppliances = [];
let arrayUstensils = [];
let arrayListingIngredients = [];
let arrayListingAppliances = [];
let arrayListingUstensils = [];

// récupération des éléments des listings
recipes.map((recipe) => {
  arrayAppliances.push(recipe.appliance);
  let ustensils = recipe.ustensils;
  ustensils.map((ustensil) => {
    arrayUstensils.push(ustensil);
  });
  let ingredientName = recipe.ingredients;
  ingredientName.map((ingredient) => {
    arrayIngredients.push(ingredient.ingredient);
  });
});

// maj first letter
arrayIngredients = arrayIngredients.map(
  (a) => a.charAt(0).toUpperCase() + a.substr(1)
);
arrayAppliances = arrayAppliances.map(
  (a) => a.charAt(0).toUpperCase() + a.substr(1)
);
arrayUstensils = arrayUstensils.map(
  (a) => a.charAt(0).toUpperCase() + a.substr(1)
);

// new array sans doublons
let newArrayIngredient = new Set(arrayIngredients);
let newArrayAppliances = new Set(arrayAppliances);
let newArrayUstensils = new Set(arrayUstensils);

// display listing dans les dropdowns
newArrayIngredient.forEach((ingredientList) => {
  let listIngredient = document.createElement("li");
  listIngredient.textContent = ingredientList;
  listIngredient.classList.add("ingredient");
  dropdownIngredients.appendChild(listIngredient);
  arrayListingIngredients.push(listIngredient);
});
newArrayAppliances.forEach((applianceList) => {
  let listAppliance = document.createElement("li");
  listAppliance.textContent = applianceList;
  dropdownAppliances.appendChild(listAppliance);
  arrayListingAppliances.push(listAppliance);
});
newArrayUstensils.forEach((ustensilList) => {
  let listUstensils = document.createElement("li");
  listUstensils.textContent = ustensilList;
  dropdownUstensils.appendChild(listUstensils);
  arrayListingUstensils.push(listUstensils);
});

// search listing ingredients
searchBarIngredients.addEventListener("keyup", (e) => {
  let searchValue = e.target.value;
  searchValue = searchValue.toLowerCase();
  let searchValueLength = searchValue.length;
  arrayListingIngredients.forEach((listIngredient) => {
    if (
      searchValueLength >= 3 &&
      !listIngredient.textContent.toLowerCase().includes(searchValue)
    ) {
      listIngredient.style.display = "none";
    } else {
      listIngredient.style.display = "block";
    }
  });
});
searchBarAppliances.addEventListener("keyup", (e) => {
  let searchValue = e.target.value;
  searchValue = searchValue.toLowerCase();
  let searchValueLength = searchValue.length;
  arrayListingAppliances.forEach((listAppliance) => {
    if (
      searchValueLength >= 3 &&
      !listAppliance.textContent.toLowerCase().includes(searchValue)
    ) {
      listAppliance.style.display = "none";
    } else {
      listAppliance.style.display = "block";
    }
  });
});
searchBarUstensils.addEventListener("keyup", (e) => {
  let searchValue = e.target.value;
  searchValue = searchValue.toLowerCase();
  let searchValueLength = searchValue.length;
  arrayListingUstensils.forEach((listUstensil) => {
    if (
      searchValueLength >= 3 &&
      !listUstensil.textContent.toLowerCase().includes(searchValue)
    ) {
      listUstensil.style.display = "none";
    } else {
      listUstensil.style.display = "block";
    }
  });
});
