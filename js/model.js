import { API_URL, TIMEOUT_SEC } from "./config.js";
import {
  timeout,
  getUrl50Days,
  formatNumberData,
  formatDateTimeData,
} from "./helper.js";

export const state = {
  global: {},
  countries: [],
  date: new Date(),
  currentCountry: {},
  chart: [],
};

export const getSummary = async function () {
  try {
    const fetchData = fetch(`${API_URL}summary`);
    const res = await Promise.race([fetchData, timeout(TIMEOUT_SEC)]);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    const data = await res.json();

    state.global = formatNumberData(data.Global);
    state.countries = data.Countries;
    state.date = formatDateTimeData(data.Date);
  } catch (err) {
    throw err;
  }
};

export const getCurrentCountry = function (value) {
  try {
    const currentCountry = state.countries.find((c) => c.Slug === value);
    if (!currentCountry) throw new Error("Please choose country");
    state.currentCountry = formatNumberData(currentCountry);
    state.currentCountry.name = currentCountry.Country;
  } catch (err) {
    throw err;
  }
};

export const getChartData = async function (value) {
  try {
    const fetchData = fetch(`${API_URL}${getUrl50Days(value)}`);
    const res = await Promise.race([fetchData, timeout(TIMEOUT_SEC)]);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    const data = await res.json();

    state.chart = data.map((item) => {
      return { date: item.Date.slice(0, 10), cases: item.Cases };
    });
  } catch (err) {
    throw err;
  }
};
