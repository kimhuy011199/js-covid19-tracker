import View from "./View.js";

class GlobalView extends View {
  _parentElement = document.querySelector(".global");
  _errorMessage = "Request took too long!";

  _generateMarkup() {
    return `
    <div class="global__header">
      <div class="global__box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="global__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <p class="global__heading">Global</p>
      </div>
      <div class="global__box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="global__icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p class="global__heading">Last update: ${this._data.date}</p>
      </div>
    </div>
    <div class="global__statistic-container">
      <div class="global__statistic">
        <p class="global__title">New Confirmed:</p>
        <p class="global__number">${this._data.global.newConfirmed}</p>
      </div>
      <div class="global__statistic">
        <p class="global__title">New Deaths:</p>
        <p class="global__number">${this._data.global.newDeaths}</p>
      </div>
      <div class="global__statistic">
        <p class="global__title">New Recovered:</p>
        <p class="global__number">${this._data.global.newRecovered}</p>
      </div>
      <div class="global__statistic">
        <p class="global__title">Total Confirmed:</p>
        <p class="global__number">${this._data.global.totalConfirmed}</p>
      </div>
      <div class="global__statistic">
        <p class="global__title">Total Deaths:</p>
        <p class="global__number">${this._data.global.totalDeaths}</p>
      </div>
      <div class="global__statistic">
        <p class="global__title">Total Recovered:</p>
        <p class="global__number">${this._data.global.totalRecovered}</p>
      </div>
    </div>
    `;
  }
}

export default new GlobalView();
