import { ProxyState } from "../AppState.js"
import Recipe from "../Models/Recipe.js"
import { saveState } from "../Utils/LocalStorage.js"


class RecipeService{
  createRecipe(newRecipe){
    console.log("service-create")
    let recipe = new Recipe(newRecipe)
    ProxyState.recipes = [...ProxyState.recipes, recipe]
  }
  constructor(){
    console.log("recipes construct")
    ProxyState.on("recipes", saveState)
  }
}

export const recipeService = new RecipeService()