import { Printer } from "lucide-react";

export default function Barcode() {
  return (
    <div className="mb-20">
      <h1 className="text-xl font-bold text-[#563007]"> Barcode</h1>
      <div className="overflow-x-auto">
        <table className="table mt-4 ">
          {/* head */}
          <thead className="text-[#563007]">
            <tr className="border text-sm ">
              <th></th>
              <th>Product Category</th>
              <th>Quantity</th>
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Keyboard</td>
              <td>
                <input
                placeholder="10"
                // value={10}
                  type="number"
                  min={0}
                  className="input input-bordered input-sm w-20 bg-white input-warning"
                />
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Walkie-Talkie</td>
              <td>
                <input
                placeholder="40"
                  type="number"
                  min={0}
                  className="input input-bordered input-sm w-20 bg-white input-warning"
                />
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Webcam</td>
              <td>
                <input
                placeholder="100"
                  type="number"
                  min={0}
                  className="input input-bordered input-sm w-20 bg-white input-warning "
                />
              </td>
              <td>
                {" "}
                <input type="checkbox" defaultChecked className="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary btn-md text-white px-8 absolute bottom-6 right-6 m-4 text-[16px] bg-[#d2b99f] border-black">
        <Printer size={20} strokeWidth={0.75} /> Print
      </button>
    </div>
  );
}
