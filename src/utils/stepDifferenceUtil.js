const stepDifferenceUtil = (CSVData) => {
  const stepDifference = {
    registrations:[0],
    epr:[0]
  }
   for(let i = 1; i < CSVData.length; i++){
    stepDifference.registrations.push(Math.abs(CSVData[i].registrations - CSVData[i-1].registrations))
    stepDifference.epr.push(Math.abs(CSVData[i].epr - CSVData[i-1].epr))
   }
   return stepDifference
  };
  
  export default stepDifferenceUtil;