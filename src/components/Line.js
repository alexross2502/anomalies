import React from "react";
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
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
          modifierKey: "ctrl",
          speed: 0.1,
        },
        pinch: {
          enabled: true,
        },
        mode: "x",
      },
      pan: {
        enabled: true,
        mode: "x",
        speed: 10,
        threshold: 10,
      },
    },
  },
};

export const LineGraph = ({ graphData }) => {
  return <Line options={options} data={graphData} />;
};
