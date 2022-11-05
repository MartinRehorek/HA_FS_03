import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function BarChartComponent(props) {
  let yearData = [];
  let data = [];
  if (props.years > 0 && props.years < 6)
    for (
      let howManyYears = Number(props.years);
      howManyYears > 0;
      howManyYears--
    ) {
      yearData.push(2023 - howManyYears);
      let year = 2023 - howManyYears;
      data.push({ name: year, [props.title]: props.data[year][props.title] });
    }


    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">Rok: {label}</p>
              <p className="desc"> {` Počet : ${payload[0].value.toLocaleString()}`}</p>
            </div>
          );
        }
      
        return null;
      };

  return (
    <ResponsiveContainer width={'99%'} height={300}>
<BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="5 5" />
  <XAxis dataKey="name" />
  <YAxis
  type="number"

   />
  <Tooltip  content={<CustomTooltip />} />
  <Legend />
  <Bar dataKey={props.title} fill="#1976d2" />
</BarChart>
</ResponsiveContainer>
  );
}

// {props.data['2022']['Zemřelí']}
