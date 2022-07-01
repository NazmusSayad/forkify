import { API_URL } from "./config"
import { getJSON } from "./helper"

export const state = {}

export const loadReciepe = async (id) => {
  try {
    const data = await getJSON(API_URL + id)

    const { recipe } = data.data
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    }

    console.log(state.recipe)
  } catch (err) {
    alert(err)
  }
}
