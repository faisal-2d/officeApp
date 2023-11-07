import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const FiqhBarchart = ({data}) => {
    return (
        <div className=' bg-gradient-to-tl from-indigo-200 to-blue-100 rounded'>
            <ResponsiveContainer height={200}>
                    <BarChart  data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis type="number" domain={[0, 100]} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Score" fill="#6F2DBD" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
    );
};

export default FiqhBarchart;