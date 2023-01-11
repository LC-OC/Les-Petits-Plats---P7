import { recipes } from "../data/recipes.js";

// DOM
let dropdownIngredients = document.querySelector(".ingredients-list");
let dropdownAppliances = document.querySelector(".appliances-list");
let dropdownUstensils = document.querySelector(".ustensils-list");
let searchBarIngredients = document.querySelector("#searchbar_ingredients");
let searchBarAppliances = document.querySelector("#searchbar_appliances");
let searchBarUstensils = document.querySelector("#searchbar_ustensils");
const errorIngredients = document.getElementById("error_ingredient");
const errorAppliances = document.getElementById("error_appliances");
const errorUstensils = document.getElementById("error_ustensils");
let tagSection = document.querySelector("#tag-section");

let arrayRecipes = [];
let recipesContainer = document.getElementsByClassName("cards");
for (let recipes of recipesContainer) {
  arrayRecipes.push(recipes);
}
console.log(arrayRecipes);

// array
let arrayIngredients = [];
let arrayAppliances = [];
let arrayUstensils = [];
let arrayListingIngredients = [];
let arrayListingAppliances = [];
let arrayListingUstensils = [];
let arrayTag = [];

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
  listIngredient.style.cursor = "pointer";
  listIngredient.textContent = ingredientList;
  listIngredient.classList.add("ingredient");
  dropdownIngredients.appendChild(listIngredient);
  arrayListingIngredients.push(listIngredient);
});
newArrayAppliances.forEach((applianceList) => {
  let listAppliance = document.createElement("li");
  listAppliance.style.cursor = "pointer";
  listAppliance.textContent = applianceList;
  dropdownAppliances.appendChild(listAppliance);
  arrayListingAppliances.push(listAppliance);
});
newArrayUstensils.forEach((ustensilList) => {
  let listUstensils = document.createElement("li");
  listUstensils.style.cursor = "pointer";
  listUstensils.textContent = ustensilList;
  dropdownUstensils.appendChild(listUstensils);
  arrayListingUstensils.push(listUstensils);
});

// search listing ingredients
searchBarIngredients.addEventListener("keyup", (e) => {
  let searchValue = e.target.value;
  searchValue = searchValue.toLowerCase();
  let matchFound = false;
  let searchValueLength = searchValue.length;
  arrayListingIngredients.forEach((listIngredient) => {
    if (
      searchValueLength >= 3 &&
      !listIngredient.textContent.toLowerCase().includes(searchValue)
    ) {
      listIngredient.style.display = "none";
    } else {
      listIngredient.style.display = "block";
      matchFound = true;
    }
    if (!matchFound) {
      errorIngredients.style.display = "block";
    } else {
      errorIngredients.style.display = "none";
    }
  });
});
searchBarAppliances.addEventListener("keyup", (e) => {
  let searchValue = e.target.value;
  searchValue = searchValue.toLowerCase();
  let matchFound = false;
  let searchValueLength = searchValue.length;
  arrayListingAppliances.forEach((listAppliance) => {
    if (
      searchValueLength >= 3 &&
      !listAppliance.textContent.toLowerCase().includes(searchValue)
    ) {
      listAppliance.style.display = "none";
    } else {
      listAppliance.style.display = "block";
      matchFound = true;
    }
    if (!matchFound) {
      errorAppliances.style.display = "block";
    } else {
      errorAppliances.style.display = "none";
    }
  });
});
searchBarUstensils.addEventListener("keyup", (e) => {
  let searchValue = e.target.value;
  searchValue = searchValue.toLowerCase();
  let matchFound = false;
  let searchValueLength = searchValue.length;
  arrayListingUstensils.forEach((listUstensil) => {
    if (
      searchValueLength >= 3 &&
      !listUstensil.textContent.toLowerCase().includes(searchValue)
    ) {
      listUstensil.style.display = "none";
    } else {
      listUstensil.style.display = "block";
      matchFound = true;
    }
    if (!matchFound) {
      errorUstensils.style.display = "block";
    } else {
      errorUstensils.style.display = "none";
    }
  });
});

// Create Tag
arrayListingIngredients.forEach((listIngredient) => {
  listIngredient.addEventListener("click", function (e) {
    let ingredient = e.target.textContent;
    let badgeIngredient = document.createElement("span");
    badgeIngredient.innerHTML = ingredient;
    badgeIngredient.classList.add("badge");
    badgeIngredient.classList.add("tag-ingredient");
    badgeIngredient.style.display = "inline-block";
    let badgeCloseIcon = document.createElement("img");
    badgeCloseIcon.src = "../src/assets/close-icon.png";
    badgeCloseIcon.classList.add("close-icon");
    badgeIngredient.appendChild(badgeCloseIcon);
    tagSection.appendChild(badgeIngredient);
    arrayTag.push(badgeIngredient);
    searchTag();
    tagRemove();
  });
});
arrayListingAppliances.forEach((listAppliance) => {
  listAppliance.addEventListener("click", function (e) {
    let appliance = e.target.textContent;
    let badgeAppliance = document.createElement("span");
    badgeAppliance.innerHTML = appliance;
    badgeAppliance.classList.add("badge");
    badgeAppliance.classList.add("tag-appliance");
    badgeAppliance.style.display = "inline-block";
    let badgeCloseIcon = document.createElement("img");
    badgeCloseIcon.src = "../src/assets/close-icon.png";
    badgeCloseIcon.classList.add("close-icon");
    badgeAppliance.appendChild(badgeCloseIcon);
    tagSection.appendChild(badgeAppliance);
    arrayTag.push(badgeAppliance);
    searchTag();
    tagRemove();
  });
});
arrayListingUstensils.forEach((listUstensil) => {
  listUstensil.addEventListener("click", function (e) {
    let ustensil = e.target.textContent;
    let badgeUstensil = document.createElement("span");
    badgeUstensil.innerHTML = ustensil;
    badgeUstensil.classList.add("badge");
    badgeUstensil.classList.add("tag-ustensil");
    badgeUstensil.style.display = "inline-block";
    let badgeCloseIcon = document.createElement("img");
    badgeCloseIcon.src = "../src/assets/close-icon.png";
    badgeCloseIcon.classList.add("close-icon");
    badgeUstensil.appendChild(badgeCloseIcon);
    tagSection.appendChild(badgeUstensil);
    arrayTag.push(badgeUstensil);
    searchTag();
    tagRemove();
  });
});

// Delete Tag
function tagRemove() {
  arrayTag.forEach((tag) => {
    tag.addEventListener("click", function () {
      tag.remove();
      console.log(tag.textContent);
    });
  });
}

let arrayTextTag = [];
function searchTag() {
  arrayRecipes.map((recipe) => {
    arrayTag.map((tag) => {
      arrayTextTag.push(tag.textContent.toLowerCase());
      let isEvery = arrayTextTag.every((item) =>
        recipe.textContent.toLowerCase().includes(item)
      );
      if (isEvery == true) {
        console.log(recipe.textContent);
        recipe.style.display = "block";
      } else {
        recipe.style.display = "none";
      }
      console.log(isEvery);
      console.log(tag.textContent);
    });
  });
}
