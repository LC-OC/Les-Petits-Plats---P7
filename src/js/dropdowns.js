import { recipes } from "../data/recipes.js";
import { displayRecipes, recipesSection } from "./index.js";
import {
  dropdownIngredients,
  dropdownAppliances,
  dropdownUstensils,
  searchBarIngredients,
  searchBarAppliances,
  searchBarUstensils,
  errorIngredients,
  errorUstensils,
  errorAppliances,
  errorRecipes,
  tagSection,
  recipesContainer,
  searchBar,
} from "./DOM.js";

export let arrayRecipes = [];
for (let recipes of recipesContainer) {
  arrayRecipes.push(recipes);
}
import { searchPrincipal } from "./searchBar.js";

// array
let arrayIngredients = [];
let arrayAppliances = [];
let arrayUstensils = [];
let arrayListingIngredients = [];
let arrayListingAppliances = [];
let arrayListingUstensils = [];
let arrayTag = [];
let arrayTextTag = [];
let arrayFilterAppliance = [];
let arrayFilterUstensils = [];
let arrayFilterIngredients = [];

let listIngredients = document.getElementsByClassName("ingredient");

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
arrayListingIngredients.filter((listIngredient) => {
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
    removeDuplicatesTags();
    searchTag();
    tagRemove();
  });
});
arrayListingAppliances.filter((listAppliance) => {
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
    removeDuplicatesTags();
    searchTag();
    tagRemove();
  });
});
arrayListingUstensils.filter((listUstensil) => {
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
    removeDuplicatesTags();
    searchTag();
    tagRemove();
  });
});

let tagDelete = [];
// Delete Tag
function tagRemove() {
  arrayTag.filter((tag) => {
    tag.addEventListener("click", function () {
      tag.remove();
      arrayTag = arrayTag.filter(function (tags) {
        return tags.textContent !== tag.textContent;
      });
      tagDelete = arrayTag;
      filterRemoveTag(tag);
      arrayRecipes.filter((recipe) => {
        if (arrayTag.length === 0 && searchBar.value.length === 0) {
          arrayTag = [];
          arrayTextTag = [];
          searchBar.disabled = false;
        }
        if (
          arrayTag.length === 0 &&
          recipe.textContent
            .toLowerCase()
            .includes(searchBar.value.toLowerCase())
        ) {
          searchPrincipal();
          searchBar.disabled = false;
        }
      });
    });
  });
}
function filterRemoveTag(tag) {
  let matchFound = false;
  arrayTextTag = arrayTextTag.filter(function (tagsText) {
    return tagsText.toLowerCase() !== tag.textContent.toLowerCase();
  });
  arrayRecipes.filter((recipe) => {
    let foundTag = arrayTextTag.every(
      (item) =>
        recipe.textContent.toLowerCase().includes(item) &&
        recipe.textContent.toLowerCase().includes(searchBar.value)
    );
    if (foundTag == true) {
      recipe.style.display = "block";
    } else {
      recipe.style.display = "none";
      matchFound = true;
    }
    if (foundTag == true && searchBar.value.length === 0) {
      searchBar.disabled = true;
    }
    if (!matchFound) {
      errorRecipes.style.display = "block";
    }
  });
}

// Search recipes with tags
function searchTag() {
  let matchFound = false;
  arrayRecipes.filter((recipe) => {
    arrayTag.filter((tag) => {
      arrayTextTag.push(tag.textContent.toLowerCase());
      let foundTag = arrayTextTag.every(
        (item) =>
          recipe.textContent.toLowerCase().includes(item) &&
          recipe.textContent.toLowerCase().includes(searchBar.value)
      );
      if (foundTag == true) {
        recipe.style.display = "block";
        matchFound = true;
      } else {
        recipe.style.display = "none";
      }
      if (foundTag == true && searchBar.value.length === 0) {
        searchBar.disabled = true;
      }
      if (arrayTag.length > 0 && searchBar.value.length > 0) {
        searchBar.disabled = true;
      }
      if (!matchFound) {
        errorRecipes.style.display = "block";
      } else {
        errorRecipes.style.display = "none";
      }
    });
  });
}

function removeDuplicatesTags() {
  const getTags = [...document.querySelectorAll(".badge")];
  const contentTag = new Set(getTags.map((x) => x.innerHTML));
  getTags.forEach((tag) => {
    if (contentTag.has(tag.innerHTML)) {
      contentTag.delete(tag.innerHTML);
    } else {
      tag.remove();
    }
  });
}
