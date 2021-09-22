import * as model from "./model.js";
import globalView from "./views/globalView.js";
import searchView from "./views/searchView.js";
import countryView from "./views/countryView.js";
import chartView from "./views/chartView.js";

const controlSummary = async function () {
  try {
    // 1. Render spinner
    globalView.renderSpinner();

    // 2. Load summary data
    await model.getSummary();

    // 3. Render global view
    globalView.render(model.state);

    // 4. Render search view
    searchView.render(model.state.countries);
  } catch (err) {
    globalView.renderError();
    console.log(err);
  }
};

const controlSearch = async function (value) {
  try {
    // 1. Render spinner
    countryView.renderSpinner();
    chartView.renderSpinner();

    // 2. Load current country data
    model.getCurrentCountry(value);

    // 3. Render current country data
    countryView.render(model.state.currentCountry);

    // 4. Load chart data
    await model.getChartData(value);

    // 5. Render chart
    chartView.render(model.state.chart);
  } catch (err) {
    chartView.renderError(err);
    countryView.renderError(err);
    console.log(err);
  }
};

const init = function () {
  controlSummary();
  searchView.addHandlerCountry(controlSearch);
};

init();
