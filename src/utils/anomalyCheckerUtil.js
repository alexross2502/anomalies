const anomalyCheckerUtil = (relationsRegistrationsToEPR, permissibleDeviation, ratioRegistrationsToEPR, CSVData, stepDifference) => {
    relationsRegistrationsToEPR.forEach((deviation, index)=>{
           if(ratioRegistrationsToEPR - permissibleDeviation <= deviation && deviation <= ratioRegistrationsToEPR + permissibleDeviation) {    
              CSVData[index].anomaly = false
           }else{
            CSVData[index].anomaly = true
           }
        })
     
}

export default anomalyCheckerUtil