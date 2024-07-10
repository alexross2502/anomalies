const anomalyCheckerUtil = (deviation, permissibleDeviation, ratioRegistrationsToEPR) => {
    //console.log(permissibleDeviation, 'permissibleDeviation')
    return ratioRegistrationsToEPR - permissibleDeviation <= deviation && deviation <= ratioRegistrationsToEPR + permissibleDeviation
}

export default anomalyCheckerUtil