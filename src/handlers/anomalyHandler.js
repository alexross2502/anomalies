import multipliers from "../constants/multipliers";
import anomalyCheckerUtil from "../utils/anomalyCheckerUtil";
import averageDeviationUtil from "../utils/averageDeviationUtil";
import injectionCleanerUtil from "../utils/injectionCleanerUtil";
import medianDeviationUtil from "../utils/medianDeviationUtil";
import objectPropertyReducer from "../utils/objectPropertyReducer";
import objectPropertyRelations from "../utils/objectPropertyRelations";

const anomalyHandler = (CSVData) => {

// Ratio of all registration-EPR pairs
const relationsRegistrationsToEPR = objectPropertyRelations(CSVData, "registrations", "epr")
// Finding the median of deviations to protect the average deviation from sudden surges
const medianDeviation = medianDeviationUtil([...relationsRegistrationsToEPR])
//
 const CSVDataWithoutInjections = injectionCleanerUtil(CSVData, medianDeviation, relationsRegistrationsToEPR)
 console.log(CSVData)
 console.log(CSVDataWithoutInjections)
  // Total number of registrations
  const totalRegistrations = objectPropertyReducer(CSVDataWithoutInjections, "registrations");
  // Total number of EPR
  const totalEPR = objectPropertyReducer(CSVDataWithoutInjections, "epr");
  // General ratio of registrations to EPR
  const ratioRegistrationsToEPR = totalRegistrations / totalEPR
  
  // Average delta
  const averageDeviation = averageDeviationUtil(ratioRegistrationsToEPR, relationsRegistrationsToEPR)
  // Permissible deviation from the average
  const permissibleDeviation = averageDeviation * multipliers.average
  // Checking all points for anomalies and marking suitable ones
  relationsRegistrationsToEPR.forEach((el, index)=>{
     if(!anomalyCheckerUtil(el, permissibleDeviation, ratioRegistrationsToEPR)) {
        CSVData[index].anomaly = true
     }
  })

return CSVData
  
};

export default anomalyHandler;
