"use client";

import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid"; // Heroicons v2
import { gpsData } from "@/config/data/gps-record";

interface Product {
  serialNo: string;
  productCategory: string;
  quantity: number;
}

interface GpsData {
  gpsName: string;
  gpsId: string;
  products: Product[];
}

const GpsRecord = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGps, setSelectedGps] = useState<GpsData | null>(null); // Track the entire GPS object for modal
  const [searchTerm, setSearchTerm] = useState("");

  // Filter GPS data by search term
  const filteredGpsData = gpsData.filter((gps) =>
    gps.products.some(
      (product) =>
        product.productCategory
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        gps.gpsName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gps.gpsId.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const toggleModal = (gps: GpsData) => {
    setSelectedGps(gps); // Set selected GPS for modal
    setIsModalOpen(true);
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">GP Stores Record</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by GPS Name, GPS ID or Product Category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 text-black rounded-md"
        />
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b text-center">
              <th className="px-4 py-2">Serial No.</th>
              <th className="px-4 py-2">GP Store Details</th>
              <th className="px-4 py-2">View</th>
            </tr>
          </thead>
          <tbody>
            {filteredGpsData.map((gps, index) => (
              <tr key={index} className="border-b text-center">
                {/* Display sequential serial number */}
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <div>
                    <div className="font-semibold">{gps.gpsName}</div>
                    <div className="text-sm text-gray-400">{gps.gpsId}</div>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => toggleModal(gps)} // Pass the full gps data to modal
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
      {isModalOpen && selectedGps && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#19191a] text-white p-6 rounded-lg w-2/3 max-w-4xl relative max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white hover:text-red-500"
            >
              &#x2715;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Product Details - {selectedGps.gpsName}
            </h2>
            <div className="mt-4 overflow-y-auto max-h-[60vh]">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b text-center">
                    <th className="px-4 py-2">Serial No.</th>
                    <th className="px-4 py-2">Product Category</th>
                    <th className="px-4 py-2">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedGps.products.map((product) => (
                    <tr key={product.serialNo} className="border-b text-center">
                      <td className="px-4 py-2">{product.serialNo}</td>
                      <td className="px-4 py-2">{product.productCategory}</td>
                      <td className="px-4 py-2">{product.quantity}</td>
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

export default GpsRecord;
