import { searchBar, errorRecipes } from "./DOM.js";
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
