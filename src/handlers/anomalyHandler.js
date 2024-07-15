import multipliers from "../constants/multipliers";
import anomalyCheckerUtil from "../utils/anomalyCheckerUtil";
import averageDeviationUtil from "../utils/averageDeviationUtil";
import injectionCleanerUtil from "../utils/injectionCleanerUtil";
import medianDeviationUtil from "../utils/medianDeviationUtil";
import objectPropertyReducer from "../utils/objectPropertyReducer";
import objectPropertyRelations from "../utils/objectPropertyRelations";
import stepDifferenceUtil from "../utils/stepDifferenceUtil";

const anomalyHandler = (CSVData) => {
try {
  // Ratio of all registration-EPR pairs
const relationsRegistrationsToEPR  = objectPropertyRelations(CSVData, "registrations", "epr")
console.log(relationsRegistrationsToEPR, 'relationsRegistrationsToEPR')

// Finding the median of deviations to protect the average deviation from sudden surges
const medianDeviation = medianDeviationUtil([...relationsRegistrationsToEPR])
console.log(medianDeviation,'medianDeviation')
//Cleaning the source array from stuffing
 const CSVDataWithoutInjections = injectionCleanerUtil(CSVData, medianDeviation, relationsRegistrationsToEPR)
console.log(CSVDataWithoutInjections, 'CSVDataWithoutInjections')
//Finding the ratio of registrations to EPR without stuffing
const relationsRegistrationsToEPRWithoutInjections = objectPropertyRelations(CSVDataWithoutInjections, "registrations", "epr")
  // Total number of registrations
  const totalRegistrations = objectPropertyReducer(CSVDataWithoutInjections, "registrations");
  // Total number of EPR
  const totalEPR = objectPropertyReducer(CSVDataWithoutInjections, "epr");
  // General ratio of registrations to EPR
  const ratioRegistrationsToEPR = totalRegistrations / totalEPR
  console.log(ratioRegistrationsToEPR, 'ratioRegistrationsToEPR')
  
  // Average delta
  console.log(relationsRegistrationsToEPRWithoutInjections)
  const averageDeviation = averageDeviationUtil(ratioRegistrationsToEPR, relationsRegistrationsToEPRWithoutInjections)
  console.log(averageDeviation, 'averageDeviation')
  // Permissible deviation from the average
  const permissibleDeviation = averageDeviation * multipliers.average
  console.log(permissibleDeviation, 'permissibleDeviation')
  // Checking all points for anomalies and marking suitable ones
  // relationsRegistrationsToEPR.forEach((el, index)=>{
  //    if(!anomalyCheckerUtil(el, permissibleDeviation, ratioRegistrationsToEPR)) {
      
  //       CSVData[index].anomaly = true
  //    }
  // })
  anomalyCheckerUtil(relationsRegistrationsToEPR, permissibleDeviation, ratioRegistrationsToEPR, CSVData)

  //
const stepDifference = stepDifferenceUtil(CSVData)
console.log(CSVData, 'stepDifference')

return CSVData
} catch (error) {
  console.log(error)
}

  
};

export default anomalyHandler;
