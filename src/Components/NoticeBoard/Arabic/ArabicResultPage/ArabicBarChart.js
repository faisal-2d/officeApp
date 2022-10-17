import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const ArabicBarChart = ({data}) => {
    return (
        <BarChart width={300} height={200} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Score" fill="#6F2DBD" />
                </BarChart>
    );
};

export default ArabicBarChart;