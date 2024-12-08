"use client";
import React from "react";

// Define the types for the table data
interface TableData {
  serialNo: number;
  id: string;
  email: string;
  password: string;
  stationName: string;
  address: string;
}

const Table: React.FC = () => {
  // Sample data for the table (increased amount of data)
  const data: TableData[] = [
    {
      serialNo: 1,
      id: "001",
      email: "sitapura@rakshak.com",
      password: "password123",
      stationName: "sitapura",
      address: "vidhani",
    },
    {
      serialNo: 2,
      id: "002",
      email: "haldighati@rakshak.com",
      password: "password456",
      stationName: "haldighati",
      address: "haldi ghati",
    },
    {
      serialNo: 3,
      id: "003",
      email: "jaipur@rakshak.com",
      password: "password789",
      stationName: "jaipur",
      address: "circuit house",
    },
    {
      serialNo: 4,
      id: "004",
      email: "delhi@rakshak.com",
      password: "password000",
      stationName: "delhi",
      address: "rashtrapati bhawan",
    },
    {
      serialNo: 5,
      id: "005",
      email: "mumbai@rakshak.com",
      password: "password999",
      stationName: "mumbai",
      address: "marine drive",
    },
    {
      serialNo: 6,
      id: "006",
      email: "pune@rakshak.com",
      password: "password888",
      stationName: "pune",
      address: "camp area",
    },
    {
      serialNo: 7,
      id: "007",
      email: "indore@rakshak.com",
      password: "password777",
      stationName: "indore",
      address: "chhapan bhog",
    },
    {
      serialNo: 8,
      id: "008",
      email: "bhopal@rakshak.com",
      password: "password666",
      stationName: "bhopal",
      address: "kohefiza",
    },
    {
      serialNo: 9,
      id: "009",
      email: "kota@rakshak.com",
      password: "password555",
      stationName: "kota",
      address: "talwandi",
    },
    {
      serialNo: 10,
      id: "010",
      email: "jodhpur@rakshak.com",
      password: "password444",
      stationName: "jodhpur",
      address: "mandor",
    },
  ];

  const tableWidth = 800; // Increased width to make the table wider
  const tableHeight = 400; // Increased height for the table body

  return (
    <div
      className="overflow-hidden rounded-lg border border-black"
      style={{ width: `${tableWidth}px`, height: `${tableHeight + 40}px` }}
    >
      {/* Header Section */}
      <table className="w-full table-fixed bg-[#19191a] text-white rounded-t-lg">
        <thead className="sticky top-0 z-10 bg-[#19191a]">
          <tr>
            <th className="px-4 py-2 border-b border-black text-left min-w-[120px]">
              Serial No.
            </th>
            <th className="px-4 py-2 border-b border-black text-left min-w-[120px]">
              Id
            </th>
            <th className="px-4 py-2 border-b border-black text-left min-w-[200px]">
              Email
            </th>
            <th className="px-4 py-2 border-b border-black text-left min-w-[200px]">
              Password
            </th>
            <th className="px-4 py-2 border-b border-black text-left min-w-[200px]">
              Station Name
            </th>
            <th className="px-4 py-2 border-b border-black text-left min-w-[200px]">
              Address
            </th>
          </tr>
        </thead>
      </table>

      {/* Body Section - Scrollable */}
      <div
        className="overflow-y-auto"
        style={{ maxHeight: `${tableHeight}px` }}
      >
        <table className="w-full table-fixed bg-[#19191a] text-white">
          <tbody>
            {/* Render data rows */}
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#1f1f20]" : "bg-[#202021]"}
                >
                  <td className="px-4 py-2 border-b border-black min-w-[120px]">
                    {row.serialNo}
                  </td>
                  <td className="px-4 py-2 border-b border-black min-w-[120px]">
                    {row.id}
                  </td>
                  <td className="px-4 py-2 border-b border-black min-w-[200px]">
                    {row.email}
                  </td>
                  <td className="px-4 py-2 border-b border-black min-w-[200px]">
                    {row.password}
                  </td>
                  <td className="px-4 py-2 border-b border-black min-w-[200px]">
                    {row.stationName}
                  </td>
                  <td className="px-4 py-2 border-b border-black min-w-[200px]">
                    {row.address}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-400">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
