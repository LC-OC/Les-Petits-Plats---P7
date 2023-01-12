import { searchBar, recipesContainer, errorRecipes } from "./DOM.js";
import { arrayRecipes } from "./dropdowns.js";
searchBar.addEventListener("keyup", (e) => {
  let searchValue = e.target.value;
  searchValue = searchValue.toLowerCase();
  let matchFound = false;
  let searchValueLength = searchValue.length;
  // array method
  arrayRecipes.forEach((recipes) => {
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
  /*loop method
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
  }*/
});
