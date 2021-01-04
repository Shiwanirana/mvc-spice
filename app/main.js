import RecipeController from "./Controllers/RecipeController.js";

class App {
  recipeController = new RecipeController();
}

window["app"] = new App();
