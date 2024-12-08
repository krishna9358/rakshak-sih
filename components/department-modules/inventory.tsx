"use client";

import React, { useState } from "react";

const DepartmentInventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample product data
  const products = [
    {
      serialNo: "001",
      productName: "Product A",
      quantity: 10,
      status: "Available",
      productId: "A001",
    },
    {
      serialNo: "002",
      productName: "Product B",
      quantity: 5,
      status: "Out of Stock",
      productId: "B002",
    },
    {
      serialNo: "003",
      productName: "Product C",
      quantity: 20,
      status: "Available",
      productId: "C003",
    },
  ];

  // Filter products based on the search term
  const filteredProducts = products.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.serialNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-[#19191a] text-white min-h-screen p-6">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Products..."
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
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.serialNo} className="border-b">
                <td className="px-4 py-2">{product.serialNo}</td>
                <td className="px-4 py-2">{product.productName}</td>
                <td className="px-4 py-2">{product.quantity}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => toggleModal(product)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {/* Google Material Icon for Eye */}
                    <span className="material-icons">visibility</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white text-black p-6 rounded-lg w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-black"
            >
              &#x2715;
            </button>
            <h2 className="text-xl font-semibold">Product Details</h2>
            <div className="mt-4">
              <p>
                <strong>Serial No.:</strong> {selectedProduct.serialNo}
              </p>
              <p>
                <strong>Product ID:</strong> {selectedProduct.productId}
              </p>
              <p>
                <strong>Status:</strong> {selectedProduct.status}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
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

export default DepartmentInventory;
