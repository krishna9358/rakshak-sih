import Link from "antd/es/typography/Link";
import React from "react";

function RepairReplacement() {
  return (
    <div>
      <h1 className="text-xl font-bold text-[#563007]"> Repair Replacement</h1>
      <div className="overflow-x-auto">
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr className="border text-sm text-[#563007]">
              <th></th>
              <th>Product Category</th>
              <th>Date of Request </th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Keyboard</td>
              <td>10/10/2003</td>
              <td>
                <div className="badge badge-primary badge-outline text-xs ">
                  In Process
                </div>
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Walkie-Talkie</td>
              <td>10/12/2023</td>
              <td>
                <div className="badge badge-success badge-outline text-xs ">
                  Repaired
                </div>
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Webcam</td>
              <td>10/12/2023</td>
              <td>
                <div className="badge badge-error badge-outline text-xs ">
                  Failed
                </div>
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>Webcam</td>
              <td>10/12/2023</td>
              <td>
                <div className="badge badge-secondary badge-outline text-xs ">
                  Repair
                </div>
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} className="text-right text-[#563007]">
                <Link className="text-[#563007]"
                  onClick={() => {
                    const modal = document.getElementById(
                      "my_modal_1"
                    ) as HTMLDialogElement;
                    modal?.showModal();
                  }}
                >
                  + Add Items
                </Link>
              </td>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white">
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      
                      <button className="btn bg-[#d2b99f] text-white">Submit</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </tr>
          </tfoot>
        </table>
        <button className="btn bg-[#d2b99f] btn-md text-white px-8 absolute bottom-6 right-6 m-4 text-[16px]">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default RepairReplacement;
