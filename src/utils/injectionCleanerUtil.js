import multipliers from "../constants/multipliers";

const injectionCleanerUtil = (
  CSVData,
  medianDeviation,
  relationsRegistrationsToEPR
) => {
  return CSVData.filter((el, index) => {
    return (
      relationsRegistrationsToEPR[index] >
        medianDeviation / multipliers.median &&
      relationsRegistrationsToEPR[index] < medianDeviation * multipliers.median
    );
  });
};

export default injectionCleanerUtil;
