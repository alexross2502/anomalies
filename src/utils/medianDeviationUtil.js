import arraySorterUtil from "./arraySorterUtil";

const medianDeviationUtil = (relationsRegistrationsToEPR) => {   
    arraySorterUtil(relationsRegistrationsToEPR) 
    const arrayMiddle = Math.floor(relationsRegistrationsToEPR.length / 2)
    return relationsRegistrationsToEPR % 2 === 0 ? (relationsRegistrationsToEPR[arrayMiddle - 1] + relationsRegistrationsToEPR[arrayMiddle]) / 2 : relationsRegistrationsToEPR[arrayMiddle]
  };
  
  export default medianDeviationUtil;