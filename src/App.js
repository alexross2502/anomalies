import { useEffect, useState } from "react";
import { LineGraph } from "./components/chartjs/Line";
import papaparseHandler from "./utils/papaparseHandler";
import usePaparseLogger from "./hooks/usePaparseLogger";
import useChartjsLogger from "./hooks/useChartjsLogger";

function App() {
  const [graphData, setGraphData] = useState({});

  const [CSVData, setCSVData] = useState([]);

  //usePaparseLogger(CSVData);
  useChartjsLogger(CSVData, setGraphData);

  //////////////////////////////////////////////////////////////////////////

  // Функция для вычисления среднего значения массива чисел
  const mean = (arr) => {
    return arr.reduce((acc, val) => acc + val, 0) / arr.length;
  };

  // Функция для вычисления медианы массива чисел
  const median = (arr) => {
    const sorted = arr.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
  };

  // Функция для вычисления стандартного отклонения массива чисел
  const standardDeviation = (arr) => {
    const avg = mean(arr);
    const diffs = arr.map((val) => Math.pow(val - avg, 2));
    const variance = mean(diffs);
    return Math.sqrt(variance);
  };

  // Функция для обнаружения аномалий на основе медианы и стандартного отклонения
  const detectAnomalies = (registrations, payments) => {
    const medianPayment = median(payments);
    const stdDevPayment = standardDeviation(payments);

    const anomalies = payments.map((payment) => {
      if (Math.abs(payment - medianPayment) > 2 * stdDevPayment) {
        return true; // Отмечаем как аномалию
      }
      return false; // Не аномалия
    });

    return anomalies;
  };

  // Пример данных
  const registrations = [100, 120, 80, 90, 110];
  const payments = [50, 60, 40, 45, 10];

  // Обнаружение аномалий
  const anomalies = detectAnomalies(registrations, payments);

  // Вывод результатов
  payments.forEach((payment, index) => {
    if (anomalies[index]) {
      console.log(`Payment: ${payment} is an anomaly`);
    } else {
      console.log(`Payment: ${payment} is normal`);
    }
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => papaparseHandler(e, setCSVData)}
      ></input>
      {Object.keys(graphData).length > 0 && <LineGraph graphData={graphData} />}
    </div>
  );
}

export default App;
