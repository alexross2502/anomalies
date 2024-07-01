import objectPropertyReducer from "../utils/objectPropertyReducer";

const anomalyHandler = (CSVData) => {
  const test = objectPropertyReducer(CSVData, "registrations");
  console.log(test);
};

export default anomalyHandler;
