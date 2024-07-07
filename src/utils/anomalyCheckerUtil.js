const anomalyCheckerUtil = (deviation, permissibleDeviation, ratioRegistrationsToEPR) => {
   if(!(ratioRegistrationsToEPR - permissibleDeviation <= deviation && deviation <= ratioRegistrationsToEPR + permissibleDeviation)){
    console.log(deviation, ratioRegistrationsToEPR - permissibleDeviation, ratioRegistrationsToEPR + permissibleDeviation)
   }
    return ratioRegistrationsToEPR - permissibleDeviation <= deviation && deviation <= ratioRegistrationsToEPR + permissibleDeviation
}

export default anomalyCheckerUtil