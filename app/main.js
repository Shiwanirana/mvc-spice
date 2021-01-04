import RecipeController from "./Controllers/RecipeController.js";
import StepController from "./Controllers/StepController.js";
import IngredientController from "./Controllers/IngredientController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  recipeController = new RecipeController();
  stepController = new StepController();
  ingredientController = new IngredientController();
}

window["app"] = new App();
loadState()