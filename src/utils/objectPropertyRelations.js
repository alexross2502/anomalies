const objectPropertyRelations = (dataArray, firstProperty, secondProperty) => {
    const relations = {
      percentageСhange : [],
      numericalСhange : []
    }
    dataArray.forEach(element => {
      relations.percentageСhange.push(element[firstProperty] / element[secondProperty])
      relations.numericalСhange.push(Math.abs(element[firstProperty] - element[secondProperty]))
    });
    return relations
  };
  
  export default objectPropertyRelations;
  