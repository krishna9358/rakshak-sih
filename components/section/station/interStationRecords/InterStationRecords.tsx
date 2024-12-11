import { Eye } from "lucide-react";
import React from "react";

function InterStationRecords() {
  const [formType, setFormType] = React.useState<'lent' | 'borrow'>('lent');
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex-1 border p-2">
          {/* Upper Left Section */}
          <h2 className="text-lg font-semibold mb-4 text-[#563007] ">Nearest Station List</h2>
          <table className="table">
            {/* head */}
            <thead>
              <tr className="border text-sm text-[#563007]">
                <th></th>
                <th>Station Details</th>
                <th>Product Details</th>
              </tr>
            </thead>
            <tbody className="text-[#563007]">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Bhopal Police Station</td>
                <td>
                  <button
                    className="btn bg-transparent border-none "
                    onClick={() => {
                      const modal = document.getElementById(
                        "my_modal_1"
                      ) as HTMLDialogElement;
                      modal?.showModal();
                    }}
                  >
                    <Eye className="bg-transparent  text-[#563007]" />
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box min-w-[500px] bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="border text-[#563007]">
                            <th>Sr.</th>
                            <th>Product Name</th>
                            <th>Quantity </th>
                          </tr>
                        </thead>

                        <tbody>
                          <td>1</td>
                          <td>Mouse</td>
                          <td>10</td>
                        </tbody>
                      </table>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            </tbody>
          </table>
          {/* Content for Upper Left Section */}

        </div>
        <div className="flex-1 ml-4 border  p-2">
          {/* Upper Right Section */}
          <h2 className="text-lg font-semibold mb-4">Form</h2>
          {/* Content for Upper Right Section */}
          <div className="flex space-x-2 mb-4">
        <button 
          onClick={() => setFormType('lent')} 
          className={`btn ${formType === 'lent' ? 'bg-[#d2b99f] text-white' : 'bg-[#563007] text-white'}`}
        >
          Lent
        </button>
        <button 
          onClick={() => setFormType('borrow')} 
          className={`btn ${formType === 'borrow' ? 'bg-[#d2b99f] text-white' : 'bg-[#563007] text-white'}`}
        >
          Borrow
        </button>
      </div>
      {/* Form Section */}
      {formType === 'lent' ? (
        <form className="flex flex-col space-y-4">
          <select className="dropdown-content menu  z-[1] shadow bg-white text-[#563007] ">
            <option className="">Station Name</option>
            {/* Add station options here */}
          </select>
          <select className="dropdown-content menu z-[1] shadow bg-white text-[#563007]">
            <option>Product Name</option>
            {/* Add product options here */}
          </select>
          <input
            placeholder="10"
            type="number"
            min={0}
            className="input input-bordered input-sm w-20 bg-white "
          /> 
          <a href="#" className="link"> + Add Item</a>
          <button type="submit" className="btn bg-[#d2b99f] text-white">Submit</button>
        </form>
      ) : (
        <form className="flex flex-col space-y-4 ">
          <select  className="dropdown-content menu  z-[1] shadow bg-white text-[#563007]">
            <option className="">Station Name</option>
            {/* Add station options here */}
          </select>
          <select  className="dropdown-content menu z-[1] shadow bg-white text-[#563007]">
            <option>Product Name</option>
            {/* Add product options here */}
          </select>
          <input
            placeholder="10"
            type="number"
            min={0}
            className="input input-bordered input-sm w-20 bg-white text-[#563007]"
          /> 
          <a href="#" className="link text-blue-700"> + Add Item</a>
          <button type="submit" className="btn bg-[#d2b99f] text-white">Submit</button>
        </form>
      )}
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 border mt-2 p-2">
          {/* Lower Section */}
          <h2 className="text-lg font-semibold text-[#563007]">History</h2>
          {/* Content for Lower Section */}
        </div>
      </div>
    </div>
  );
}

export default InterStationRecords;
