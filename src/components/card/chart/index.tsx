import React from "react";
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

import { Line } from "react-chartjs-2";
import { ChartLineProps } from "types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ChartLine = (props: ChartLineProps) => {
  const chartData = props.forecast.map((item) => ({
    temp: Math.round(item.temp),
    dt: new Date(item.dt * 1000).toLocaleDateString().slice(0, -5),
  }));

  const labels = chartData.map((i) => i.dt);
  const data = {
    labels,
    datasets: [
      {
        label: "temper",
        data: chartData.map((i) => i.temp),
        backgroundColor: "#2196F3",
        borderColor: "#2196F3",
      },
    ],
  };

  return (
    <div style={{ width: 280, height: 100 }}>
      <Line data={data} />
    </div>
  );
};
