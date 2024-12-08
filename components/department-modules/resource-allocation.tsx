"use client";

import React, { useState } from "react";
import QRCode from "react-qr-code";

const ResourceAllocation = () => {
  const [products, setProducts] = useState<any[]>([
    { serialNo: "001", category: "Mouse", quantity: 0 },
    { serialNo: "002", category: "Keyboard", quantity: 0 },
    { serialNo: "003", category: "Laptop", quantity: 0 },
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [currentProduct, setCurrentProduct] = useState<any>(null);

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newProducts = [...products];
    newProducts[index].quantity = parseInt(e.target.value) || 0;
    setProducts(newProducts);
  };

  const handleGenerateQRClick = (product: any) => {
    if (product.quantity > 0) {
      setCurrentProduct(product);
      setPopupMessage("Success");
      setIsPopupOpen(true);
    } else {
      setPopupMessage("Fail");
      setIsPopupOpen(true);
    }
  };

  const handlePrintQRCode = () => {
    if (currentProduct && currentProduct.quantity > 0) {
      window.print();
    }
  };

  return (
    <div className="bg-[#19191a] text-white min-h-screen p-6">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold mb-4">Resource Allocation</h1>
        <table className="min-w-full table-auto shadow-lg rounded-lg">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Serial No.</th>
              <th className="px-4 py-2 text-left">Product Category</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Generate QR</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.serialNo} className="border-b">
                <td className="px-4 py-2">{product.serialNo}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(e, index)}
                    className="w-20 p-2 rounded-md text-black"
                  />
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleGenerateQRClick(product)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <span className="material-icons">qr_code</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Notification */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="bg-white text-black p-6 rounded-lg w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-black"
            >
              &#x2715;
            </button>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">QR Generation</h2>
              <p
                className={
                  popupMessage === "Success" ? "text-green-500" : "text-red-500"
                }
              >
                {popupMessage === "Success"
                  ? "QR Codes Generated Successfully!"
                  : "Please specify a valid quantity."}
              </p>
              {popupMessage === "Success" &&
                currentProduct &&
                currentProduct.quantity > 0 && (
                  <div>
                    <div className="mb-4">
                      <h3 className="font-semibold">QR Codes:</h3>
                      <div className="flex flex-wrap justify-center">
                        {[...Array(currentProduct.quantity)].map((_, idx) => (
                          <div key={idx} className="m-2">
                            <QRCode
                              value={currentProduct.serialNo + "-" + idx}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={handlePrintQRCode}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Print QR Codes
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceAllocation;
