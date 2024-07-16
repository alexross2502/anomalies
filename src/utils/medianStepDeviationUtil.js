import medianDeviationUtil from "./medianDeviationUtil";

const medianStepDeviationUtil = (CSVData) => {
  const arrayWithIncreasing = [];
  const arrayWithDecreasing = [];

  for (let i = 0; i < CSVData.length - 1; i++) {
    const eprDifference = CSVData[i + 1].epr - CSVData[i].epr;
    const registrationsDifference = Math.abs(
      CSVData[i + 1].registrations - CSVData[i].registrations
    );
    const stepDeviation = eprDifference / registrationsDifference || 1;

    if (CSVData[i + 1].registrations - CSVData[i].registrations >= 0) {
      arrayWithIncreasing.push(stepDeviation);
    } else {
      arrayWithDecreasing.push(stepDeviation);
    }
  }

  return {
    medianWithIncreasing: medianDeviationUtil(arrayWithIncreasing) || 0.1,
    medianWithDecreasing: medianDeviationUtil(arrayWithDecreasing) || 0.1,
  };
};

export default medianStepDeviationUtil;
