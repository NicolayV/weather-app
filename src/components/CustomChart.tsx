import { FunctionComponent } from "react";
import styled from "styled-components";
import { AreaChart, XAxis, Area, LabelList } from "recharts";
import { WeatherCard } from "types";

interface ICustomChart extends Pick<WeatherCard, "temp" | "forecast"> {}

const CustomChart = ({ temp, forecast }: ICustomChart) => {
  const toggler = Number(temp) > 0 ? true : false;

  const data = [
    { name: "", tmp: "" },
    ...forecast.map((i) => ({
      name: i.dt,
      tmp: Math.abs(Number(i.temp)),
    })),
    { name: "", tmp: "" },
  ];

  const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={15} y={0} dy={10} textAnchor="end" fill="#666" fontSize={10}>
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <>
      {temp ? (
        <Wrapper colorToggler={toggler}>
          <AreaChart
            width={300}
            height={140}
            data={data}
            margin={{ top: 15, right: 0, left: 0, bottom: -5 }}
          >
            <defs>
              <linearGradient
                id={"colorTmp" + temp}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={toggler ? "#ffa437" : "#c4c2f1"}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={toggler ? "#ffa437" : "#c4c2f1"}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              axisLine={false}
              tickMargin={6}
              tickLine={false}
              tick={<CustomizedAxisTick />}
            />
            <Area
              type="monotone"
              dataKey="tmp"
              stroke={toggler ? "#ffa437" : "#c4c2f1"}
              fillOpacity={1}
              fill={`url(#${"colorTmp" + temp})`}
            >
              <LabelList dataKey="tmp" position="top" />
            </Area>
          </AreaChart>
        </Wrapper>
      ) : null}
    </>
  );
};

export default CustomChart;

const Wrapper = styled.div<{
  readonly colorToggler: boolean;
}>`
  width: 100%;
  height: 140px;
  display: flex;
  background-color: ${({ colorToggler }) =>
    colorToggler ? "var(--orange100)" : "var(--blue100)"};
  justify-content: center;
  & * {
    background-color: ${({ colorToggler }) =>
      colorToggler ? "var(--orange100)" : "var(--blue100)"};
  }
`;
