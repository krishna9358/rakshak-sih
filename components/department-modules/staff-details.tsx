"use client";
import React, { useState } from "react";

const StaffDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for staff details
  const staffMembers = [
    {
      serialNo: "001",
      staffId: "ST001",
      name: "John Doe",
      email: "john.doe@example.com",
      station: "Station A",
      imageUrl: "https://via.placeholder.com/150",
      address: "123 Street, City, Country",
      dob: "1990-01-15",
      gender: "Male",
      aadhar: "1234-5678-9876",
    },
    {
      serialNo: "002",
      staffId: "ST002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      station: "Station B",
      imageUrl: "https://via.placeholder.com/150",
      address: "456 Avenue, City, Country",
      dob: "1992-03-25",
      gender: "Female",
      aadhar: "2345-6789-1234",
    },
    {
      serialNo: "003",
      staffId: "ST003",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      station: "Station C",
      imageUrl: "https://via.placeholder.com/150",
      address: "789 Road, City, Country",
      dob: "1985-06-10",
      gender: "Female",
      aadhar: "3456-7890-2345",
    },
  ];

  // Filter staff based on search term
  const filteredStaff = staffMembers.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.staffId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle clicking on the staff name to open the modal
  const handleViewClick = (staff: any) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStaff(null);
  };

  return (
    <div className="bg-[#19191a] text-white min-h-screen p-6">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Staff..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 text-black rounded-md"
        />
      </div>

      {/* Table for Staff Details */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Serial No.</th>
              <th className="px-4 py-2 text-left">Staff ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Station</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((staff) => (
              <tr key={staff.serialNo} className="border-b">
                <td className="px-4 py-2">{staff.serialNo}</td>
                <td className="px-4 py-2">{staff.staffId}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleViewClick(staff)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {staff.name}
                  </button>
                </td>
                <td className="px-4 py-2">{staff.email}</td>
                <td className="px-4 py-2">{staff.station}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Staff Details Modal */}
      {isModalOpen && selectedStaff && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white text-black p-6 rounded-lg w-1/3 h-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black"
            >
              &#x2715;
            </button>
            <div className="flex justify-center mb-4">
              <img
                src={selectedStaff.imageUrl}
                alt={selectedStaff.name}
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">
                {selectedStaff.name}
              </h2>
              <p className="text-sm mb-1">Address: {selectedStaff.address}</p>
              <p className="text-sm mb-1">DOB: {selectedStaff.dob}</p>
              <p className="text-sm mb-1">Gender: {selectedStaff.gender}</p>
              <p className="text-sm mb-1">Aadhar: {selectedStaff.aadhar}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDetailsPage;
