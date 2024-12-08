"use client";
import React, { useState } from "react";

const StationRecord = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStation, setSelectedStation] = useState<any>(null);
  const [openRows, setOpenRows] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for stations and products
  const stations = [
    {
      stationId: "S001",
      stationName: "Station A",
      products: [
        {
          productName: "Mouse",
          quantity: 3,
          productId: "M001",
          serialNos: ["M1", "M2", "M3"],
          condition: "Working",
        },
        {
          productName: "Keyboard",
          quantity: 5,
          productId: "K001",
          serialNos: ["K1", "K2", "K3", "K4", "K5"],
          condition: "Working",
        },
      ],
    },
    {
      stationId: "S002",
      stationName: "Station B",
      products: [
        {
          productName: "Monitor",
          quantity: 20,
          productId: "MON001",
          serialNos: ["MON1", "MON2", "MON3", "MON4"],
          condition: "Used",
        },
        {
          productName: "Laptop",
          quantity: 10,
          productId: "L001",
          serialNos: ["L1", "L2", "L3", "L4", "L5"],
          condition: "Refurbished",
        },
      ],
    },
    {
      stationId: "S003",
      stationName: "Station C",
      products: [
        {
          productName: "Headphone",
          quantity: 12,
          productId: "H001",
          serialNos: ["H1", "H2", "H3"],
          condition: "New",
        },
      ],
    },
  ];

  // Filter stations based on the search term
  const filteredStations = stations.filter(
    (station) =>
      station.stationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      station.stationId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewClick = (station: any) => {
    setSelectedStation(station);
    setIsModalOpen(true);
  };

  const toggleRowDetails = (productName: string) => {
    const newOpenRows = new Set(openRows);
    if (newOpenRows.has(productName)) {
      newOpenRows.delete(productName);
    } else {
      newOpenRows.add(productName);
    }
    setOpenRows(newOpenRows);
  };

  return (
    <div className="bg-[#19191a] text-white min-h-screen p-6">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Stations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 text-black rounded-md"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Station ID</th>
              <th className="px-4 py-2 text-left">Station Name</th>
              <th className="px-4 py-2 text-left">View</th>
            </tr>
          </thead>
          <tbody>
            {filteredStations.map((station) => (
              <tr key={station.stationId} className="border-b">
                <td className="px-4 py-2">{station.stationId}</td>
                <td className="px-4 py-2">{station.stationName}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleViewClick(station)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <span className="material-icons">visibility</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedStation && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white text-black p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-black"
            >
              &#x2715;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Station Products - {selectedStation.stationName}
            </h2>

            {/* Table for products in station */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Product Name</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedStation.products.map((product) => (
                    <React.Fragment key={product.productId}>
                      <tr className="border-b">
                        <td className="px-4 py-2">{product.productName}</td>
                        <td className="px-4 py-2">{product.quantity}</td>
                        <td className="px-4 py-2">
                          <button
                            className="text-blue-500 hover:text-blue-700"
                            onClick={() =>
                              toggleRowDetails(product.productName)
                            }
                          >
                            ▼
                          </button>
                        </td>
                      </tr>

                      {/* Expanded details table for product */}
                      {openRows.has(product.productName) && (
                        <tr>
                          <td colSpan={3} className="px-4 py-2 bg-gray-100">
                            <table className="min-w-full table-auto">
                              <thead>
                                <tr className="border-b">
                                  <th className="px-4 py-2 text-left">
                                    Serial No.
                                  </th>
                                  <th className="px-4 py-2 text-left">
                                    Product ID
                                  </th>
                                  <th className="px-4 py-2 text-left">
                                    Condition
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {product.serialNos.map((serialNo, index) => (
                                  <tr key={serialNo}>
                                    <td className="px-4 py-2">{serialNo}</td>
                                    <td className="px-4 py-2">
                                      {product.productId}
                                    </td>
                                    <td className="px-4 py-2">
                                      {product.condition}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StationRecord;

// serial no. product name quantity status
// 1           mouse         3        dropdown
// serial no. product-id    condition
//  1            m1           working
//  2            m2           working
//  3            m3           working
// 2           keyboard      5        dropdown
// 3           Laptop        10       dropdown
