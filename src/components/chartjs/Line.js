import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineGraph = () => {
  const [lineChartData, setLineChartData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: "first",
        data: [3000, 4000, [5000, 6000], 9000],
        borderColor: "green",
      },
    ],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLineChartData({
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: "first",
            data: [3000, 4000, 5000, 9000],
            borderColor: "black",
          },
        ],
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const options = {};

  return <Line options={options} data={lineChartData} />;
};
