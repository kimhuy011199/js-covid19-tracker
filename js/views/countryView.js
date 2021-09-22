import View from "./View.js";

class CountryView extends View {
  _parentElement = document.querySelector(".country");
  _errorMessage = "Request took too long!";
  _data;

  _generateMarkup() {
    return `
    <h2 class="country__country-name">${this._data.name.toUpperCase()}</h2>
    <div class="country__statistic">
      <p class="country__title">New Confirmed:</p>
      <p class="country__number">${this._data.newConfirmed}</p>
    </div>
    <div class="country__statistic">
      <p class="country__title">New Deaths:</p>
      <p class="country__number">${this._data.newDeaths}</p>
    </div>
    <div class="country__statistic">
      <p class="country__title">New Recovered:</p>
      <p class="country__number">${this._data.newRecovered}</p>
    </div>
    <div class="country__statistic">
      <p class="country__title">Total Confirmed:</p>
      <p class="country__number">${this._data.totalConfirmed}</p>
    </div>
    <div class="country__statistic">
      <p class="country__title">Total Deaths:</p>
      <p class="country__number">${this._data.totalDeaths}</p>
    </div>
    <div class="country__statistic">
      <p class="country__title">Total Recovered:</p>
      <p class="country__number">${this._data.totalRecovered}</p>
    </div>
    `;
  }
}

export default new CountryView();
