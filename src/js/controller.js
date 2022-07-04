import * as model from "./model.js"
import reciepeview from "./views/reciepeView.js"
import searchview from "./views/searchView.js"
import resultsview from "./views/resultsView.js"
import paginationview from "./views/paginationView.js"

if (module.hot) {
  module.hot.accept()
}

const controlReciepe = async () => {
  try {
    const id = location.hash.slice(1)
    if (!id) return

    reciepeview.renderSpinner()
    await model.loadReciepe(id)

    reciepeview.render(model.state.recipe)
  } catch (err) {
    reciepeview.renderError()
  }
}

const controlSearchResult = async () => {
  try {
    resultsview.renderSpinner()

    const query = searchview.getQuery()
    if (!query) return

    await model.loadSearchResult(query)

    resultsview.render(model.getSearchResultsPage(1))
    paginationview.render(model.state.search)
  } catch (error) {
    console.log(error)
  }
}

const controlPagination = (goTo) => {
  resultsview.render(model.getSearchResultsPage(goTo))
  paginationview.render(model.state.search)
}
// Init()
;(() => {
  reciepeview.addHandlerRender(controlReciepe)
  searchview.addHandlerRender(controlSearchResult)
  paginationview.addHandlerClick(controlPagination)
})()
