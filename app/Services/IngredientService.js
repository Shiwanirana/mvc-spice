import { ProxyState } from "../AppState.js";
import Ingredient from "../Models/Ingredient.js";
import { saveState } from "../Utils/LocalStorage.js";

class IngredientService{
  addIngredient(newIngredient){
    let ingredients = ProxyState.ingredients
    ingredients.push(new Ingredient(newIngredient))
    ProxyState.ingredients = ingredients
    console.log(ProxyState.ingredients)
  }
  deleteIngredient(recipeId){
    ProxyState.ingredients = ProxyState.ingredients.filter(i=>i.id !=recipeId)
  }
  constructor(){
    console.log("ingredient service")
    ProxyState.on("ingredients",saveState)
  }
}
export const ingredientService = new IngredientService()