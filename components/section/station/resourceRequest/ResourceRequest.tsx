import React, { useState, useEffect } from 'react'
// import Link from 'antd/es/typography/Link';

// Define an interface for the resource request item
interface ResourceRequestItem {
  category: string;
  quantity: number;
  date: string;
}

function ResourceRequest() {
  // State for form inputs
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  
  // State for storing resource request items
  const [requestItems, setRequestItems] = useState<ResourceRequestItem[]>(() => {
    // Initialize from local storage or empty array
    const savedItems = localStorage.getItem('resourceRequests');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Update local storage whenever requestItems changes
  useEffect(() => {
    localStorage.setItem('resourceRequests', JSON.stringify(requestItems));
  }, [requestItems]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a new resource request item
    const newItem: ResourceRequestItem = {
      category,
      quantity: Number(quantity),
      date: new Date().toLocaleString()
    };

    // Add the new item to the list
    setRequestItems([...requestItems, newItem]);

    // Reset form inputs
    setCategory('');
    setQuantity('');
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-[#563007]">Resource Request</h1>
      <div className="overflow-x-auto">
        {/* Top Section: Form for Product Category and Quantity */}
        <div className="mb-4 mt-4">
          <form className="space-x-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Product Category" 
              className="input input-warning bg-white text-black" 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required 
            />
            <input 
              type="number" 
              placeholder="Quantity" 
              className="input input-warning bg-white text-black" 
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required 
            />
            <button type="submit" className="btn bg-[#d2b99f] text-white">Submit</button>
          </form>
        </div>

        {/* Bottom Section: Product List */}
        <div className="slider-section">
          <h2 className="text-lg font-bold text-[#563007]">Product List</h2>
          <div className="slider">
            <table className="table mt-4">
              <thead>
                <tr className="border text-sm text-[#563007]">
                  <th>No.</th>
                  <th>Product Details</th>
                  <th>Shipment Details</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {requestItems.map((item, index) => (
                  <tr key={index} className="text-[#563007]">
                    <th>{index + 1}</th>
                    <td>{item.category} <br/> Qty: {item.quantity}</td>
                    <td>{item.date}</td>
                    <td>
                      <div className="badge badge-warning badge-outline text-xs">
                        Pending
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceRequest