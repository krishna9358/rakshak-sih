"use client";

import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid"; // Heroicons v2
import { sampleData } from "@/config/data/inventory"; // Import sampleData

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null); // Track the entire product status data
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the data by search term for product category and product ID
  const filteredData = sampleData.filter(
    (data) =>
      data.productCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.status.some((status) =>
        status.productId.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Modal open toggle function
  const toggleModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Function to get the status styling
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "working":
        return "border-2 border-green-500 text-green-500 rounded-full px-4 py-1";
      case "need repair":
        return "border-2 border-yellow-500 text-yellow-500 rounded-full px-4 py-1";
      case "not working":
        return "border-2 border-red-500 text-red-500 rounded-full px-4 py-1";
      default:
        return "";
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Product Category or Product ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 text-black rounded-md"
        />
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-center">Serial No.</th>
              <th className="px-4 py-2 text-center">Product Category</th>
              <th className="px-4 py-2 text-center">Quantity</th>
              <th className="px-4 py-2 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-center">{index + 1}</td>{" "}
                {/* Serial No. */}
                <td className="px-4 py-2 text-center">
                  {data.productCategory}
                </td>
                <td className="px-4 py-2 text-center">{data.quantity}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => toggleModal(data)} // Pass the full data to modal
                    className="text-[#5921B0] hover:text-purple-800"
                  >
                    <EyeIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Window */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#19191a] text-white p-6 rounded-lg w-3/4 max-w-3xl relative max-h-[70vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white hover:text-red-500"
            >
              &#x2715;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Product Details - {selectedProduct.productCategory}
            </h2>
            <div className="mt-4 overflow-y-auto max-h-[60vh]">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-center">Serial No.</th>
                    <th className="px-4 py-2 text-center">Product ID</th>
                    <th className="px-4 py-2 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProduct.status.map((status, index) => (
                    <tr key={status.productId} className="border-b">
                      <td className="px-4 py-2 text-center">{index + 1}</td>
                      <td className="px-4 py-2 text-center">
                        {status.productId}
                      </td>
                      <td className="px-4 py-2 text-center">
                        <span className={getStatusStyle(status.status)}>
                          {status.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#5921B0] text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
