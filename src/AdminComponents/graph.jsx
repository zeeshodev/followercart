import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const balanceData = [
  { name: "2025-01-01", value: 300 },
  { name: "2025-02-01", value: 450 },
  { name: "2025-03-01", value: 500 },
  { name: "2025-04-01", value: 700 },
  { name: "2025-05-01", value: 650 },
  { name: "2025-06-01", value: 800 },
];

const userData = [
  { name: "2025-01-01", value: 120 },
  { name: "2025-02-01", value: 160 },
  { name: "2025-03-01", value: 210 },
  { name: "2025-04-01", value: 300 },
  { name: "2025-05-01", value: 330 },
  { name: "2025-06-01", value: 400 },
];

const orderData = [
  { name: "2025-01-01", value: 90 },
  { name: "2025-02-01", value: 130 },
  { name: "2025-03-01", value: 170 },
  { name: "2025-04-01", value: 250 },
  { name: "2025-05-01", value: 290 },
  { name: "2025-06-01", value: 310 },
];

function DashboardGraph() {
  const [selected, setSelected] = useState("balance");
  const [graphData, setGraphData] = useState(balanceData);
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-06-30");

  useEffect(() => {
    let data;
    if (selected === "balance") data = balanceData;
    else if (selected === "users") data = userData;
    else data = orderData;

    const filteredData = data.filter(
      (d) => d.name >= startDate && d.name <= endDate
    );
    setGraphData(filteredData);
  }, [selected, startDate, endDate]);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-lg shadow-lg max-w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-lg sm:text-xl font-semibold text-neon-blue">
          Real-Time Reports
        </h2>
        <div className="flex gap-2 flex-wrap w-full sm:w-auto">
          <select
            onChange={(e) => setSelected(e.target.value)}
            value={selected}
            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none w-full sm:w-auto"
          >
            <option value="balance">Balance</option>
            <option value="users">Users</option>
            <option value="orders">Orders</option>
          </select>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none w-full sm:w-auto"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base focus:outline-none w-full sm:w-auto"
          />
        </div>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={graphData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00f0ff"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashboardGraph;
