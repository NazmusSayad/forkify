class SearchView {
  #parentElement = document.querySelector(`.search`)

  getQuery() {
    const query = this.#parentElement.querySelector(`.search__field`).value
    this.clearInput()
    return query
  }

  clearInput() {
    this.#parentElement.querySelector(`.search__field`).value = ""
  }

  addHandlerRender(callback) {
    this.#parentElement.addEventListener("submit", () => {
      event.preventDefault()
      callback()
    })
  }
  
  
  
  
  
}

export default new SearchView()
