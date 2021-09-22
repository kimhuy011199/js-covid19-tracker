export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getUrl50Days = function (country) {
  const formatedToday = new Date().toISOString().slice(0, 10) + `T00:00:00Z`;
  const formatedLast50Days =
    new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 50)
      .toISOString()
      .slice(0, 10) + `T00:00:00Z`;
  return `total/country/${country}/status/confirmed?from=${formatedLast50Days}&to=${formatedToday}`;
};

export const formatNumberData = function (data) {
  const locales = navigator.language;
  const options = {};
  return {
    newConfirmed: new Intl.NumberFormat(locales, options).format(
      data.NewConfirmed
    ),
    newDeaths: new Intl.NumberFormat(locales, options).format(data.NewDeaths),
    newRecovered: new Intl.NumberFormat(locales, options).format(
      data.NewRecovered
    ),
    totalConfirmed: new Intl.NumberFormat(locales, options).format(
      data.TotalConfirmed
    ),
    totalDeaths: new Intl.NumberFormat(locales, options).format(
      data.TotalDeaths
    ),
    totalRecovered: new Intl.NumberFormat(locales, options).format(
      data.TotalRecovered
    ),
  };
};

export const formatDateTimeData = function (data) {
  const locales = navigator.language;
  const options = {};
  return new Intl.DateTimeFormat(locales, options).format(new Date(data));
};
