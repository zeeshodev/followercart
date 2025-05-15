import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const orders = [
    { id: "#10493", username: "john_doe", service: "Instagram Followers", date: "May 13, 2025", status: "Completed" },
    { id: "#10492", username: "alice_m", service: "YouTube Likes", date: "May 12, 2025", status: "Pending" },
    { id: "#10491", username: "mike99", service: "TikTok Views", date: "May 11, 2025", status: "Failed" },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-semibold text-gradient mb-4">Order History</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center border-2 border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm w-full sm:w-1/2">
          <AiOutlineSearch className="text-blue-600 mr-2" />
          <input
            type="text"
            placeholder="Search by Order ID"
            className="w-full outline-none bg-transparent text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="border-2 border-gray-300 rounded-md px-3 py-2 text-sm bg-white w-full sm:w-auto shadow-sm"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">Status: All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto border-t-4 border-gradient">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="text-gray-600 border-b-2">
              <th className="py-3 text-left font-medium">Order ID</th>
              <th className="py-3 text-left font-medium">Username</th>
              <th className="py-3 text-left font-medium">Service</th>
              <th className="py-3 text-left font-medium">Date</th>
              <th className="py-3 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No orders found
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-t transition duration-200 hover:bg-gray-50">
                  <td className="py-4 font-medium text-gray-700">{order.id}</td>
                  <td className="py-4 text-gray-600">{order.username}</td>
                  <td className="py-4 text-gray-600">{order.service}</td>
                  <td className="py-4 text-gray-600">{order.date}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-1 w-max ${
                        order.status === "Completed"
                          ? "bg-gradient-to-r from-green-400 to-green-600"
                          : order.status === "Pending"
                          ? "bg-gradient-to-r from-blue-400 to-blue-600"
                          : "bg-gradient-to-r from-red-400 to-red-600"
                      }`}
                    >
                      {order.status === "Completed" && <AiOutlineCheckCircle className="inline" />}
                      {order.status === "Pending" && <AiOutlineClockCircle className="inline" />}
                      {order.status === "Failed" && <AiOutlineCloseCircle className="inline" />}
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
