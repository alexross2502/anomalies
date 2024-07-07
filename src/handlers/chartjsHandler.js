const chartjsHandler = (CSVDataWithAnomalies, setGraphData) => {
  const labels = CSVDataWithAnomalies.map((el) => el.time);
  const registrations = CSVDataWithAnomalies.map((el) => el.registrations);
  const epr = CSVDataWithAnomalies.map((el) => parseFloat(el.epr));
 // console.log(CSVDataWithAnomalies)

  setGraphData({
    labels: labels,
    datasets: [
      
      {
        label: "EPR",
        data: epr,
        borderColor: "yellow",
        backgroundColor:'gray',
        pointBackgroundColor: epr.map((el, index) => {
          return CSVDataWithAnomalies[index].anomaly ? 'red' : 'gray'
        }),
        
        
      },
      {
        label: "Registrations",
        data: registrations,
        borderColor: "green",
        backgroundColor:'green',
        pointBackgroundColor: 'green',
      },
    ],
  });
};

export default chartjsHandler;
