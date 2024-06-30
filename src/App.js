import { useEffect, useState } from "react";
import { LineGraph } from "./components/chartjs/Line";
import papaparseHandler from "./utils/papaparseHandler";
import usePaparseLogger from "./hooks/usePaparseLogger";
import useChartjsLogger from "./hooks/useChartjsLogger";

function App() {
  const [graphData, setGraphData] = useState({});

  const [CSVData, setCSVData] = useState([]);

  //usePaparseLogger(CSVData);
  useChartjsLogger(CSVData, setGraphData);

  return (
    <div className="App">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => papaparseHandler(e, setCSVData)}
      ></input>
      {Object.keys(graphData).length > 0 && <LineGraph graphData={graphData} />}
    </div>
  );
}

export default App;
