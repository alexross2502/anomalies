import arraySorterUtil from "./arraySorterUtil";

const medianDeviationUtil = (relationsRegistrationsToEPR) => {   
    arraySorterUtil(relationsRegistrationsToEPR) 
    //arraySorterUtil(relationsRegistrationsToEPRPercent) 
    const arrayMiddle = Math.floor(relationsRegistrationsToEPR.length / 2)
    //const percentMedian = relationsRegistrationsToEPRPercent % 2 === 0 ? (relationsRegistrationsToEPRPercent[arrayMiddle - 1] + relationsRegistrationsToEPRPercent[arrayMiddle]) / 2 : relationsRegistrationsToEPRPercent[arrayMiddle]
    return relationsRegistrationsToEPR % 2 === 0 ? (relationsRegistrationsToEPR[arrayMiddle - 1] + relationsRegistrationsToEPR[arrayMiddle]) / 2 : relationsRegistrationsToEPR[arrayMiddle]
    // return ({
    //     percentMedian,
    //     median
    // }) 
  };
  
  export default medianDeviationUtil;