import { Eye } from "lucide-react";
import React from "react";
import { ConfigProvider } from "antd";

function ResourceRecord() {
  return (
    <ConfigProvider
      theme={{ token: { colorBgBase: "#1a1a1a", colorText: "#ffffff" } }}
    >
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-[#563007]"> Resource Record</h1>
          </div>
          <div className="">
            <label className="input input-bordered flex items-center h-9 bg-white input-warning ">
              <input type="text" className="" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-[#563007]"
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
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-[#563007]">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Keyboard</td>
                <td>10</td>
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
                    <Eye className="bg-transparent text-warning" />
                  </button>
                  <dialog id="my_modal_1" className="modal ">
                    <div className="modal-box min-w-[900px] bg-white">
                      <table className="w-full">
                        <thead className="text-[#563007]">
                          <tr className="border ">
                            <th>Sr.</th>
                            <th>Product Id</th>
                            <th>Status </th>
                            <th>MFD</th>
                            <th>Warranty</th>
                            <th>In uses</th>
                            <th>Last Upgrade</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          <td>1</td>
                          <td>1234</td>
                          <td >
                            {" "}
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              Working
                            </div>
                          </td>
                          <td>10/10/2019</td>
                          <td>10/10/2020</td>
                          <td>10 Months</td>
                          <td>08/12/2024</td>
                        </tbody>
                        <tbody>
                          <td>1</td>
                          <td>1234</td>
                          <td>
                            {" "}
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              Working
                            </div>
                          </td>
                          <td>10/10/2019</td>
                          <td>10/10/2020</td>
                          <td>10 Months</td>
                          <td>08/12/2024</td>
                        </tbody>
                        <tbody>
                          <td>1</td>
                          <td>1234</td>
                          <td>
                            {" "}
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              Working
                            </div>
                          </td>
                          <td>10/10/2019</td>
                          <td>10/10/2020</td>
                          <td>10 Months</td>
                          <td>08/12/2024</td>
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
              <tr>
                <th>2</th>
                <td>Mouse</td>
                <td>50</td>
                <td>
                  <button
                    className="btn bg-transparent border-none  "
                    onClick={() => {
                      const modal = document.getElementById(
                        "my_modal_2"
                      ) as HTMLDialogElement;
                      modal?.showModal();
                    }}
                  >
                    <Eye className="bg-transparent text-warning" />
                  </button>
                  <dialog id="my_modal_2" className="modal">
                    <div className="modal-box min-w-[900px]">
                      <table className="w-full">
                        <thead>
                          <tr className="border ">
                            <th>Sr.</th>
                            <th>Product Id</th>
                            <th>Status </th>
                            <th>MFD</th>
                            <th>Warranty</th>
                            <th>In uses</th>
                            <th>Last Upgrade</th>
                          </tr>
                        </thead>
                        <tbody>
                          <td>1</td>
                          <td>1234</td>
                          <td>
                            {" "}
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              Working
                            </div>
                          </td>
                          <td>10/10/2019</td>
                          <td>10/10/2020</td>
                          <td>10 Months</td>
                          <td>08/12/2024</td>
                        </tbody>
                        <tbody>
                          <td>1</td>
                          <td>1234</td>
                          <td>
                            {" "}
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              Working
                            </div>
                          </td>
                          <td>10/10/2019</td>
                          <td>10/10/2020</td>
                          <td>10 Months</td>
                          <td>08/12/2024</td>
                        </tbody>
                        <tbody>
                          <td>1</td>
                          <td>1234</td>
                          <td>
                            {" "}
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              Working
                            </div>
                          </td>
                          <td>10/10/2019</td>
                          <td>10/10/2020</td>
                          <td>10 Months</td>
                          <td>08/12/2024</td>
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
              <tr>
                <th>3</th>
                <td>Webcam</td>
                <td>14</td>
                <td>
                  <button
                    className="btn bg-transparent border-none "
                    onClick={() => {
                      const modal = document.getElementById(
                        "my_modal_3"
                      ) as HTMLDialogElement;
                      modal?.showModal();
                    }}
                  >
                    <Eye className="bg-transparent text-primary text-warning" />
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box min-w-[900px]">
                      <table className="w-full">
                        <thead>
                          <tr className="border ">
                            <th>Sr.</th>
                            <th>Product Id</th>
                            <th>Status </th>
                            <th>MFD</th>
                            <th>Warranty</th>
                            <th>In uses</th>
                            <th>Last Upgrade</th>
                          </tr>
                        </thead>
                        <tbody>
                          <td>1</td>
                          <td>1234</td>
                          <td>
                            {" "}
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              Working
                            </div>
                          </td>
                          <td>10/10/2019</td>
                          <td>10/10/2020</td>
                          <td>10 Months</td>
                          <td>08/12/2024</td>
                        </tbody>
                        <tbody>
                          <td>1</td>
                          <td>1234</td>
                          <td>
                            {" "}
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              Working
                            </div>
                          </td>
                          <td>10/10/2019</td>
                          <td>10/10/2020</td>
                          <td>10 Months</td>
                          <td>08/12/2024</td>
                        </tbody>
                        <tbody>
                          <td>1</td>
                          <td>1234</td>
                          <td>
                            {" "}
                            <div className="badge badge-success gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check text-black text-bold"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              Working
                            </div>
                          </td>
                          <td>10/10/2019</td>
                          <td>10/10/2020</td>
                          <td>10 Months</td>
                          <td>08/12/2024</td>
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
        </div>
      </div>
    </ConfigProvider>
  );
}

export default ResourceRecord;
