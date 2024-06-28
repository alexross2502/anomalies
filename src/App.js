import Papa from "papaparse";
import { useState } from "react";
import { LineGraph } from "./components/chartjs/Line";

function App() {
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
  const lineChartData = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: "first",
        data: [3000, 4000, 5000, 6000],
        borderColor: "green",
      },
    ],
  };

  return (
    <div className="App">
      <input type="file" accept=".csv" onChange={handleFileUpload}></input>
      <LineGraph />
    </div>
  );
}

export default App;
