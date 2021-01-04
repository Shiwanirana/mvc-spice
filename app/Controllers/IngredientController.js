import { ingredientService } from "../Services/IngredientService.js"
export default class IngredientController{
  constructor(){
    console.log("ingredient controller")
  }
  addIngredient(event, recipeId){
    event.preventDefault()
    let formData = event.target
    let ingredientData={
      title: formData.title.value,
      recipeId: recipeId
    }
    ingredientService.addIngredient(ingredientData)
    formData.reset()
  }
  deleteIngredient(ingredientId){
    ingredientService.deleteIngredient(ingredientId)
  }
}