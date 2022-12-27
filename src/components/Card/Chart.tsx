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
import styled from "styled-components";

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
  const chartData = props.forecast.map(
    (item: { temp: number; dt: number }) => ({
      temp: Math.round(item.temp),
      dt: new Date(item.dt * 1000).toLocaleDateString().slice(0, -5),
    })
  );

  const labels = chartData.map((i: { dt: string }) => i.dt);
  const data = {
    labels,
    datasets: [
      {
        label: "temper",
        data: chartData.map((i: { temp: number }) => i.temp),
        backgroundColor: "#2196F3",
        borderColor: "#2196F3",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Cont main={props.temp ? Math.sign(props.temp) : -1}>
      <Line data={data} options={options} />
    </Cont>
  );
};

export interface ContProps {
  readonly main: number;
}
const Cont = styled.div<ContProps>`
  width: 280px;
  height: 100px;
  display: flex;
  background-color: ${(props) => (props.main >= 0 ? "#fef2e2" : "#ebeafe")};
  justify-content: center;
  & * {
    background-color: ${(props) => (props.main >= 0 ? "#fef2e2" : "#ebeafe")};
  }
`;
