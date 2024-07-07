import multipliers from "../constants/multipliers";

const injectionCleanerUtil = (CSVData, medianDeviation, relationsRegistrationsToEPR) => {
    console.log(medianDeviation, relationsRegistrationsToEPR)
   const CSVDataWithoutInjections = CSVData.filter((el, index)=>{
        return relationsRegistrationsToEPR[index] > medianDeviation / multipliers.median && relationsRegistrationsToEPR[index] < medianDeviation * multipliers.median
   })
   console.log(CSVData)
   console.log(relationsRegistrationsToEPR)
   return CSVDataWithoutInjections
  };
  
  export default injectionCleanerUtil;