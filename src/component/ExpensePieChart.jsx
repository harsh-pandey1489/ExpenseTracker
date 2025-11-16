import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const CATEGORY_COLORS = {
  Food: "#6366F1",
  Transport: "#068604",
  Entertainment: "#A855F7",
  shopping: "#F97316",
  Utilities: "#1488A6",
  Other: "#647488",
  Health: "#22C55E",
}

const ExpensePieChart = ({ data }) => {

  if (data.length === 0) {
    return (
      <div className='text-center text-gray-500'>No Expense data to display</div>
    )
  }

  const getColor = (name) => {
    return CATEGORY_COLORS[name] || "#BE9196";
  }

  // ✅ FIXED CUSTOM TOOLTIP
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0].payload;

      const total = data.reduce((sum, item) => sum + item.value, 0);
      const percentage = ((value / total) * 100).toFixed(2);

      return (
        <div className='bg-white p-4 rounded-md shadow-md border border-gray-200'>
          <p className='font-semibold'>{name}</p>
          <p className='text-lg'>
            ₹{value.toFixed(2)}
            <span className='text-sm text-gray-500 ml-1'>({percentage}%)</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >

          {/* ✅ FIXED Cell return */}
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={getColor(entry.name)}
            />
          ))}

        </Pie>

        {/* ✅ FIXED Tooltip component */}
        <Tooltip content={<CustomTooltip />} />

        {/* ✅ FIXED Legend formatter */}
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          formatter={(value) => <span className="text-sm font-medium">{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExpensePieChart;
