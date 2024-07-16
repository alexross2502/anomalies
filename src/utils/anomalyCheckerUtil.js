import stepDifferenceUtil from "./stepDifferenceUtil";

const anomalyCheckerUtil = (relationsRegistrationsToEPR, permissibleDeviation, ratioRegistrationsToEPR, CSVData, medianStepDeviation) => {
    
   relationsRegistrationsToEPR.forEach((deviation, index)=>{  
           if(ratioRegistrationsToEPR - permissibleDeviation <= deviation && deviation <= ratioRegistrationsToEPR + permissibleDeviation) {    
              stepDifferenceUtil(medianStepDeviation, index, CSVData) ? CSVData[index].anomaly = true : CSVData[index].anomaly = false
           }else{
            CSVData[index].anomaly = true
           }
        })
     
}

export default anomalyCheckerUtil