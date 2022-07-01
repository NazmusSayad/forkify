import * as model from "./model.js"
import reciepeView from "./views/reciepeView.js"
// const recipeContainer = document.querySelector(".recipe")

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlReciepe = async () => {
  const id = location.hash.slice(1)
  if (!id) return

  reciepeView.renderSpinner()
  await model.loadReciepe(id)
  reciepeView.render(model.state.recipe)
}

// Init()
;(() => {
  reciepeView.addHandlerRender(controlReciepe)
})()
