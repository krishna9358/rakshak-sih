"use client";

import React, { useState } from "react";
import { GpsData, gpsData } from "@/config/data/gps_budget";

const GpsBudgetAllocation = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  // Handle allocation - button is non-functional now
  const handleAllocate = () => {
    alert("Allocation functionality is disabled for now.");
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Budget Allocation</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-center">Serial No.</th>
              <th className="px-4 py-2 text-center">GP Store Details</th>
              <th className="px-4 py-2 text-center">Budget</th>
              <th className="px-4 py-2 text-center">Allocate</th>
            </tr>
          </thead>
          <tbody>
            {gpsData.map((entry: GpsData) => (
              <tr key={entry.serialNo} className="border-b">
                <td className="px-4 py-2 text-center">{entry.serialNo}</td>
                <td className="px-4 py-2 text-center">
                  <div className="text-center">
                    <div className="font-semibold">{entry.gpsDetails.name}</div>
                    <div className="text-sm text-gray-400">
                      {entry.gpsDetails.id}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">₹{entry.budget}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={handleAllocate}
                    className="bg-[#5921B0] text-white px-4 py-2 rounded-md hover:bg-purple-700"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "ALLOCATE"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GpsBudgetAllocation;
