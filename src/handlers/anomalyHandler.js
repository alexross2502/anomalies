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
console.log(relationsRegistrationsToEPR, 'relationsRegistrationsToEPR')
// Finding the median of deviations to protect the average deviation from sudden surges
const medianDeviation = medianDeviationUtil([...relationsRegistrationsToEPR])
// Adding a median to clear average deviations from the influence of sudden outliers
 const CSVDataWithoutInjections = injectionCleanerUtil(CSVData, medianDeviation, relationsRegistrationsToEPR)
 //console.log(CSVData)
 //console.log(CSVDataWithoutInjections)
  // Total number of registrations
  const totalRegistrations = objectPropertyReducer(CSVDataWithoutInjections, "registrations");
  //console.log(totalRegistrations)
  // Total number of EPR
  const totalEPR = objectPropertyReducer(CSVDataWithoutInjections, "epr");
  //console.log(totalEPR)
  // General ratio of registrations to EPR
  const ratioRegistrationsToEPR = totalRegistrations / totalEPR
  console.log(ratioRegistrationsToEPR, 'ratioRegistrationsToEPR')
  // Average delta
  const averageDeviation = averageDeviationUtil(ratioRegistrationsToEPR, objectPropertyRelations(CSVDataWithoutInjections, "registrations", "epr"))
  console.log(averageDeviation, 'averageDeviation')
  // Permissible deviation from the average
  const permissibleDeviation = averageDeviation * multipliers.average
  console.log(permissibleDeviation, 'permissibleDeviation')
  // Checking all points for anomalies and marking suitable ones
  relationsRegistrationsToEPR.forEach((el, index)=>{
     if(!anomalyCheckerUtil(el, permissibleDeviation, ratioRegistrationsToEPR)) {
        CSVData[index].anomaly = true
     }
  })

return CSVData
  
};

export default anomalyHandler;
