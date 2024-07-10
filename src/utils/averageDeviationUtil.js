const averageDeviationUtil = (averageRatio, ratioArray) => {
  return ratioArray.reduce((acc, val) => acc + Math.abs(averageRatio - val), 0) / ratioArray.length;
    
  };
  
  export default averageDeviationUtil;