import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const initialUsers = [
  { id: 1, username: "john_doe", fullname: "John Doe", totalOrders: 45, totalSpent: 120.5, status: "active" },
  { id: 2, username: "jane_smm", fullname: "Jane Smith", totalOrders: 28, totalSpent: 88.9, status: "inactive" },
  { id: 3, username: "mark_xyz", fullname: "Mark Johnson", totalOrders: 67, totalSpent: 150.0, status: "active" },
];

function UsersTab() {
  const [users, setUsers] = useState(initialUsers);

  const toggleUserStatus = (id) => {
    setUsers(users.map((user) =>
      user.id === id ? { ...user, status: user.status === "active" ? "inactive" : "active" } : user
    ));
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gradient mb-2 sm:mb-4">User Management</h2>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-t-4 border-gradient overflow-x-auto">
        <table className="min-w-[700px] w-full text-sm">
          <thead>
            <tr className="text-gray-600 border-b-2">
              <th className="py-3 text-left font-medium">Username</th>
              <th className="py-3 text-left font-medium">Full Name</th>
              <th className="py-3 text-left font-medium">Total Orders</th>
              <th className="py-3 text-left font-medium">Total Spent</th>
              <th className="py-3 text-left font-medium">Status</th>
              <th className="py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t transition duration-200 hover:bg-gray-50">
                <td className="py-4">{user.username}</td>
                <td className="py-4">{user.fullname}</td>
                <td className="py-4">{user.totalOrders}</td>
                <td className="py-4">${user.totalSpent.toFixed(2)}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm ${
                      user.status === "active"
                        ? "bg-gradient-to-r from-green-400 to-green-600"
                        : "bg-gradient-to-r from-red-400 to-red-600"
                    }`}
                  >
                    {user.status === "active" ? (
                      <AiOutlineCheckCircle className="inline mr-1" />
                    ) : (
                      <AiOutlineCloseCircle className="inline mr-1" />
                    )}
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </td>
                <td className="py-4">
                  <button
                    onClick={() => toggleUserStatus(user.id)}
                    className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 py-2 px-4 rounded-md text-sm transition duration-300 transform hover:scale-105 whitespace-nowrap"
                  >
                    {user.status === "active" ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTab;
