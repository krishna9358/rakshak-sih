"use client";

import React, { useState } from "react";

const ResourceRequestPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for resources and products
  const stations = [
    {
      serialNo: "S001",
      stationId: "ST001",
      stationName: "Station A",
      products: [
        { productName: "Mouse", quantity: 5, status: "Available" },
        { productName: "Keyboard", quantity: 3, status: "Out of Stock" },
      ],
    },
    {
      serialNo: "S002",
      stationId: "ST002",
      stationName: "Station B",
      products: [
        { productName: "Monitor", quantity: 2, status: "Available" },
        { productName: "Headphone", quantity: 10, status: "Available" },
      ],
    },
    {
      serialNo: "S003",
      stationId: "ST003",
      stationName: "Station C",
      products: [{ productName: "Laptop", quantity: 7, status: "Available" }],
    },
  ];

  // Filter stations based on search term
  const filteredStations = stations.filter(
    (station) =>
      station.stationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      station.stationId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle View button click to open modal
  const handleViewClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
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

      {/* Table for Resource Request */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Serial No.</th>
              <th className="px-4 py-2 text-left">Station ID</th>
              <th className="px-4 py-2 text-left">Station Name</th>
              <th className="px-4 py-2 text-left">View</th>
            </tr>
          </thead>
          <tbody>
            {filteredStations.map((station) => (
              <React.Fragment key={station.serialNo}>
                <tr className="border-b">
                  <td className="px-4 py-2">{station.serialNo}</td>
                  <td className="px-4 py-2">{station.stationId}</td>
                  <td className="px-4 py-2">{station.stationName}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleViewClick(station.products)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <span className="material-icons">visibility</span>
                    </button>
                  </td>
                </tr>

                {/* View Products List Modal */}
                {isModalOpen && selectedProduct && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal}
                  >
                    <div
                      className="bg-white text-black p-6 rounded-lg w-3/4 h-3/4 overflow-auto relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-black"
                      >
                        &#x2715;
                      </button>
                      <h2 className="text-xl font-semibold mb-4">
                        Product Details
                      </h2>

                      {/* Display the list of products */}
                      <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                          <thead>
                            <tr className="border-b">
                              <th className="px-4 py-2 text-left">
                                Serial No.
                              </th>
                              <th className="px-4 py-2 text-left">
                                Product Name
                              </th>
                              <th className="px-4 py-2 text-left">Quantity</th>
                              <th className="px-4 py-2 text-left">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedProduct.map((product, index) => (
                              <tr key={index} className="border-b">
                                <td className="px-4 py-2">
                                  {station.serialNo}-{index + 1}
                                </td>
                                <td className="px-4 py-2">
                                  {product.productName}
                                </td>
                                <td className="px-4 py-2">
                                  {product.quantity}
                                </td>
                                <td className="px-4 py-2">{product.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceRequestPage;
