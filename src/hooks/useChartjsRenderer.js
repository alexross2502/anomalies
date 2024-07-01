import { useMemo } from "react";
import chartjsHandler from "../handlers/chartjsHandler";
import anomalyHandler from "../handlers/anomalyHandler";

const useChartjsRenderer = (CSVData, setGraphData) => {
  useMemo(() => {
    anomalyHandler(CSVData);
    //chartjsHandler(CSVData, setGraphData);
  }, [CSVData]);
};

export default useChartjsRenderer;
