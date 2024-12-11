import { LightbulbIcon } from "lucide-react";

function BudgetPrediction() {
  return (
    <div className="mb-20">
      <h1 className="text-xl font-bold text-[#563007]"> Budget Prediction</h1>
      <div className="overflow-x-auto">
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr className="border text-sm text-[#563007]">
              <th></th>
              <th>Station Name</th>
              <th>Cost </th>
              <th>Predicted Cost</th>
            </tr>
          </thead>
          <tbody className="text-[#563007]">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Keyboard</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,20,000</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Walkie-Talkie</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,20,000</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Webcam</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,20,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary btn-md text-white px-8 absolute bottom-6 right-6 m-4 text-[16px] bg-[#b99f70]">
        <LightbulbIcon size={20} strokeWidth={0.75} /> Predict
      </button>
    </div>
  );
}

export default BudgetPrediction;
