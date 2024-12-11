import Link from 'antd/es/typography/Link';
import React from 'react'

function ResourceRequest() {
  return (
    <div>
      <h1 className="text-xl font-bold text-[#563007]"> Resource Request</h1>
      <div className="overflow-x-auto">
        {/* Top Section: Form for Product Category and Quantity */}
        <div className="mb-4 mt-4">
          <form className="space-x-4" onSubmit={(e) => { e.preventDefault(); /* Handle form submission */ }}>
            <input type="text" placeholder="Product Category" className="input input-warning bg-white" required />
            <input type="number" placeholder="Quantity" className="input input-warning bg-white " required />
            <Link>
                      + Add Items
                    </Link>
            <button type="submit" className="btn bg-[#d2b99f] text-white">Submit</button>
            
          </form>
        </div>

        {/* Bottom Section: Slider */}
        <div className="slider-section">
          <h2 className="text-lg font-bold text-[#563007]">Product List</h2>
          <div className="slider">
            {/* Existing table code can be moved here or adjusted as needed */}
            <table className="table mt-4">
              {/* head */}
              <thead>
                <tr className="border text-sm text-[#563007]">
                  <th></th>
                  <th>Product Details</th>
                  <th>Shipment Details </th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="text-[#563007]">
                  <th>1</th>
                  <td>Keyboard <br/> Mouse <br/> Monitor</td>
                  <td>10/10/2003 <br/>  12:00 AM</td>
                  <td>
                    <div className="badge badge-success badge-outline text-xs ">
                      Delivered
                    </div>
                  </td>
                </tr>
                {/* Additional rows can be dynamically added here */}
              </tbody>
              <tfoot>
                <tr>
                  {/* <td colSpan={5} className="text-right">
                    
                  </td> */}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default ResourceRequest