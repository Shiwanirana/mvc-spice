import { ProxyState } from "../AppState.js"
import Recipe from "../Models/Recipe.js"


class RecipeService{
  createRecipe(newRecipe){
    console.log("service-create")
    let recipe = new Recipe(newRecipe)
    ProxyState.recipes = [...ProxyState.recipes, recipe]
  }
}

export const recipeService = new RecipeService()