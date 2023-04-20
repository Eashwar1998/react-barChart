import React from 'react';
import './style.css';
import MyBarChart from './MyBarChart';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 9000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Mydata = [
  { name: 'intel', value: 98, ptamba: 'Yes' },
  { name: 'amd', value: 4, ptamba: 'No' },
  { name: 'amd', value: 4, ptamba: 'Yes' },
  { name: 'amd', value: 4, ptamba: 'No' },
  { name: 'applied ', value: 70, ptamba: 'No' },
  { name: 'applied ', value: 70, ptamba: 'Yes' },
];
export default function App() {
  const dataAligner = (data) => {
    sortedData = [];
    sortedData = [
      ...data.filter((item) => {
        return item.ptamba === 'Yes';
      }),
    ];
    sortedData = [
      ...sortedData,
      ...data.filter((item) => {
        return item.ptamba === 'No';
      }),
    ];
    return sortedData;
  };

  console.log(dataAligner(Mydata));

  return (
    <>
      {/* <div>
        <BarChart width={730} height={250} data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />

          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#af2341" />
        </BarChart>
      </div> */}
      <div className="bc">
        <h3>P Tamba </h3>
        <h3>Tamba State</h3>
        <h3>Demo count</h3>
      </div>
      <div className="bc">
        <div className="cc">Yes</div>
        <div>
          <BarChart
            width={500}
            height={250}
            data={Mydata}
            layout="vertical"
            margin={{ top: 5, right: 5, bottom: 5, left: 150 }}
          >
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" hide />
            <Bar dataKey="value" stackId="a" fill="#82ca9d">
              <LabelList dataKey="value" position="right" />
              <LabelList dataKey="name" position="left" />
            </Bar>
          </BarChart>
        </div>
      </div>
      <div className="bc">
        <div className="cc">No</div>
        <div>
          <BarChart
            width={500}
            height={250}
            data={Mydata}
            layout="vertical"
            margin={{ top: 5, right: 5, bottom: 5, left: 150 }}
          >
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" hide />
            <Bar dataKey="value" stackId="a" fill="#82ca9d">
              <LabelList dataKey="value" position="right" />
              <LabelList dataKey="name" position="left" />
            </Bar>
          </BarChart>
        </div>
      </div>
    </>
  );
}
