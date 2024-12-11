import React from 'react'

function SelfInventory() {
  return (
    <div>
        <div className="flex justify-between mb-4">
        <div><h1 className="text-xl font-bold text-[#563007]"> Self Inventory</h1></div>
        <div>
          <label className="input input-bordered flex items-center h-9">
            <input type="text" className="" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border text-sm text-[#563007]">
              <th></th>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Keyboard</td>
              <td>10</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Mouse</td>
              <td>50</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Webcam</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
     
    </div>
  )
}

export default SelfInventory