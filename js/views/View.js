export default class View {
  _data;

  render(data) {
    this._clear();
    this._data = data;
    this._parentElement.insertAdjacentHTML(
      "afterbegin",
      this._generateMarkup()
    );
  }

  renderSpinner() {
    this._clear();
    const markup = `
      <div class="spinner">
        <img src="../../img/spinner.svg" alt="Loading">
      </div>
    `;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(errMessage = this._errorMessage) {
    this._clear();
    const markup = `
      <div class="error">
        <svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p>${errMessage}</p>
      </div>
    `;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
