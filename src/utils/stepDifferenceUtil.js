import Multipliers from "../constants/multipliers";

const stepDifferenceUtil = (medianStepDeviation, index, CSVData) => {
  try {
    let previousNormalElement = null;

    for (let i = index - 1; i >= 0; i--) {
      if (CSVData[i].anomaly === false) {
        previousNormalElement = CSVData[i];
        break;
      }
    }

    if (previousNormalElement === null) {
      return false;
    }

    const eprDifference = CSVData[index].epr - previousNormalElement.epr;
    const registrationsDifference =
      CSVData[index].registrations - previousNormalElement.registrations;
    console.log(medianStepDeviation)

    if (registrationsDifference > 0) {
      return !(
        medianStepDeviation.medianWithIncreasing -
          medianStepDeviation.medianWithIncreasing * Multipliers.step <=
          eprDifference / registrationsDifference &&
        eprDifference / registrationsDifference <=
          medianStepDeviation.medianWithIncreasing +
            medianStepDeviation.medianWithIncreasing * Multipliers.step
      );
    }
    if (registrationsDifference < 0) {
      return !(
        medianStepDeviation.medianWithDecreasing -
          medianStepDeviation.medianWithDecreasing * Multipliers.step <=
          eprDifference / Math.abs(registrationsDifference) &&
        eprDifference / Math.abs(registrationsDifference) <=
          medianStepDeviation.medianWithDecreasing +
            medianStepDeviation.medianWithDecreasing * Multipliers.step
      );
    }
    if (registrationsDifference === 0) {
      return !(
        medianStepDeviation.medianWithIncreasing -
          medianStepDeviation.medianWithIncreasing * Multipliers.step <=
          eprDifference &&
        eprDifference <=
          medianStepDeviation.medianWithIncreasing +
            medianStepDeviation.medianWithIncreasing * Multipliers.step
      );
    }
  } catch (error) {
    return false;
  }
};

export default stepDifferenceUtil;
