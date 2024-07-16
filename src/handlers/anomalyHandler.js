import multipliers from "../constants/multipliers";
import anomalyCheckerUtil from "../utils/anomalyCheckerUtil";
import averageDeviationUtil from "../utils/averageDeviationUtil";
import injectionCleanerUtil from "../utils/injectionCleanerUtil";
import medianDeviationUtil from "../utils/medianDeviationUtil";
import medianStepDeviationUtil from "../utils/medianStepDeviationUtil";
import objectPropertyReducer from "../utils/objectPropertyReducer";
import objectPropertyRelations from "../utils/objectPropertyRelations";

const anomalyHandler = (CSVData) => {
  try {
    // Ratio of all registration-EPR pairs
    const relationsRegistrationsToEPR = objectPropertyRelations(
      CSVData,
      "registrations",
      "epr"
    );

    // Finding the median of deviations to protect the average deviation from sudden surges
    const medianDeviation = medianDeviationUtil([
      ...relationsRegistrationsToEPR,
    ]);

    //Cleaning the source array from stuffing
    const CSVDataWithoutInjections = injectionCleanerUtil(
      CSVData,
      medianDeviation,
      relationsRegistrationsToEPR
    );

    //Finding the ratio of registrations to EPR without stuffing
    const relationsRegistrationsToEPRWithoutInjections =
      objectPropertyRelations(CSVDataWithoutInjections, "registrations", "epr");
    // Total number of registrations
    const totalRegistrations = objectPropertyReducer(
      CSVDataWithoutInjections,
      "registrations"
    );

    // Total number of EPR
    const totalEPR = objectPropertyReducer(CSVDataWithoutInjections, "epr");

    // General ratio of registrations to EPR
    const ratioRegistrationsToEPR = totalRegistrations / totalEPR;

    // Average delta
    const averageDeviation = averageDeviationUtil(
      ratioRegistrationsToEPR,
      relationsRegistrationsToEPRWithoutInjections
    );

    // Permissible deviation from the average
    const permissibleDeviation = averageDeviation * multipliers.average;

    // Median change in EPR with growth and fall of registrations
    const medianStepDeviation = medianStepDeviationUtil([
      ...CSVDataWithoutInjections,
    ]);

    // Checking all points for anomalies and marking suitable ones
    anomalyCheckerUtil(
      relationsRegistrationsToEPR,
      permissibleDeviation,
      ratioRegistrationsToEPR,
      CSVData,
      medianStepDeviation
    );

    return CSVData;
  } catch (error) {
    console.log(error);
  }
};

export default anomalyHandler;
