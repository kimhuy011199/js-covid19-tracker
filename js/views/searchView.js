import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".search__select");

  addHandlerCountry(handler) {
    this._parentElement.addEventListener("change", function (e) {
      handler(this.value);
    });
  }

  _generateMarkup() {
    return (
      `<option value="blank">Choose country</option>` +
      this._data
        .map(
          (country) =>
            `<option value="${country.Slug}">${country.Country}</option>`
        )
        .join("")
    );
  }
}

export default new SearchView();
