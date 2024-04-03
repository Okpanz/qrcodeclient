import QrFrame from "../components/QrFrame.jsx";
import QrReader from "../components/QrReader.jsx";
import QrResult from "../components/QrResult.jsx";
import React, { useState } from "react";
import { parseQrResult } from "../utils/utils.js";

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
    console.log("from the handle get qr", JSON.parse(data));
  }
  const getResult = localStorage.getItem("qrCode");
  console.log(` Items is : ${getResult}`);
  return (
    <div
      className={
        "relative h-screen bg-slate-300 w-[80%] flex flex-col gap-2 justify-center items-center"
      }
    >
      <div
        className={
          "w-[60rem] bg-white rounded-sm border border-gray-300 p-10 flex justify-center items-center gap-6 min-h-[80vh]"
        }
      >
        {showQr && (
          <QrFrame>
            <QrReader onGetScannedResult={handleGetQr} />
          </QrFrame>
        )}
      </div>
      {!showQr && (
        <QrResult className={"mx-auto"}>
          <div className={"qr-result-container"}>
            <div className={"qr-result"}>
              <h2 className={"qr-result-h2"}>Vehicle URL</h2>
              <span className={"text-[#afb2b2]"}>{vehicleUrl}</span>
            </div>
            <div className={"qr-result"}>
              <h2 className={"qr-result-h2"}>Vehicle Price</h2>
              <span>{vehiclePrice}</span>
            </div>
            <div className={"qr-result"}>
              <h2 className={"qr-result-h2"}>Vehicle URL</h2>
              <span>{vehicleUrl}</span>
            </div>
            <div className={"qr-result"}>
              <h2 className={"qr-result-h2"}>Vehicle VIM</h2>
              <span>{vim}</span>
            </div>
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
  );
}
