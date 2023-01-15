import {
  searchBar,
  recipesContainer,
  errorRecipes,
  dropdownAppliances,
  dropdownIngredients,
  dropdownUstensils,
  errorAppliances,
  errorIngredients,
  errorUstensils,
} from "./DOM.js";
import { arrayRecipes, listing } from "./dropdowns.js";
import { recipesSection } from "./index.js";
export let cards = document.getElementsByClassName("cards");

searchBar.addEventListener("keyup", () => {
  searchPrincipal();
  listingInput();
  //loop method
});

export function searchPrincipal() {
  let searchValue = searchBar.value;
  searchValue = searchValue.toLowerCase();
  let matchFound = false;
  let searchValueLength = searchValue.length;
  for (let i = 0; i < arrayRecipes.length; i++) {
    if (
      searchValueLength >= 3 &&
      !arrayRecipes[i].textContent.toLowerCase().includes(searchValue)
    ) {
      arrayRecipes[i].style.display = "none";
    } else {
      arrayRecipes[i].style.display = "block";
      matchFound = true;
    }
    if (!matchFound) {
      errorRecipes.style.display = "block";
    } else {
      errorRecipes.style.display = "none";
    }
  }
  /* array method
  arrayRecipes.filter((recipes) => {
    if (
      searchValueLength >= 3 &&
      !recipes.textContent.toLowerCase().includes(searchValue)
    ) {
      recipes.style.display = "none";
    } else {
      recipes.style.display = "block";
      matchFound = true;
    }
    if (!matchFound) {
      errorRecipes.style.display = "block";
      dropdownIngredients.style.display = "none";
      errorIngredients.style.display = "block";
      dropdownAppliances.style.display = "none";
      errorAppliances.style.display = "block";
      dropdownUstensils.style.display = "none";
      errorUstensils.style.display = "block";
    } else {
      errorRecipes.style.display = "none";
      dropdownIngredients.style.display = "block";
      dropdownAppliances.style.display = "block";
      errorAppliances.style.display = "none";
      dropdownUstensils.style.display = "block";
      errorUstensils.style.display = "none";
      errorIngredients.style.display = "none";
    }
  });*/
}

export function listingInput() {
  listing.filter((list) => {
    list.style.display = "none";
    arrayRecipes.filter((recipe) => {
      if (
        recipe.textContent
          .toLowerCase()
          .includes(searchBar.value.toLowerCase()) &&
        recipe.textContent
          .toLowerCase()
          .includes(list.textContent.toLowerCase())
      ) {
        list.style.display = "block";
      }
    });
  });
}
