import { API_URL, RESULTS_PER_PAGE } from "./config"
import { getJSON } from "./helper"

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RESULTS_PER_PAGE,
  },
}
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza

export const loadReciepe = async (id) => {
  try {
    const data = await getJSON(API_URL + "/" + id)

    const { recipe } = data.data
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    }

    console.log(state.recipe)
  } catch (err) {
    throw err
  }
}

export const loadSearchResult = async (query) => {
  try {
    state.search.query = query
    const data = await getJSON(API_URL + "?search=" + query)

    state.search.results = data.data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      }
    })
  } catch (error) {
    throw error
  }
}

export const getSearchResultsPage = (page = state.search.page) => {
  state.search.page = page

  const start = (page - 1) * RESULTS_PER_PAGE
  const end = page * RESULTS_PER_PAGE

  return state.search.results.slice(start, end)
}
