import { generateId } from "../utils/GenerateId.js"

export default class Ingredient{
  constructor({title, id,recipeId}){
     this.title = title
     this.id= id || generateId()
     this.recipeId = recipeId
  }
  get Template(){
    
    return `
    <div class="form-check">
        
        <label class="form-check-label" for="done"><ol>${this.title}</ol></label>
        
        <button type="button" class="close text-danger" onclick="app.ingredientController.deleteIngredient('${this.id}')" id="delButton" ">
        <span >&times;</span>
        </button>
        </div>
        </dd>
        `
  }
}