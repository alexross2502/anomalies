const averageDeviationUtil = (averageRatio, ratioArray) => {
    const averageDelta = ratioArray.reduce((acc, val) => acc + Math.abs(averageRatio - val), 0) / ratioArray.length;
    return averageDelta
  };
  
  export default averageDeviationUtil;