const anomalyCheckerUtil = (relationsRegistrationsToEPR, permissibleDeviation, ratioRegistrationsToEPR, CSVData, stepDifference) => {
    
   relationsRegistrationsToEPR.forEach((deviation, index)=>{
      console.log(CSVData)
           if(ratioRegistrationsToEPR - permissibleDeviation <= deviation && deviation <= ratioRegistrationsToEPR + permissibleDeviation) {    
              CSVData[index].anomaly = false
           }else{
            CSVData[index].anomaly = true
           }
        })
     
}

export default anomalyCheckerUtil