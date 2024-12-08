"use client";
import React, { useState } from "react";

const Budget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stations = [
    {
      id: 1,
      name: "Station A",
      resources: ["Resource 1", "Resource 2"],
      cost: 100,
    },
    {
      id: 2,
      name: "Station B",
      resources: ["Resource 3", "Resource 4"],
      cost: 200,
    },
    {
      id: 3,
      name: "Station C",
      resources: ["Resource 5", "Resource 6"],
      cost: 300,
    },
  ];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="bg-[#19191a] text-white min-h-screen p-6">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Station-ID</th>
              <th className="px-4 py-2 text-left">Station Name</th>
              <th className="px-4 py-2 text-left">Resources</th>
              <th className="px-4 py-2 text-left">Cost</th>
            </tr>
          </thead>
          <tbody>
            {stations.map((station) => (
              <tr key={station.id} className="border-b">
                <td className="px-4 py-2">{station.id}</td>
                <td className="px-4 py-2">{station.name}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={toggleModal}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <span className="material-icons">view</span>
                  </button>
                </td>
                <td className="px-4 py-2">{station.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Predict Button at Bottom Right Corner */}
      <button className="fixed bottom-4 right-4 bg-[#5921B0] text-white px-6 py-2 rounded-md">
        Predict
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white text-black p-6 rounded-lg w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-black"
            >
              &#x2715;
            </button>
            <h2 className="text-xl font-semibold">Resources</h2>
            <ul className="mt-4">
              <li>Resource 1</li>
              <li>Resource 2</li>
              <li>Resource 3</li>
            </ul>
            <div className="mt-4 flex justify-end">
              <button
                onClick={toggleModal}
                className="bg-gray-300 text-black px-4 py-2 rounded-md"
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

export default Budget;
