const chartjsHandler = (CSVData, setGraphData) => {
  const labels = CSVData.map((el) => el.Time);
  const registrations = CSVData.map((el) => el.Registrations);
  //const epr = CSVData.map((el) => parseFloat(el.EPR.replace(",", ".")));
  const epr = CSVData.map((el) => el.EPR);
  setGraphData({
    labels: labels,
    datasets: [
      {
        label: "Registrations",
        data: registrations,
        borderColor: "green",
        backgroundColor: "rgba(75,192,192,0.4)",
        pointBackgroundColor: registrations.map(() => "green"),
      },
      {
        label: "EPR",
        data: epr,
        borderColor: "yellow",
        backgroundColor: "rgba(255, 206, 86, 0.4)",
        pointBackgroundColor: epr.map(() => "yellow"),
      },
    ],
  });
};

export default chartjsHandler;
