import View from "./Views"
import icons from "url:../../img/icons.svg"

class ResultsView extends View {
  _parentElement = document.querySelector(`.results`)
  _error = "We Coudn't find the recipe"
  _successMsg = "We Coudn't find the recipe"

  _generateMarkup() {
    return this._data.map(this._generateMakUpPreview).join("")
  }

  _generateMakUpPreview(reciepe) {
    return `
    <li class="preview">
      <a class="preview__link" href="#${reciepe.id}">
        <figure class="preview__fig">
          <img src="${reciepe.image}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${reciepe.title}</h4>
          <p class="preview__publisher">${reciepe.publisher}</p>
        </div>
      </a>
    </li>
    `
  }
}

export default new ResultsView()
