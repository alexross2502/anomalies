const objectPropertyReducer = (arr, property) => {
  const sum = arr.reduce((acc, obj) => acc + obj[property], 0);
  return sum;
};

export default objectPropertyReducer;
