"use client";

import React, { useState } from "react";

const AuditPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAuditHistory, setSelectedAuditHistory] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for stations and audits
  const stations = [
    {
      serialNo: "S001",
      stationId: "S001",
      stationName: "Station A",
      audit: "Passed",
      auditDate: "2024-11-20",
      staffName: "John Doe",
      auditHistory: [
        { auditStatus: "Passed", auditDate: "2024-11-20" },
        { auditStatus: "Failed", auditDate: "2024-11-18" },
      ],
    },
    {
      serialNo: "S002",
      stationId: "S002",
      stationName: "Station B",
      audit: "Failed",
      auditDate: "2024-11-18",
      staffName: "Jane Smith",
      auditHistory: [
        { auditStatus: "Failed", auditDate: "2024-11-18" },
        { auditStatus: "Passed", auditDate: "2024-11-17" },
      ],
    },
    {
      serialNo: "S003",
      stationId: "S003",
      stationName: "Station C",
      audit: "Passed",
      auditDate: "2024-11-22",
      staffName: "Alice Johnson",
      auditHistory: [
        { auditStatus: "Passed", auditDate: "2024-11-22" },
        { auditStatus: "Passed", auditDate: "2024-11-15" },
      ],
    },
  ];

  // Filter stations based on search term
  const filteredStations = stations.filter(
    (station) =>
      station.stationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      station.stationId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAuditHistoryClick = (auditHistory: any) => {
    setSelectedAuditHistory(auditHistory);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAuditHistory(null);
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
              <th className="px-4 py-2 text-left">Serial No.</th>
              <th className="px-4 py-2 text-left">Station ID</th>
              <th className="px-4 py-2 text-left">Station Name</th>
              <th className="px-4 py-2 text-left">Audit</th>
              <th className="px-4 py-2 text-left">Audit Date</th>
              <th className="px-4 py-2 text-left">Staff Name</th>
              <th className="px-4 py-2 text-left">Audit History</th>
            </tr>
          </thead>
          <tbody>
            {filteredStations.map((station) => (
              <tr key={station.serialNo} className="border-b">
                <td className="px-4 py-2">{station.serialNo}</td>
                <td className="px-4 py-2">{station.stationId}</td>
                <td className="px-4 py-2">{station.stationName}</td>
                <td className="px-4 py-2">{station.audit}</td>
                <td className="px-4 py-2">{station.auditDate}</td>
                <td className="px-4 py-2">{station.staffName}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() =>
                      handleAuditHistoryClick(station.auditHistory)
                    }
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Audit History Modal */}
      {isModalOpen && selectedAuditHistory && (
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
            <h2 className="text-xl font-semibold mb-4">Audit History</h2>

            {/* Table for audit history */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Audit Status</th>
                    <th className="px-4 py-2 text-left">Audit Date</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedAuditHistory.map((audit, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">
                        {audit.auditStatus === "Passed" ? (
                          <span className="text-green-500">✔</span>
                        ) : (
                          <span className="text-red-500">✘</span>
                        )}
                      </td>
                      <td className="px-4 py-2">{audit.auditDate}</td>
                    </tr>
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

export default AuditPage;
