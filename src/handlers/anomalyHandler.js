import anomalyCheckerUtil from "../utils/anomalyCheckerUtil";
import averageDeviationUtil from "../utils/averageDeviationUtil";
import objectPropertyReducer from "../utils/objectPropertyReducer";
import objectPropertyRelations from "../utils/objectPropertyRelations";

const anomalyHandler = (CSVData) => {
  const multiplier = 3
  // Total number of registrations
  const totalRegistrations = objectPropertyReducer(CSVData, "registrations");
  // Total number of EPR
  const totalEPR = objectPropertyReducer(CSVData, "epr");
  // General ratio of registrations to EPR
  const ratioRegistrationsToEPR = totalRegistrations / totalEPR
  // Ratio of all registration-EPR pairs
  const relationsRegistrationsToEPR = objectPropertyRelations(CSVData, "registrations", "epr")
  // Average delta
  const averageDeviation = averageDeviationUtil(ratioRegistrationsToEPR, relationsRegistrationsToEPR)
  // Permissible deviation from the average
  const permissibleDeviation = averageDeviation * multiplier
  // Checking all points for anomalies and marking suitable ones
  relationsRegistrationsToEPR.forEach((el)=>{
    
     anomalyCheckerUtil(el, permissibleDeviation, ratioRegistrationsToEPR) 
  })


  
};

export default anomalyHandler;
