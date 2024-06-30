import { useMemo } from "react";
import chartjsHandler from "../utils/chartjsHandler";

const useChartjsLogger = (CSVData, setGraphData) => {
  useMemo(() => {
    chartjsHandler(CSVData, setGraphData);
  }, [CSVData]);
};

export default useChartjsLogger;
