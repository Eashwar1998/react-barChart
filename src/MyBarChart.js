import React from 'react';
import { Bar } from 'recharts';

const MyBarChart = () => {
  const data = [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 30 },
  ];

  return (
    <Bar
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    />
  );
};

export default MyBarChart;
