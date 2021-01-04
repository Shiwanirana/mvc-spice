import { stepService } from "../Services/StepService.js"
export default class StepController{
  constructor(){
    console.log("step controller")
  }

  addStep(event, recipeId){
    event.preventDefault()
    let formData = event.target
    let stepData ={
      title : formData.title.value,
      recipeId: recipeId
    }
    stepService.addStep(stepData)
    formData.reset()
  }
  deleteStep(stepId){
    stepService.deleteStep(stepId)
  }
}