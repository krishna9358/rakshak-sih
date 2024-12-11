import React, { useState } from "react";

import { Eye } from "lucide-react";

function RepairReplacement() {
  const [selectedItem, setSelectedItem] = useState("Repair");

  return (
    <div>
      <h1 className="text-xl font-bold text-[#563007]"> Repair & Replacement</h1>
      <div>
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr className="text-sm border text-[#563007] ">
              <th></th>
              <th>Station Details</th>
              <th>Product Details</th>
              <th>Request Details</th>
              <th>Shipment Details</th>
              {/* <th>Status</th> */}
              {/* <th>Confirmation</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* row 1 */}
            <tr className="text-xs ">
              <th>1</th>
              <td>
                MP Nagar Police Station, <br />
                Bhopal
              </td>
              <td>
                {/* <ul className="space-y-2 text-xs list-inside">
                  <li>Keyboard</li>
                  <li>Walkie-Talkie</li>
                  <li>Webcam</li>
                </ul> */}
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
                  <div className="modal-box min-w-[700px] min-h-[500px] flex flex-col bg-white">
                    <form method="dialog" className="m-2">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <table className="w-full">
                      <tr className="text-sm border">
                        <th></th>
                        <th>Product Category</th>
                        <th>Product ID</th>
                        <th>Status</th>
                        <th>Confirmation</th>
                      </tr>
                      <td>1</td>
                      <td>Keyboard</td>
                      <td>PSJ323</td>
                      <td>
                        <div className="dropdown dropdown-hover ">
                          <div tabIndex={0} role="button" className="btn m-1 bg-[#b38b59] text-white">
                            {selectedItem}
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-[#b38b59] text-white"
                          >
                            <li>
                              <a onClick={() => setSelectedItem("Replace")}>
                                Replace
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("Replaced")}>
                                Replaced
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("Repair")}>
                                Repair
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("Repaired")}>
                                Repaired
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          className="checkbox text-xs "
                          defaultChecked
                        ></input>
                      </td>
                    </table>
                    <div className="modal-action mt-auto flex justify-end">
                      <form method="dialog">
                        <button className="btn" type="submit">
                          Submit
                        </button>
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
              {/* <td>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn m-1">
                    {selectedItem}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <a onClick={() => setSelectedItem("Replace")}>Replace</a>
                    </li>
                    <li>
                      <a onClick={() => setSelectedItem("Replaced")}>Replaced</a>
                    </li>
                    <li>
                      <a onClick={() => setSelectedItem("Repair")}>Repair</a>
                    </li>
                    <li>
                      <a onClick={() => setSelectedItem("Repaired")}>Repaired</a>
                    </li>
                  </ul>
                </div>
              </td> */}
              {/* <td>
                <input
                  type="checkbox"
                  className="checkbox text-xs "
                  defaultChecked
                ></input>
              </td> */}
              {/* <td>
                <button className="btn btn-primary btn-xs">Submit</button>
              </td> */}
            </tr>
            <tr>
              <th>2</th>
              <td>
                Police Thana Kamla Nagar, <br />
                Bhopal
              </td>
              <td>
                {/* <ul className="space-y-2 text-xs list-inside">
                  <li>Keyboard</li>
                  <li>Walkie-Talkie</li>
                  <li>Webcam</li>
                </ul> */}
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
                  <div className="modal-box">
                    <table>
                      <tr className="text-sm border">
                        <th></th>
                        <th>Product Category</th>
                        <th>Product ID</th>
                        <th>Status</th>
                        <th>Confirmation</th>
                      </tr>
                      <td>1</td>
                      <td>Mouse</td>
                      <td>PSJ323</td>
                      <td>
                        <div className="dropdown dropdown-hover">
                          <div tabIndex={0} role="button" className="btn m-1">
                            {selectedItem}
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                          >
                            <li>
                              <a onClick={() => setSelectedItem("Replace")}>
                                Replace
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("Replaced")}>
                                Replaced
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("Repair")}>
                                Repair
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("Repaired")}>
                                Repaired
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          className="checkbox text-xs "
                          defaultChecked
                        ></input>
                      </td>
                    </table>
                    <div className="modal-action flex justify-end">
                      <form method="dialog">
                        <button className="btn" type="submit">
                          Submit
                        </button>
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
              {/* <td>
                <div className="badge badge-primary badge-success text-xs ">
                  Replaced
                </div>
              </td>
              <td>
                <input type="checkbox" className="checkbox text-xs "></input>
              </td>
              <td>
                <button className="btn btn-primary btn-xs">Submit</button>
              </td> */}
            </tr>
            <tr>
              <th>3</th>
              <td>
                T.T. Nagar Police Station, <br /> Bhopal
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
                  <div className="modal-box">
                    <table>
                      <tr className="text-sm border">
                        <th></th>
                        <th>Product Category</th>
                        <th>Product ID</th>
                        <th>Status</th>
                        <th>Confirmation</th>
                      </tr>
                      <td>1</td>
                      <td>Keyboard</td>
                      <td>PSJ323</td>
                      <td>
                        <div className="dropdown dropdown-hover">
                          <div tabIndex={0} role="button" className="btn m-1">
                            {selectedItem}
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                          >
                            <li>
                              <a onClick={() => setSelectedItem("Replace")}>
                                Replace
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("Replaced")}>
                                Replaced
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("Repair")}>
                                Repair
                              </a>
                            </li>
                            <li>
                              <a onClick={() => setSelectedItem("Repaired")}>
                                Repaired
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          className="checkbox text-xs "
                          defaultChecked
                        ></input>
                      </td>
                    </table>
                    <div className="modal-action flex justify-end">
                      <form method="dialog">
                        <button className="btn" type="submit">
                          Submit
                        </button>
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
              {/* <td>
                <div className="badge badge-primary badge-error text-xs ">
                  Repair
                </div>
              </td>
              <td>
                <input type="checkbox" className="checkbox text-xs "></input>
              </td>
              <td>
                <button className="btn btn-primary btn-xs">Submit</button>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RepairReplacement;
