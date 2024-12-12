import React, { useState, useEffect } from 'react';
import { Eye } from "lucide-react";

// Interface for resource request item
interface ResourceRequestItem {
  category: string;
  quantity: number;
  date: string;
  stationName?: string; // Optional station name
}

// Interface for station details
interface StationDetails {
  id: string;
  name: string;
  location: string;
}

function ResourceAllocation() {
  // State to store resource requests and station details
  const [requestItems, setRequestItems] = useState<ResourceRequestItem[]>([]);
  const [stationDetails, setStationDetails] = useState<StationDetails[]>([]);

  // Load resource requests and station details from local storage on component mount
  useEffect(() => {
    // Load resource requests
    const savedItems = localStorage.getItem('resourceRequests');
    const savedStations = localStorage.getItem('stationDetails');

    if (savedItems) {
      setRequestItems(JSON.parse(savedItems));
    }

    if (savedStations) {
      setStationDetails(JSON.parse(savedStations));
    }
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold text-[#563007]">Item Distribution</h1>
      <div className="overflow-x-auto mt-4">
        <table className="table">
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
            {requestItems.map((item, index) => {
              // Find corresponding station details
              const station = stationDetails.find(s => 
                s.name.toLowerCase() === "Bhopal Police Station".toLowerCase()
              ) || {
                id: `${index + 100}`,
                name: "Bhopal Police Station",
                location: 'Bhopal'
              };

              return (
                <tr key={index} className="text-xs">
                  <th>{index + 1}</th>
                  <td>
                    <ul className="space-y-2">
                      <li>Station ID: {station.id}</li>
                      <li>
                        {station.name}, <br />
                        {station.location}
                      </li>
                    </ul>
                  </td>
                  <td>
                    <button
                      className="btn bg-transparent border-none"
                      onClick={() => {
                        const modal = document.getElementById(
                          `modal_${index}`
                        ) as HTMLDialogElement;
                        modal?.showModal();
                      }}
                    >
                      <Eye className="bg-transparent text-primary" />
                    </button>
                    <dialog id={`modal_${index}`} className="modal">
                      <div className="modal-box min-w-[700px] min-h-[500px] bg-white">
                        <table className="w-full">
                          <thead>
                            <tr className="border text-sm text-[#563007]">
                              <th></th>
                              <th>Product Category</th>
                              <th>Quantity</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>{item.category}</td>
                              <td>{item.quantity}</td>
                              <td>Pending</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>
                  <td>
                    <ul className="space-y-2 text-xs list-inside">
                      <li>{item.date.split(',')[0]}</li>
                      <li>{item.date.split(',')[1]?.trim()}</li>
                    </ul>
                  </td>
                  <td>
                    <ul className="space-y-2 text-xs list-inside">
                      <li>{item.date.split(',')[0]}</li>
                      <li>{item.date.split(',')[1]?.trim()}</li>
                    </ul>
                  </td>
                  <td>₹ {item.quantity * 100}</td>
                  <td>
                    <div className="badge badge-primary badge-outline text-xs">
                      In Process
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-primary btn-xs">Allocate</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResourceAllocation;
