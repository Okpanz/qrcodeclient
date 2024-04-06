// DeleteConfirmationModal.js
import React, { useState } from "react";

const DeleteConfirmationModal = ({ onCancel, onConfirm }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm();
      console.log("Confirmation received. Performing delete action...");
      // You may perform additional actions after the delete action here
    } catch (error) {
      console.error("Error confirming delete action:", error);
      // Handle error if necessary
    } finally {
      setLoading(false);
      onCancel();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <span className="absolute top-0 right-0 text-gray-600 cursor-pointer" onClick={loading ? null : onCancel}>&times;</span>
        <p className="text-lg font-semibold mb-4">Are you sure you want to delete this QR code?</p>
        <div className="flex justify-end">
          <button 
            className={`bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={loading ? null : handleConfirm}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Yes'}
          </button>
          <button 
            className={`bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={loading ? null : onCancel}
            disabled={loading}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
