import { ProxyState } from "../AppState.js";
import Step from "../Models/Step.js";
import { saveState } from "../Utils/LocalStorage.js";

class StepService{
  addStep(newStep){
    let steps = ProxyState.steps
    steps.push(new Step(newStep))
    ProxyState.steps = steps
    console.log(ProxyState.steps)
  }
  deleteStep(recipeId){
    ProxyState.steps = ProxyState.steps.filter(s=>s.id !=recipeId)
  }
  constructor(){
    console.log("step service")
    ProxyState.on("steps",saveState)
  }
}

export const stepService = new StepService()