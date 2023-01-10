import { recipes } from "../data/recipes.js";
import { recipesFactory } from "./factories/recipesFactory.js";

export const recipesSection = document.getElementById("recipes-section");

export function displayRecipes(recipes) {
  recipes.forEach((recipe) => {
    const recipeModel = recipesFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.appendChild(recipeCardDOM);
  });
}

displayRecipes(recipes);
