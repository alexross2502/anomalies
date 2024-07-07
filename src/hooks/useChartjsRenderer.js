import { useMemo } from "react";
import chartjsHandler from "../handlers/chartjsHandler";
import anomalyHandler from "../handlers/anomalyHandler";

const useChartjsRenderer = (CSVData, setGraphData) => {
  useMemo(async () => {
    const CSVDataWithAnomalies = await anomalyHandler(CSVData);
    chartjsHandler(CSVDataWithAnomalies, setGraphData);
  }, [CSVData]);
};

export default useChartjsRenderer;
