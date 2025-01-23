// script.js
const barChartCtx = document.getElementById("barChart").getContext("2d");
const lineChartCtx = document.getElementById("lineChart").getContext("2d");

let barChart, lineChart;

// Fetch data from JSON
function fetchData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      setupFilters(data);
      renderCharts(data, "A"); // Default dataset
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Setup filters
function setupFilters(data) {
  const applyFiltersButton = document.getElementById("apply-filters");
  applyFiltersButton.addEventListener("click", () => {
    const dataset = document.getElementById("dataset").value.toUpperCase();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    if (["A", "B", "C", "D", "E", "F"].includes(dataset)) {
      let filteredData = data.filter((item) => item.group === dataset);

      // Apply age filter
      if (age !== "all") {
        filteredData = filteredData.filter((item) => item.age === age);
      }

      // Apply gender filter
      if (gender !== "all") {
        filteredData = filteredData.filter((item) => item.gender === gender);
      }

      // Apply date range filter
      if (startDate && endDate) {
        filteredData = filteredData.filter(
          (item) => new Date(item.date) >= new Date(startDate) && new Date(item.date) <= new Date(endDate)
        );
      }

      renderCharts(filteredData, dataset);
    } else {
      alert("Please enter a valid dataset (A-F).");
    }
  });
}

function setupFilters(data) {
  const applyFiltersButton = document.getElementById("apply-filters");
  applyFiltersButton.addEventListener("click", () => {
    const dataset = document.getElementById("dataset").value.toUpperCase();
    if (["A", "B", "C", "D", "E", "F"].includes(dataset)) {
      renderCharts(data, dataset);
    } else {
      alert("Please enter a valid dataset (A-F).");
    }
  });
}

// Render charts
function renderCharts(data, dataset) {
  const filteredData = data.filter((item) => item.group === dataset);
  renderBarChart(data);
  renderLineChart(filteredData);
}

function renderBarChart(data) {
  const labels = [...new Set(data.map((item) => item.date))];
  const datasets = ["A", "B", "C", "D", "E", "F"].map((group, index) => {
    return {
      label: `Group ${group}`,
      data: labels.map((date) =>
        data.filter((item) => item.date === date && item.group === group).length
      ),
      backgroundColor: `hsl(${index * 60}, 70%, 50%)`,
    };
  });

  if (barChart) barChart.destroy();
  barChart = new Chart(barChartCtx, {
    type: "bar",
    data: { labels, datasets },
    options: { responsive: true },
  });
}

function renderLineChart(data) {
  const labels = [...new Set(data.map((item) => item.date))];
  const values = labels.map((date) =>
    data.filter((item) => item.date === date).reduce((sum, item) => sum + item.value, 0)
  );

  if (lineChart) lineChart.destroy();
  lineChart = new Chart(lineChartCtx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Dataset Values",
          data: values,
          borderColor: "green",
          fill: false,
        },
      ],
    },
    options: { responsive: true },
  });
}

fetchData();
