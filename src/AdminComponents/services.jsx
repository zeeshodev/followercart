import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";

const initialServices = [
  { id: 1, name: "Instagram Followers", price: 10, status: "enabled" },
  { id: 2, name: "YouTube Likes", price: 15, status: "disabled" },
  { id: 3, name: "TikTok Views", price: 12, status: "enabled" },
];

function ServicesTab() {
  const [services, setServices] = useState(initialServices);
  const [editingPrice, setEditingPrice] = useState(null);
  const [newPrice, setNewPrice] = useState("");

  const toggleServiceStatus = (id) => {
    setServices(services.map(service =>
      service.id === id
        ? { ...service, status: service.status === "enabled" ? "disabled" : "enabled" }
        : service
    ));
  };

  const handlePriceEdit = (id) => {
    setEditingPrice(id);
    const service = services.find(service => service.id === id);
    setNewPrice(service.price);
  };

  const handlePriceChange = (id) => {
    setServices(services.map(service =>
      service.id === id
        ? { ...service, price: newPrice }
        : service
    ));
    setEditingPrice(null);
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gradient mb-2 sm:mb-4">Manage Services</h2>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-t-4 border-gradient overflow-x-auto">
        <table className="min-w-[700px] w-full text-sm">
          <thead>
            <tr className="text-gray-600 border-b-2">
              <th className="py-3 text-left font-medium">Service Name</th>
              <th className="py-3 text-left font-medium">Price</th>
              <th className="py-3 text-left font-medium">Status</th>
              <th className="py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-t transition duration-200 hover:bg-gray-50">
                <td className="py-4">{service.name}</td>
                <td className="py-4">
                  {editingPrice === service.id ? (
                    <input
                      type="number"
                      className="border border-gray-300 rounded px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                    />
                  ) : (
                    `$${service.price}`
                  )}
                </td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm ${
                      service.status === "enabled"
                        ? "bg-gradient-to-r from-green-400 to-green-600"
                        : "bg-gradient-to-r from-red-400 to-red-600"
                    }`}
                  >
                    {service.status === "enabled" ? (
                      <AiOutlineCheckCircle className="inline mr-1" />
                    ) : (
                      <AiOutlineCloseCircle className="inline mr-1" />
                    )}
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => toggleServiceStatus(service.id)}
                      className="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 py-2 px-3 rounded-md text-sm transition duration-300 transform hover:scale-105"
                    >
                      {service.status === "enabled" ? "Disable" : "Enable"}
                    </button>
                    {editingPrice === service.id ? (
                      <button
                        onClick={() => handlePriceChange(service.id)}
                        className="text-white bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 py-2 px-3 rounded-md text-sm transition duration-300 transform hover:scale-105"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePriceEdit(service.id)}
                        className="text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 py-2 px-3 rounded-md text-sm transition duration-300 transform hover:scale-105"
                      >
                        <AiOutlineEdit />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServicesTab;
