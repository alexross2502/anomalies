import Papa from "papaparse";

const papaparseHandler = (e, setCSVData) => {
  const file = e.target.files[0];
  Papa.parse(file, {
    // delimiter: ",",
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim(),
    complete: (result) => {
      setCSVData(result.data);
    },
    error: (error) => {
      console.error(error.message);
    },
  });
};

export default papaparseHandler;
