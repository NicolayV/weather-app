import React from "react";
import styled from "styled-components";
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

import { WeatherCard } from "types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IChartLine extends Pick<WeatherCard, "temp" | "forecast"> {}

export const ChartLine = (props: IChartLine) => {
  const { temp, forecast } = props;

  const toggler = (value: string): boolean =>
    Number(value) > 0 ? true : false;

  const dateConverter = (value: string) =>
    new Date(Number(value)).toLocaleDateString().slice(0, -5);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const chartData = forecast.map(({ temp, dt }) => ({
    temp,
    dt: dateConverter(dt),
  }));

  const labels = chartData.map(({ dt }) => dt);

  const data = {
    labels,
    datasets: [
      {
        label: "temper",
        data: chartData.map(({ temp }) => temp),
        backgroundColor: "#2196F3",
        borderColor: "#2196F3",
      },
    ],
  };

  return (
    <Wrapper colorToggler={toggler(temp)}>
      <Line data={data} options={options} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  readonly colorToggler: boolean;
}>`
  width: 280px;
  height: 100px;
  display: flex;
  background-color: ${({ colorToggler }) =>
    colorToggler ? "var(--orange100)" : "var(--blue100)"};
  justify-content: center;
  & * {
    background-color: ${({ colorToggler }) =>
      colorToggler ? "var(--orange100)" : "var(--blue100)"};
  }
`;
