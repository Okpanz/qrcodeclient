import QrFrame from "../components/QrFrame.jsx";
import QrReader from "../components/QrReader.jsx";
import QrResult from "../components/QrResult.jsx";
import React, { useState, useEffect } from "react";
import { parseQrResult } from "../utils/utils.js";
import Header from "./Header.jsx";

export default function QrReaderPage() {
  const [vehicleUrl, setVehicleUrl] = useState("");
  const [vehiclePrice, setVehiclePrice] = useState("");
  const [vim, setVim] = useState("");
  const [stockNo, setStockNo] = useState("");
  const [showQr, setShowQr] = useState(true);

  function handleGetQr(data) {
    const [vehicleURL, vehiclePrice, VIM, stockNo] = parseQrResult(
      JSON.parse(data),
    );
    setVehicleUrl(vehicleURL);
    setVehiclePrice(vehiclePrice);
    setVim(VIM);
    setStockNo(stockNo);
    setShowQr(false);

    // Trigger GET request when scan is successful
    fetch("https://server-master-ullz.onrender.com/vehicle/" + vehicleURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Handle response data if needed
      })
      .catch((error) => {
        console.error("There was a problem with the GET request:", error);
      });
  }

  useEffect(() => {
    const getResult = localStorage.getItem("qrCode");
    console.log(` Items is : ${getResult}`);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-300 flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="max-w-4xl w-full bg-white rounded-sm border border-gray-300 p-10 flex flex-col items-center gap-6 min-h-[80vh]">
          {showQr && (
            <QrFrame>
              <QrReader onGetScannedResult={handleGetQr} />
            </QrFrame>
          )}
          {!showQr && (
            <QrResult className="mx-auto">
              <div className="qr-result-container overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Attribute</th>
                      <th className="px-4 py-2">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Vehicle URL</td>
                      <td className="border px-4 py-2">{vehicleUrl}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Vehicle Price</td>
                      <td className="border px-4 py-2">{vehiclePrice}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Vehicle VIM</td>
                      <td className="border px-4 py-2">{vim}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Stock NO</td>
                      <td className="border px-4 py-2">{stockNo}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button
                className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => setShowQr(true)}
              >
                Close
              </button>
            </QrResult>
          )}
        </div>
      </div>
    </div>
  );
}
