import View from "./View.js";

class ChartView extends View {
  _parentElement = document.querySelector(".chart");
  _errorMessage = "Could not draw chart";
  _chartE;

  render(data) {
    this._clear();
    this._generateChartElement();
    this._data = data;
    this._drawChartjs();
  }

  _generateChartElement() {
    let canvas = document.createElement("canvas");
    canvas.setAttribute("id", "chart");
    canvas.setAttribute("width", "770px");
    canvas.setAttribute("height", "380px");
    this._parentElement.append(canvas);
    this._chartE = document.querySelector("#chart");
  }

  _drawChartjs() {
    const type = "line";
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            font: {
              family: "Lexend",
            },
          },
        },
        x: {
          ticks: {
            display: false,
          },
        },
      },
      parsing: {
        xAxisKey: "date",
        yAxisKey: "cases",
      },
      plugins: {
        title: {
          display: true,
          text: "All cases in last 50 days",
          font: {
            family: "Lexend",
            size: 16,
          },
          color: "#111827",
        },
        legend: {
          labels: {
            font: {
              family: "Lexend",
            },
          },
        },
      },
    };
    const data = {
      datasets: [
        {
          label: "cases",
          data: this._data,
          fill: true,
          borderColor: "#25bfb1",
          tension: 0,
        },
      ],
    };
    const chart = new Chart(this._chartE, {
      type,
      data,
      options,
    });
  }
}

export default new ChartView();
