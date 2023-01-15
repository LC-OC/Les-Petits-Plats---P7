import {
  searchBar,
  errorRecipes,
  dropdownAppliances,
  dropdownIngredients,
  dropdownUstensils,
  errorAppliances,
  errorIngredients,
  errorUstensils,
} from "./DOM.js";
import { arrayRecipes, listing } from "./dropdowns.js";
export let cards = document.getElementsByClassName("cards");

searchBar.addEventListener("keyup", () => {
  searchPrincipal();
  listingInput();
});

export function searchPrincipal() {
  let searchValue = searchBar.value;
  searchValue = searchValue.toLowerCase();
  let matchFound = false;
  let searchValueLength = searchValue.length;
  // array method
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
    } else {
      errorRecipes.style.display = "none";
    }
  });
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
