import View from "./Views"
import icons from "url:../../img/icons.svg"

class PaginationView extends View {
  _parentElement = document.querySelector(`.pagination`)

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", () => {
      const btn = event.target.closest(`.btn--inline`)
      if (!btn) return

      handler(+btn.dataset.goto)
    })
  }

  _generateMarkup() {
    const currentPage = this._data.page
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)

    /* 
    <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page 1</span>
    </button>
    <button class="btn--inline pagination__btn--next">
      <span>Page 3</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    */

    if (currentPage === 1 && numPages > 1) {
      return `
      <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `
    }

    if (currentPage === numPages && numPages > 1) {
      return `
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
      `
    }

    if (currentPage < numPages) {
      return `
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
      <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `
    }

    return ""
  }
}

export default new PaginationView()
