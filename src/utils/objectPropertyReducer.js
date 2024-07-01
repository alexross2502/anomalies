const objectPropertyReducer = (arr, property) => {
  console.log(arr);
  const sum = arr.reduce((acc, obj) => acc + obj[property], 0);
  return sum / arr.length;
};

export default objectPropertyReducer;
