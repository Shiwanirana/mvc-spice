import { ProxyState } from "../AppState.js";
import Recipe from "../Models/Recipe.js";
import Step from "../Models/Step.js";
import Ingredient from "../Models/Ingredient.js";


export function saveState(){
  localStorage.setItem("spice", JSON.stringify({recipes: ProxyState.recipes, steps: ProxyState.steps, ingredients: ProxyState.ingredients}))
}

export function loadState(){
  let data = JSON.parse(localStorage.getItem("spice"))
  if(data){
    console.log(data, "data1")
   ProxyState.recipes = data.recipes.map (r => new Recipe(r))
   
   ProxyState.steps = data.steps.map (s=> new Step(s))

   ProxyState.ingredients = data.ingredients.map(i=> new Ingredient(i))
   console.log(ProxyState.steps, "proxy")
   console.log(ProxyState.ingredients, "proxy")
   console.log(data, "data2")
  //  this.listItems = data.listItems.map(i=> new List(i))
  //  console.log(data, "data2")

  }

}