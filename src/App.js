import { useState } from "react";
import { LineGraph } from "./components/Line";
import useChartjsRenderer from "./hooks/useChartjsRenderer";
import FileInput from "./components/FileInput";
import "./index.css";

function App() {
  const [graphData, setGraphData] = useState({});
  const [CSVData, setCSVData] = useState([]);

  useChartjsRenderer(CSVData, setGraphData);

  return (
    <div className="App">
      <FileInput setCSVData={setCSVData} />
      {Object.keys(graphData).length > 0 && (
        <div className="chart-container">
          <LineGraph graphData={graphData} />
        </div>
      )}
    </div>
  );
}

export default App;
