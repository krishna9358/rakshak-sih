import { Eye } from "lucide-react";

function ResourceAllocation() {
  return (
    <div>
      <h1 className="text-xl font-bold text-[#563007]"> Resource Allocation</h1>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-sm border text-[#563007]">
              <th></th>
              <th>Station Details</th>
              <th>Product Details</th>
              <th>Demand Details</th>
              <th>Pick-up Details</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* row 1 */}
            <tr className="text-xs ">
              <th>1</th>
              <td>
                <ul className="space-y-2">
                <li>124</li>
                <li>
                MP Nagar Police Station, <br />
                Bhopal
                </li>
                </ul>
              </td>
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
                  <Eye className="bg-transparent text-primary" />
                </button>
                <dialog id="my_modal_1" className="modal ">
                  <div className="modal-box min-w-[700px] min-h-[500px] bg-white">
                      <table className="w-full">
                        <tr className="border text-sm">
                        <th></th>
                        <th>Product Category</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        </tr>
                      </table>
                    <div className="modal-action ">
                      <form method="dialog  flex justify-end mt-auto">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn  ">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>14/11/2004</li>
                  <li>10:00 AM</li>
                </ul>
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>14/11/2004</li>
                  <li>10:00 AM</li>
                </ul>
              </td>
              <td>₹ 3000</td>
              <td><div className="badge badge-primary badge-outline text-xs ">In Process</div></td>
              <td>
                <button className="btn btn-error btn-xs">Cancel</button>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Police Thana Kamla Nagar, <br />Bhopal</td>
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
                  <Eye className="bg-transparent text-primary" />
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>14/11/2004</li>
                  <li>10:00 AM</li>
                </ul>
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>14/11/2004</li>
                  <li>10:00 AM</li>
                </ul>
              </td>
              <td>₹ 3000</td>
              <td><div className="badge badge-success badge-outline text-xs ">Delivered</div></td>
              <td>
                {/* <button className="btn btn-error btn-xs"></button> */}
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>T.T. Nagar Police Station, <br/> Bhopal</td>
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
                  <Eye className="bg-transparent text-primary" />
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>14/11/2004</li>
                  <li>10:00 AM</li>
                </ul>
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>14/11/2004</li>
                  <li>10:00 AM</li>
                </ul>
              </td>
              <td>₹ 3000</td>
              <td><div className="badge badge-error badge-outline text-xs ">Not Available</div></td>
              <td>
                {/* <button className="btn btn-error btn-xs">Cancel</button> */}
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>T.T. Nagar Police Station, <br/> Bhopal</td>
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
                  <Eye className="bg-transparent text-primary" />
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click the button below to close
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>14/11/2004</li>
                  <li>10:00 AM</li>
                </ul>
              </td>
              <td>
                <ul className="space-y-2 text-xs list-inside">
                  <li>14/11/2004</li>
                  <li>10:00 AM</li>
                </ul>
              </td>
              <td>₹ 3000</td>
              <td><div className="badge badge-neutral-content badge-outline text-xs ">Demand</div></td>
              <td>
                <button className="btn btn-primary btn-xs">Allocate</button>
              </td>
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResourceAllocation;
