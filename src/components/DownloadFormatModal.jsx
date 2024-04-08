import React from "react";

const DownloadFormatModal = ({ onClose, onSelectFormat }) => {
  const handleFormatSelect = (format) => {
    onSelectFormat(format);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal-content bg-white w-80 rounded-md shadow-lg p-5">
        <h2 className="text-xl font-bold mb-4">Select Download Format</h2>
        <div className="flex flex-col gap-2">
          <button onClick={() => handleFormatSelect("PNG")} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">PNG</button>
          <button onClick={() => handleFormatSelect("JPEG")} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">JPEG</button>
        </div>
        <button onClick={onClose} className="bg-gray-300 text-red-700 px-4 py-2 rounded-md mt-4">Cancel</button>
      </div>
    </div>
  );
};

export default DownloadFormatModal;
