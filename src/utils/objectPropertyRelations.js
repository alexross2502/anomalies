const objectPropertyRelations = (dataArray, firstProperty, secondProperty) => {
  const relations = [];
  dataArray.forEach((element) => {
    relations.push(Math.abs(element[firstProperty] - element[secondProperty]));
  });
  return relations;
};

export default objectPropertyRelations;
