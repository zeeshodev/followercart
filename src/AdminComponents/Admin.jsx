import React, { useState } from "react";
import Orders from "./order";
import ServicesTab from "./services";
import UsersTab from "./user";
import DashboardGraph from "./graph";

import { Menu as LucideMenu } from "lucide-react";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const handleNavigation = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-sm">Total Orders</div>
                <div className="text-3xl font-bold">12,450</div>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-sm">Balance</div>
                <div className="text-3xl font-bold">$325.00</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-sm">Active Services</div>
                <div className="text-3xl font-bold">93</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-sm">Pending Orders</div>
                <div className="text-3xl font-bold">15</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl mb-6">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <h2 className="text-lg font-semibold">Orders Overview</h2>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm mt-2 sm:mt-0">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="h-auto width-full flex items-center justify-center text-gray-400">
              <DashboardGraph />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl overflow-x-auto">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

              <Orders />
              <ServicesTab />
            </div>

          </>
        );

      case "reports":
        return (
          <div className="bg-white p-6 rounded-2xl shadow-xl mb-6">
            <h2 className="text-lg font-semibold mb-4">Reports</h2>
            <DashboardGraph />
          </div>
        );
      case "orders":
        return <Orders />;
      case "services":
        return <ServicesTab />;
      case "users":
        return <UsersTab />;
      default:
        return null;
    }
  };

  const navItems = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Orders", key: "orders" },
    { name: "Services", key: "services" },
    { name: "Reports", key: "reports" },
    { name: "Users", key: "users" },
    // { name: "Settings", key: "settings" },
    { name: "Logout", key: "logout" }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="md:hidden flex justify-between items-center bg-white p-4 shadow">
        <h1 className="text-xl font-bold">Followers Cart</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <LucideMenu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <aside className={`bg-white shadow-xl p-4 transition-all duration-300 ${sidebarOpen ? 'block' : 'hidden'} md:block md:w-64 w-full`}>
        <h1 className="text-xl font-bold mb-6 text-center md:text-left hidden md:block">Followers Cart</h1>
        <nav className="space-y-3 text-gray-700">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                activePage === item.key ? 'bg-blue-600 text-white font-semibold shadow-md' : 'hover:bg-gray-100'
              }`}
              onClick={() => handleNavigation(item.key)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/3"
          />
          <div className="flex items-center gap-4">
            <img
              src="/home1.svg"
              alt="avatar"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 border-b pb-2 mb-6">
          <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">
            Overview
          </button>
    
        </div>

        {renderContent()}
      </main>
    </div>
  );
}

export default Dashboard;
