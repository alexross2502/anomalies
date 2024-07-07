const objectPropertyRelations = (arr, firstProperty, secondProperty) => {
    const relations = []
    arr.forEach(element => {
      relations.push(element[firstProperty] / element[secondProperty])
    });
    return relations
  };
  
  export default objectPropertyRelations;
  