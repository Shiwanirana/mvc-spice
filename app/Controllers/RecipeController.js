import { ProxyState } from "../AppState.js"
import {recipeService} from "../Services/RecipeService.js"


function _drawRecipe(){
  console.log("draw")
  let template = ''
  ProxyState.recipes.forEach(r=> template += r.Template)
  document.getElementById("recipes").innerHTML= template
}

export default class RecipeController{
  constructor(){
    ProxyState.on("recipes", _drawRecipe)
    ProxyState.on("steps", _drawRecipe)
    _drawRecipe
  }

  createRecipe(){
    window.event.preventDefault()
    console.log("create something")
    let form = window.event.target
    let newRecipe = {
      title : form['title'].value,
      description : form['description'].value,
      imgUrl : form['imgUrl'].value
    }
    recipeService.createRecipe(newRecipe)
    form.reset()
    document.getElementById("new-recipe");
    
  }
}