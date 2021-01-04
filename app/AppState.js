import Recipe from "./Models/Recipe.js"
import Step from "./Models/Step.js"
import Ingredient from "./Models/Ingredient.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Recipe[]} */
  recipes = []
  /** @type {Step[]} */
  steps = []
  /** @type {Ingredient[]} */
  ingredients = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
