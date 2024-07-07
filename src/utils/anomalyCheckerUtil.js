const anomalyCheckerUtil = (deviation, permissibleDeviation, ratioRegistrationsToEPR) => {
    console.log(deviation, ratioRegistrationsToEPR - permissibleDeviation <= deviation && deviation <= ratioRegistrationsToEPR + permissibleDeviation)
    return ratioRegistrationsToEPR - permissibleDeviation <= deviation && deviation <= ratioRegistrationsToEPR + permissibleDeviation
}

export default anomalyCheckerUtil