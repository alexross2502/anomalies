const chartjsHandler = (CSVData, setGraphData) => {
  const labels = CSVData.map((el) => el.Time);
  const registrations = CSVData.map((el) => el.Registrations);
  const epr = CSVData.map((el) => parseFloat(el.EPR.replace(",", ".")));
  console.log(labels);
  console.log(registrations);
  console.log(epr);
  setGraphData({
    labels: labels,
    datasets: [
      {
        label: "Registrations",
        data: registrations,
        borderColor: "green", // Цвет линии
        backgroundColor: "rgba(75,192,192,0.4)",
        pointBackgroundColor: registrations.map(() => "green"), // Разные цвета точек для регистраций
      },
      {
        label: "EPR",
        data: epr,
        borderColor: "yellow", // Цвет линии
        backgroundColor: "rgba(255, 206, 86, 0.4)",
        pointBackgroundColor: epr.map(() => "yellow"), // Разные цвета точек для EPR
      },
    ],
  });
};

export default chartjsHandler;
