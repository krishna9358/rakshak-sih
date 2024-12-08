"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaRedo, FaSync } from "react-icons/fa"; // Importing icons
import { sampleData } from "@/config/data/credential";

const Credentials: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stationName, setStationName] = useState("");
  const [type, setType] = useState(""); // Initialize with an empty string
  const [passwordVisibility, setPasswordVisibility] = useState<
    Record<number, boolean>
  >({}); // Track visibility per row
  const [searchTerm, setSearchTerm] = useState(""); // For searching email, name, and role

  // Generate a random password when the button is clicked
  const generatePassword = () => {
    const randomPassword = Math.random().toString(36).slice(-8); // Random 8-character password
    setPassword(randomPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ email, password, stationName, type });
  };

  // Toggle password visibility for a specific row
  const togglePasswordVisibility = (serialNo: number) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [serialNo]: !prev[serialNo], // Toggle visibility for the specific row
    }));
  };

  // Reset password for a particular row
  const resetPassword = (serialNo: number) => {
    const newPassword = Math.random().toString(36).slice(-8); // Generate new random password
    console.log(`Password for serial ${serialNo} reset to: ${newPassword}`);
    setPassword(newPassword);
  };

  // Filter sample data based on the search term (search by email, name, or role)
  const filteredData = sampleData.filter((row) => {
    return (
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.stationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col h-full bg-black text-white">
      {/* Container for the form, search bar, and table */}
      <div className="flex flex-col p-6 bg-[#19191a] rounded-xl space-y-6 m-6 max-h-full overflow-hidden">
        {/* Credentials Form */}
        <div className="bg-[#19191a] rounded-xl p-6 max-w-xl mb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email, Station Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="email" className="block text-white text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="w-full p-3 bg-white text-black rounded text-sm"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="stationName"
                  className="block text-white text-sm"
                >
                  Name
                </label>
                <input
                  id="stationName"
                  type="text"
                  value={stationName}
                  onChange={(e) => setStationName(e.target.value)}
                  placeholder="Enter GPS/Station/Unit name"
                  className="w-full p-3 bg-white text-black rounded text-sm"
                />
              </div>
            </div>

            {/* Password Field, Generate Password Button, and Type Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="form-group col-span-2">
                <label htmlFor="password" className="block text-white text-sm">
                  Password
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    id="password"
                    type={passwordVisibility[1] ? "text" : "password"} // Toggle between text and password input type
                    value={password}
                    readOnly
                    placeholder="Generated password"
                    className="w-full p-3 bg-white text-black rounded-l text-sm"
                  />
                  <button
                    type="button"
                    onClick={generatePassword}
                    className="bg-[#5921B0] text-white p-3 rounded-r text-sm"
                  >
                    <FaSync />
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="type" className="block text-white text-sm">
                  Select Role
                </label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-3 bg-white text-black rounded text-sm"
                >
                  <option value="" disabled hidden>
                    --Type-- {/* Default placeholder text */}
                  </option>
                  <option value="gpStore">GP Store</option>
                  <option value="station">Station</option>
                  <option value="unit">Unit</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#28a745] text-white py-2 px-6 rounded text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by email, name, or role"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-2/3 sm:w-2/3 p-3 bg-white text-black rounded-lg text-sm"
          />
        </div>

        {/* Table Component with scrollable height */}
        <div className="overflow-auto" style={{ maxHeight: "350px" }}>
          <table className="w-full table-fixed bg-[#19191a] text-white rounded-t-lg text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left min-w-[120px]">
                  Serial No.
                </th>
                <th className="px-4 py-2 border-b text-left min-w-[120px]">
                  Id
                </th>
                <th className="px-4 py-2 border-b text-left min-w-[200px]">
                  Email
                </th>
                <th className="px-4 py-2 border-b text-left min-w-[300px]">
                  Password
                </th>
                <th className="px-4 py-2 border-b text-left min-w-[200px]">
                  Name
                </th>
                <th className="px-4 py-2 border-b text-left min-w-[200px]">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-[#1f1f20]" : "bg-[#202021]"
                    }
                  >
                    <td className="px-4 py-2 border-b">{row.serialNo}</td>
                    <td className="px-4 py-2 border-b">{row.id}</td>
                    <td className="px-4 py-2 border-b">{row.email}</td>
                    <td className="px-4 py-2 border-b">
                      <div className="flex items-center justify-between space-x-2">
                        <span>
                          {passwordVisibility[row.serialNo]
                            ? row.password
                            : "******"}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            onClick={() =>
                              togglePasswordVisibility(row.serialNo)
                            }
                            className="text-[#5921B0] p-1"
                          >
                            {passwordVisibility[row.serialNo] ? (
                              <FaEyeSlash />
                            ) : (
                              <FaEye />
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => resetPassword(row.serialNo)}
                            className="text-orange-600 p-1"
                          >
                            <FaRedo />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b">{row.stationName}</td>
                    <td className="px-4 py-2 border-b">{row.role}</td>
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
    </div>
  );
};

export default Credentials;
