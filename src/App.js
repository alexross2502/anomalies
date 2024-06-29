import Papa from "papaparse";
import { useState } from "react";
import { LineGraph } from "./components/chartjs/Line";

function App() {
  const [graphData, setGraphData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: "Dataset",
        data: [3000, 4000, 5000, 9000, 6000, 7000, 8000],
        borderColor: "green", // Default color for the whole line
        backgroundColor: "rgba(75,192,192,0.4)",
        pointBackgroundColor: Array(7).fill("green"), // Initialize all points to green
      },
    ],
  });
  const [data, setData] = useState([]);
  /////CSV import
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        //setData(results.data);
        console.log(results.data);
      },
    });
  };
  /////chartjs

  return (
    <div className="App">
      <input type="file" accept=".csv" onChange={handleFileUpload}></input>
      <LineGraph graphData={graphData} />
    </div>
  );
}

export default App;
